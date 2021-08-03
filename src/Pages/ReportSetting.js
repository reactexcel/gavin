import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../components/Footer'
import Sidebar from '../components/sidebar'

const ReportSetting = () => {
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
            <div className='container d-flex py-4 px-4'>
              <h2 className='text-light font-weight-bold '>Report Settings</h2>
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
            <div className='d-flex flex-column w-75 mx-3'>
              <h4 className='text-left my-2'> Report Email Address </h4>

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

              <h4 className='text-left my-2 mt-4'> Report Frequency </h4>
              <div className='d-flex justify-content-between w-100'>
                <div class='card w-50 py-4 rounded-0 my-3 d-flex justify-content-between flex-row'>
                  <div class='form-check form-check-inline mx-4'>
                    <input
                      class='form-check-input'
                      type='radio'
                      name='inlineRadioOptions'
                      id='inlineRadio1'
                      value='option1'
                    />
                    <label class='form-check-label' for='inlineRadio1'>
                     Daily
                    </label>
                  </div>
                  <div class='form-check form-check-inline'>
                    <input
                      class='form-check-input'
                      type='radio'
                      name='inlineRadioOptions'
                      id='inlineRadio2'
                      value='option2'
                    />
                    <label class='form-check-label' for='inlineRadio2'>
                      Weekly
                    </label>
                  </div>
                  <div class='form-check form-check-inline'>
                    <input
                      class='form-check-input'
                      type='radio'
                      name='inlineRadioOptions'
                      id='inlineRadio3'
                      value='option3'
                    />
                    <label class='form-check-label' for='inlineRadio3'>
                     Monthly
                    </label>
                  </div>
                </div>

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

              <label className='text-left my-2'>REPORT TIME TO (24 hr)</label>
              <div className='d-flex justify-content-between w-100'>
                <input
                  type='text'
                  name='text'
                  id='text'
                  placeholder="00:00:00"
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ReportSetting
