import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../components/Footer'
import Sidebar from '../components/sidebar'
import { BsCheck, BsX, BsCreditCard } from 'react-icons/bs'
import { MdSave } from 'react-icons/md'
import { FaPaypal, FaCcStripe } from 'react-icons/fa'
const Billings = () => {
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
            <div className='container d-flex flex-row justify-content-start py-4 px-4'>
              <h2 className='text-light font-weight-bold '>Billing</h2>
              <img
                src='https://via.placeholder.com/100x100'
                className=' border border-dark'
                style={{ marginLeft: '7%' }}
              />
            </div>
          </div>
          {/* second box */}
          <div
            class='card  border border-dark h-100 mt-2 mx-2 rounded-0'
            style={{ backgroundColor: '#ff4d4d' }}
          >
            <div class='card w-50 rounded-0 my-3 mx-3  '>
              <div class='card-body d-flex justify-content-between'>
                <h3> Account Status </h3>
                <div>
                  <button
                    class='btn btn-success  border border-dark '
                    style={{ minWidth: '100px' }}
                  >
                    <BsCheck />
                    Active
                  </button>
                  <button
                    class='btn btn-warning  border border-dark mx-2 '
                    style={{ minWidth: '100px' }}
                  >
                    <BsX />
                    DISABLED
                  </button>
                </div>
              </div>
            </div>
            <form control='' class='form-group'>
              <div className='d-flex flex-column w-70 mx-3'>
                <label className='text-left'>Billing Information</label>

                <div className='d-flex justify-content-between w-100'>
                  <input
                    type='text'
                    name='text'
                    id='text'
                    placeholder='00:00:00'
                    className='input_field mb-2 w-50'
                  />
                  <button class='btn btn-success border border-dark  my-auto mx-2 '>
                    <MdSave />
                    save
                  </button>
                </div>
                <label className='text-left'>Billing Email Address</label>
                <div className='d-flex justify-content-between w-100'>
                  <input
                    type='text'
                    name='text'
                    id='text'
                    placeholder='00:00:00'
                    className='input_field mb-2 w-50'
                  />
                  <button class='btn btn-success border border-dark  my-auto mx-2 '>
                    <MdSave />
                    save
                  </button>
                </div>

                <label for='remember_me'>Payment methods</label>
                <div className='d-flex justify-content-between w-100'>
                  <div>
                    <button
                      class='btn btn-success  border border-dark mx-2'
                      style={{ minWidth: '100px' }}
                    >
                      <FaCcStripe />
                      Stripe
                    </button>
                    <button
                      class='btn btn-primary  border border-dark  mx-2'
                      style={{ minWidth: '100px' }}
                    >
                      <FaPaypal />
                      Paypal
                    </button>
                    <button
                      class='btn btn-warning  border border-dark  mx-2 '
                      style={{ minWidth: '100px' }}
                    >
                      <BsCreditCard />
                      Card
                    </button>
                  </div>

                  <button class='btn btn-success border border-dark  my-auto mx-2 '>
                    <MdSave />
                    save
                  </button>
                </div>

                <label className='text-left my-2'>Coupon</label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Discount voucher'
                  className='input_field mb-2 w-50'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Billings;
