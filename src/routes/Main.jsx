import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <>
            <Navbar />
            <div className='min-h-[calc(100vh-512px)] max-w-[1400px] mx-auto'>
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Main;