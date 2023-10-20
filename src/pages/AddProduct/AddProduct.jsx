
const AddProduct = () => {
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

        fetch('http://localhost:5000/vehicle', {
            method: "POST",
            headers: {
                "Content-type": "Application/json"
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-8 text-center text-[#5f5c5c]">Add product!!</h1>
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

                                <input name="imageUrl" type="text" placeholder="imageUrl" className="bg-base-100 input rounded-[2px] border-t-1 border-[#d6cab8] placeholder-[#d6cab8] input-bordered w-[350px]" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-[#BFA37C] font-semibold">Name</span>
                                </label>

                                <input name="name" type="text" placeholder="name" className="bg-base-100 input rounded-[2px] border-t-1 border-[#d6cab8] placeholder-[#d6cab8] input-bordered w-[350px]" required />
                            </div>
                        </div>
                        <div className="md:flex gap-[40px]">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-[#BFA37C] font-semibold">Brand Name</span>
                                </label>

                                <input name="brandName" type="text" placeholder="brand name" className="bg-base-100 input rounded-[2px] border-t-1 border-[#d6cab8] placeholder-[#d6cab8] input-bordered w-[350px]" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-[#BFA37C] font-semibold">Type</span>
                                </label>

                                <input name="type" type="text" placeholder="type" className="bg-base-100 input rounded-[2px] border-t-1 border-[#d6cab8] placeholder-[#d6cab8] input-bordered w-[350px]" required />
                            </div>
                        </div>
                        <div className="md:flex gap-[40px]">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-[#BFA37C] font-semibold">Price</span>
                                </label>

                                <input name="price" type="text" placeholder="price" className="bg-base-100 input rounded-[2px] border-t-1 border-[#d6cab8] placeholder-[#d6cab8] input-bordered w-[350px]" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-[#BFA37C] font-semibold">Rating</span>
                                </label>

                                <input name="rating" type="text" placeholder="rating" className="bg-base-100 input rounded-[2px] border-t-1 border-[#d6cab8] placeholder-[#d6cab8] input-bordered w-[350px]" required />
                            </div>

                        </div>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-[#BFA37C] font-semibold">Short description</span>
                                </label>

                                <input name="shortDescription" type="text" placeholder="short description" className="bg-base-100 input rounded-[2px] border-t-1 border-[#d6cab8] placeholder-[#d6cab8] input-bordered w-[100%]" required />
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

export default AddProduct;