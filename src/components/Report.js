import React from 'react'

export default function Report () {
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
        <h5 className='text-light'>Reports</h5>
      </div>

      <div className='mx-4 '>
        <table class='table table-bordered border-dark bg-light'>
          <thead>
            <tr>
              <th scope='col' className='col-md-6'>
                Name
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
              <td>Report 1 </td>
              <td>Report download link1</td>
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
              <td>Report 2 </td>
              <td>Report download link2</td>
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
              <td>Report 3 </td>
              <td>Report download link3</td>
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
              <td>Report 4 </td>
              <td>Report download link4</td>
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
          </tbody>
        </table>
      </div>
      <div className='d-flex justify-content-end mx-4 my-2'>
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
          Download all zip
        </button>
      </div>
    </div>
  )
}
