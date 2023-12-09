import React, {useState} from 'react';

const Problem1 = () => {

    const [show, setShow] = useState('all');
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [taskTable, setTaskTable] = useState([])

    const handleClick = (val) =>{
        setShow(val);
    }
    const handleChangeName = (e)=> {
        setName(e.target.value)
    }
    const handleChangeStatus = (e)=> {
        setStatus(e.target.value)
    }

    const handleSubmitForm = (e)=> {
        e.preventDefault();

        let id = null;
    
        if( status.toLowerCase() === 'active' ) {
            id = 1
        } else if( status.toLowerCase() === 'completed' ) {
            id = 2
        } else {
            id = 3
        }

        setTaskTable((prevTask)=> [...prevTask, {id, name, status}])
        setName('')
        setStatus('')
    }

    const sortedTable = taskTable.sort((a,b)=> {
        return a.id - b.id
    })
    const filterTasks = sortedTable.filter((task)=> {
        return show == 'all' ? task : show == 'active' ? task.status.toLowerCase() == 'active' : task.status.toLowerCase() == 'completed';
    })

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input value={name} type="text" className="form-control" onChange={handleChangeName} placeholder="Name"/>
                        </div>
                        <div className="col-auto">
                            <input value={status} type="text" className="form-control" onChange={handleChangeStatus} placeholder="Status"/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary" onClick={handleSubmitForm}>Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                filterTasks.map((item, i)=> (
                                    <tr key={i}>
                                        <td>{item.name}</td>
                                        <td>{item.status}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;