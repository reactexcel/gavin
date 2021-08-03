import React from 'react'
const Header = () => {
  return (
    <>
      <div
        className='right p-2'
        style={{ marginRight: '5%', marginBottom: '10%' }}
      >
        <ol class='breadcrumb'>
          <div style={{ marginRight: '25px' }}>
            <a
              className='px-2  link'
              style={{ borderRight: '2px solid black' }}
            >
              HOME
            </a>
            <a
              href='#'
              className=' px-2 link '
              style={{ borderRight: '2px solid black' }}
            >
              SUPPORT
            </a>
            <a aria-current='page ' className=' px-2 link'>
              LOGIN
            </a>
          </div>
          <button className='btn-success px-1 py-0 text-sm'> +SIGN UP</button>
        </ol>
        <img
          src='https://via.placeholder.com/100x100'
          className='ml-4 border border-dark float-right'
          style={{ marginLeft: '70%' }}
        />
      </div>
    </>
  )
}

export default Header
