import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import LookingForNannyFormStyled from './styles/LookingForNannyFormStyle';
import postMethod from '../services/postMethod';
import validateEmail from '../utils/validateEmail';

function LookingForNannyForm({ isLarge }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [formIsValid, setFormIsValid] = useState(true);
  const URL = 'https://api.jungledevs.com/api/v1/challenge-newsletter/';

  useEffect(() => {
    const validateForm = () => {
      const nameIsValid = name.length > 1;
      const emailIsValid = validateEmail(email);
      setFormIsValid(nameIsValid && emailIsValid);
    };
    validateForm();
  }, [email, name]);

  const submitForm = (event) => {
    event.preventDefault();
    const objectToPost = { name, email };
    postMethod(objectToPost, URL);
  };

  return (
    <LookingForNannyFormStyled>
      <article>
        <section>
          <h3>Are you a parent without a nanny and looking to share?</h3>
          <p className={isLarge ? 'large-txt' : 'medium-txt'}>
            Leave us your name and email and we’ll update you
            as soon as a share becomes available in your area!
          </p>
        </section>
        <form>
          <input
            type="text"
            name="nameInput"
            id="nameInput"
            value={name}
            onChange={({ target }) => setName(target.value)}
            placeholder="Your name"
          />
          <input
            type="email"
            name="emailInput"
            id="emailInput"
            value={email}
            onChange={async ({ target }) => setEmail(target.value)}
            placeholder="Your email"
          />
          <button type="submit" onClick={submitForm} disabled={!formIsValid}>
            <h5>Send</h5>
          </button>
        </form>
      </article>
    </LookingForNannyFormStyled>
  );
}

LookingForNannyForm.propTypes = {
  isLarge: PropTypes.bool.isRequired,
};

export default LookingForNannyForm;
