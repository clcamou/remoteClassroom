import React, { useState } from 'react';
import {
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle, 
} from 'reactstrap'


function Header({ user, loading }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <header>
      <Navbar light expand="md">
        <NavbarBrand><img src="/logo.png" alt="The Learning Curve"></img></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">
                <a>Home</a>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">
                <a>About</a>
              </NavLink>
            </NavItem>
            {!loading &&
              (user ? (
                <>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      <img src="/settings.svg" alt="settings" width={30}></img>
                    </DropdownToggle>
                    <DropdownMenu left>
                      <DropdownItem>
                        <NavLink href="/profile">
                          <img src="/account.svg" alt="profile" width={30}></img>
                          <a>Profile</a>
                        </NavLink>
                      </DropdownItem>
                      <DropdownItem>
                        <img src="/logout.svg" alt="logout" width={30}></img>
                        <a href="/api/logout">Logout</a>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </>
              ) : (
                  <NavItem>
                    <NavLink href="/api/login"><a>Login</a>
                    </NavLink>
                  </NavItem>
                ))}
          </Nav>
        </Collapse>
      </Navbar>    
    </header>
  )
}

export default Header
