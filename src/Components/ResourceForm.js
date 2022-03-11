import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import { addpapers } from '../slices/papersSlice';
import { addimpqs } from '../slices/impqsSlice';
import { addpdfs } from '../slices/pdfSlice';
import { addvideos } from '../slices/ytSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

export default function ResourceForm() {
    let { register, handleSubmit, formState: { errors } } = useForm()

    let dispatch = useDispatch();

    let [resadd, change] = useState(false);

    const subjs = useSelector(state => state.subs);
    const [selectedSubj, changeSelected] = useState("empty");

    let setSubject = (event) => {
        changeSelected(event.target.value);
    }

    const onFormSubmit = (resourceObj) => {
        resourceObj.subject = selectedSubj;
        let actionObj;
        if (resourceObj.type === "papers") {
            actionObj = addpapers(resourceObj);
        }
        else if (resourceObj.type === "impqs") {
            actionObj = addimpqs(resourceObj);
        }
        else if (resourceObj.type === "pdfs") {
            actionObj = addpdfs(resourceObj);
        }
        else {
            actionObj = addvideos(resourceObj);
        }
        dispatch(actionObj);
        console.log(actionObj);
        change(true);
    }



    return (
        <div className='shadow-lg w-75 mx-auto m-4 p-5 bg-light'>
            <p className='display-3 text-center text-primary mb-5'>Add Resource Form</p>
            <form className="w-75 mx-auto" onSubmit={handleSubmit(onFormSubmit)}>
                <div className="mb-3 form-group" >
                    <label for="subj">Select Subject</label>
                    <select id="subj" className="form-control" {...register("subject")} onChange={setSubject}>
                        <option selected>Choose Subject</option>
                        {
                            subjs.map((ele) => <option  >{ele}</option>)
                        }
                    </select>
                </div>
                <div className="mb-3 form-group" >
                    <label for="type">Select Resource Type</label>
                    <br></br>
                    <div className='form-check form-check-inline'>

                        <label htmlFor='pdf' className='form-check-label'>
                            <input className='form-check-input' {...register("type")} type="radio" value="pdfs" id='pdf' />
                            pdfs
                        </label>
                    </div>
                    <div className='form-check form-check-inline'>
                        <label htmlFor='video' className='form-check-label'>
                            <input className='form-check-input' {...register("type")} type="radio" value="videos" id='video' />
                            videos
                        </label>
                    </div>
                    <div className='form-check form-check-inline'>
                        <label htmlFor='impqs' className='form-check-label'>
                            <input className='form-check-input' {...register("type")} type="radio" value="impqs" id='impqs' />
                            impqs
                        </label>
                    </div>
                    <div className='form-check form-check-inline'>
                        <label htmlFor='papers' className='form-check-label'>
                            <input className='form-check-input' {...register("type")} type="radio" value="papers" id='papers' />
                            papers
                        </label>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="title">Resource Title: </label>
                    <input type="text" id="title" className='form-control' {...register("title", { required: true, minLength: 3 })} />
                    {errors.title?.type === 'required' && <p className='text-danger'>*Please enter the title</p>}
                    {errors.title?.type === 'minLength' && <p className='text-danger'>*Title minimum length is 3</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="subtitle">Resource Sub-Title: </label>
                    <input type="text" id="subtitle" className='form-control' {...register("sub-title")}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="reslink">Resource Link: </label>
                    <input type="text" id="reslink" className='form-control' {...register("link")}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="img">Resource Image: </label>
                    <input type="text" id="img" className='form-control' {...register("imgurl")}></input>
                </div>
                <div className='text-center'>

                    <button type="submit" className='btn btn-dark mt-4 w-25'>Submit</button>

                </div>
            </form>

            {
                resadd == true && <p className="w-25 text-info text-center mx-auto my-2">Resource Added!</p>
            }

            <div className="mx-auto w-25 my-5 text-center" >
                <Link to="/subjects">
                    <button className="btn btn-success " type="button">Go Back</button>
                </Link>
            </div>

        </div>

    )
}