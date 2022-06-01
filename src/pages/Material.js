import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getResources } from '../slices/resourcesSlice';

function Material() {
    // get the subject and type of resource selected by the user
    const location = useLocation();
    const sub = location.state.from.subject;
    const type = location.state.from.type;
    
    let dispatch = useDispatch();

    useEffect(async () => {
        let actionobj = await getResources("http://localhost:5000/resource/getresource");
        dispatch(actionobj);
    }, [])

    let {resources, isPending, isError, isSuccess, errMsg} = useSelector(state => state.resources)

    let resource, items;
    
    if(isSuccess == true) {
        resource = resources.payload.filter(function (ele) {
            return ele.subject === sub && ele.type === type
        })
        items = resource.length;
        console.log(resource);
    }
   
    return (
        <div className="container">
            <div className="display-5 text-center text-primary m-3 p-2 shadow-lg">{sub} {type}</div>
            
            {
                items == 0 && <p className='display-4 text-info text-center'>No Resources Available</p>
            }

            {
                isPending == true && <p className='display-4 text-info text-center'>Resources are loading</p>
            }

            {
                isSuccess == true &&
                resource.map((ele) =>
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