import { useEffect, useState } from "react";
import BrandCard from "../BrandCard/BrandCard";

const BrandsContainer = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('https://hujuto-server-53jw4ymv8-noushads-projects.vercel.app')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])

    return (
        <div className="container mx-auto mt-[120px] mb-[100px]">
            <h2 className="text-[26px] md:text-[42px] text-[#0C1315] mb-[15px] text-center">Luxury Limousine For Maximum<br></br>Satisfaction. Enjoy.</h2>
            <p className="text-[14px] tracking-widest text-[#BFA37C] mb-[50px] text-center">EXCLUSIVE BRANDS</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
                {
                    brands.map(brand => <BrandCard
                        key={brand._id}
                        brand={brand}
                    ></BrandCard>)
                }
            </div>
        </div>
    );
};

export default BrandsContainer;