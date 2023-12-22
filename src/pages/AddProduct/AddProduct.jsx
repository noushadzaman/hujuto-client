import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form"
import useAxios from "../../hooks/useAxios";
import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { MoonLoader } from "react-spinners";

const imageApiKey = import.meta.env.VITE_image_api_key;
const apiKey = import.meta.env.VITE_Opencage_location_api;
const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageApiKey}`;


const AddProduct = () => {
    const axiosPublic = useAxios();
    const [imagesNumber, setImagesNumber] = useState([1]);
    const [submissionLoading, setSubmissionLoading] = useState(false);

    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffff");
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const { data, isLoading } = useQuery({
        queryKey: ['brands'],
        queryFn: () => axios.get('http://localhost:5000/brand')
    })

    if (isLoading) {
        return (
            <div className='flex justify-center'>
                <MoonLoader
                    color={color}
                    loading={loading}
                    size={10}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        )
    }

    console.log(data.data)
    const handleIncreaseInput = () => {
        if (imagesNumber.length < 8) {
            setImagesNumber([...imagesNumber, 1])
        }
    }


    const onSubmit = async (form) => {
        setSubmissionLoading(true)
        let newVehicle;
        let imageUrls = [];
        const name = form.name;
        const brandName = form.brandName;
        const type = form.type;
        const price = form.price;
        const rating = form.rating;
        const thumbnail = form.thumbnail;
        const direction = form.direction;
        const shortDescription = form.shortDescription;
        const res = await axiosPublic.post(imageHostingUrl, { image: thumbnail[0] }, {
            headers: {
                "content-Type": "multipart/form-data"
            },
        })
        if (res.data.success) {
            const thumbnailUrl = res.data.data.display_url;
            imageUrls.push(thumbnailUrl);
            let i = 0;
            while (i < imagesNumber.length) {
                console.log(i)
                const image = form[`images${i}`];
                console.log(image)
                const res = await axiosPublic.post(imageHostingUrl, { image: image[0] }, {
                    headers: {
                        "content-Type": "multipart/form-data"
                    },
                });
                if (res.data.success) {
                    const imageUrl = res.data.data.display_url;
                    imageUrls.push(imageUrl);
                    i++;
                }
            }
            let markerLat;
            let markerLon;
            let mapLat;
            let mapLon;
            const exportCountry = form.exportCountry;
            const geocodingUrlForCountry = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(exportCountry)}&key=${apiKey}`;
            axios.get(geocodingUrlForCountry)
                .then(response => {
                    const result = response.data.results[0];
                    if (result) {
                        const location = result.geometry;
                        mapLat = location.lat;
                        mapLon = location.lng;

                        const exportLocation = form.exportLocation;
                        const geocodingUrlForLocation = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(exportLocation)}&key=${apiKey}`;
                        axios.get(geocodingUrlForLocation)
                            .then(response => {
                                const result = response.data.results[0];
                                if (result) {
                                    const location = result.geometry;
                                    markerLat = location.lat;
                                    markerLon = location.lng;
                                    const locationObj = {
                                        name: exportCountry+', '+exportLocation,
                                        MarkerLat: markerLat,
                                        MarkerLon: markerLon,
                                        MapLat: mapLat,
                                        MapLon: mapLon,
                                    }
                                    newVehicle = { name, brandName, location: locationObj, type, price, rating, shortDescription, imageUrls, direction };
                                    console.log(newVehicle);
                                    fetch('http://localhost:5000/vehicle', {
                                        method: "POST",
                                        headers: {
                                            "Content-type": "Application/json"
                                        },
                                        body: JSON.stringify(newVehicle)
                                    })
                                        .then(res => res.json())
                                        .then(data => console.log(data))
                                    setSubmissionLoading(false)
                                    navigate('/');
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'Product has been added',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })

                                } else {
                                    Swal.fire({
                                        icon: "error",
                                        title: "Location is not valid",
                                        text: "Please provide a valid location",
                                    });
                                }
                            })
                            .catch(error => {
                                console.error('Error:', error.message);
                            });

                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Location is not valid",
                            text: "Please provide a valid location",
                        });
                    }
                })
                .catch(error => {
                    console.error('Error:', error.message);
                });
        }
    }


    return (
        <div className=" min-h-screen my-[50px] md:w-[60%] lg:w-[70%] mx-auto">
            <div className="flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-8 text-center text-[#5f5c5c]">Add product!!</h1>
                </div>
                <div className="card rounded-[2px] flex-shrink-0 shadow-2xl">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="card-body">
                        <div className="md:flex gap-[40px]">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-xl text-[#BFA37C] font-semibold">Name</span>
                                </label>
                                <input
                                    {...register("name", { required: true })}
                                    type="text" placeholder="name" className="input rounded-[2px] border-t-1 border-[#d6cab8] placeholder-[#d6cab8] input-bordered w-[100%]"
                                />
                            </div>
                        </div>
                        <div className="md:flex gap-[40px]">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-xl text-[#BFA37C] font-semibold">Brand Name</span>
                                </label>
                                <select {...register("brandName", { required: true })}
                                    className="select rounded-[2px] w-full max-w-xs placeholder-[#BFA37C]  select-bordered border-[#d6cab8]">
                                    {
                                        data?.data?.map(d => <option key={d._id}>{d.brandName}</option>)
                                    }
                                </select>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-xl text-[#BFA37C] font-semibold">Type</span>
                                </label>

                                <input
                                    {...register("type", { required: true })}
                                    type="text" placeholder="type" className="input rounded-[2px] border-t-1 border-[#d6cab8] placeholder-[#d6cab8] input-bordered w-[100%]"
                                />
                            </div>
                        </div>
                        <div className="md:flex gap-[40px]">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-xl text-[#BFA37C] font-semibold">Price</span>
                                </label>
                                <input
                                    {...register("price", { required: true })}
                                    type="number" placeholder="price" className="input rounded-[2px] border-t-1 border-[#d6cab8] placeholder-[#d6cab8] input-bordered w-[100%]"
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-xl text-[#BFA37C] font-semibold">Rating</span>
                                </label>
                                <input
                                    {...register("rating", { required: true })}
                                    type="text" placeholder="rating" className="input rounded-[2px] border-t-1 border-[#d6cab8] placeholder-[#d6cab8] input-bordered w-[100%]"
                                />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl text-[#BFA37C] font-semibold">Thumbnail Image</span>
                            </label>
                            <input
                                {...register("thumbnail", { required: true })}
                                type="file" placeholder="imageUrl" className="input rounded-[2px] border-t-1  placeholder-[#d6cab8] input-bordered w-[100%] file-input file-input-ghost max-w-[100%] border-[#d6cab8]"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl text-[#BFA37C] font-semibold">Direction</span>
                            </label>
                            <select {...register("direction", { required: true })}
                                className="select select-sm rounded-[2px] w-full max-w-xs placeholder-[#BFA37C]  select-bordered border-[#d6cab8]">
                                <option value="right">Right</option>
                                <option value="left">Left</option>
                            </select>
                        </div>
                        {
                            imagesNumber.map((image, index) => <div key={index} className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-[#BFA37C] font-semibold">Image{index + 1}</span>
                                </label>
                                <input
                                    {...register(`images${index}`, { required: true })}
                                    type="file" placeholder="imageUrl" className="input rounded-[2px] border-t-1 border-[#d6cab8] placeholder-[#d6cab8] input-bordered w-[100%] file-input file-input-ghost max-w-[100%]"
                                />
                            </div>)
                        }
                        <div
                            onClick={handleIncreaseInput}
                            className="btn btn-sm w-[50%] bg-[#d6cab8] ml-auto text-[white] rounded-[2px]">Add Another image
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl text-[#BFA37C] font-semibold">Short description</span>
                            </label>
                            <textarea
                                {...register("shortDescription", { required: true })}
                                type="area" placeholder="short description" className="pt-2 input rounded-[1px] border-t-1 border-[#d6cab8] placeholder-[#d6cab8] input-bordered w-[100%]" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl text-[#BFA37C] font-semibold">Exporting Country</span>
                            </label>
                            <input
                                {...register("exportCountry", { required: true })}
                                type="area" placeholder="Export Country" className="input rounded-[1px] border-t-1 border-[#d6cab8] placeholder-[#d6cab8] input-bordered w-[100%]" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl text-[#BFA37C] font-semibold">Country Location</span>
                            </label>
                            <input
                                {...register("exportLocation", { required: true })}
                                type="area" placeholder="Country Location" className="input rounded-[1px] border-t-1 border-[#d6cab8] placeholder-[#d6cab8] input-bordered w-[100%]" />
                        </div>
                        <div className="form-control mt-6">
                            {/* <input type="submit" value="Add product" className="btn btn-primary" /> */}
                            <button type="submit" className="btn-primary flex items-center justify-center btn h-[65px]">
                                {
                                    submissionLoading ?
                                        <MoonLoader
                                            color={color}
                                            loading={loading}
                                            size={50}
                                            aria-label="Loading Spinner"
                                            data-testid="loader"
                                        /> :
                                        "Add Vehicle"
                                }
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;