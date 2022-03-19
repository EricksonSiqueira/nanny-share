import PropTypes from 'prop-types';
import React from 'react';
import StyledSharedPayments from './styles/SharedPaymentsStyle';
import SharedPaymentsMobile from '../images/sharedPaymantsMobile.svg';
import SharedPaymentsDesktop from '../images/sharedPaymantsDesktop.svg';

function SharedPayments({ isLarge }) {
  const headingText = 'Shared payments made simple';
  return (
    <StyledSharedPayments>
      <img
        src={isLarge ? SharedPaymentsDesktop : SharedPaymentsMobile}
        alt="shared payment interface"
      />

      <article>
        {isLarge ? <h2>{headingText}</h2> : <h3>{headingText}</h3>}
        <p className="medium-txt">
          Sometimes it’s hard enough just sharing a restaurant bill.
          Try sharing that bill week in, week out and you might encounter
          more than a few snares. But not with Hapu. Simply set your rates
          and our automated payment system takes care of the rest. You need
          never talk money or who owes what.
        </p>
        <a href="https://github.com/EricksonSiqueira">
          Read how Bridget’s share (without Hapu) ended over $15
        </a>
      </article>
    </StyledSharedPayments>
  );
}

SharedPayments.propTypes = {
  isLarge: PropTypes.bool.isRequired,
};

export default SharedPayments;
