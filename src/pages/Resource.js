import React from "react";
import { Link } from 'react-router-dom'
import img1 from '../images/yt.jpg';
import img2 from '../images/pdf.jpg';
import img3 from '../images/qps.png';
import img4 from '../images/imp.jpg';
import { useLocation } from 'react-router-dom'

function Resource() {
    const location = useLocation();
    const sub = location.state.from;
    const pdfprop = {
        subject: sub.toString(),
        type: "pdfs"
    }
    const videoprop = {
        subject: sub.toString(),
        type: "videos"
    }
    const impqsprop = {
        subject: sub.toString(),
        type: "impqs"
    }
    const papersprop = {
        subject: sub.toString(),
        type: "papers"
    }
    return (
        <div className="container">
            <div className="display-5 text-center text-primary m-3 p-2 shadow">{sub}</div>
            <div className="card-group mt-5">
                <div className="col-2 card shadow m-2">
                    <img src={img1} alt=""
                        width="100%" />
                    <div className="card-body">
                        <h5>YouTube Videos</h5>
                        <p>Check out some YouTube tutorials to learn better.</p>
                    </div>
                    <div className="card-footer">
                        <Link to="/resources" style={{ textDecoration: "none" }} state={{ from: videoprop }}>
                            <button type="button" className="btn btn-danger mx-auto w-100"
                            >Open</button>
                        </Link>
                    </div>
                </div>

                <div className="card col-2  shadow  m-2">
                    <img src={img2} alt=""
                        width="100%" />
                    <div className="card-body">
                        <h5>Pdfs and PPTs</h5>
                        <p>Check out written notes and ppts of lecturers.</p>
                    </div>
                    <div className="card-footer">
                        <Link to="/resources" style={{ textDecoration: "none" }} state={{ from: pdfprop }}>
                            <button type="button" className="btn btn-info mx-auto w-100"
                            >Open</button>
                        </Link>
                    </div>
                </div>

                <div className="card col-2 shadow m-2">
                    <img src={img4} alt=""
                        width="100%" />
                    <div className="card-body">
                        <h5>Important Questions</h5>
                        <p>Check out important questions given by faculty for reference.</p>
                    </div>
                    <div className="card-footer m-1">
                        <Link to="/resources" style={{ textDecoration: "none" }} state={{ from: impqsprop }}>
                            <button type="button"
                                className="btn btn-secondary d-block w-100 mx-auto">Open</button>
                        </Link>
                    </div>
                </div>

                <div className="card col-2 shadow m-2">
                    <img src={img3} alt=""
                        width="100%" />
                    <div className="card-body">
                        <h5>Previous Papers</h5>
                        <p>Check out some of the previously given question papers for reference.</p>
                    </div>
                    <div className="card-footer">
                        <div>
                            <Link to="/resources" style={{ textDecoration: "none" }} state={{ from: papersprop }}>
                                <button type="button" className="btn btn-warning d-block mx-auto w-100"
                                >Open</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resource;