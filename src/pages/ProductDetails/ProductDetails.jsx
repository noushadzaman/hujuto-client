import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from '../../provider/AuthProvider';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsFillCartPlusFill } from "react-icons/bs";
import { Map, Marker } from "pigeon-maps"
import useAxios from '../../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { MoonLoader } from 'react-spinners';
import useAxiosSecure from '../../hooks/useAxiosSecure';


const ProductDetails = () => {
    const axiosSecure = useAxiosSecure()
    const productDetails = useLoaderData();
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#d6cab8");
    const { _id, imageUrls, name, price, rating, shortDescription, availability, location } = productDetails;
    const { user } = useContext(AuthContext);
    const userIdentity = user?.email;
    const images = imageUrls.slice(1, imageUrls.length);
    const { MapLat, MapLon, MarkerLat, MarkerLon, name: locationPlace } = location;
    const axiosPublic = useAxios()
    const [myProductsState, setMyProductsState] = useState([]);

    const { refetch, data, isLoading } = useQuery({
        queryKey: ['cart', userIdentity],
        queryFn: async () => {
            const res = await axiosSecure(`/cartProduct?email=${userIdentity}`);
            setMyProductsState(res.data);
            return res;
        }
    });

    const { data: roleData, isLoading: roleLoading } = useQuery({
        queryKey: [user?.email],
        queryFn: () => axiosPublic(`/user?email=${userIdentity}`)
    })

    if (isLoading || roleLoading) {
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
    const role = roleData?.data[0]?.role;

    const handleAddToCart = () => {
        const available = myProductsState.find(productState => productState.productId === _id);
        if (available) {
            Swal.fire({
                icon: "error",
                title: `It's already available
                in your cart`,
            });
            return
        }

        const cartProduct = {
            productId: _id,
            userEmail: userIdentity,
        };
        axiosSecure.post(`/cartProduct`, cartProduct)
            .then(res => {
                console.log(res.data);
                toast.success('Item added to cart successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                refetch();
            })
    }

    return (
        <div className="detailCard mb-[150px]">
            <div className="card-details px-[10%] lg">
                <Carousel >
                    {
                        images.map((imageUrl, index) => <div key={index}>
                            <img className='max-w-[800px]' src={imageUrl} />
                        </div>)
                    }
                </Carousel>
                <div className="px-[10%] py-[50px] text-[#404040] space-y-3">
                    <p className="text-title text-[22px] md:text-[35px] font-semibold">{name}</p>
                    <p className="text-body  md:text-[20px]">{shortDescription}</p>
                    <p className="text-body  md:text-[20px]">Rating: {rating}</p>
                    <p className="text-body  md:text-[20px]">Price: {price}</p>
                    {
                        (role === undefined) || (role === 'customer') ?
                        <div className='flex gap-2 '>
                            <button
                                onClick={handleAddToCart}
                                className="btn-primary w-[70%] h-[35px] md:h-[50px] flex items-center justify-center gap-5 px-1 shrink-0"
                            >Add to cart<span className='text-[20px]' ><BsFillCartPlusFill /></span></button>
                            {
                                availability &&
                                <Link className="btn-primary w-[100%] h-[35px]  md:h-[50px] flex items-center justify-center gap-5" to={`/order/${_id}`}
                                > Order</Link>
                            }
                        </div>
                        : null
                    }
                </div>
                <div>
                    <div>
                        <h2 className='md:text-[20px] mb-[30px]'>This car will get imported from: <span className='text-[#404040] text-[20px] md:text-[30px] font-semibold'>{locationPlace}</span></h2>
                    </div>
                    {
                        location && <Map height={500} defaultCenter={[MapLat, MapLon]} defaultZoom={6}>
                            <Marker width={60} anchor={[MarkerLat, MarkerLon]} />
                        </Map>
                    }
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ProductDetails;
