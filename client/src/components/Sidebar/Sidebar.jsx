import './Sidebar.css';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import listIconWhite from './icons/ListIcon.svg';
import listIconBlack from './icons/ListIconBlack.svg';
import menuIconWhite from './icons/MenuIcon.svg';
import menuIconBlack from './icons/MenuIconBlack.svg';
import fileIconWhite from './icons/FileIcon.svg';
import fileIconBlack from './icons/FileIconBlack.svg';
import ShortLogo from './icons/AVR.svg';
import FullLogoLight from './icons/AVRGestionnaireDesMateriels.svg';
import FullLogoDark from './icons/AVRGestionnaireDesMaterielsDarkMode.svg'
import TaskIconBlack from './icons/TaskIconBlack.svg';
import TaskIconWhite from './icons/TaskIconWhite.svg';
// import { current } from '@reduxjs/toolkit';
import { toggleMinimize } from '../../store/themeSlice';


/**i stoped here at 10:23 28-10-2025 
 * i have changed the colors in the theme file 
 * change the app icon and edit there css
 * to do :
 * now i need to set the icons for the darkmode in the normal sidebar size 
 * change the menu icons color 
 * add an animation while transition 
 * 
 * for the switching icon color between the light and dark mode and between hover or not i need to find a solution 
 */

export default function Sidebar() {
  const isMinimized = useSelector((state) => state.theme.isMinimized);
  const darkMode = useSelector((state) => state.theme.darkMode);
  
  const dispatch = useDispatch();
 
  const menuItems = [
    { text : 'Tableau de bord' , lightIcon : menuIconWhite , blackIcon : menuIconBlack , path : '/dashboard'},
    { text : 'Matériels' , lightIcon : listIconWhite , blackIcon : listIconBlack , path : '/materials'},
    { text : 'Fiches' , lightIcon : fileIconWhite , blackIcon : fileIconBlack , path : '/files'},
    { text : 'Tâches' , lightIcon : TaskIconWhite , blackIcon : TaskIconBlack , path : '/tasks'}
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1100 && !isMinimized) {
        dispatch(toggleMinimize())
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  },[isMinimized,dispatch])

  

  return (
    <aside className={`sidebar-container ${isMinimized ? 'collapsed' : ''}`}>
      <div className="sidebar-logo">
        <img alt='logo'  src={`${isMinimized ? ShortLogo : !darkMode ? FullLogoLight : FullLogoDark}`} className='appLogo'
          onClick={()=> dispatch(toggleMinimize())}
        />
      </div>

      <nav className="sidebar-links">
  {menuItems.map((item) => (
    <NavLink
      key={item.path}
      to={item.path}
      className={({ isActive }) =>
        `sidebar-link ${isActive ? 'active' : ''}`
      }
    >
      <img 
        src={ 
          darkMode
            ? item.lightIcon // dark mode default = white icons
            : item.blackIcon // light mode default = black icons
        }
        alt={item.text}
        className="sidebar-icon"
      />
      {!isMinimized && <span className="sidebar-label">{item.text}</span>}
    </NavLink>
  ))}
</nav>
      <div className="sidebar-footer">
        <ThemeToggle minimized={isMinimized} />
      </div>
    </aside>
  );
}
