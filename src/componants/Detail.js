import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import './Slider.css'

function Detail() {
    const [data, setData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    const apiUrl = "http://localhost:3001/books/"+id;

    useEffect(() => {
        fetch(apiUrl, { method: "GET" })  
            .then(res => res.json())
            .then(res => setData(res))
            .catch(error => console.error("Error fetching data:", error));
    }, [id]); 

    // Function to handle deletion of the product
    const handleDelete = () => {
        fetch(apiUrl, { method: "DELETE" })
            .then(res => res.json())
            .then(() => {
                navigate("/shop");
            })
            .catch(error => console.error("Error deleting data:", error));
    };

    

    return (
        <>
            <div className="detail-container">
                <Link to="/shop" className="btn">
                <img className="back" src="https://cdn-icons-png.flaticon.com/128/15786/15786959.png"/>
                </Link>

                <button className="btn" onClick={handleDelete}>
                    <img className="delete" src="https://cdn-icons-png.flaticon.com/128/11001/11001955.png"/>
                </button>
                <br/>
                <div className="row">
                    <div className="col-4"><img src={data.image} alt={data.title} width="300" /></div>
                    <div className="col"><h1>Product ID: {data.id}</h1>
                    <h2>Price: Rs.{data.price}</h2>
                    <h3>Title: {data.title}</h3>
                    <h3>Author: {data.author}</h3>
                    <h3>Category: {data.category}</h3>
                    <h3>Rating: {data.rating}</h3>
                    <p>Description: {data.description}</p></div>
                </div>
            </div>
        </>
    );
}

export default Detail;

