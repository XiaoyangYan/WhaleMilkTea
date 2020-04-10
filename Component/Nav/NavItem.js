import React from 'react';
import { Nav } from 'react-bootstrap';
import PropTypes from 'prop-types'
import clsx from 'clsx'
import {backgroundImages} from "../../style/mixin"
import 'bootstrap/dist/css/bootstrap.min.css';
function NavItem(props) {
    const { mapArr, width, height, backgroundSize } = props
    console.log(mapArr.length)
    return (
        <React.Fragment>
            {
                mapArr.map((item, index) =>
                    <Nav.Item key={item + `${index}`}>
                                <Nav.Link>
                                    <div className={clsx(backgroundImages(item.src, width, height, backgroundSize).backgroundImages)}></div>
                                </Nav.Link>
                            </Nav.Item>
                )
            }
            </React.Fragment>
    )
}

NavItem.propTypes = {
    mapArr: PropTypes.array.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    backgroundSize: PropTypes.string
}

export default NavItem