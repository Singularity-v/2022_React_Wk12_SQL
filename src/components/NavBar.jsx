import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="nav-bar">
            <NavLink to="/products/category/solo"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                Solo
            </NavLink>
            <NavLink to="/products/category/group"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                Group
            </NavLink>
            <NavLink to="/products/category/Couple"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                Couple
            </NavLink>
            <NavLink to="/products/category/sences"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                Sences
            </NavLink>
        </div>
    );
}