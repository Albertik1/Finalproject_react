import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

import './Caption.styles.scss';

const Caption = () => {
  return (
    <Fragment>
      <div className='caption fc-black-600'>
        <h3><b>Join the CSIE Overflow community</b></h3>
        <div className='caption-item'>
          <div className='grid-icon'>
            <svg width='26' height='26' className='svg-icon mtn2'>
              <path
                opacity='.5'
                d='M4.2 4H22a2 2 0 012 2v11.8a3 3 0 002-2.8V5a3 3 0 00-3-3H7a3 3 0 00-2.8 2z'
              />
              <path d='M1 7c0-1.1.9-2 2-2h18a2 2 0 012 2v12a2 2 0 01-2 2h-2v5l-5-5H3a2 2 0 01-2-2V7zm10.6 11.3c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2c-.6 0-1.2.4-1.2 1.2 0 .7.5 1.1 1.2 1.2zm2.2-5.4l1-.9c.3-.4.4-.9.4-1.4 0-1-.3-1.7-1-2.2-.6-.5-1.4-.7-2.4-.7-.8 0-1.4.2-2 .5-.7.5-1 1.4-1 2.8h1.9v-.1c0-.4 0-.7.2-1 .2-.4.5-.6 1-.6s.8.1 1 .4a1.3 1.3 0 010 1.8l-.4.3-1.4 1.3c-.3.4-.4 1-.4 1.6 0 0 0 .2.2.2h1.5c.2 0 .2-.1.2-.2l.1-.7.5-.7.6-.4z' />
            </svg>
          </div>
          <div className='grid-cell'>Got stuck?</div>
          &nbsp; 
          <div className='grid-cell1' style={{color:"#ef6603"}}>— ask a question</div>
        </div>
        <div className='caption-item'>
          <div className='grid-icon'>
            <svg width='26' height='26' className='svg-icon mtn2'>
              <path d='M14.8 3a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8l8.2 8.2c.8.8 2 .8 2.8 0l10-10c.4-.4.6-.9.6-1.4V5a2 2 0 00-2-2h-8.2zm5.2 7a2 2 0 110-4 2 2 0 010 4z' />
              <path
                opacity='.5'
                d='M13 0a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8c.1-.2.3-.6.6-.8l10-10a2 2 0 011.4-.6h9.6a2 2 0 00-2-2H13z'
              />
            </svg>
          </div>
          <div className='grid-cell'> Save your favorite </div>
          &nbsp;
          <div className='grid-cell1' style={{color:"#ef6603"}}>tags</div>
        </div>
        
        <div className='caption-item fc-black-600'>
          <div>
            CSIE Overflow is here to help you!
            
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Caption;
