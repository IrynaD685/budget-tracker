import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.tsx";
import Navigation from "./Navigation.tsx";
import { TransactionsContext } from "../../store/transactions-context.tsx";
import type { Transaction, TransactionId } from "../../types/transaction.ts";
import { useNavigate } from "react-router-dom";

export default function AppLayout() {
    const [transactions, setTransactions] = useState<Transaction[]>(() => {
        const saved = localStorage.getItem("transactions");
        return saved ? JSON.parse(saved) : [];
    });
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(transactions));
    }, [transactions]);

    function addNewTransaction(transaction: Transaction) {
        setTransactions((prevTransactions) => [...prevTransactions, transaction]);
        navigate("/");
    }

    function deleteTransaction(id:  TransactionId) {
        console.log("trying to delete")
        setTransactions((prevTransactions) => prevTransactions.filter(transaction => transaction.id !== id));
        navigate("/");
    }

    const ctxValue = {
        transactions,
        addNewTransaction,
        deleteTransaction
    }

    return <TransactionsContext.Provider value={ctxValue}>
        <div>
            <Header />
            <Navigation />
            <main>
                <Outlet />
            </main>
        </div>
    </TransactionsContext.Provider>
}