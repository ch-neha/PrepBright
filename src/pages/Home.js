import React from "react";
import { Link } from 'react-router-dom';
function Home() {
    const imgurl = "https://5.imimg.com/data5/WE/UU/UI/SELLER-50831584/online-exam-software-500x500.png";
    const linkStyle = {
        textDecoration: "none",
        color: 'white'
    };
    return (
        <div className="App">
            <div className="container-fluid">
                <div className="row m-5">
                    <div className="col-4">

                        <div className="display-1 m-5 text-primary">PrepBright</div>
                        <div className="display-5 mb-3 text-dark">Single Stop For All Exams Preparation</div>
                        <Link to="subjects" style={linkStyle}>
                            <button type="button" className="btn btn-danger mt-5 w-50 float-end">Explore</button>
                        </Link>
                    </div>
                    <div className="mt-4 col-8">
                        <img src={imgurl} alt=""
                            height="100%" width="90%" className="float-end" />
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Home;