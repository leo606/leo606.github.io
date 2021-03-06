import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.primaryDark};
  height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5em 2em;
  transition: 50ms;
  box-shadow: 0 9px 13px ${({ theme }) => theme.primaryDarkShadow};

  @media screen and (min-width:768px){
    height: fit-content;
  }

  section {
    max-width: 760px;
  }

  h1 {
    text-align: center;
    font-size: 1.6em;
    margin: 1em 0;
  }

  h2 {
    text-align: center;
    font-weight: 400;
    font-size: 1.2em;
  }

  img {
    max-width: 130px;
    box-shadow: 0px 0px 15px -6px ${({ theme }) => theme.primaryDarkShadow};
    border-radius: 50%;
  }
`;

export default StyledHeader;
