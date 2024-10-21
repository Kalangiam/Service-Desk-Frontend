import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AxiosService from '../utils/AxiosService';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import ApiRoutes from '../utils/ApiRoutes';

function Create() {

  const navigate = useNavigate()

  useEffect(() => {
    sessionStorage.clear()
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);

      // console.log(formProps)
      let res = await AxiosService.post(ApiRoutes.SR_CREATE.path,formProps,{
        authenticate:ApiRoutes.SR_CREATE.authenticate
      })

      if(res.status===200){
        toast.success(res.data.message)
        navigate('/status')
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }

  }

  return (
    <>
      <Header />
      <div className='loginwrapper'>
        <h2>Report us</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" name='name' />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name='email' />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="text" placeholder="Mobile" name='mobile' />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Category</Form.Label>
            <Form.Select defaultValue={"default"} name="category">
              <option value="default" disabled>Select Category</option>
              <option value="Maintenance">Maintenance</option>
              <option value="HouseKeeping">HouseKeeping</option>
              <option value="Enquiry">Enquiry</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Title" name='title' />
          </Form.Group>
          <Form.Group className="mb-3" >
            <FloatingLabel label="Description">
              <Form.Control
                as="textarea"
                placeholder="description"
                style={{ height: '100px' }}
                name='description'
              />
            </FloatingLabel>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div></>
  )
}

export default Create