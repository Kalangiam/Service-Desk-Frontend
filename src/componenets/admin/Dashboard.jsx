import React, { useState, useEffect } from 'react'
import TopBar from './Topbar'
import toast from 'react-hot-toast'
import useLogout from '../../hooks/useLogout'
import ApiRoutes from '../../utils/ApiRoutes'
import Card from 'react-bootstrap/Card'
import AxiosService from '../../utils/AxiosService'
import Support from '../../utils/Support'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import {useNavigate} from 'react-router-dom'

function Dashboard() {
  let [countData, setCountData] = useState([])
  let [data, setData] = useState([])
  let logout = useLogout()
  let navigate = useNavigate()
  let getDashboardCount = async () => {
    try {
      let res = await AxiosService.get(ApiRoutes.DASHBOARD_COUNT.path, {
        authenticate: ApiRoutes.DASHBOARD_COUNT.authenticate,

      })
      if (res.status === 200) {
        setCountData(res.data.data)
      }
    } catch (error) {
      toast.error(error.response.data.message)
      if (error.response.status === 401) {
        logout()
      }

    }
  }

  let loadData = async (status) => {
    try {
      let res = await AxiosService.get(`${ApiRoutes.LIST.path}/${status}`, {
        authenticate: ApiRoutes.LIST.authenticate,

      })
      if (res.status === 200) {
        setData(res.data.data)
      }
    } catch (error) {
      toast.error(error.response.data.message)
      if (error.response.status === 401) {
        logout()
      }

    }
  }

  useEffect(() => {
    getDashboardCount()
  }, [])
  return (
    <>
      <TopBar />
      <div className='CardWrapper'>
        {
          countData.map((value) => {
            return (<Card key={value._id} style={{ width: '10rem', cursor: 'pointer' }} onClick={() => loadData(value._id)}>
              <Card.Body style={{ display: "flex", justifyContent: "space-between" }}>
                <Card.Title>{value._id}</Card.Title>
                <Card.Title>{value.count}</Card.Title>
              </Card.Body>
            </Card>)

          })
        }

      </div>
      {
        data.length ? <div className='details-wrapper'>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>name </th>
                <th>email</th>
                <th>title</th>
                <th>description</th>
                <th>mobile</th>
                <th>status</th>
                <th>createdAt</th>
                <th>Action</th>

              </tr>
            </thead>
            <tbody>
              {
                data.map((e, i) => {
                  return <tr key={e._id}>
                    <th>{i + 1}</th>
                    <th>{e.name} </th>
                    <th>{e.email}</th>
                    <th>{e.title}</th>
                    <th>{e.description}</th>
                    <th>{e.mobile}</th>
                    <th>{e.status}</th>
                    <th>{e.createdAt}</th>
                    <th><Button variant='primary' onClick={()=>navigate(`/admin/service/${e.no}`)}>View</Button></th>
                  </tr>
                })
              }
            </tbody>
          </Table>

        </div> : <h4 style={{ textAlign: "center" }}>No data available</h4>
      }

    </>

  )
}

export default Dashboard