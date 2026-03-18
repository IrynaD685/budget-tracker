import { Outlet } from "react-router-dom";
import Header from "./Header.tsx";
import Navigation from "./Navigation.tsx";

export default function AppLayout() {
    return <>
        <div>
            <Header/>
            <Navigation/>
            <main>
                <Outlet/>
            </main>
        </div>
    </>
}