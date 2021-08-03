import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../components/Footer'
import Invoice from '../components/Invoice'
import Report from '../components/Report'
import ServiceCsv from '../components/ServiceCsv'
import Sidebar from '../components/sidebar'

const Dashboard = () => {
  const [value, setValue] = useState('1')

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
            <div className='container d-flex flex-row justify-content-start py-2 px-4'>
              <h2 className='text-light font-weight-bold  '>Dashboard</h2>

              <ul class='nav  mx-4 mb-2' value={value}>
                <li class='nav-item '>
                  <a
                    class='nav-link active text-light text-center'
                    aria-current='page'
                    onClick={() => setValue('1')}
                  >
                    <div
                      className={`card  border border-dark ${
                        value === '1' ? 'bg-success' : 'bg-light'
                      }`}
                      style={{ width: '5rem', height: '5rem' }}
                    ></div>
                    Service CSV
                  </a>
                </li>
                <li class='nav-item '>
                  <a
                    className='nav-link active text-light text-center'
                    aria-current='page'
                    onClick={() => setValue('2')}
                  >
                    <div
                      className={`card  border border-dark ${
                        value === '2' ? 'bg-success' : 'bg-light'
                      }`}
                      style={{ width: '5rem', height: '5rem' }}
                    ></div>
                    Reports
                  </a>
                </li>
                <li class='nav-item '>
                  <a
                    class='nav-link active text-light text-center'
                    aria-current='page'
                    onClick={() => setValue('3')}
                  >
                    <div
                      className={`card  border border-dark ${
                        value === '3' ? 'bg-success' : 'bg-light'
                      }`}
                      style={{ width: '5rem', height: '5rem' }}
                    ></div>
                    Invoices
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* second box */}
          {value === '1' ? (
            <ServiceCsv />
          ) : value === '2' ? (
            <Report />
          ) : (
            <Invoice />
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Dashboard;
