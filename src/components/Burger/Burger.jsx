import React from 'react';
import { bool, func } from 'prop-types';
import StyledBurger from './Burger.styled';

function Burger({ burgerOpen, setBurgerOpen }) {
  function handleClick() {
    setBurgerOpen((open) => !open);
  }

  return (
    // eslint-disable-next-line react/jsx-no-bind
    <StyledBurger burgerOpen={burgerOpen} onClick={handleClick}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}

export default Burger;

Burger.propTypes = {
  burgerOpen: bool.isRequired,
  setBurgerOpen: func.isRequired,
};
