import React from 'react'
import Login from '../../components/login/Login'
import './authLayiut.css'
const AuthLayout = () => {
  return (
    <div className='authLayout'>
        {/* logo */}
        <div className='authLayout_logo'>
     <img src='./asset/img/wal.png' alt='logo'/>
        </div>
        {/* from */}
        <Login/>
        {/* action */}
        <div className='authLayout_action'>
            <div className='authLayout_action-l'>Login ?</div>
            <div className='authLayout_action-r'>Register ?</div>

        </div>
        </div>
  )
}

export default AuthLayout