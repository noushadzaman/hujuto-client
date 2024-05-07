/* eslint-disable  */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form"
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxios from "../../hooks/useAxios";

const Discount = () => {
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxios();
    const { user } = useContext(AuthContext);
    const id = useParams();
    const navigate = useNavigate();
    const { data, isLoading } = useQuery({
        queryKey: ['discount-car'],
        queryFn: () => axiosPublic.get(`/vehicle/${id.id}`)
    })
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    if (isLoading) {
        return
    }

    const { _id, imageUrls, name, price, location } = data?.data;
    const onSubmit = async (form) => {
        const discount = form.discount;
        if (discount > 99 || discount < 1) {
            return
        }
        const vehicle = {
            ...data?.data,
            imageUrls: [...data?.data?.imageUrls],
            location: {
                ...data?.data?.location,
            },
            discount: discount
        };
        axiosSecure.patch(`/discount-vehicle/${_id}`, vehicle)
            .then(() => {
                navigate('/');
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Product updated successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }

    return (
        <div className="card-details px-[10%] mt-[30px] mb-[100px]">
            <img className='w-[100%] max-w-[800px]' src={imageUrls[1]} />
            <div className="px-[10%] py-[50px] text-[#404040] space-y-3">
                <p className="text-title text-[22px] md:text-[35px] font-semibold">{name}</p>
                <p className="text-body  md:text-[20px]">Price: {price}</p>
                <p className="text-body  md:text-[20px]">Location: {location?.name}</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl text-[#BFA37C] font-semibold">Discount</span>
                    </label>
                    <input
                        {...register("discount", { required: true })}
                        type="number" placeholder="discount from 1 to 99%" className="input rounded-[2px] border-t-1 border-[#d6cab8] placeholder-[#d6cab8] input-bordered w-[100%]"
                    />
                </div>
                <button type="submit" className="btn-primary w-[100%] flex items-center justify-center btn h-[65px] mt-[30px]"> give Discount</button>
            </form>
        </div>
    );
};

export default Discount;