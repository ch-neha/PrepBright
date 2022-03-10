import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import SubjectForm from '../Components/SubjectForm';

function Subject() {
    const subjs = useSelector(state => state.subs);
    let [addSubjectForm, toggleSubmit] = useState(false);
    let handleSubmit = () => {
        toggleSubmit(true);
        console.log(addSubjectForm);
    }
    return (
        <div className="container">
            <div className="display-5 text-center text-primary m-3 p-2 shadow-lg bg-white">Subjects</div>
            {
                addSubjectForm == false &&
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

                    <div className='float-end'>
                        {/* <Link to="addsub"> */}
                        <button type="button" className='btn btn-info p-4' style={{ position: "fixed", bottom: 40, right: 40, }} onClick={handleSubmit}>
                            Add New Subject
                        </button>
                        {/* </Link> */}
                    </div>
                </div>
            }
            {
                addSubjectForm == true && <SubjectForm addSubjectForm={addSubjectForm} toggleSubmit={toggleSubmit} />
            }

        </div>

    );
}
export default Subject;