import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../components/Footer'
import Sidebar from '../components/sidebar'
const Billings = () => {
  return (
    <>
      <AdminHeader />
      <div className='d-flex'>
        <Sidebar />
        <div className='w-100 d-flex flex-column'>
          <div
            class='card  border border-dark h-25 mx-2 rounded-0'
            style={{ backgroundColor: 'red' }}
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
            style={{ backgroundColor: 'red' }}
          >
            <div class='card w-50 rounded-0 my-3 mx-3  '>
              <div class='card-body d-flex justify-content-between'>
                <h3> Account Status </h3>
                <div>
                  <button
                    class='btn btn-success  border border-dark '
                    style={{ minWidth: '100px' }}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      class='bi bi-check2'
                      viewBox='0 0 16 16'
                    >
                      <path d='M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z' />
                    </svg>
                    Active
                  </button>
                  <button
                    class='btn btn-warning  border border-dark mx-2 '
                    style={{ minWidth: '100px' }}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      class='bi bi-x-lg'
                      viewBox='0 0 16 16'
                    >
                      <path d='M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z' />
                    </svg>
                    DISABLED
                  </button>
                </div>
              </div>
            </div>
            <form control='' class='form-group'>
              <div className='d-flex flex-column w-50 mx-3'>
                <label className='text-left'>Billing Information</label>

                <input
                  type='text'
                  name='username'
                  id='username'
                  placeholder='Username'
                  className='input_field mb-2'
                />
                <label className='text-left'>Billing Email Address</label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password'
                  className='input_field mb-2'
                />

                <label for='remember_me'>Payment methods</label>
                <div>
                  <button
                    class='btn btn-success  border border-dark mx-2'
                    style={{ minWidth: '100px' }}
                  >
                    {' '}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='22'
                      height='22'
                      fill='currentColor'
                      class='bi bi-credit-card-2-back'
                      viewBox='0 0 16 16'
                    >
                      <path d='M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z' />
                      <path d='M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z' />
                    </svg>{' '}
                    Stripe
                  </button>
                  <button
                    class='btn btn-primary  border border-dark  mx-2'
                    style={{ minWidth: '100px' }}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='22'
                      height='22'
                      fill='currentColor'
                      class='bi bi-credit-card-2-back'
                      viewBox='0 0 16 16'
                    >
                      <path d='M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z' />
                      <path d='M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z' />
                    </svg>
                    Paypal
                  </button>
                  <button
                    class='btn btn-warning  border border-dark  mx-2 '
                    style={{ minWidth: '100px' }}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='22'
                      height='22'
                      fill='currentColor'
                      class='bi bi-credit-card-2-back'
                      viewBox='0 0 16 16'
                    >
                      <path d='M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z' />
                      <path d='M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z' />
                    </svg>
                    Card
                  </button>
                </div>
                <label className='text-left my-2'>Coupon</label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Discount voucher'
                  className='input_field mb-2'
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

export default Billings
