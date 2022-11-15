import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';

export default function Nav() {
//   const [showNavColor, setShowNavColor] = useState(false);
//   const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  const [showNavColorThird, setShowNavColorThird] = useState(false);

  return (
    <>
      

      <MDBNavbar expand='lg' light style={{ backgroundColor: '#e3f2fd' }}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'><img style={{ height: '50px' }}src='https://cdn.pixabay.com/photo/2013/07/13/09/48/blood-156063__480.png'></img></MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColorThird(!showNavColorThird)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorThird} navbar>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='active'>
              <Link to="/"><MDBNavbarLink aria-current='page' href='#'>
                  Home
                </MDBNavbarLink></Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Community</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
              {/* <Link to="/aware"> <MDBNavbarLink >Awareness</MDBNavbarLink></Link> */}
              <Link to="/aware"> <MDBNavbarLink >Awareness</MDBNavbarLink></Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}