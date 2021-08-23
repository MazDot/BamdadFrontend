import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

function Stores () {
    useEffect(() => {
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.com/v2/cosmetics/br/new');
        const items = await data.json();
        console.log(items);
        setItems(items.data.items);
    };

        return (
            <div className="body">
                {items.map(item => (
                    <h3 key ={item.id}>
                        <Link to={`/stores/${item.id}`}>
                        {item.name}
                        </Link>
                    </h3>
                ))}
            </div>
        );

}

export default Stores;