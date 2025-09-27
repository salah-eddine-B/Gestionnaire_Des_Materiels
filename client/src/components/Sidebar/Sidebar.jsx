import React from 'react'
import { useSelector } from 'react-redux'
import MenuIcon from './icons/MenuIcon.svg'
import ListIcon from './icons/ListIcon.svg'
import FileIcon from './icons/FileIcon.svg'

export default function Sidebar() {

    const isMinimized = useSelector(state => state.sidebar.isMinimized)
    const menuItems = [
    { 
      text: 'Overview', 
      icon: MenuIcon,
      path: '/' 
    },
    { 
      text: 'Materials', 
      icon: ListIcon,
      path: '/materials' 
    },
    { 
      text: 'Files', 
      icon: FileIcon,
      path: '/files' 
    },
  ]

  return (
    <div className={`sidebar ${isMinimized ? 'minimized' : ''}`}>
        <div className='sidebar-header'></div>
        <div className='sidebar-body'></div>
        <div className='sidebar-footer'></div>
    </div>
  )
}
