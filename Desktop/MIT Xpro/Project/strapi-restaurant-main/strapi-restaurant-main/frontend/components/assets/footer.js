import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import {
    FaGithub,
    FaTwitter,
    FaLinkedinIn

} from 'react-icons/fa'

import {
    MdLocationOn,
    MdOutlineMail, 
    MdLocalPhone
}from 'react-icons/md'

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted pt-2'>
    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='container d-flex justify-content-md-between'>
            <div className='me-5 d-none d-lg-block'>
                <p>Get connected with us on social networks:</p>
            </div>
            <div>
                <a href='https://github.com/paolobang' className='me-4'>
                <FaGithub />
                </a>
                <a href='https://twitter.com/pesorudy' className='ml-4'>
                <FaTwitter />
                </a>
                <a href='https://www.linkedin.com/in/rudy.huaman/' className='ml-4'>
                <FaLinkedinIn />
                </a>
            </div>
        </div>

    </section>

    <section className=''>
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>
          <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
            <h4 className='mb-4' style={{fontWeight: 600}}>
              <MDBIcon icon="gem" className="me-3" />
              Ooorder
            </h4>
            <p>
              This is Full-Stack Application Capstone Project, as part of program Full Stack Development with MERN by MIT.

            </p>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>About me</h6>
            <p>
              <a href='https://github.com/paolobang' className='text-reset'>
                Github
              </a>
            </p>
            <p>
              <a href='https://www.linkedin.com/in/rudy.huaman/' className='text-reset'>
                Linkedin
              </a>
            </p>
            <p>
              <a href='https://twitter.com/pesorudy' className='text-reset'>
                Twitter
              </a>
            </p>
          </MDBCol>

          <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
            <p>
              <a href='#!' className='text-reset'>
                Home
              </a>
            </p>
            
          </MDBCol>

          <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
            <p>
                <MdLocationOn/> Lima, 15024, PE
            </p>
            <p>
                <MdOutlineMail/> pesorudy@gmail.com
            </p>
            <p>
              <MdLocalPhone /> + 51 902 937 618
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      <p>
      <a className='text-reset fw-bold mr-2' href='https://github.com/paolobang'>
        <svg className="svg-logo" version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="18.000000pt" height="18.000000pt" viewBox="0 0 32.000000 32.000000"
        preserveAspectRatio="xMidYMid meet">

        <g className="svg-logo" transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)"
        fill="#000000" stroke="none">
        <path d="M181 265 c4 -60 4 -61 -39 -99 -27 -25 -48 -56 -59 -87 -20 -56 -46
        -63 -51 -13 -2 23 6 40 37 76 49 55 65 92 51 118 -13 25 -44 34 -70 20 -26
        -14 -20 -23 17 -24 40 -1 40 -28 0 -73 -72 -82 -85 -125 -47 -163 18 -18 33
        -20 160 -20 l140 0 0 162 c0 155 -1 161 -18 145 -24 -22 -80 -22 -105 1 -19
        17 -19 16 -16 -43z"/>
        </g>
        </svg>
        
      </a>
        © Copyright 2022

      </p>
    </div>
  </MDBFooter>
  );
}