import React, { useState } from 'react';
import { Button, Col, Modal, Row, Table } from 'react-bootstrap';
import {BiShow} from 'react-icons/bi';
import {AiFillEdit} from 'react-icons/ai';
import {IoMdTrash} from 'react-icons/io';
import Form from './Form';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {

    const {devs} = useSelector(state => state.dataForm)
    const dispatch = useDispatch()

    // Modal Show and Close
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showData, setShowData] = useState(false);
    const handleShowDataClose = () => setShowData(false)
    const handleShowData = () => setShowData(true)

    const handleDataShow = (index) => {
        handleShowData()
        setInput({
            name : devs[index].name,
            email : devs[index].email,
            phone : devs[index].phone,
            address : devs[index].address,
            photo : devs[index].photo
        })
    }

    // Value get for editing
    const [input, setInput] = useState('')

    const handleEdit = (index) => {
        handleShow()
        setInput({
            name : devs[index].name,
            email : devs[index].email,
            phone : devs[index].phone,
            address : devs[index].address,
            photo : devs[index].photo
        })
    }

    // Value Change Function
    const handleChange = (e) => {
        setInput((prev) => ({...prev, [e.target.name] : e.target.value}))
    }

    // Form Submit for data editing
    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    // Delete Data
    const handleDelete = (index) => {

        let arr_data = JSON.parse(localStorage.getItem('devs'))
        arr_data.splice(index, 1)
        localStorage.setItem('devs', JSON.stringify(arr_data))

        dispatch({type : 'DELETE_DEVS', payload : arr_data})
    }

  return (
    <div>
        <Row className='mt-5'>
            <Col md={9}>
                <Table striped hover className='shadow'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Photo</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            devs.map((data, index) => 
                                
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.phone}</td>
                                    <td>{data.address}</td>
                                    <td>
                                        <img style={{width : '35px', height : '35px', objectFit : 'cover', borderRadius : '10px'}} src={data.photo} alt="" />
                                    </td>
                                    <td className='d-flex gap-1'>
                                        <Button onClick={ () => handleDataShow(index) } className='btn btn-success'><BiShow/></Button>
                                        <Button onClick={ () => handleEdit(index) } className='btn btn-info'><AiFillEdit/></Button>
                                        <Button onClick={ () => handleDelete(index) } className='btn btn-danger'><IoMdTrash/></Button>
                                    </td>
                                </tr>

                                )
                        }
                    </tbody>
                </Table>
            </Col>
            <Col md={3}>
                <Form/>
            </Col>
        </Row>
        {/* Edit data Modal */}
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            size='sm'
        >
            <Modal.Header closeButton>
                <Modal.Title>Edit data...</Modal.Title>
            </Modal.Header>
            <form onSubmit={ handleSubmit }>
                <Modal.Body>
                    <input name='name' value={input.name} onChange={ handleChange } className='form-control mt-2' type="text" placeholder='Name' />
                    <input name='email' value={input.email} onChange={ handleChange } className='form-control mt-2' type="text" placeholder='Email' />
                    <input name='phone' value={input.phone} onChange={ handleChange } className='form-control mt-2' type="text" placeholder='Phone' />
                    <input name='address' value={input.address} onChange={ handleChange } className='form-control mt-2' type="text" placeholder='Address' />
                    <input name='photo' value={input.photo} onChange={ handleChange } className='form-control mt-2' type="text" placeholder='Photo' />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type='submit' variant="primary">Submit</Button>
                </Modal.Footer>
            </form>
        </Modal>
        {/* Show Data Modal */}
        <Modal
            show={showData}
            onHide={handleShowDataClose}
            backdrop="static"
            keyboard={false}
            size='md'
        >
            <Modal.Header closeButton>
                <Modal.Title>Details...</Modal.Title>
            </Modal.Header>
            <Modal.Body className='text-center'>
                <img style={{width : '100px', height : '100px', objectFit : 'cover', borderRadius : '50%', margin : 'auto'}} src={input.photo} alt="" />
                <div className="details text-start px-5 pt-2">
                    <h4>Name : {input.name}</h4>
                    <h5>Email : {input.email}</h5>
                    <h5>Phone : {input.phone}</h5>
                    <h5>Address : {input.address}</h5>
                </div>
            </Modal.Body>
        </Modal>
    </div>
  )
}

export default Home;