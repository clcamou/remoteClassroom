
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
    <header>
      <Navbar color="light" light expand="md">
        <NavbarBrand><img src="/logo.svg" alt="The Learning Curve"></img></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {user ? (
              <>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    <img src="/settings.svg" alt="settings" width={30}></img>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <NavLink href="/profile">
                        <img src="/account.svg" alt="profile" width={30}></img> <a>Profile</a>
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <NavLink role="button" onClick={handleLogout}>
                        <img src="/logout.svg" alt="logout" width={30}></img> <a>Logout</a>
                      </NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </>
            ) : (
                <>
                  <NavItem>
                    <NavLink href="/">Sign up</NavLink>
                  </NavItem>
                </>
              )}
          </Nav>

        </Collapse>
      </Navbar>
    </header>
  );
}
