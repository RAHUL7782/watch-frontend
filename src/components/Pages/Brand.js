import React from "react";
import "../Pages/Brand.css"
import { Link } from "react-router-dom";

export const Brand = () => {
    return (
        <>
            <h1>Watch Brands</h1>
            <div className="brand-container">

                <div className="brand-list">

                    <div className="brand-item">

                        <Link>
                            <img src="https://1000logos.net/wp-content/uploads/2023/10/Titan-Logo.png" alt="Brand 1" />
                        </Link>
                    </div>
                    <div className="brand-item">
                        <Link>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2eovIyv-ReWihyg84vowTS-plDwYxwqMSD2BZeWIcBww3Ss76Fh369CIkfV6Gj3LJKg&usqp=CAU" alt="Brand 2" />
                        </Link>
                    </div>
                    <div className="brand-item">
                        <Link to="/fastrack">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSANfifLvLIsNHbihflFjdPiOsMT02e7UGg1A&usqp=CAU" alt="Brand 3" />
                        </Link>
                    </div>
                    <div className="brand-item">
                        <Link >
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh-g7z2YMsNy6Ptt9MMG79yGFkaDzlnpqZgQ&usqp=CAU" alt="Brand 4" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
