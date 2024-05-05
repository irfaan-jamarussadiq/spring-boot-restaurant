import './Menu.css';
import MenuItem from './MenuItem';
import useFetchMenu from './useFetchMenu';

function Menu() {
    const { menu, error } = useFetchMenu();

    return (
        <div className="Menu page">
            <h1 className="page-title">Menu</h1>
            <div className="menu-items">    
                {error ? <p>Could not find menu items</p> : menu.map((item) => <MenuItem key={item.name} item={item} />)}
            </div>
        </div>
    );
}

export default Menu;