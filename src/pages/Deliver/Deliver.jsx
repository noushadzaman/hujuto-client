import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import DeliverItem from "./DeliverItem";

const Deliver = () => {
    const axiosSecure = useAxiosSecure()
    const { refetch, data: orders, isLoading } = useQuery({
        queryKey: ['orders'],
        queryFn: () => axiosSecure.get(`/order`)
    })

    if (isLoading) { 
        return <progress></progress>
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Buyer</th>
                            <th>Vehicle</th>
                            <th>Quantity</th>
                            <th>Details</th>
                            <th>Deliver</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.data.map(singleOrder => <DeliverItem
                                key={singleOrder._id}
                                singleOrder={singleOrder}
                                refetch={refetch}
                            ></DeliverItem>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Deliver;