import React from 'react'

const Used = () => {
  return (
    <>
      <div
        class='card w-full border border-dark rounded-0 '
        style={{ backgroundColor: 'red' }}
      >
        <div className='container mix'>
          <h4 className='text-light font-normal mt-4 '>Used By</h4>
          <div class='d-flex flex-wrap  py-4'>
            
            <div class=' card   mx-4 py-4  my-2' style={{ width: '8rem' }}>
              <div class='card-body  '></div>
            </div>

            <div class=' card   mx-4 py-4   my-2' style={{ width: '8rem' }}>
              <div class='card-body  '></div>
            </div>

            <div class=' card   mx-4 py-4   my-2' style={{ width: '8rem' }}>
              <div class='card-body  '></div>
            </div>

            <div class=' card   mx-4 py-4  my-2 ' style={{ width: '8rem' }}>
              <div class='card-body  '></div>
            </div>

            <div class=' card   mx-4 py-4  my-2 ' style={{ width: '8rem' }}>
              <div class='card-body  '></div>
            </div>

            <div class=' card   mx-4 py-4   my-2' style={{ width: '8rem' }}>
              <div class='card-body  '></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Used
