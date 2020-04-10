import WhaleIcon from "../../assets/logo/halflogo.png"
import TextBanner from "../../assets/logo/thewhaletea.png"
import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import clsx from 'clsx'
import { socialRouter } from "../../router/index"
import { position, positionImage, widthAndHeight, linearGradient, flexStyles, transform } from "../../style/mixin";
import SubHeader from "../SubHeader/SubHeader"
import NavItems from "../Nav/NavItem"
import 'bootstrap/dist/css/bootstrap.min.css';
function Header() {
    const socialRouters = socialRouter()
    const flexClass = flexStyles()
    const subHeaderPosition = position("absolute", { bottom: '0', margin: '0 auto' })
    const wHClass = widthAndHeight('100%', '247px')
    const transformClass = transform('rotate(-30deg)')
    const pIWhaleClass = positionImage('absolute', WhaleIcon, '365px', '340px')
    const headerBGClass = position('relative')
    const plTextBannerClass = positionImage('absolute', TextBanner, '749px', '165px')
    const headerTextBGClass = position('absolute',{left: '232px', top:"24px"})
    const lGClass = linearGradient('176deg', ['#000008', 'grey', 'white'])
    const subRouterClass = position("absolute",{left:"0",right:"0",marginBottom:"0",width:"1048px"})
    const routerClass = position("absolute",{right:"0", top:"34px"})
    const navbarBrandClasses = clsx(wHClass.widthAndHeight, pIWhaleClass.positionImage, transformClass.transform)
    const navbarBrandTextClasses = clsx(plTextBannerClass.positionImage, headerTextBGClass.positions)
    const navbarClasses = clsx(lGClass.linearGradient, headerBGClass.positions)
    const flexClasses = clsx(flexClass.flex)
    const subHeaderClasses = clsx(subHeaderPosition.positions, subRouterClass.positions)
    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark" sticky="top" className={navbarClasses}>
                <div className={flexClasses} style={{width:"100%",height:"247px"}}>
                    <Navbar.Brand className={navbarBrandClasses}></Navbar.Brand>
                    <Navbar.Brand className={navbarBrandTextClasses}></Navbar.Brand>
                    <Nav className={clsx(routerClass.positions)}>
                        <NavItems mapArr={socialRouters} width="80px" height="80px" backgroundSize="contain"/>
                    </Nav>
                </div>
                <div className={subHeaderClasses}>
                    <SubHeader />
                </div>
            </Navbar>
        </React.Fragment>
    )
}

export default Header;
