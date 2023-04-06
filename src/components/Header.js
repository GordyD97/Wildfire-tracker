import React from 'react'
import { Icon } from '@iconify/react'
import fireAlert from  '@iconify/icon-mdi/fire-alert'

const Header = () => {
  return (
   <header className='header'>
    <h1><Icon icon={fireAlert} /> Wildifire Tracker ( Powered by NASA)</h1>

   </header>
  )
}

export default Header