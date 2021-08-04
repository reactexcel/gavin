import React from 'react'
import { BsBoxArrowInDown } from 'react-icons/bs'

export default function Invoce () {
  return (
    <div
      class='card  border border-dark h-100 mt-2 mx-2 rounded-0'
      style={{ backgroundColor: '#ff4d4d' }}
    >
      <div class='my-2  mx-4'>
        <div
          class=' card  border border-dark text-center'
          style={{ width: '5rem', height: '5rem' }}
        >
          <h1 className='my-auto'>4</h1>
        </div>
        <h5 className='text-light'>Invoices 5</h5>
      </div>

      <div className='mx-4'>
        <table class='table table-bordered table-striped border-dark bg-light'>
          <thead>
            <tr>
              <th scope='col' className='col-md-6'>
                Name
              </th>
              <th scope='col' className='col-md-2'>
                Month
              </th>
              <th scope='col' className='col-md-4'>
                Download Link
              </th>
              <th scope='col' className='col-md-2'>
                Emailed
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> Invoice 1</td>
              <td> January</td>
              <td>Jan Invoice link</td>
              <td>
                <div class='form-check'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                    checked
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>Invoice 2</td>
              <td> February </td>
              <td>Feb Invoice link</td>
              <td>
                <div class='form-check'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                    checked
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>Invoice 3 </td>
              <td> March</td>
              <td> march Invoice link</td>
              <td>
                <div class='form-check'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                    checked
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>Invoice 4</td>
              <td> April </td>
              <td>April Invoice link</td>
              <td>
                {' '}
                <div class='form-check'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                    checked
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>Invoice 5</td>
              <td> May </td>
              <td>May Invoice link</td>
              <td>
                <div class='form-check'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                    checked
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='d-flex justify-content-end mx-4 my-2'>
        <button
          class='btn btn-success  border border-dark  mx-2'
          style={{ minWidth: '150px' }}
        >
          <BsBoxArrowInDown />
          Download all zip
        </button>
      </div>
    </div>
  )
}
