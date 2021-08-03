import React from 'react'

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

      {/* 
Email Address . Address verified


 */}

      <div className='mx-4 '>
        <table class='table table-bordered border-dark bg-light'>
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
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            class='bi bi-file-plus'
            viewBox='0 0 16 16'
          >
            <path d='M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z' />
            <path d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z' />
          </svg>
          Add manually
        </button>
        <button
          class='btn btn-success  border border-dark  mx-2'
          style={{ minWidth: '150px' }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            class='bi bi-download'
            viewBox='0 0 16 16'
          >
            <path d='M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z' />
            <path d='M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z' />
          </svg>
          Download template
        </button>
        <button
          class='btn btn-success  border border-dark  mx-2 '
          style={{ minWidth: '150px' }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            class='bi bi-cloud-arrow-up'
            viewBox='0 0 16 16'
          >
            <path
              fill-rule='evenodd'
              d='M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z'
            />
            <path d='M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z' />
          </svg>
          File Upload
        </button>
      </div>
    </div>
  )
}
