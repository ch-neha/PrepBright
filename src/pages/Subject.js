import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SubjectForm from '../Components/SubjectForm';
import { getSubjects } from '../slices/subjectSlice';

function Subject() {
    let dispatch = useDispatch();

    useEffect( async ()=>{
        let actionobj = await getSubjects("http://localhost:5000/subject/getsubject");
        dispatch(actionobj);
    },[]);

    let {subjects, isPending, isSuccess, isError, errMsg} = useSelector(state => state.subjects);
    
    let [addSubjectForm, toggleSubmit] = useState(false);
    
    let handleSubmit = () => {
        toggleSubmit(true);
        console.log(addSubjectForm);
    }

    let subjs = subjects.payload;

    return (
        <div className="container">

            <div className="display-5 text-center text-primary m-3 p-2 shadow-lg bg-white">Subjects</div>
            
            {
                addSubjectForm == false &&
                <div>

                    {
                        isPending == true && 
                        <p className='display-4 text-info text-center'>
                            Subjects are loading
                        </p>
                    }

                    {
                        isSuccess == true && 
                        subjs.map((element) =>
                            <Link to="/resource" state={{ from: `${element.name}` }}>
                                <button type="button" className="btn btn-warning text-dark mt-5 mx-4 p-4 text-wrap">
                                    <div className="display-5 text-wrap" >
                                        {element.name}
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