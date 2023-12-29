import { useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import BrandProductsCard from "../Brandproducts/BrandProductsCard";
import MoonLoader from "react-spinners/MoonLoader";

const Car = () => {
    const axiosPublic = useAxios();
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#d6cab8");
    const [price, setPrice] = useState('');
    const [currentPage, setCurrentPage] = useState(0);

    const { data: countArray, isLoading: countLoading } = useQuery({
        queryKey: ['allCount'],
        queryFn: async () => {
            const res = await axiosPublic(`/vehicleCount`)
            return res;
        },
    });

    const count = countArray?.data?.length;
    const itemsPerPage = 10;
    const numberOfPages = Math.ceil(count / itemsPerPage);

    const { data: vehicles, isLoading } = useQuery({
        queryKey: ['all-products', currentPage, itemsPerPage, price],
        queryFn: async () => {
            const res = await axiosPublic(`/vehicle?page=${currentPage}&size=${itemsPerPage}&sortField=price&sortOrder=${price}`)
            setLoading(false);
            return res;
        },
        enabled: !countLoading,
    });

    const handleSelectChange = (event) => {
        setCurrentPage(0)
        setPrice(event.target.value);
        setLoading(true);
    }

    if (loading || isLoading || countLoading) {
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

    const goToPreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
            window.scrollTo({ top: 0 });
        }
    };

    const goToNextPage = () => {
        if (currentPage < numberOfPages - 1) {
            setCurrentPage(currentPage + 1);
            window.scrollTo({ top: 0 });
        }
    };

    const pages = [...Array(numberOfPages).keys()];

    return (
        <div className="flex flex-col pt-[80px] relative">
            <select value={price} onChange={handleSelectChange} className="select select-bordered w-full max-w-xs absolute right-0 border-[#d6cab8] mr-[50px] md:mr-0 rounded-[2px] text-[#d6cab8] text-xl">
                <option value={''} disabled>Filter with price</option>
                <option value={'desc'}>Price High To Low</option>
                <option value={'asc'}>Price Low To High</option>
            </select>
            <div className="flex items-center flex-col py-[50px] shrink-0">
                <div className="pb-[50px] items-center grid grid-cols-1 gap-5">
                    {
                        vehicles?.data.map((vehicle, index) => <BrandProductsCard
                            key={vehicle._id}
                            index={index}
                            vehicle={vehicle}
                        ></BrandProductsCard>)
                    }
                </div>
                <div className="pagination flex ">
                    <button onClick={goToPreviousPage} className="btn btn-sm bg-[#f7f5f2] rounded-[2px] hover:bg-[#d6cab8]">Prev</button>
                    <div>
                        {
                            pages.map(page => <button
                                className={`${page == currentPage ? 'bg-[#d6cab8]' : 'bg-[#f7f5f2]'} btn ml-2 hover:bg-[#d6cab8] rounded-[2px] btn-sm`}
                                onClick={() => {
                                    setCurrentPage(page)
                                    window.scrollTo({ top: 0 });
                                }}
                                key={page}
                            >{page}</button>)
                        }
                    </div>
                    <button onClick={goToNextPage} className="btn bg-[#f7f5f2] rounded-[2px] ml-2 hover:bg-[#d6cab8] btn-sm">Next</button>
                </div>
            </div>
        </div>
    );
};

export default Car;