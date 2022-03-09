import { useDispatch, useSelector } from "react-redux";
import { useForm } from 'react-hook-form';
import { addSubject } from "../slices/subjectSlice";
import { Link } from 'react-router-dom';

export default function SubjectForm() {
    let { register, handleSubmit, formState: { errors } } = useForm();

    let subjs = useSelector(state => state.subs)

    const dispatch = useDispatch();

    const onFormSubmit = (formObject) => {
        let actionObj = addSubject(formObject);
        console.log(actionObj);
        dispatch(actionObj);
        console.log(subjs)
    }

    return (
        <div className="mx-auto w-50">
            <p className='display-3 text-center text-primary mb-5'>Add Subject</p>
            <form className="w-75 mx-auto" onSubmit={handleSubmit(onFormSubmit)}>
                <div className="my-3">
                    <label htmlFor="subject">Subject Name </label>
                    <input type="text" id="subject" className='form-control' {...register("subject")}></input>
                </div>
                <div className="mx-auto">
                    {/* <Link to="/subjects"> */}
                    <button type="submit" className="btn btn-danger">Add</button>
                    {/* </Link> */}
                </div>
            </form>
        </div>
    );
}