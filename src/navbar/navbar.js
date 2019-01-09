import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './navbar.scss';

class navbar extends React.Component {
  state = {
    isOpen: false,
  }

  render() {
    const { isAuthenticated, logoutClicked } = this.props;
    const buildNavbar = () => {
      if (isAuthenticated) {
        return (
          <Nav className='ml-auto' navbar>
            <NavItem className='navs'>
              <NavLink tag={RRNavLink} to='/friends'>Friends</NavLink>
              <NavLink tag={RRNavLink} to='/messages'>Messages</NavLink>
              <NavLink tag={RRNavLink} to='/events'>Events</NavLink>
              <NavLink tag={RRNavLink} to='/articles'>Articles</NavLink>
              <NavLink tag={RRNavLink} to='/weather'>Weather</NavLink>
              <NavLink tag={RRNavLink} to='/auth' onClick={logoutClicked}>Logout</NavLink>
            </NavItem>
          </Nav>
        );
      }
      return <Nav className='ml-auto' navbar></Nav>;
    };
    return (
      <div className='myNavBar'>
      <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">React Nutshell</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {buildNavbar()}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default navbar;
