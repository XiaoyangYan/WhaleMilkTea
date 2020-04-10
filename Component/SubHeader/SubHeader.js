import React from "react";
import {Nav} from "react-bootstrap"
import {MenuRouter} from "../../router/index"
import clsx from 'clsx'
import {flexStyles,widthAndHeight,position} from "../../style/mixin"
import NavItem from '../Nav/NavItem'
function SubHeader(){
    const flexS = flexStyles();
    const menuRoutes = MenuRouter();
    const widthHeightClass = widthAndHeight('100%','73px','73px')
    const navClasses = clsx(flexS.flex, widthHeightClass.widthAndHeight)
    return (
        <Nav onSelect={(selectedKey) => {}} className={navClasses}>
            <NavItem mapArr={menuRoutes} width="150px" height="73px" backgroundSize="contain"/>
        </Nav>
    )
}
export default SubHeader