import { useForm } from 'react-hook-form';
import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default function SubjectForm() {
    let { register, handleSubmit, formState: { errors } } = useForm();

    let [subadd, change] = useState(false);

    const onFormSubmit = (formObject) => {
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


    return (
        <div className="container">
            <div className="display-5 text-center text-primary m-3 p-2 shadow-lg bg-white">Subjects</div>

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
                <div className="mx-auto w-25 my-5 text-center" >
                    <Link to="/subjects">
                        <button className="btn btn-success " type="button"> Go Back </button>
                    </Link>
                </div>
            }
        </div>
    );
}