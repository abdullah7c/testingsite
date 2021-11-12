import React,{useState,useEffect} from 'react'
import {Nav,Navbar,Container,Row,Col} from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import aos from 'aos'
import 'aos/dist/aos.css'
import Router from 'next/router'

const Header = () => {

    const [showList,setShowList] = useState(false)
    
    useEffect(() => {
        aos.init({duration:500});
        
    }, [])

    return (
        <div className="header-styles">
          <Navbar  collapseOnSelect expand="lg" fixed="top" bg="white" style={{paddingBottom:"0px",paddingTop:"0px"}}>
            <Container >
            <Navbar.Brand href="/">7CTECH</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                
                </Nav>
                <Nav >
                <Nav className="navLink"><Link href="/"><a className="nav mx-3">HOME</a></Link></Nav>
                <Nav className="navLink"><Link href="/aboutus"><a className="nav mx-3">ABOUT US</a></Link></Nav>
                <Nav className="navLink" onMouseEnter={()=>setShowList(true)}  onMouseLeave={()=>setShowList(false)} >
                <Link  href="/services"><a className="nav mx-3">SERVICES</a></Link>
                { showList &&
                    <div className="dropdown" data-aos="slide-right">
                        <Row className="d-nav"><Col xs={1} md={1} className="col1"><div className="space"></div></Col>
                            <Col className="my-1 col2">
                                <Link href={{pathname: `/services`,query: {index: 'webdesign',},}}><a className="navitem">DESIGN & DEVELOPMENT</a></Link></Col></Row><hr/>
                        <Row className="d-nav"><Col xs={1} md={1} className="col1"><div className="space"></div></Col>
                            <Col className="my-1 col2">
                                <Link href={{pathname: `/services`,query: {index: 'ecommerce',},}}><a className="navitem">E-COMMERCE</a></Link></Col>
                        </Row><hr/>
                        <Row className="d-nav"><Col xs={1} md={1} className="col1"><div className="space"></div></Col>
                            <Col className="my-1 col2">
                                <Link href={{pathname: `/services`,query: {index: 'webapp',},}}><a className="navitem">WEB APPLICATION</a></Link></Col>
                        </Row><hr/>
                        <Row className="d-nav"><Col xs={1} md={1} className="col1"><div className="space"></div></Col>
                            <Col className="my-1 col2">
                                <Link href={{pathname: `/services`,query: {index: 'mobileapp',},}}><a className="navitem">MOBILE APPLICATION</a></Link></Col>
                        </Row><hr/>
                        <Row className="d-nav"><Col xs={1} md={1} className="col1"><div className="space"></div></Col>
                            <Col className="my-1 col2">
                                <Link href={{pathname: `/services`,query: {index: 'datascrap',},}}><a className="navitem">DATA SCRAPPING</a></Link></Col>
                        </Row><hr/>
                        <Row className="d-nav"><Col xs={1} md={1} className="col1"><div className="space"></div></Col>
                            <Col className="my-1 col2">
                                <Link href={{pathname: `/services`,query: {index: 'ai',},}}><a className="navitem">ARTIFICIAL INTELLIGENCE</a></Link></Col>
                        </Row><hr/>   
                        <Row className="d-nav"><Col xs={1} md={1} className="col1"><div className="space"></div></Col>
                            <Col className="my-1 col2">
                                <Link href={{pathname: `/services`,query: {index: 'dotnet',},}}><a className="navitem">DOTNET SOLUTION</a></Link></Col>
                        </Row><hr/>
                        <Row className="d-nav"><Col xs={1} md={1} className="col1"><div className="space"></div></Col>
                            <Col className="my-1 col2">
                                <Link href={{pathname: `/services`,query: {index: 'custom',},}}><a className="navitem">CUSTOM BUSSINESS SOLUTIONS</a></Link></Col>
                        </Row><hr/>   
                        <Row className="d-nav"><Col xs={1} md={1} className="col1"><div className="space"></div></Col>
                            <Col className="my-1 col2">
                                <Link href={{pathname: `/services`,query: {index: 'shopify',},}}><a className="navitem">SHOPIFY DEVELOPMENT</a></Link></Col>
                        </Row><hr/>
                    </div>
                }</Nav>
                <Nav className="navLink"><Link href="/outsource"><a className="nav mx-3">OUTSOURCE</a></Link></Nav>
                <Nav className="navLink"><Link href="/blogs"><a className="nav mx-3">BLOGS</a></Link></Nav>
                <Nav className="navLink"><Link href="/contact"><a className="nav mx-3">CONTACT US</a></Link></Nav>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>  
        </div>
    )
}

export default Header