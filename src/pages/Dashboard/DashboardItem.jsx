import React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { Map, Marker } from "pigeon-maps"
import useAxios from '../../hooks/useAxios';
import Swal from 'sweetalert2';

const DashboardItem = ({ singleOrder, refetch }) => {
    const axiosPublic = useAxios();
    const { _id, buyerName, buyerEmail, quantity, location, locationName, buyerPhoto, vehicleName, creditCard } = singleOrder;
    const [open, setOpen] = React.useState(false);

    const handleDeliver = () => {
        axiosPublic.post(`/orderDelete/${_id}`)
            .then(res => {
                console.log(res.data);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${vehicleName} has been delivered to ${locationName}`,
                    showConfirmButton: false,
                    timer: 2000
                  });
                refetch();
            })
    }

    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="rounded-[2px] w-12 h-12">
                            <img src={buyerPhoto} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{buyerName}</div>
                        <div className="text-sm opacity-50">{locationName}</div>
                    </div>
                </div>
            </td>
            <td>
                {vehicleName}
            </td>
            <td>{quantity}</td>
            <td>
                <button className="btn btn-xs bg-[#d6cab8] hover:bg-[#cfbeb1]" onClick={() => setOpen(true)}>
                    Details
                </button>
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    center
                    classNames={{
                        overlay: 'customOverlay',
                        modal: 'customModal',
                    }}
                >
                    <div>
                        <div className='flex justify-between'>
                            <div>
                                <p className='font-semibold'>{buyerName}</p>
                                <p>{buyerEmail}</p>
                                <p>{locationName}</p>
                                <div>Credit card: {creditCard}</div>
                            </div>
                            <div className='text-right mt-5'>
                                <p className='font-semibold'>{vehicleName}</p>
                                <p>Quantity: {quantity}</p>
                            </div>
                        </div>
                        {
                            location &&
                            <Map height={500} width={700} defaultCenter={[location.lat, location.lng]} defaultZoom={6}>
                                <Marker width={60} anchor={[location.lat, location.lng]} />
                            </Map>
                        }
                    </div>
                </Modal>
            </td>
            <td>
                <button
                    onClick={handleDeliver}
                    className="btn btn-ghost btn-xs bg-[#d6cab8] hover:bg-[#cfbeb1]">Deliver</button>
            </td>
        </tr>
    );
};

export default DashboardItem;