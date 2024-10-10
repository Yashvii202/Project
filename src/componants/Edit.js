import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
    const navigate = useNavigate();
    const { id } = useParams();  // Destructure id from useParams
    const url = "http://localhost:3001/books/"+id;
    
    const [data, setData] = useState({
        id: "",
        image: "",
        title: "",
        author: "",
        description: "",
        price: "",
        catagory: "",
        rating: ""
    });

    // Fetch data on component mount
    useEffect(() => {
        fetch(url, { method: "GET" })
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((error) => console.error("Error fetching book data:", error));
    }, [url]);

    const handleEdit = () => {
        const apiUrl = "http://localhost:3001/books/"+id;

        fetch(apiUrl, {
            method: "PUT",
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
                console.error("Error updating book:", error);
            });
    };

    return (
        <>
            <div className="form-group row">
                <label htmlFor="text2" className="col-4 col-form-label"><h3>ID</h3></label>
                <div className="col-8">
                    <input
                        type="text"
                        readOnly
                        value={data.id}
                        className="form-control"
                    />                                                  
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="text4" className="col-4 col-form-label"><h3>Image Path</h3></label>
                <div className="col-8">
                    <input
                        value={data.image}
                        onChange={(e) => setData({ ...data, image: e.target.value })}
                        type="text"
                        className="form-control"
                    />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="text1" className="col-4 col-form-label"><h3>Title</h3></label>
                <div className="col-8">
                    <input
                        value={data.title}
                        onChange={(e) => setData({ ...data, title: e.target.value })}
                        type="text"
                        className="form-control"
                    />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="text3" className="col-4 col-form-label"><h3>Author</h3></label>
                <div className="col-8">
                    <input
                        value={data.author}
                        onChange={(e) => setData({ ...data, author: e.target.value })}
                        type="text"
                        className="form-control"
                    />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="text3" className="col-4 col-form-label"><h3>Enter Description</h3></label>
                <div className="col-8">
                    <input
                        value={data.description}
                        onChange={(e) => setData({ ...data, description: e.target.value })}
                        type="text"
                        className="form-control"
                    />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="text3" className="col-4 col-form-label"><h3>Price</h3></label>
                <div className="col-8">
                    <input
                        value={data.price}
                        onChange={(e) => setData({ ...data, price: Number(e.target.value) })}
                        type="text"
                        className="form-control"
                    />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="text3" className="col-4 col-form-label"><h3>Category</h3></label>
                <div className="col-8">
                    <input
                        value={data.category}
                        onChange={(e) => setData({ ...data, category: e.target.value })}
                        type="text"
                        className="form-control"
                    />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="text3" className="col-4 col-form-label"><h3>Category</h3></label>
                <div className="col-8">
                    <input
                        value={data.rating}
                        onChange={(e) => setData({ ...data, rating: Number(e.target.value) })}
                        type="text"
                        className="form-control"
                    />
                </div>
            </div>

            <div className="form-group row">
                <div className="offset-4 col-8">
                    <button
                        onClick={handleEdit}
                        className="btn btn-primary"
                    >
                        Edit
                    </button>
                </div>
            </div>
        </>
    );
}

export default Edit;

