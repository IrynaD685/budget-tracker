import { NavLink } from "react-router-dom";
import { navigationItems } from "../../constants/navigation";
import classes from "./Navigation.module.css"

export default function Navigation() {
    return (
        <nav className={classes.nav}>
            <ul className={classes.list}>
                {navigationItems.map(item => (
                    <li key={item.path}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) => isActive ? `${classes.link} ${classes.linkActive}` : classes.link}
                            end={item.end}>
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}