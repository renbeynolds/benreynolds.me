import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

function Page(props) {

  return (
    <div className='page__wrap'>
      {props.children}
    </div>
  );

}

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
};

export default Page;
