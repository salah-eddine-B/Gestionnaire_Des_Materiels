import React from 'react'
import './Layout.css'
import {useSelector} from 'react-redux'


export default function Layout() {

  const isMinimized = useSelector(state => state.theme.isMinimized);

  return (
    <div className='main-app'>
        <div className={`sidebar-layout ${isMinimized? 'minimized' : ''}`}>i'm the sidebar</div>
        <div className='header-layout'>i'm the header</div>
        <div className='pages-layout'>i'm the pages container</div>
    </div>
  )
}
