import React from "react";

function About() {
    return (
        <>
            <div className="container-fluid">
                <div><h2>“Thanks to Bookshop, there is no reason to buy books on Amazon anymore.” — Inside Hook</h2></div>
                <br/>
                <br/>
                <div className="row">
                    <div className="col-5"><img src="https://cdn.prod.website-files.com/6267f35934aa8b1795cf1a9f/62f5394f512f1534599827db_vend-p-500.png" /></div>
                    <div className="col">
                        <h3>The BookNook.org works to connect readers with independent booksellers all over the world.</h3>
                        <p>We believe local bookstores are essential community hubs that foster culture, curiosity, and a love of reading, and we're committed to helping them thrive.</p>

                            <h2>Every purchase on the site financially supports independent bookstores. </h2>
                            <p>Our platform gives independent bookstores tools to compete online and financial support to help them maintain their presence in local communities.</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About;