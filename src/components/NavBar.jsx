import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="nav-bar">
            <NavLink to="/actors/category/solo"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                Solo
            </NavLink>
            <NavLink to="/actors/category/group"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                Group
            </NavLink>
            <NavLink to="/actors/category/Couple"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                Couple
            </NavLink>
            <NavLink to="/actors/category/sences"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                Sences
            </NavLink>
        </div>
    );
}