import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import React from 'react';
import { useSelector } from 'react-redux';
import './Layout.css';

export default function Layout({ children }) {
  const isMinimized = useSelector((state) => state.theme.isMinimized);

  return (
    <div className={`main-app ${isMinimized ? 'minimized' : ''}`}>
      <div className={`sidebar-layout ${isMinimized ? 'minimized' : ''}`}>
        <Sidebar />
      </div>

      <div className="header-layout">
        <Header />
      </div>

      <div className="pages-layout">{children}</div>
    </div>
  );
}
