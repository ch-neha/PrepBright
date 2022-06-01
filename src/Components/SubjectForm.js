import { useDispatch, useSelector } from "react-redux";
import { useForm } from 'react-hook-form';
import { addSubject } from "../slices/subjectSlice";
import { useState } from "react";
import { addSubj } from "../slices/subjectSlice"
import axios from "axios";

export default function SubjectForm(props) {
    let { register, handleSubmit, formState: { errors } } = useForm();

    let [subadd, change] = useState(false);

    // const dispatch = useDispatch();

    const onFormSubmit = (formObject) => {
        // let actionObj = addSubject(formObject.newsubject);
        // dispatch(actionObj);
        // dispatch(addSubj(actionObj));
        axios.post('http://localhost:5000/subject/createsubject', formObject)
        .then(response => {
            console.log(response);
            if(response.data.message === 'added')
                alert('subject added');
            else
                alert(response.data.message);
        })
        .catch(error=>alert("something went wrong"));
        change(true);
        document.getElementById("subjectform").reset();
    }

    let handleFormSubmit = () => {
        props.toggleSubmit(false);
    }

    return (
        <div className="w-100">
            <p className='display-3 text-center text-primary mb-5'>Add Subject</p>
            <form className="w-50 mx-auto" id="subjectform" onSubmit={handleSubmit(onFormSubmit)}>
                <div className="my-3">
                    <label htmlFor="subject">Subject Name </label>
                    <input type="text" id="subject" className='form-control' {...register("name")}></input>
                </div>
                <div className="mx-auto">
                    <button type="submit" className="btn btn-danger">Add</button>
                </div>
            </form>
            {
                subadd == true && <p className="w-25 text-info text-center mx-auto my-2">Subject Added!</p>
            }
            {
                props.addSubjectForm == true &&
                <div className="mx-auto w-25 my-5 text-center" >
                    <button className="btn btn-success " type="button" onClick={handleFormSubmit}>Go Back</button>
                </div>
            }
        </div>
    );
}