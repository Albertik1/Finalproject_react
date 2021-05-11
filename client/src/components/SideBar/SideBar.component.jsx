import React from 'react';
import {NavLink} from 'react-router-dom';

import {ReactComponent as ThumbsIcon} from '../../assets/like.svg';
import './SideBar.styles.scss';

const SideBar = () => (
  <div className='side-bar-container'>
    <div className='side-bar-tabs'>
      <NavLink
        exact
        activeClassName='active'
        className='home-link nav_link'
        to='/'
      >
        <p>
          <ThumbsIcon className= 'icon' />
          {'  '}Top Question
        </p>
      </NavLink>

      <NavLink
          activeClassName='active'
          className='icon-link nav_link'
          to='/questions'
        >
        <p>All Question</p>
      </NavLink>

    
    </div>
  </div>
);

export default SideBar;
