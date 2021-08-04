import React from 'react';
import AdminHeader from '../components/AdminHeader';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';
import { MdSave } from 'react-icons/md';

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
                alt=" "
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
                  <MdSave />
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
                  <MdSave />
                  save
                </button>
              </div>

              <label className=' my-2'>REPORT TIME TO (24 hr)</label>
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ReportSetting;
