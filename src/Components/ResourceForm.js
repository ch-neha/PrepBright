import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import { addpapers } from '../slices/papersSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function ResourceForm() {
    let { register, handleSubmit, formState: { errors } } = useForm()

    let dispatch = useDispatch();

    const onFormSubmit = (resourceObj) => {
        console.log(resourceObj);
        // let actionObj = addpapers(resourceObj);
        // dispatch(actionObj);
    }

    const subjs = useSelector(state => state.subs);

    return (
        <div className='shadow-lg w-75 mx-auto m-4 p-5 bg-light'>
            <p className='display-3 text-center text-primary mb-5'>Add Resource Form</p>
            <form className="w-75 mx-auto" onSubmit={handleSubmit(onFormSubmit)}>
                <div className="mb-3 form-group" >
                    <label for="subj">Select Subject</label>
                    <select id="subj" class="form-control">
                        <option selected>Choose Subject</option>
                        {
                            subjs.map((ele) => <option {...register("subj")}>{ele}</option>)
                        }
                    </select>
                </div>
                <div className="mb-3 form-group" >
                    <label for="type">Select Resource Type</label>
                    <select id="type" class="form-control">
                        <option selected>Choose Type</option>
                        <option {...register("type")}>videos</option>
                        <option {...register("type")}>pdfs</option>
                        <option {...register("type")}>papers</option>
                        <option {...register("type")}>impqs</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="title">Resource Title: </label>
                    <input type="text" id="title" className='form-control' {...register("title", { required: true, minLength: 3 })} />
                    {errors.title?.type === 'required' && <p className='text-danger'>*Please enter the title</p>}
                    {errors.title?.type === 'minLength' && <p className='text-danger'>*Title minimum length is 3</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="subtitle">Resource Sub-Title: </label>
                    <input type="text" id="sub-title" className='form-control' {...register("sub-title")}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="link">Resource Link: </label>
                    <input type="text" id="link" className='form-control' {...register("link")}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="img">Resource Image: </label>
                    <input type="text" id="img" className='form-control' {...register("img")}></input>
                </div>
                <div className='text-center'>
                    {/* <Link to="/subjects"> */}
                    <button type="submit" className='btn btn-dark mt-4 w-25'>Submit</button>
                    {/* </Link> */}
                </div>
            </form>
        </div>

    )
}