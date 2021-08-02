import React from 'react'
import Sidebar from '../components/sidebar'
const Dashboard = () => {
  return (
    <>
      <div
        className=' p-2 d-flex justify-content-end '
        style={{ marginRight: '5%', marginBottom: '5%' }}
      >
        <ol class='breadcrumb'>
          <div style={{ marginRight: '25px' }}>
            <a
              className='px-2  link'
              style={{ borderRight: '2px solid black' }}
            >
              HOME
            </a>
            <a
              href='#'
              className=' px-2 link '
              style={{ borderRight: '2px solid black' }}
            >
              SUPPORT
            </a>
            <a aria-current='page ' className=' px-2 link'>
              ACCOUNT
            </a>
          </div>
          <button className='btn-success px-1 py-0 text-sm'> LOGOUT</button>
        </ol>
      </div>
      <Sidebar />
    </>
  )
}

export default Dashboard
