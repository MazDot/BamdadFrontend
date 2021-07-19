import React, { useState, useEffect } from 'react';

function StoreDetail ( {match} ) {
    useEffect(() => {
        fetchItem();
    },[]);

    const [item, setItem] = useState({ data: {images : {} }});

    const fetchItem = async () => {
        const fetchItem = await fetch(
            `https://fortnite-api.com/v2/cosmetics/br/${
                match.params.id
            }`
        );
        const item = await fetchItem.json();
        setItem(item);
        console.log(item);

    };
    return (
        <div>
            <h3>{item.data.name}</h3>
            <img src={item.data.images.icon}></img>
        </div>
    );
}

export default StoreDetail;