import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import Employees from './Employees'
import { v4 as uuid } from 'uuid'
import { Link, useNavigate } from 'react-router-dom'
// import e from 'express'
import { type } from '@testing-library/user-event/dist/type'
const Edit = () => {
  const [n, setName] = useState('')
  const [a, setAge] = useState('')
  const [i, setId] = useState('')
  let history = useNavigate();
  var index = Employees.map((e) => {
    return e.id
  }).indexOf(i);
  const handleSubmit = (e) => {
    e.preventDefault();
    let x = Employees[index]
    x.name=n;
    x.age=a;

    history('/')
  }
  useEffect(() => {
    setName(localStorage.getItem("Name"))
    setAge(localStorage.getItem("Age"))
    setId(localStorage.getItem("Id"))
  },[])
  return (
    <div>
      <Form className='d-grid gap-2' style={{ margin: "15rem" }}>
        <Form.Group className='mb-3' controlId='formName'>
          <Form.Control type='text' placeholder='Enter Name' value={n} required onChange={(e) => setName(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formAge'>
          <Form.Control type='text' placeholder='Enter Age' value={a} required onChange={(e) => setAge(e.target.value)}></Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type='submit'>Update</Button>
      </Form>
    </div>
  )
}
export default Edit
