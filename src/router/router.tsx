import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import AddTransactionPage from "../pages/AddTransactionPage";
import TransactionsPage from "../pages/TransactionsPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardPage/>,
    },
    {
        path: "/transactions",
        element: <TransactionsPage />,
    },
    {
        path: "/add",
        element: <AddTransactionPage />,
    }
]);