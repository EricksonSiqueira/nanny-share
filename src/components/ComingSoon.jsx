import PropTypes from 'prop-types';
import React from 'react';
import StyledComingsoon from './styles/ComingSoonStyle';
import ComingSoonImg from '../images/comingSoon.svg';

function ComingSoon({ isLarge }) {
  const headingTxt = 'Coming soon: Nanny Share Daily Diary!';
  return (
    <StyledComingsoon>
      <article>
        <img
          src={ComingSoonImg}
          alt="3 icons, one notebook, one tablet with a baby icon inside and a set of cards with a baby icon inside"
        />
        {isLarge ? <h2>{headingTxt}</h2> : <h3>{headingTxt}</h3>}
        <p className="medium-txt">
          With the Hapu daily diary your nanny will be able to
          update you and your sharers with photos and commentary
          of the day. You and sharers will receive notifications
          and you’ll be able to login to view the daily adventures
          fo your little ones. We can’t wait!
        </p>
      </article>
    </StyledComingsoon>
  );
}

ComingSoon.propTypes = {
  isLarge: PropTypes.bool.isRequired,
};

export default ComingSoon;
