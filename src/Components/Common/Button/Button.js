import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

function Button(props) {

    return (
        <div className='button__wrap' onClick={props.onClick}>{props.text}</div>
    );

};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Button;