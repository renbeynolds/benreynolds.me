import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

function RecipeTile(props) {

    return (
        <div className='recipetile__wrap'>
            <div className='recipetile__img-wrap'>
                <img src={props.imgSrc} alt='recipe-photo' />
            </div>
            <div className='recipetile__title'>
                {props.title}
            </div>
            <div className='recipetile__description'>
                {props.description}
            </div>
        </div>
    );

}

RecipeTile.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imgSrc: PropTypes.element.isRequired
};

RecipeTile.defaultProps = {
    description: ''
};

export default RecipeTile;