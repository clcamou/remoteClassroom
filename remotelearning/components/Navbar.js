
import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import { useUser } from '../lib/hooks'

export default function NavBar() {
  const [user, { mutate }] = useUser()
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  async function handleLogout() {
    await fetch('/api/logout')
    mutate({ user: null })
  }

  return (
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/index">Home</NavLink>
            </NavItem>
            {user ? (
              <>
            <NavItem>
              <a role="button" onClick={handleLogout}>
                Logout
                </a>
            </NavItem>
            </>
            ) : (
              <>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </>
            )}
          </Nav>
          <NavbarBrand><img src="/logo.svg" alt="The Learning Curve"></img></NavbarBrand>
        </Collapse>
      </Navbar>
  );
}
