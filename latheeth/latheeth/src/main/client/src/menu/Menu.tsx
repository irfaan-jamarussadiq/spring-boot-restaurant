import './Menu.css';
import MenuItem, { Item } from './MenuItem';
import { useState, useEffect } from 'react';

function Menu() {
    const [error, setError] = useState(null);
    const [menu, setMenu] = useState<Array<Item>>([]);

    useEffect(() => {
        let ignore = false;

        fetch("http://localhost:8080/api/menu/items")
            .then(response => response.json())
            .then(json => { 
                if (!ignore) setMenu(json) 
            })
            .catch(error => setError(error));
        
        return () => {
            ignore = true;
        };
    }, []);

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