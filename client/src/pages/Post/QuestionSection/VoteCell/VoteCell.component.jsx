import React, {Fragment} from 'react';

import TagBadge from '../../../../components/TagBadge/TagBadge.component';
import UserCard from '../../../../components/UserCard/UserCard.component';
import './VoteCell.styles.scss';

const VoteCell = ({created_at, user_id, username, views, tagname}) => {
  return (
    <Fragment>
      <div className='vote-cell fc-black-800'>
        <div className='stats-container fc-black-500'>
          <UserCard
              created_at={created_at}
              user_id={user_id}
              username={username}
              float={'left'}
              backgroundColor={'transparent'}
          />
          
          <div className='views-text' style={{textAlign:"center"}}>{views} views</div>
        </div>
      </div>
    </Fragment>
  );
};

export default VoteCell;
