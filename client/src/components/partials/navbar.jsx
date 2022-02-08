import React from 'react';
import "./navbar.css";
import { Navbar, NavbarBrand,NavbarToggler,Nav,NavItem,NavLink,Collapse } from 'reactstrap';
import {logout} from '../../api';


const NavBar =(props)=>{
  const path=props.path.pathname;
  const handleSubmit=async (event)=>{
    event.preventDefault();
    await logout();
    props.setUser('not valid');
  }
  return(
    <div >
  <Navbar
    color="dark"
    dark
    expand="md"
    fixed="top"
    className="changewhole"
  >
    <NavbarBrand className='change' href="/">
      Flipkart
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="ms-auto"
        navbar
      >
        <NavItem>
          <NavLink className={ path==="/" ? 'highlight' : 'changep' } href="/">
            <b>Home</b>
          </NavLink>
        </NavItem>
        {props.user!=="valid"? <NavItem>
          <NavLink className={ path==="/Login" ? 'highlight' : 'changep' } href="/Login">
            Login
          </NavLink>
        </NavItem>:<NavItem>
          <NavLink className='changep' onClick={handleSubmit} href="/">
            Logout
          </NavLink>
        </NavItem>}
      </Nav>
    </Collapse>
  </Navbar>
</div>

  );
}

export default NavBar;