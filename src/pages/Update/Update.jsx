import Swal from 'sweetalert2'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const [defaultValue, setDefaultValue] = useState([]);
    const _id = useParams();
    const id = _id.id;

    useEffect(() => {
        fetch(`https://hujuto-server-53jw4ymv8-noushads-projects.vercel.app/vehicleUpdate/${id}`)
            .then(res => res.json())
            .then(data => setDefaultValue(data))
    }, [])

    const navigate = useNavigate();

    const handleAddProduct = (event) => {
        event.preventDefault();
        const form = event.target;

        const imageUrl = form.imageUrl.value;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const shortDescription = form.shortDescription.value;

        const newProduct = { imageUrl, name, brandName, type, price, rating, shortDescription };

        fetch(`https://hujuto-server-53jw4ymv8-noushads-projects.vercel.app/update/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "Application/json"
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        navigate('/');
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Product updated successfully',
            showConfirmButton: false,
            timer: 1500
          })
    }

    return (
        <div className="hero min-h-screen my-[50px]">
            <div className="flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-8 text-center text-[#5f5c5c]">Update product!!</h1>
                </div>
                <div className="card rounded-[2px] flex-shrink-0 shadow-2xl bg-base-100">
                    <form
                        onSubmit={handleAddProduct}
                        className="card-body">

                        <div className="md:flex gap-[40px]">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-[#BFA37C] font-semibold">ImageUrl</span>
                                </label>

                                <input name="imageUrl" defaultValue={defaultValue.imageUrl} type="text" placeholder="imageUrl" className="input rounded-[2px] border-t-1 border-[#d6cab8] placeholder-[#d6cab8] input-bordered w-[350px]" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-[#BFA37C] font-semibold">Name</span>
                                </label>

                                <input name="name" defaultValue={defaultValue.name} type="text" placeholder="name" className="input rounded-[2px] border-t-1 border-[#d6cab8] placeholder-[#d6cab8] input-bordered w-[350px]" required />
                            </div>
                        </div>
                        <div className="md:flex gap-[40px]">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-[#BFA37C] font-semibold">Brand Name</span>
                                </label>

                                <input name="brandName" defaultValue={defaultValue.brandName} type="text" placeholder="brand name" className="input rounded-[2px] border-t-1 border-[#d6cab8] placeholder-[#d6cab8] input-bordered w-[350px]" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-[#BFA37C] font-semibold">Type</span>
                                </label>

                                <input name="type" defaultValue={defaultValue.type} type="text" placeholder="type" className=" input rounded-[2px] border-t-1 border-[#d6cab8] placeholder-[#d6cab8] input-bordered w-[350px]" required />
                            </div>
                        </div>
                        <div className="md:flex gap-[40px]">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-[#BFA37C] font-semibold">Price</span>
                                </label>

                                <input name="price" defaultValue={defaultValue.price} type="text" placeholder="price" className=" input rounded-[2px] border-t-1 border-[#d6cab8] placeholder-[#d6cab8] input-bordered w-[350px]" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-[#BFA37C] font-semibold">Rating</span>
                                </label>

                                <input name="rating" defaultValue={defaultValue.rating} type="text" placeholder="rating" className="input rounded-[2px] border-t-1 border-[#d6cab8] placeholder-[#d6cab8] input-bordered w-[350px]" required />
                            </div>

                        </div>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-[#BFA37C] font-semibold">Short description</span>
                                </label>

                                <input name="shortDescription" defaultValue={defaultValue.shortDescription} type="text" placeholder="short description" className="input rounded-[2px] border-t-1 border-[#d6cab8] placeholder-[#d6cab8] input-bordered w-[100%]" required />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Add product" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;