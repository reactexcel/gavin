import React from 'react'

const Footer = () => {
  return (
    <>
      <div
        class='card  border border-dark rounded-0 mt-2'
        style={{ backgroundColor: '	#FF00FF' }}
      >
        <div className='container'>
          <div class='d-flex flex-wrap justify-content-start py-4 '>
            <div class=' card my-2 mx-3 py-2' style={{ width: '14rem' }}>
              <ul class='list-group list-group-flush'>
                <li class='list-group-item '>
                  <b>Company</b>
                </li>
                <li class='list-group-item'>Dapibus ac facilisis in</li>
                <li class='list-group-item'>Morbi leo risus</li>
              </ul>
            </div>
      
            <div class=' card my-2 mx-3 py-2  ' style={{ width: '14rem' }}>
              <ul class='list-group list-group-flush'>
                <li class='list-group-item'>
                  <b>Product</b>
                </li>
                <li class='list-group-item'>Dapibus ac facilisis in</li>
                <li class='list-group-item'>Morbi leo risus</li>
              </ul>
            </div>

            <div class=' card my-2 mx-3 py-2  ' style={{ width: '14rem' }}>
              <ul class='list-group list-group-flush'>
                <li class='list-group-item'>
                  <b>Service</b>
                </li>
                <li class='list-group-item'>Dapibus ac facilisis in</li>
                <li class='list-group-item'>Morbi leo risus</li>
              </ul>
            </div>

            <div class=' card  my-2 mx-3 py-2 ' style={{ width: '14rem' }}>
              <ul class='list-group list-group-flush'>
                <li class='list-group-item'>
                  <b>Privacy Policy</b>
                </li>
                <li class='list-group-item'>Dapibus ac facilisis in</li>
                <li class='list-group-item'>Morbi leo risus</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
