import React, { useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createDevs } from '../../../redux/dataForm/action';

const Form = () => {

    const [input, setInput] = useState({
        name : '',
        email : '',
        phone : '',
        address : '',
        photo : ''
    });

    const handleChange = (e) => {
        setInput((prev) => ({...prev, [e.target.name] : e.target.value}))
    }

    const dispatch = useDispatch()

    const formSubmit = (e) => {
        e.preventDefault();

        if (!input.name || !input.email || !input.phone || !input.address || !input.photo) {
            alert('All fields are required')
        } else {
            
            dispatch(createDevs(input))

            setInput({
                name : '',
                email : '',
                phone : '',
                address : '',
                photo : ''
            })
        }

        
    }

  return (
    <div>
        <Row>
            <Col>
                <Card className='shadow-sm'>
                    <Card.Header>
                        <h4>Form...</h4>
                    </Card.Header>
                    <Card.Body>
                        <form onSubmit={ formSubmit }>
                            <input name='name' value={input.name} onChange={ handleChange } className='form-control mt-2' type="text" placeholder='Name' />
                            <input name='email' value={input.email} onChange={ handleChange } className='form-control mt-2' type="text" placeholder='Email' />
                            <input name='phone' value={input.phone} onChange={ handleChange } className='form-control mt-2' type="text" placeholder='Phone' />
                            <input name='address' value={input.address} onChange={ handleChange } className='form-control mt-2' type="text" placeholder='Address' />
                            <input name='photo' value={input.photo} onChange={ handleChange } className='form-control mt-2' type="text" placeholder='Photo' />
                            <Button type='submit' className='btn btn-info mt-3 fw-bold w-100'>Submit</Button>
                        </form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </div>
  )
}

export default Form;