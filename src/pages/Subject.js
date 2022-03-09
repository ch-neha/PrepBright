import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

function Subject() {
    const subjs = useSelector(state => state.subs);
    return (
        <div className="container">
            <div className="display-5 text-center text-primary m-3 p-2 shadow-lg bg-white">Subjects</div>
            <div>
                {
                    subjs.map((element) =>
                        <Link to="/resource" state={{ from: `${element}` }}>
                            <button type="button" className="btn btn-warning text-dark mt-5 mx-4 p-4 text-wrap">
                                <div className="display-5 text-wrap" >
                                    {element}
                                </div>
                            </button>
                        </Link>
                    )
                }
            </div>
            <Outlet />
            <div>
                <div className='float-end'>
                    {/* <Link to="/addsub"> */}
                    <button type="button" className='btn btn-info p-4' style={{ position: "fixed", bottom: 40, right: 40, }}>
                        Add New Subject
                    </button>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    );
}
export default Subject;