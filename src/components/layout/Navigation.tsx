import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/transactions">Transactions</NavLink>
                </li>
                <li>
                    <NavLink to="/add">Add Transaction</NavLink>
                </li>
            </ul>
        </nav>
    );
}