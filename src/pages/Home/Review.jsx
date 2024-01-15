// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Autoplay, Pagination } from 'swiper/modules';
// import useAxiosPublic from '../../hooks/useAxiosPublic';
// import { useQuery } from '@tanstack/react-query';
// import PulseLoader from 'react-spinners/PulseLoader';
// import { useState } from 'react';


// const Review = () => {
//     const axiosPublic = useAxiosPublic();
//     let [loading, setLoading] = useState(true);
//     let [color, setColor] = useState("#e9bafb");

//     const { data: reviewsData, isLoading } = useQuery({
//         queryKey: ['reviews'],
//         queryFn: () => axiosPublic.get('/reviews')
//     })

//     if (isLoading) {
//         return <div className="text-center mt-[150px]">
//             <PulseLoader
//                 color={color}
//                 loading={loading}
//                 size={20}
//                 aria-label="Loading Spinner"
//                 data-testid="loader"
//             />
//         </div>
//     }

//     return (
//         <div className='my-[80px] lg:w-[90%] xl:w-[80%] mx-auto'>
//             <Swiper
//                 slidesPerView={3}
//                 spaceBetween={30}
//                 autoplay={{
//                     delay: 2500,
//                     disableOnInteraction: false,
//                 }}
//                 pagination={{
//                     clickable: true,
//                 }}
//                 modules={[Autoplay, Pagination]}
//                 className="mySwiper"
//             >
//                 {
//                     reviewsData.data.map((review, index) => <SwiperSlide key={index}>
//                         <div className='p-5 bg-[white] bg-gradient-to-r from-[#14abe3] to-[#00fce7] rounded-lg text-[#001f4b] shadow-xl shadow-[#6444d1] mb-[50px] text-[15px]'>
//                             <p className=''>
//                                 {review.review}
//                             </p>
//                             <div className='flex gap-5 my-4 '>
//                                 <img alt="Cindy Baker" src="https://i.ibb.co/2vr92pb/austin-distel-waw-Ef-Ydpkag-unsplash.jpg" />
//                                 <div>
//                                     <h2 className='text-[19px] font-bold'>{review.name}</h2>
//                                     <p className='text-[15px] font-semibold'>{review.role} @ {review.company}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </SwiperSlide>)
//                 }


//             </Swiper>
//         </div >
//     );
// };

// export default Review;