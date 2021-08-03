import React from 'react'
import {BsBoxArrowInDown,BsCloudUpload,BsPlusSquare} from 'react-icons/bs';

export default function ServiceCsv () {
  return (
    <div
      class='card  border border-dark h-100 mt-2 mx-2 rounded-0'
      style={{ backgroundColor: '#ff4d4d' }}
    >
      <div class=' my-2 mx-4'>
        <div
          class=' card  border border-dark text-center'
          style={{ width: '5rem', height: '5rem' }}
        >
          <h1 className='my-auto'>4</h1>
        </div>
        <h5 className='text-light'>Contacts</h5>
      </div>


      <div className='mx-4 '>
        <table class='table table-bordered   table-striped border-dark bg-light'>
          <thead>
            <tr>
              <th scope='col' className='col-md-6'>
                Name
              </th>
              <th scope='col' className='col-md-4'>
                Email Address
              </th>
              <th scope='col' className='col-md-2'>
                Address Verified
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> Giacomo Guilizzoni</td>
              <td>name@somewhere.com</td>
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
              <td>Marco Botton</td>
              <td>marco@bottom.com</td>
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
              <td>Mariah Maclachlan</td>
              <td>mariah@machlachlan.com</td>
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
              <td> Valerie Liberty</td>
              <td>val@headchef.com</td>
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
      <div className='d-flex justify-content-between mx-4 my-2'>
        <button
          class='btn btn-success  border border-dark mx-2'
          style={{ minWidth: '150px' }}
        >
         <BsPlusSquare/>
          Add manually
        </button>
        <button
          class='btn btn-success  border border-dark  mx-2'
          style={{ minWidth: '150px' }}
        >
          <BsBoxArrowInDown/>
          Download template
        </button>
        <button
          class='btn btn-success  border border-dark  mx-2 '
          style={{ minWidth: '150px' }}
        >
         <BsCloudUpload/>
          File Upload
        </button>
      </div>
    </div>
  )
}
