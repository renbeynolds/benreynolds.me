import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

function Content(props) {

  return (
    <div className='content__wrap'>
      {props.children}
    </div>
  );

}

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
};

export default Content;