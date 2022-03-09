import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Material() {
    const location = useLocation();
    const sub = location.state.from.subject;
    const type = location.state.from.type;
    const materials = useSelector(state => {
        if (type === "pdfs")
            return state.pdfs
        else if (type === "videos")
            return state.videos
        else if (type === "impqs")
            return state.impqs
        return state.papers
    });;

    const pdf = materials.filter(function (ele) {
        return ele.subject === sub
    });

    return (
        <div className="container">
            <div className="display-5 text-center text-primary m-3 p-2 shadow-lg">{sub} {type}</div>
            {
                pdf.map((ele) =>
                    <div className="card mt-5 mb-3 shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-3">
                                    <img src={ele.imgurl}
                                        className="card-img" width="40px" alt=""></img>
                                </div>
                                <div className="col-9">
                                    <div className="display-6">{ele.title}</div>
                                    <p className="card-text pt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
                                        ex
                                        obcaecati molestiae
                                        sequi magni odit sapiente autem ea doloremque natus
                                        aliquid dolor cupiditate inventore corrupti nam?</p>
                                    <a href={ele.link} target="_blank">
                                        <button type="button" className="btn btn-secondary float-end w-25">Open</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            <Link to="/addresource">
                <div className='float-end'>
                    <button type="button" className='btn btn-danger p-3' style={{ position: "fixed", bottom: 40, right: 40, }}>
                        Add New Resource
                    </button>
                </div>

            </Link >
        </div >
    );
}

export default Material;