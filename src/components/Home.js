import React, { Fragment } from 'react'
import Employees from './Employees'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Table } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
const Home = () => {
    let history = useNavigate();
    const handleDelete = (id) => {
        var index = Employees.map((e) => {
            return e.id
        }).indexOf(id)
        Employees.splice(index, 1);
        history('/')
    }
    const handleEdit=(id,name,age)=>{
        localStorage.setItem("Id",id)
        localStorage.setItem("Name",name)
        localStorage.setItem("Age",age)
    }
    return (
        <div>
            <Fragment>
                <div style={{ margin: "10rem" }}>
                    <Table striped bordered hover size='sm'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Employees && Employees.length > 0
                                    ?
                                    Employees.map((item) => (
                                        <tr>
                                            <td>{item.name}</td>
                                            <td>{item.age}</td>
                                            <td>
                                                <Link to='/edit'>
                                                    <Button onClick={() => { handleEdit(item.id, item.name, item.age) }}>Edit</Button>
                                                </Link>
                                                &nbsp;
                                                <Button onClick={() => { handleDelete(item.id) }}>Delete</Button>
                                            </td>
                                        </tr>
                                    )) :
                                    "No records available"
                            }
                        </tbody>
                    </Table>
                    <br/>
                    <Link className='d-grid gap-2' to='/add'>
                    <Button size='lg'>Create</Button>
                    </Link>
                </div>
            </Fragment>
        </div>
    )
}

export default Home