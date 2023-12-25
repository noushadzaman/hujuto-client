import { useQuery } from "@tanstack/react-query";
import DashboardItem from "./DashboardItem";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Dashboard = () => {
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