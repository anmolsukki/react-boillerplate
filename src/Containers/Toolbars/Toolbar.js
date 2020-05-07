import React from 'react';
import { Link } from 'react-router-dom';
import DrawerToggleButton from '../DrawerToggle/DrawerToggleButton';
import ToolbarClass from './Toolbar.module.css';

const navbar = (props) => {
  return (
    <header className={ToolbarClass.toolbar}>
      <nav className={ToolbarClass.toolbarNavigation}>
        <div className={ToolbarClass.toolbarToggleButton}>
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className={ToolbarClass.logo}>
          <Link to="/home">LOGO</Link>
        </div>
        <div className={ToolbarClass.spacer} />
        <div className={ToolbarClass.toolbarNavigationItems}>
          <ul>
            {props.navClass.map((item) => {
              return (
                <li key={item.link}>
                  <Link
                    to={item.link}
                    className={`${ToolbarClass.navOption} ${
                      item.isSelected === true ? ToolbarClass.active : ''
                    }`}
                    onClick={() => props.addClass(item)}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default navbar;
