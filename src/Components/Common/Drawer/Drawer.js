import PropTypes from 'prop-types';
import { default as React, useState } from 'react';
import { ReactComponent as HamburgerIcon } from '../../../Assets/Icons/hamburger-menu.svg';
import './styles.scss';

function Drawer(props) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='drawer__wrap'>
            <HamburgerIcon
                className='drawer__menu-icon'
                onClick={() => setIsOpen(true)}
            />
            <div className={`drawer__content ${isOpen ? 'open' : 'closed'}`}>
                {props.children}
            </div>
            <div
                className={`drawer__scrim ${isOpen ? 'open' : 'closed'}`}
                onClick={() => setIsOpen(false)}
            />
        </div>
    );
}

Drawer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]).isRequired
};

export default Drawer;