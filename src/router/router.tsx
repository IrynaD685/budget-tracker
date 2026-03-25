import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import AddTransactionPage from "../pages/AddTransactionPage";
import TransactionsPage from "../pages/TransactionsPage";
import AppLayout from "../components/layout/AppLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <TransactionsPage/>,
            },
            {
                path: "dashboard",
                element: <DashboardPage/>,
            },
            {
                path: "add",
                element: <AddTransactionPage />,
            }
        ]
    }
]);