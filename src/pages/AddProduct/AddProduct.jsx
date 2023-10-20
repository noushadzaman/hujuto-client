
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
                    <h1 className="text-5xl font-bold mb-8 text-center">Add product!!</h1>
                </div>
                <div className="card rounded-[2px] flex-shrink-0 shadow-2xl bg-base-100">
                    <form
                        onSubmit={handleAddProduct}
                        className="card-body">

                        <div className="md:flex gap-[40px]">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">ImageUrl</span>
                                </label>

                                <input name="imageUrl" type="text" placeholder="imageUrl" className="input input-bordered w-[350px]" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>

                                <input name="name" type="text" placeholder="name" className="input input-bordered w-[350px]" required />
                            </div>
                        </div>
                        <div className="md:flex gap-[40px]">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>

                                <input name="brandName" type="text" placeholder="brand name" className="input input-bordered w-[350px]" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Type</span>
                                </label>

                                <input name="type" type="text" placeholder="type" className="input input-bordered w-[350px]" required />
                            </div>
                        </div>
                        <div className="md:flex gap-[40px]">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>

                                <input name="price" type="text" placeholder="price" className="input input-bordered w-[350px]" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>

                                <input name="rating" type="text" placeholder="rating" className="input input-bordered w-[350px]" required />
                            </div>

                        </div>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Short description</span>
                                </label>

                                <input name="shortDescription" type="text" placeholder="short description" className="input input-bordered w-[100%]" required />
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