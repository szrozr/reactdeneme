import React, { PureComponent } from 'react';
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

import './Navbar.style.scss';

class Navbar extends PureComponent {
    render () {
        const { active } = this.props;
        return (
            <React.Fragment>
                <div className="Navbar_Container">
                    <NavLink
                        to={"/"}
                        id="Navbar_Homepage"
                        className={`navitem ${(active === 'homepage') ? 'selected' : ''}`}
                    >
                    HomePage
                    </NavLink>
                    <NavLink
                        to={"/persondelete"}
                        id="Navbar_Persondelete"
                        className={`navitem ${(active === 'delete') ? 'selected' : ''}`}
                    >
                    Delete
                    </NavLink>
                    <NavLink
                        to={"/personpost"}
                        id="Navbar_Personpost"
                        className={`navitem ${(active === 'post') ? 'selected' : ''}`}
                    >
                    Post
                    </NavLink>
                    <NavLink
                        to={"/contact"}
                        id="Navbar_Contact"
                        className={`navitem ${(active === 'contact') ? 'selected' : ''}`}
                    >
                    Contact
                    </NavLink>
                </div>
            </React.Fragment>
        );
    }
}

Navbar.propTypes = {
    active: PropTypes.string
};

export default Navbar;
