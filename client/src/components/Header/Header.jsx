// import { toggleMinimize } from '../../store/themeSlice';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { setActivePage } from '../../store/uiSlice';
import { setCurrentFilter } from '../../store/uiSlice';
import PlusIcon from './icons/Plus.svg';
import ExportIcon from './icons/Export.svg';



/* i have update the header section that can hold the title of
the selected page but there is an issue where the refrech
of page, the active page stil the same but the title return
to default*/

export default function Header() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { activePage, pageInfo, currentFilter } = useSelector(state => state.ui);
  const currentPageInfo = pageInfo[activePage] || { title: 'Page Not Found', subtitle: 'The requested page does not exist' };

  const PATH_TO_PAGE = {
    '/dashboard' : 'Tableau de bord',
    '/materials' : 'Matériels',
    '/files' : 'Fiches',
    'tasks' : 'Tâches'
  };

  const resolvePageKey = (pathname) => {
    for (const [path, key] of Object.entries(PATH_TO_PAGE)) {
      if (pathname === path || pathname.startsWith(path + '/')) return key;
    }
    return null;
  };

  useEffect(() => {
    const key = resolvePageKey(location.pathname);
    if (key && key !== activePage) {
      dispatch(setActivePage(key));
    }
  },[location.pathname,activePage,dispatch]);

  const links = ['TOUT', 'RADAR', 'RADAR-MARITIME', 'CAMERA', 'VIDEO PROJECTEUR', 'DVR', 'NVR', 'TV', 'OTHER'];

  const handleFiltreClick = (filtre) => {
    dispatch(setCurrentFilter(filtre));
  } 

  return (
    <header className="header-bar">
      <div className='title-section'>
        <h1 className='page-title'>{currentPageInfo.title}</h1>
        <p className='page-desc-p'>{currentPageInfo.subtitle}</p>
      </div>
      {currentPageInfo.title === 'Matériels' && (
        <>
        {/* <div> */}
        <div className='nav-menu'>
          {links.map((link,index) => (
            <a
            key={index}
            className={`link ${currentFilter === link ? 'active' : ''}`}
            onClick={() => {handleFiltreClick(link)}}
            >{link
            }</a>
          )
          )}
        </div>
          {/* <input type='text' className="search-input" placeholder='Rechercher des matériels...'/>
        </div> */}

        <div className='action-section'>
          <button 
            className="action-button add-btn"
            // onClick={() => setShowAddMaterial(true)}
            >
              <img src={PlusIcon} alt="Add" className="btn-icon" />
              <span>Ajouter</span>
          </button>
          <div className='drop-down-list'>
            <button className='action-button drop-down-btn'>
              <img  alt='export button' src={ExportIcon} className='btn-icon'/>
              <span>Exporter</span>
            </button>
          </div>
        </div>
        </>
      )}
    </header>
  );
}
