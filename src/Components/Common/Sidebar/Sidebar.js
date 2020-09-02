import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

function Sidebar(props) {

    return (
        <div className='sidebar__wrap center-vertical'>
            {props.children}
        </div>
    );

}

Sidebar.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]).isRequired
};

export default Sidebar;