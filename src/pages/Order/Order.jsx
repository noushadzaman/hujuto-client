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

const apiKey = import.meta.env.VITE_Opencage_location_api;

const Order = () => {
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxios();
    const { user } = useContext(AuthContext);
    const id = useParams();
    const navigate = useNavigate();
    const { data, isLoading } = useQuery({
        queryKey: ['vehicle'],
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
        const creditCard = form.creditCard;
        const quantity = Number(form.quantity);
        const location = form.location;
        let locationData;
        const geocodingUrlForCountry = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(location)}&key=${apiKey}`;
        axios.get(geocodingUrlForCountry)
            .then(res => {
                locationData = res.data.results[0].geometry;
                const orderInfo = {
                    productId: _id,
                    buyerName: user.displayName,
                    buyerEmail: user.email,
                    buyerPhoto: user.photoURL,
                    vehicleName: name,
                    creditCard,
                    quantity,
                    locationName: location,
                    location: locationData
                }
                axiosSecure.post(`/order`, orderInfo)
                    .then(() => {
                        const orderedNumber = data?.data?.orderedNumber === undefined ? quantity : data?.data?.orderedNumber + quantity || quantity;
                        console.log(orderedNumber)
                        axiosSecure.patch(`/orderIncrease/${_id}`, { orderedNumber })
                            .then(() => {
                                navigate('/')
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Your order has been sent",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            })
                            .catch(err => {
                                console.log(err);
                            })
                    })
            })
            .catch(() => {
                Swal.fire({
                    icon: "error",
                    title: "Order not sent",
                    text: "Please provide a valid location"
                });
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
                        <span className="label-text text-xl text-[#BFA37C] font-semibold">Credit Card</span>
                    </label>
                    <input
                        {...register("creditCard", { required: true })}
                        type="text" placeholder="credit card number" className="input rounded-[2px] border-t-1 border-[#d6cab8] placeholder-[#d6cab8] input-bordered w-[100%]"
                    />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl text-[#BFA37C] font-semibold">Quantity</span>
                    </label>
                    <input
                        {...register("quantity", { required: true })}
                        type="number" placeholder="quantity" className="input rounded-[2px] border-t-1 border-[#d6cab8] placeholder-[#d6cab8] input-bordered w-[100%]"
                    />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl text-[#BFA37C] font-semibold">Location</span>
                    </label>
                    <input
                        {...register("location", { required: true })}
                        type="text" placeholder="your location" className="input rounded-[2px] border-t-1 border-[#d6cab8] placeholder-[#d6cab8] input-bordered w-[100%]"
                    />
                </div>
                <button type="submit" className="btn-primary w-[100%] flex items-center justify-center btn h-[65px] mt-[30px]">Order</button>
            </form>
        </div>
    );
};

export default Order;