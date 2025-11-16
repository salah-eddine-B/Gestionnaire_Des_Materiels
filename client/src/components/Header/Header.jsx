
import { toggleMinimize } from '../../store/themeSlice';
import './Header.css';
import { useDispatch } from 'react-redux';



export default function Header() {
  const dispatch = useDispatch();

  return (
    <header className="header-bar">
      <div className="left-controls">
        <button className="menu-btn" onClick={() => dispatch(toggleMinimize())}>
          
        </button>
        <h1 className="header-title">Materials Management</h1>
      </div>
    </header>
  );
}
