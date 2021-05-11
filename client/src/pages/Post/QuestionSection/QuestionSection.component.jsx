import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import CommentCell from './CommentCell/CommentCell.component';
import VoteCell from './VoteCell/VoteCell.component';
import PostCell from './PostCell/PostCell.component';

import './QuestionSection.styles.scss';

const QuestionSection = ({
  post: {
    post: {id, created_at, user_id, username, views, tagname},
  },
  postId,
}) => {
  return (
    <Fragment>
      <div className='question'>
        <div className='post-layout'>
          <VoteCell created_at={created_at} user_id={user_id} username={username} views={views} tagname={tagname} />
          <PostCell postId={postId} />
          <CommentCell postId={postId} />
          
        </div>
      </div>
    </Fragment>
  );
};

QuestionSection.propTypes = {
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, null)(QuestionSection);
