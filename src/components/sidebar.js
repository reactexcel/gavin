import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar () {
  return (
    <nav id='sidebar' style={{ backgroundColor: '#DB7093' }}>
      <ul class='list-unstyled components'>
        <li class='active'>
          <a
            href='#homeSubmenu'
            data-toggle='collapse'
            aria-expanded='false'
            class='dropdown-toggle'
          >
            Dashboard
          </a>
          <li>
            <Link to='/'>Account</Link>
          </li>
          <li>
            <Link to='/about'>Report Setting</Link>
          </li>
          <li>
            <Link to='/topics'>Inbox</Link>
          </li>
        </li>
        <li>
          <Link to='/about'>Billings</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
