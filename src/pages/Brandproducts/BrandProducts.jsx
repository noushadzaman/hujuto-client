import BrandProductsCard from "./BrandProductsCard";
import PropTypes from 'prop-types';
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { useState } from "react";
import MoonLoader from "react-spinners/MoonLoader";


const BrandProducts = ({ brandName }) => {
    const axiosPublic = useAxios();
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#d6cab8");
    const [currentPage, setCurrentPage] = useState(0)

    const { data: countArray, isLoading: countLoading } = useQuery({
        queryKey: ['count', brandName],
        queryFn: async () => {
            const res = await axiosPublic(`/vehicleCount?brandName=${brandName}`)
            return res;
        },
    })
    console.log(countArray?.data?.length)

    const count = countArray?.data?.length;

    const itemsPerPage = 6;
    const numberOfPages = Math.ceil(count / itemsPerPage);

    const { data: vehicles, isLoading } = useQuery({
        queryKey: ['brand-products', brandName, currentPage, itemsPerPage],
        queryFn: async () => {
            const res = await axiosPublic(`/vehicle?brandName=${brandName}&page=${currentPage}&size=${itemsPerPage}`)
            return res;
        },
        enabled: !countLoading,
    })


    if (isLoading || countLoading) {
        return <div className="my-[200px] w-[150px] mx-auto">
            <MoonLoader
                color={color}
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    }
    const pages = [...Array(numberOfPages).keys()];

    const goToPreviousPage = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    const goToNextPage = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (currentPage < numberOfPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    }


    return (
        <div className="flex items-center flex-col py-[100px]">
            <div className="pb-[50px] flex flex-col items-center md:grid grid-cols-1 gap-5 md:w-[80%] mx-auto">
                {
                    vehicles?.data.map((vehicle, index) => <BrandProductsCard
                        key={vehicle._id}
                        index={index}
                        vehicle={vehicle}
                    ></BrandProductsCard>)
                }
                {
                    vehicles?.data.length == 0 &&
                    <div>
                        <img className="w-[30%] mx-auto" src="Forbidden-bro.png" alt="" />
                        <h2 className="text-center text-[25px] text-[#d6cab8]">Nothing found on specific brand</h2>
                    </div>
                }
            </div>
            <div className="pagination">
                <button onClick={goToPreviousPage} className="btn bg-[#f7f5f2] rounded-[2px] hover:bg-[#d6cab8]">Prev</button>
                {
                    pages.map(page => <button
                        className={`${page == currentPage ? 'bg-[#d6cab8]' : 'bg-[#f7f5f2]'} btn ml-2 hover:bg-[#d6cab8] rounded-[2px]`}
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                            setCurrentPage(page)
                        }}
                        key={page}
                    >{page}</button>)
                }
                <button onClick={goToNextPage} className="btn bg-[#f7f5f2] rounded-[2px] ml-2 hover:bg-[#d6cab8]">Next</button>
            </div>
        </div>
    );
};

BrandProducts.propTypes = {
    brandName: PropTypes.string,
}

export default BrandProducts;