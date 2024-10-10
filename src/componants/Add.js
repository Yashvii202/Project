import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
    const [data, setData] = useState({});
    const navigate = useNavigate();

    return (
        <>
            <div className="form-group row">
                <label htmlFor="text2" className="col-3 col-form-label"><h3>ID</h3></label>
                <div className="col">
                    <input
                        onChange={(e) => setData({ ...data, id: e.target.value })}
                        type="text"
                        className="form-control"
                    />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="text4" className="col-3 col-form-label"><h3>Image Path</h3></label>
                <div className="col">
                    <input
                        onChange={(e) => setData({ ...data, image: e.target.value })}
                        type="text"
                        className="form-control"
                    />
                </div>
            </div>
            

            <div className="form-group row">
                <label htmlFor="text1" className="col-3 col-form-label"><h3>Title</h3></label>
                <div className="col">
                    <input
                        onChange={(e) => setData({ ...data, title: e.target.value })}
                        type="text"
                        className="form-control"
                    />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="text3" className="col-3 col-form-label"><h3>Author</h3></label>
                <div className="col">
                    <input
                        onChange={(e) => setData({ ...data, author: e.target.value })}  
                        type="text"
                        className="form-control"
                    />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="text3" className="col-3 col-form-label"><h3>Enter Description</h3></label>
                <div className="col">
                    <input
                        onChange={(e) => setData({ ...data, description: e.target.value })}
                        type="text"
                        className="form-control"
                    />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="text3" className="col-3 col-form-label"><h3>Price</h3></label>
                <div className="col">
                    <input
                        onChange={(e) => setData({ ...data, price: Number(e.target.value) })}  
                        type="text"
                        className="form-control"
                    />
                </div>
            </div>
           

            <div className="form-group row">
                <label htmlFor="text3" className="col-3 col-form-label"><h3>Catagory</h3></label>
                <div className="col">
                    <input
                        onChange={(e) => setData({ ...data, category: e.target.value })}
                        type="text"
                        className="form-control"
                    />
                </div>
            </div>

            
            <div className="form-group row">
                <label htmlFor="text3" className="col-3 col-form-label"><h3>Rating</h3></label>
                <div className="col">
                    <input
                        onChange={(e) => setData({ ...data, rating: Number(e.target.value) })}  
                        type="text"
                        className="form-control"
                    />
                </div>
            </div>
      

            <div className="form-group row">
                <div className="offset-3 col-8">
                    <button
                        onClick={() => {
                            const apiUrl = "http://localhost:3001/books";

                            fetch(apiUrl, {
                                method: "POST",
                                body: JSON.stringify(data),
                                headers: {
                                    "Content-Type": "application/json",
                                },
                            })
                                .then((res) => res.json())
                                .then(() => {
                                    navigate("/shop");  // Redirect to shop after successful submission
                                })
                                .catch((error) => {
                                    console.error("Error adding book:", error);
                                });
                        }}
                        className="btn btn-primary"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
}

export default Add;
