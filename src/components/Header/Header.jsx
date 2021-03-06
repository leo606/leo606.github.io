import React from 'react';
import StyledHeader from './Header.styled';

function Header() {
  return (
    <StyledHeader id="about">
      <img src="images/avatar.jpeg" alt="leonardo" />
      <section>
        <h1>Olá! Sou Leonardo Ferreira, estudante de desenvolvimento Web</h1>
        <h2>
          Apaixonado por tecnologia e inovação e isso foi o que me levou a
          estudar Desenvolvimentode Software.
          Procuro sempre aprender, aprimorar meus conhecimentos e viver novas experiências
        </h2>
      </section>
    </StyledHeader>
  );
}

export default Header;
