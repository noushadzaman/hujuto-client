import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import DashboardItem from "./DashboardItem";

const Dashboard = () => {
    const axiosPublic = useAxios();
    const { refetch, data: orders, isLoading } = useQuery({
        queryKey: ['orders'],
        queryFn: () => axiosPublic(`/order`)
    })

    if (isLoading) {
        return <progress></progress>
    }

    const { quantity, creditCard, user, location, productId, _id } = orders?.data;
    console.log(quantity, creditCard, user, location, productId, _id)
    console.log(orders.data)
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
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
                            orders?.data.map(singleOrder => <DashboardItem
                                key={singleOrder._id}
                                singleOrder={singleOrder}
                                refetch={refetch}
                            ></DashboardItem>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Dashboard;