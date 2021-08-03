import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../components/Footer'
import Sidebar from '../components/sidebar'

const Account = () => {
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
            <div className='container d-flex justify-content-between'>
              <div className='d-flex flex-row   py-4 px-4'>
                <h2 className='text-light font-weight-bold '>Account</h2>
                <img
                  src='https://via.placeholder.com/100x100'
                  className=' border border-dark'
                  style={{ marginLeft: '7%' }}
                />
              </div>

              <button class='btn btn-danger  border border-dark  my-auto mx-2 '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  class='bi bi-trash'
                  viewBox='0 0 16 16'
                >
                  <path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z' />
                  <path
                    fill-rule='evenodd'
                    d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'
                  />
                </svg>
                delete account
              </button>
            </div>
          </div>
          {/* second box */}
          <div
            class='card  border border-dark h-100 mt-2 mx-2 rounded-0'
            style={{ backgroundColor: '#ff4d4d' }}
          >
            <div className='d-flex flex-column w-75 mx-3'>
              <label className='text-left font-weight-bold my-2'>
                Username
              </label>

              <input
                type='text'
                name='username'
                id='username'
                placeholder='Username'
                className='input_field mb-2 w-50'
              />

              <h4 className='text-left my-2'> Email </h4>

              <label className='text-left my-2'> Email Address</label>
              <div className='d-flex justify-content-between w-100'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='email'
                  className='input_field mb-2 w-50'
                />
                <button class='btn btn-success  border border-dark  my-auto mx-2 '>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    class='bi bi-save2-fill'
                    viewBox='0 0 16 16'
                  >
                    <path d='M8.5 1.5A1.5 1.5 0 0 1 10 0h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6c-.314.418-.5.937-.5 1.5v6h-2a.5.5 0 0 0-.354.854l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5A.5.5 0 0 0 10.5 7.5h-2v-6z' />
                  </svg>
                  save
                </button>
              </div>
              <h4 className='text-left my-2'> Change Password </h4>
              <label className='text-left my-2'>Current Password</label>
              <div className='d-flex justify-content-between w-100'>
                <input
                  type='password'
                  name='pasword'
                  id='password'
                  placeholder='current password'
                  className='input_field mb-2 w-50'
                />
                <button class='btn btn-success border border-dark  my-auto mx-2 '>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    class='bi bi-save2-fill'
                    viewBox='0 0 16 16'
                  >
                    <path d='M8.5 1.5A1.5 1.5 0 0 1 10 0h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6c-.314.418-.5.937-.5 1.5v6h-2a.5.5 0 0 0-.354.854l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5A.5.5 0 0 0 10.5 7.5h-2v-6z' />
                  </svg>
                  save
                </button>
              </div>
              <label className='text-left my-2'>New Password</label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='new password'
                className='input_field mb-2 w-50'
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Account
