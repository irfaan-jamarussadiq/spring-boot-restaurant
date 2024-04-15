import { useEffect, useState } from 'react';
import './Menu.css';
import MenuItem, { Item } from './MenuItem';

async function fetchMenu() {
    const response = await fetch("http://localhost:8080/api/menu/items");
    return response.json();
}

function Menu() {
    const [menu, setMenu] = useState<Array<Item>>([]);
    
    useEffect(() => {
        let ignore = false;
        async function startFetching() {
            const menuJSON = await fetchMenu();
            if (!ignore) {
                setMenu(menuJSON);
            }
        }

        startFetching();

        return () => { 
            ignore = true; 
        };
    }, [menu]);

    return (
        <div>
            <h1>Menu</h1>
            <div className="menu-items">    
                {menu.map(menuItem => <MenuItem key={menuItem.name} item={menuItem} />)}
            </div>
        </div>
    );
}

export default Menu;