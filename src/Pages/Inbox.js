import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../components/Footer'
import Sidebar from '../components/sidebar'

const Inbox = () => {
  return (
    <>
      <AdminHeader />
      <div className='d-flex'>
        <Sidebar />
        <div className='w-100 d-flex flex-column'>
          <div
            class='card  border border-dark h-25 mx-2 rounded-0'
            style={{ backgroundColor: '#ff4d4d' }}
          >
            <h2 className='text-light font-weight-bold  py-4 px-4'>Inbox</h2>
          </div>
          {/* second box */}
          <div
            class='card  border border-dark h-100 mt-2 mx-2 rounded-0'
            style={{ backgroundColor: '#ff4d4d' }}
          >
            <ul class='list-group w-75 my-2 mx-4'>
              <li class='list-group-item'>Message One</li>
              <li class='list-group-item'>Message Two</li>
              <li class='list-group-item'>Message Three</li>
              <li class='list-group-item'>Message Four</li>
              <li class='list-group-item'>Message Five</li>
              <li class='list-group-item'>Mesage Six</li>
              <li class='list-group-item'>Message Seven</li>
              <li class='list-group-item'>Message Eight</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Inbox
