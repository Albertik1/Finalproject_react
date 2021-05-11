import React, {useEffect, Fragment} from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getUser} from '../../redux/users/users.actions';
import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/LogoGlyphMd.svg';

import PageTitle from '../../components/PageTitle/PageTitle.component';
import Spinner from '../../components/Spinner/Spinner.component';
import TagBadge from '../../components/TagBadge/TagBadge.component';

import './UserPage.styles.scss';

const UserPage = ({getUser, user: {user, loading}, match}) => {
  useEffect(() => {
    getUser(match.params.id);
    // eslint-disable-next-line
  }, [getUser]);

  return loading || user === null ? (
    <Spinner type='page' width='75px' height='200px' />
  ) : (
    <Fragment>
      <PageTitle title={`User ${user.username} - CLONE Stack Overflow`} />
      <div id='mainbar' className='user-main-bar pl24 pt24'>
        <div className='user-card'>
          <div className='grid--cell s-navigation mb16'>
            <h1 style={{color:"#ef6603"}}>Profile</h1>
          </div>
          <div className='grid'>
            <div className='img-card'>
              <div className='avatar-card'>
                <div className='avatar'>
                  <Link className='avatar-link' to={`/users/${user.id}`}>
                    <div className='logo-wrapper'>
                      <img
                        src={`https://secure.gravatar.com/avatar/${user.id}?s=164&d=identicon`}
                        alt='user-logo'
                      />
                    </div>
                  </Link>
                </div>
                <div className='title'>
                  <div className='grid fc-black-800'>
                    {user.views}
                    &nbsp;
                    <span className='fc-light'>PROFILE VIEWS</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='content-card'>
              <div className='content-grid'>
                <div className='info-cell'>
                  <div className='info'>
                    <div className='details'>
                      <h2>{user.username}</h2>
                    </div>
                    <div className='date'>
                      <p>
                        user created &nbsp;-&nbsp;
                        {moment(user.created_at).fromNow(false)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className='stats-cell'>
                  <div className='count-sec'>
                    <div className='counts'>
                      <div className='cells'>
                        <div className='column-grid'>
                          <div className='head fc-black-700'>
                            {user.answer_count}
                          </div>
                          <div className='foot fc-black-500'>answers</div>
                        </div>
                      </div>
                      <div className='cells'>
                        <div className='column-grid'>
                          <div className='head fc-black-700'>
                            {user.post_count}
                          </div>
                          <div className='foot fc-black-500'>questions</div>
                        </div>
                      </div>
                      <div className='cells'>
                        <div className='column-grid'>
                          <div className='head fc-black-700'>
                            {user.comment_count}
                          </div>
                          <div className='foot fc-black-500'>comments</div>
                        </div>
                      </div>
                      <div className='cells'>
                        <div className='column-grid'>
                          <div className='head fc-black-700'>
                            {user.tag_count}
                          </div>
                          <div className='foot fc-black-500'>tags</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row-grid'>
          <div className='grid-cell2'>
            <div className='top-tags'>
              <h3 className='fw-bold fc-dark bc-black-3'>Top Tags</h3>
              <div className='top-tags-sec'>
                <div className='top-tags-cells'>
                  <div className='top-cell'>
                    <div className='tag-cell bg-black-025'>
                      <TagBadge
                        tag_name={'java'}
                        size={'s-tag s-tag__lg'}
                        float={'left'}
                      />
                      <div className='score'>
                        <div className='score-txt'>
                          <div className='score-tab'>
                            <span className='txt fc-light'>Posts</span>
                            <span className='number fc-black-800'>2</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='top-tags-cells'>
                  <div className='top-cell'>
                    <div className='tag-cell bg-black-025'>
                      <TagBadge
                        tag_name={'node.js'}
                        size={'s-tag s-tag__md'}
                        float={'left'}
                      />
                      <div className='score'>
                        <div className='score-txt'>
                          <div className='score-tab'>
                            <span className='txt fc-light'>Posts</span>
                            <span className='number fc-black-800'>1</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='top-tags-cells'>
                  <div className='top-cell'>
                    <div className='tag-cell bg-black-025'>
                      <TagBadge
                        tag_name={'react'}
                        size={'s-tag s-tag__md'}
                        float={'left'}
                      />
                      <div className='score'>
                        <div className='score-txt'>
                          <div className='score-tab'>
                            <span className='txt fc-light'>Posts</span>
                            <span className='number fc-black-800'>0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

UserPage.propTypes = {
  getUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, {getUser})(UserPage);
