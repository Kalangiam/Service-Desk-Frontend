import React from 'react'
import { Navigate } from 'react-router-dom'

function SuperAdminProtectedRoute({ Children }) {
  let role = sessionStorage.getItem('role')
  return role === 'superadmin' ? Children : <Navigate to='/login' />
}

export default SuperAdminProtectedRoute