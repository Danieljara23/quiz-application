import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import {css} from "@emotion/core";

const Navbarcss = css`
  background: #5d1ad2ed !important;
  font-size: 20px;
  padding: 0rem 1rem;
  
`;

type Props = {
  children?: ReactNode
  title?: string
}

function Layout({ children, title = "AppstUdiar" }: Props){
  return (<div>
    <Head>
      <title>{title}</title>
    </Head>
    <header >
  <Navbar css={Navbarcss} collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">AppStudiar</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/questionnaires">Categorías</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>)
}

export default Layout;