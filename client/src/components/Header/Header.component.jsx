import React, {Fragment} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../redux/auth/auth.actions';
import {NavLink} from 'react-router-dom';

import {ReactComponent as Search} from '../../assets/Search.svg';
import {ReactComponent as Logo} from '../../assets/LogoMd.svg';
import Spinner from '../Spinner/Spinner.component';
import LinkButton from '../LinkButton/LinkButton.component';


import './Header.styles.scss';

const Header = ({auth: {isAuthenticated, loading, user}, logout}) => {
  let history = useHistory();

  const authLinks = (
    <div className='btns'>
      {loading || user === null ? (
        <Spinner width='50px' height='50px' />
      ) : (
        <Link to={`/users/${user.id}`} title={user.username}>
          <img
            alt='user-logo'
            className='logo'
            src={`https://secure.gravatar.com/avatar/${user.id}?s=164&d=identicon`}
          />
        </Link>
      )}
      <LinkButton
        text={'Log out'}
        link={'/login'}
        type={'s-btn__filled'}
        handleClick={logout}
      />
    </div>
  );

  const authTabs = (
    <div className='s-navigation'>
      <Link to='/' className='s-navigation--item' style={{color:'white'}}>
        Home 
      </Link>
      <Link to='/' className='s-navigation--item' style={{color:'white'}}>
        About Us 
      </Link>
      <Link to='/' className='s-navigation--item is-selected' style={{color:'white'}}>
        Q&A 
      </Link>
      <Link to='/' className='s-navigation--item' style={{color:'white'}}>
        Campus Life 
      </Link>
      <Link to='/' className='s-navigation--item' style={{color:'white'}}>
        Contact Us 
      </Link>
      </div>

  );

  const guestTabs = (
    <div className='s-navigation' >
      <ul >
        <li><a className='s-navigation--item' href="https://www.csie.ndhu.edu.tw/en/" style={{color:'white'}}> Home</a></li>
        <li><a className='s-navigation--item' href="https://www.csie.ndhu.edu.tw/en/" style={{color:'white'}}> About Us</a></li>
        <Link to='/' className='s-navigation--item is-selected' style={{color:'white'}}>
        Q&A 
        </Link>
        <li><a className='s-navigation--item' href="https://www.csie.ndhu.edu.tw/en/" style={{color:'white'}}> Campus Life </a></li>
        <li><a className='s-navigation--item' href="https://www.csie.ndhu.edu.tw/en/" style={{color:'white'}}> Contact Us</a></li>
      </ul>
      {/*<Link to='/home' className='s-navigation--item' style={{color:'white'}}>
        Home 
  </Link>
      <Link to='/' className='s-navigation--item' style={{color:'white'}}>
        About Us 
      </Link>
      <Link to='/' className='s-navigation--item is-selected' style={{color:'white'}}>
        Q&A 
      </Link>
      <Link to='/' className='s-navigation--item' style={{color:'white'}}>
        Campus Life 
      </Link>
      <Link to='/' className='s-navigation--item' style={{color:'white'}}>
        Contact Us 
  </Link>*/}
      {/*<NavLink
        exact
        activeClassName='active'
        className='s-navigation--item not-selected'
        to='/'
      >
        Home
      </NavLink>

      <NavLink
        exact
        activeClassName='active'
        className='s-navigation--item not-selected'
        to='/'
      >
        About Us
      </NavLink>

      <NavLink
          activeClassName='s'
          className='s-navigation--item is-selected'
          to='/questions'
        >
          Q&A 
      </NavLink>

      <NavLink
        exact
        activeClassName='active'
        className='s-navigation--item not-selected'
        to='/'
      >
        Campus Life
      </NavLink>
      <NavLink
        exact
        activeClassName='active'
        className='s-navigation--item not-selected'
        to='/'
      >
        Contact Us
      </NavLink>
      */}
    </div>
  );

  const guestLinks = (
    <div className='btns'>
      <LinkButton text={'Log in'} link={'/login'} type={'s-btn__primary'} />
      <LinkButton text={'Sign up'} link={'/register'} type={'s-btn__filled'} />
    </div>
  );

  return loading ? (
    ''
  ) : (
    <Fragment>
      <nav className='navbar fixed-top navbar-expand-lg navbar-light bs-md'>
        <Link className='navbar-brand' to='/'>
          <Logo />
        </Link>
        {!loading && (
          <Fragment>{isAuthenticated ? authTabs : guestTabs}</Fragment>
        )}
        <form
          id='search'
          onSubmit={() => history.push('/questions')}
          className={`grid--cell fl-grow1 searchbar px12 js-searchbar`}
          autoComplete='off'
        >
          <div className='ps-relative search-frame'>
            <input
              className='s-input s-input__search h100 search-box'
              autoComplete='off'
              type='text'
              name='search'
              maxLength='35'
              placeholder='Search...'
            />
            <Search />
          </div>
        </form>
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </nav>
    </Fragment>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {logout})(Header);
