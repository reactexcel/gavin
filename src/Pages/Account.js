import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../components/Footer'
import Sidebar from '../components/sidebar'
import { BsFillTrashFill } from 'react-icons/bs'
import { MdSave } from 'react-icons/md';

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
                <BsFillTrashFill />
                Delete account
              </button>
            </div>
          </div>
          {/* second box */}
          <div
            class='card  border border-dark h-100 mt-2 mx-2 rounded-0'
            style={{ backgroundColor: '#ff4d4d' }}
          >
            <div className='d-flex flex-column w-75 mx-3'>
              <h5 className='my-2'>Username</h5>
              <input
                type='text'
                name='username'
                id='username'
                placeholder='Username'
                className='input_field mb-2 w-50'
              />

              <h4 className='text-left my-2'> Email </h4>

              <label className=' my-2'> Email Address</label>
              <div className='d-flex justify-content-between w-100'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='email'
                  className='input_field mb-2 w-50'
                />
                <button class='btn btn-success  border border-dark  my-auto mx-2 '>
                  <MdSave />
                  save
                </button>
              </div>
              <h4 className=' my-2'> Change Password </h4>
              <label className=' my-2'>Current Password</label>
              <div className='d-flex justify-content-between w-100'>
                <input
                  type='password'
                  name='pasword'
                  id='password'
                  placeholder='current password'
                  className='input_field mb-2 w-50'
                />
                <button class='btn btn-success border border-dark  my-auto mx-2 '>
                  <MdSave />
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

export default Account;
