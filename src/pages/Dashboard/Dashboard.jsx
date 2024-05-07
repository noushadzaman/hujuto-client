import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import useAxios from '../../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const axiosPublic = useAxios();
    const [purchasedVehicles, setPurchasedVehicle] = useState([]);
    const [cartedProducts, setCartedProducts] = useState([]);
    const navigate = useNavigate();

    const { data: vehicles, isLoading } = useQuery({
        queryKey: ['ordered-products'],
        queryFn: async () => {
            const res = await axiosPublic(`/vehicle?sortField=orderedNumber&sortOrder=desc`);
            setPurchasedVehicle(res?.data?.filter(vehicle => vehicle.orderedNumber !== undefined));
            return res;
        },
    });

    const { data, isLoading: ok } = useQuery({
        queryKey: ['carted-products'],
        queryFn: async () => {
            const res = await axiosPublic(`/vehicle?sortField=peopleAddedToCart&sortOrder=desc`);
            setCartedProducts(res?.data.filter(vehicle => vehicle.peopleAddedToCart !== undefined));
            return res;
        },
    });

    return (
        <Tabs className="mt-[30px]">
            <TabList style={{
                borderBottom: '0px',
                marginBottom: 30
            }}>
                <div className='flex items-center justify-center gap-10'>
                    <Tab
                        style={{
                            border: '0px',
                        }}
                    >
                        <button className='btn-primary w-[140px] h-[35px] md:w-[200px] md:h-[50px]'>Users cart</button>
                    </Tab>
                    <Tab
                        style={{
                            border: '0px',
                        }}
                    >
                        <button className='btn-primary w-[140px] h-[35px] md:w-[200px] md:h-[50px]'>Profited cars</button>
                    </Tab>
                </div>
            </TabList>

            <TabPanel>
                <div>
                    {
                        cartedProducts.map(singleProduct =>
                            singleProduct?.price &&
                            <div key={singleProduct?._id}>
                                <div className="flex flex-col md:flex-row border-[#d6cab8] items-center justify-center md:justify-between border p-1 rounded-[2px] md:gap-10 mb-[30px] w-[75%] mx-auto">
                                    <div className="flex items-center md:gap-10 justify-center flex-col md:flex-row">
                                        {
                                            singleProduct?.imageUrls && <img className="w-[100px] bg-[#d6cab8] rounded-[2px] p-3" src={singleProduct?.imageUrls[0]} alt="" />
                                        }
                                        <div>
                                            <p className="text-[#5f5c5c] font-semibold">{singleProduct?.name}</p>
                                            <p className="text-[#d6cab8] font-semibold">$ {singleProduct?.price}</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-5 items-center justify-center'>
                                        <p className="text-[#d6cab8] font-semibold">Number of people added to cart: {singleProduct?.peopleAddedToCart}</p>
                                        <button
                                            onClick={() => navigate(`/discount/${singleProduct?._id}`)}
                                            className="flex gap-3 items-center btn-primary w-[150px] md:w-[180px] h-[35px] md:h-[40px] justify-center md:mr-2"
                                        >give discount</button>
                                    </div>
                                </div></div>
                        )
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div>
                    {
                        purchasedVehicles.map(singleProduct =>
                            singleProduct?.price &&
                            <div key={singleProduct?._id}>
                                <div className="flex flex-col md:flex-row border-[#d6cab8] items-center justify-center md:justify-between border p-1 rounded-[2px] md:gap-10 mb-[30px] w-[75%] mx-auto">
                                    <div className="flex items-center md:gap-10 justify-center flex-col md:flex-row">
                                        {
                                            singleProduct?.imageUrls && <img className="w-[100px] bg-[#d6cab8] rounded-[2px] p-3" src={singleProduct?.imageUrls[0]} alt="" />
                                        }
                                        <div>
                                            <p className="text-[#5f5c5c] font-semibold">{singleProduct?.name}</p>
                                            <p className="text-[#d6cab8] font-semibold">$ {singleProduct?.price}</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-5 items-center justify-center'>
                                        <p className="text-[#d6cab8] font-semibold">Total ordered: {singleProduct?.orderedNumber}</p>
                                        <p className="text-[#d6cab8] font-semibold">Total revenue: {singleProduct?.orderedNumber * singleProduct?.price}</p>
                                    </div>
                                </div></div>
                        )
                    }
                </div>
            </TabPanel>
        </Tabs>
    );
};

export default Dashboard;