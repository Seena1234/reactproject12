import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div id='menudiv'>
<ul className='menu'>
<li> <Link to="/login"><div id='div1'>Login</div></Link></li>
<li id='d'>Becomr a Celler</li>
<li id='d'>More</li>
<div id='e'>
  <svg class="V3C5bO" width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path class="_1bS9ic" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>
<li id='d'>Cart</li>
</div>
    
</ul>

    </div>
  )
}

export default Menu