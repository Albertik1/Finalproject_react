import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {getPost, deletePost} from '../../../../redux/posts/posts.actions';

import TagBadge from '../../../../components/TagBadge/TagBadge.component';
import UserCard from '../../../../components/UserCard/UserCard.component';
import VoteCell from '../VoteCell/VoteCell.component';

import './PostCell.styles.scss';

const PostCell = ({
  deletePost,
  auth,
  post: {
    post: {id, post_body, tagname, user_id, username, created_at, answer_count, comment_count},
  },
  postId,
}) => {
  useEffect(() => {
    getPost(postId);
    // eslint-disable-next-line
  }, [getPost]);

  return (
    <Fragment>
      <div className='post-cell'>
        <div className='post-text fc-black-800'>{post_body}</div>
        <TagBadge tag_name={tagname} size={'s-tag'} float={'left'}/>
        {/*<VoteCell answerCount={answer_count} commentCount={comment_count} />*/}
        <div className='vote-cell fc-black-800'>
          <div className='flex-container'>
            <div className='vote2'>
              <span className='vote2-count'>{comment_count}</span>
              <div className='count-text'>comments</div>
            </div>
            <div className='answer'>
              <span className='answer-count'>{answer_count}</span>
              <div className='count-text'>answers</div>
            </div>
            <div className='vote2'>
              <span className='vote2-count'>{tagname ? 1 : 0}</span>
              <div className='count-text'>tags</div>
            </div>
          </div>
        </div>
        <div className='post-actions fc-black-800'>
          <div className='post-actions-extended'>
            <div className='post-btns'>
              <div className='post-menu'>
                {!auth.loading &&
                  auth.isAuthenticated &&
                  parseInt(user_id) === auth.user.id && (
                    <Link
                      className='s-link s-link__danger'
                      style={{paddingLeft: '4px'}}
                      title='Delete the post'
                      onClick={(e) => deletePost(id)}
                      to='/questions'
                    >
                      delete
                    </Link>
                  )}
                  
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

PostCell.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  getPost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
  auth: state.auth,
});

export default connect(mapStateToProps, {getPost, deletePost})(PostCell);
