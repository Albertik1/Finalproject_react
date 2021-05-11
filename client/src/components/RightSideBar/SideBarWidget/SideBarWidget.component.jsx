import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';


import './SideBarWidget.styles.scss';

const SideBarWidget = () => {
  return (
    <Fragment>
      <div
        className='s-sidebarwidget s-sidebarwidget__yellow s-anchors s-anchors__grayscale mb16'
        data-tracker='cb=1'
      >
        <ul className='d-block p0 m0'>
          <div className='s-sidebarwidget--header s-sidebarwidget__small-bold-text d:fc-black-900 bb bbw1'>
            
          </div>
        
          <li className='s-sidebarwidget--item grid px16'>
            <div>
            </div>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default SideBarWidget;
