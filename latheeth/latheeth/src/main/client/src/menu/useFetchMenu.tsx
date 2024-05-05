import { useEffect, useState } from "react";
import { Item } from "./MenuItem";

function useFetchMenu() {
    const [menu, setMenu] = useState<Array<Item>>([]);
    const [error, setError] = useState(null);

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

    return { "menu": menu, "error": error };
}

export default useFetchMenu;