import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Slider.css';

function Shop() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    const url = "http://localhost:3001/books";

    useEffect(() => {
        fetch(url, { method: "GET" })
            .then(res => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then(res => {
                setData(res);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setError(error.message); 
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <h1>Loading books...</h1>;
    }
 
    if (error) {
        return <h1>Error fetching books: {error}</h1>; // Display error message if fetch fails
    }

    return (
        <div className="cards-container">
            {data.map((item) => (
                <div className="card" key={item.id}>
                    <img src={item.image} className="card-img-top" alt={item.title} />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">Rs.{item.price}</p>
                        <Link to={"/shop/" + item.id} className="btn"><img className="read-more" src="https://cdn-icons-png.flaticon.com/128/6851/6851095.png"/></Link>
                        &nbsp; &nbsp;
                        <Link to={"/edit/"+item.id} className="btn"><img className="edit" src="https://cdn-icons-png.flaticon.com/128/1827/1827933.png"/></Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Shop;

