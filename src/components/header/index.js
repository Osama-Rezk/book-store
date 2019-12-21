import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link to="/">Book Listing</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/newbook" className="mar-5-f-r">
                <Button color="primary">new book</Button>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/newauthor" className="mar-5-f-r">
                <Button color="primary">new author</Button>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/newcategory" className="mar-5-f-r">
                <Button color="primary">new category</Button>
              </Link>
            </NavItem>
            <NavItem>
              <Button
                onClick={props.updateEditMode}
                color={props.isEdit ? "danger" : "info"}
              >
                {props.isEdit ? "Cancel Edit" : "Edit Mode"}
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
