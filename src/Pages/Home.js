import React from 'react'
import Service from '../components/Services'
import Used from '../components/UsedBy'
import Footer from '../components/Footer'
import Login from '../components/Login'
import {FaUserPlus} from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <div
        className='float-right d-flex justify-content-end p-2'
        style={{ marginRight: '5%' }}
      >
        <ol class='breadcrumb'>
          <div style={{ marginRight: '25px' }}>
            <a
              href='/'
              className='px-2  link'
              style={{ borderRight: '2px solid black' }}
            >
              HOME
            </a>
            <a
              href='/'
              className=' px-2 link '
              style={{ borderRight: '2px solid black' }}
            >
              SUPPORT
            </a>
            <a aria-current='page' className=' px-2 link'>
              <Login />
            </a>
          </div>
          <div className='d-flex flex-column'>
            <button className='btn-success px-1 py-0 text-sm'> <FaUserPlus/> SIGN UP</button>
            <img
              src='https://via.placeholder.com/100x100'
              className='ml-4 border border-dark my-4'
            />
          </div>
        </ol>
      </div>
      <Used />
      <Service />
      <Footer />
    </>
  )
}

export default Home;
