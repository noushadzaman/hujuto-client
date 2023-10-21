import { useEffect, useState } from "react";
import BrandProductsCard from "./BrandProductsCard";
import PropTypes from 'prop-types';

const BrandProducts = ({ brandName }) => {
    const [allVehicles, setAllVehicles] = useState([]);
    const [brandVehicles, setBrandVehicles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://hujuto-server-53jw4ymv8-noushads-projects.vercel.app/vehicle')
            .then(res => res.json())
            .then(data => {
                setAllVehicles(data);
                setLoading(false);
            });
    }, [])
    useEffect(() => {
        if (!loading) {
            const specificVehicles = allVehicles.filter(vehicle => vehicle.brandName == brandName);
            setBrandVehicles(specificVehicles);
        }
    }, [allVehicles])

    return (

        <div className="py-[100px] flex flex-col items-center md:grid grid-cols-1 gap-5 md:w-[80%] mx-auto">
            {
                brandVehicles.map((vehicle, index) => <BrandProductsCard
                    key={vehicle._id}
                    index={index}
                    vehicle={vehicle}
                ></BrandProductsCard>)
            }
            {
                brandVehicles.length == 0 &&
                <div>
                    <img className="w-[30%] mx-auto" src="403 Error Forbidden-bro.png" alt="" />
                    <h2 className="text-center text-[25px] text-[#d6cab8]">Nothing found on specific brand</h2>
                </div>
            }
        </div>

    );
};

BrandProducts.propTypes = {
    brandName: PropTypes.string,
}

export default BrandProducts;