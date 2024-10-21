import React, { useState } from 'react'
import Header from './Header'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AxiosService from '../utils/AxiosService';
import toast from 'react-hot-toast'
import ApiRoutes from '../utils/ApiRoutes';
import Table from 'react-bootstrap/Table';
import Support from '../utils/Support';


function Status() {

  let [data, setData] = useState({})
  const getSrDetails = async (e) => {
    e.preventDefault()
    try {


      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);
      let srno = formProps.srno

      let res = await AxiosService.get(`${ApiRoutes.SR.path}/${srno}`, {
        authenticate: ApiRoutes.SR.authenticate
      })

      if (res.status === 200) {
        toast.success(res.data.message)
        setData(res.data.data)
        console.log(res.data.data)
      }



    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  return (
    <>
      <Header />
      <div className='loginwrapper'>
        <Form onSubmit={getSrDetails}>
          <Form.Group className="mb-3" >
            <Form.Label>SR NO:</Form.Label>
            <Form.Control type="text" placeholder="Enter SR No" name='srno' />

          </Form.Group>


          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div className='details-wrapper'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Item </th>
              <th>Value</th>

            </tr>
          </thead>
          <tbody>
            {
              Object.keys(data).map((e, i) => {
                return <tr>
                  <td>{Support.UpperCase(e)}</td>
                  <td>{data[e]!==null?data[e]:"-"}</td>
                </tr>
              })
            }
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default Status