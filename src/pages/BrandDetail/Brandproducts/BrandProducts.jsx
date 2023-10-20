import { useEffect, useState } from "react";
import BrandProductsCard from "./BrandProductsCard";
import PropTypes from 'prop-types';

const BrandProducts = ({ brandName }) => {
    const [allVehicles, setAllVehicles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/vehicle')
            .then(res => res.json())
            .then(data => setAllVehicles(data));
    }, [])
    const specificVehicles = allVehicles.filter(vehicle => vehicle.brandName == brandName);

    return (
        <div className="py-[100px] grid grid-cols-1 gap-5 md:w-[80%] mx-auto">
            {
                specificVehicles.map((vehicle, index) => <BrandProductsCard
                    key={vehicle._id}
                    index={index}
                    vehicle={vehicle}
                ></BrandProductsCard>)
            }
        </div>
    );
};

BrandProducts.propTypes = {
    brandName: PropTypes.string,
}

export default BrandProducts;