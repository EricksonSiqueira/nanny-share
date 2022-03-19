import PropTypes from 'prop-types';
import React from 'react';
import StyledFramework from './styles/FrameworkStyle';
import FrameWorkImg from '../images/framework.svg';

function Framework({ isLarge }) {
  const headindTxt = 'A framework built for the long term';
  return (
    <StyledFramework>
      <article>
        {isLarge ? <h2>{headindTxt}</h2> : <h3>{headindTxt}</h3>}
        <p className="medium-txt">
          Childcare is for the long term. And you need a framework
          you can count on that gives your share long term
          viability and success. That’s why we’ve defined
          Hapu around our three tribal principles; clearly
          defined process, transparency over money and
          equality of participation.
        </p>
        <a href="https://github.com/EricksonSiqueira" target="_blank" rel="noreferrer">
          Read how Hapu’s tribal background defines our app
        </a>
        {isLarge && <img src={FrameWorkImg} alt="childcare interface" />}
      </article>
    </StyledFramework>
  );
}

Framework.propTypes = {
  isLarge: PropTypes.bool.isRequired,
};

export default Framework;
