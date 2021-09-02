import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import HeroCarousel from "react-hero-carousel";
import './App.css';
import { MDBContainer, MDBNavbarItem, MDBNavbarNav, MDBNavbarToggler, MDBIcon, MDBNavbarLink, MDBNavbar } from 'mdb-react-ui-kit';
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function App() {
  return (
    <>
      <header>
        <MDBNavbar expand='lg' dark bgColor='black'>
          <MDBContainer fluid>
            <MDBNavbarToggler
              aria-controls='navbarExample01'
              aria-expanded='false'
              aria-label='Toggle navigation'
              >
              <MDBIcon fas icon='bars' />
            </MDBNavbarToggler>
              <div className='collapse navbar-collapse' id='navbarExample01'>
                <MDBNavbarNav right className='mb-2-mb-lg-0'>
                  <MDBNavbarItem active><MDBNavbarLink aria-current='page' href="/"><b>RoClans</b></MDBNavbarLink></MDBNavbarItem>
                  <MDBNavbarItem><MDBNavbarLink href="/clans">Forts</MDBNavbarLink></MDBNavbarItem>
                  <MDBNavbarItem><MDBNavbarLink href="/resources">Resources</MDBNavbarLink></MDBNavbarItem>
                  <MDBNavbarItem><MDBNavbarLink href="/community">Community</MDBNavbarLink></MDBNavbarItem>
                </MDBNavbarNav>
              </div>
          </MDBContainer>
        </MDBNavbar>
      </header>
      <body>
        <div
            className='p-5 text-center bg-image'
            style={{ backgroundImage: "url('https://pbs.twimg.com/media/Dwb-8XVU8AA7qHE.jpg')", height: 600}} >
            <div className="mask" style={{backgroundColor: 'rgb(0, 0, 0, 0.6)'}}>
              <div className='d-flex justify-content-center align-items-center h-100'>
                <div className="text-white">
                  <h1 className='mb-3'>Welcome to RoClans</h1>
                  <h4 className='mb-3'>Your all in one place for Roblox clans</h4>
                  <a className='btn btn-outline-light btn-lg' href='/' role='button'>
                    GOGO
                  </a>
                </div>
              </div>
            </div>
        </div>
        <p class="title">RoClans</p>
        <p class="summary">Welcome to the RoClans website! Our website is your <b>all purpose tool in discovery, advertisement, and community management</b> specially developed for guilds. Check out <b>resources</b> for clan development, see what <b>forts</b> are getting attention, and make use of what features we have available for <b>you</b>.</p>
              
        <div class="socialicon" href="https://discord.gg/g9FAHPAf">
          <img src="https://www.shareicon.net/data/512x512/2016/10/18/844052_media_512x512.png" alt=""></img>
        </div>

        <p class="title2">Trending</p>

        <p class="title3">Submissions</p>

        <p class="title4">Advertisements and Contributions</p>
      </body>
    </>
  );
}
export default App;
