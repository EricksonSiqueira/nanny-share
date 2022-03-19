import PropTypes from 'prop-types';
import React from 'react';
import StyledShareNanny from './styles/ShareNannyStyle';
import NannyShareMobile from '../images/nannyShareMobile.svg';
import NannyShareDesktop from '../images/nannyShareDesktop.svg';

function ShareNanny({ isLarge }) {
  const shareNanyTitle = 'Share your home, nanny and costs';

  return (
    <StyledShareNanny>
      <article className="centralized-section">
        <img
          src={isLarge ? NannyShareDesktop : NannyShareMobile}
          alt="nanny share functionality"
        />
        <section>
          {isLarge ? <h2>{shareNanyTitle}</h2> : <h3>{shareNanyTitle}</h3>}
          <p className="medium-txt">
            You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs
            in half be, well, fantastic?! If only it was easy to connect with
            other parents to share your costs? Well now it is,
            with Hapu.
            {' '}
            <a href="https://github.com/EricksonSiqueira">Hapu means tribe</a>
            {' '}
            and it’s our foundational
            3 tribal principles that empowers you to create and manage your own tribe.
            A tribe that together has the power to create new affordable solutions
            in childcare that work for you and your community.
          </p>
          <a
            href="https://github.com/EricksonSiqueira"
            className="get-started"
          >
            Ready to get started?
          </a>
        </section>
      </article>
    </StyledShareNanny>
  );
}

ShareNanny.propTypes = {
  isLarge: PropTypes.bool.isRequired,
};

export default ShareNanny;
