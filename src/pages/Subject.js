import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getSubjects } from '../slices/subjectSlice';

function Subject() {
    let dispatch = useDispatch();

    useEffect( async ()=>{
        let actionobj = await getSubjects("http://localhost:5000/subject/getsubject");
        dispatch(actionobj);
    },[]);

    let {subjects, isPending, isSuccess, isError, errMsg} = useSelector(state => state.subjects);

    let subjs = subjects.payload;

    return (
        <div className="container">

            <div className="display-5 text-center text-primary m-3 p-2 shadow-lg bg-white">Subjects</div>
            
            {
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
                            <Link to="/select-resource" state={{ from: `${element.name}` }}>
                                <button type="button" className="btn btn-warning text-dark mt-5 mx-4 p-4 text-wrap">
                                    <div className="display-5 text-wrap" >
                                        {element.name}
                                    </div>
                                </button>
                            </Link>
                        )
                    }

                    <div className='float-end'>
                        <Link to="/addsubject">
                            <button type="button" className='btn btn-info p-4' style={{ position: "fixed", bottom: 40, right: 40, }}>
                                Add New Subject
                            </button>
                        </Link>
                    </div>

                </div>
            }

        </div>

    );
}
export default Subject;