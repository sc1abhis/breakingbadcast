import React , {useEffect , useState} from 'react'
import Logo from '../../img/logo.png'
import axios from 'axios'

const Header = () => {


    return (
        <div className='center'>
            <img src={Logo} alt='' />
        </div>
    )
}

export default Header
