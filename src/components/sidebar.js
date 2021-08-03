import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar () {
  return (
    <nav id='sidebar' style={{ backgroundColor: '#DB7093' }}>
      <ul class='list-unstyled components'>
        <li class='active'>
          <Link to='/dashboard' aria-expanded='false' class='dropdown-toggle'>
            Dashboard
          </Link>
          <li>
            <Link to='/account'>Account</Link>
          </li>
          <li>
            <Link to='/report'>Report Setting</Link>
          </li>
          <li>
            <Link to='/inbox'>Inbox</Link>
          </li>
        </li>
        <li>
          <Link to='/bill'>Billings</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar;
