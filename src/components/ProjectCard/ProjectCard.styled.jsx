import styled from 'styled-components';

const StyledProjectCard = styled.div`
  color: ${({ theme }) => theme.primaryLight};
  padding: 0.3em;
  margin: 0.9em 0.3em 3em 0.3em;
  border-radius: 0.3em;

  img {
    max-width: 100%;
    margin: 0 auto;
    border-radius: 0.5em;
  }

  h4 {
    font-size: 1.5em;
    margin-top: 0.3em;
  }

  div {
    margin: 1em 0;
  }

  div:nth-of-type(2) {
    display: flex;
    justify-content: center;
    flex-grow: 0;
  }

  span {
    padding: 0.06em 0.3em;
    font-size: 0.9em;
  }

  span:nth-child(1) {
    background-color: ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.primaryDark};
    margin-right: 1em;
    border-radius: 0.3em;
  }

  span:nth-child(2) {
    opacity: 90%;
  }

  a {
    display: inline-block;
    text-decoration: none;
    font-size: 0.9em;
    text-align: center;
    padding: 0.4em;
    width: 1em;
    border-radius: 0.3em;
    background-color: ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.primaryDark};
    box-shadow: 0 0 9px 1px ${({ theme }) => theme.primaryDarkShadow};
    transition: 100ms;
    flex-grow: 1;
  }

  a:hover {
    opacity: 90%;
    box-shadow: 0 0 9px 6px ${({ theme }) => theme.primaryDarkShadow};
  }

  a:nth-child(1) {
    margin-right: 1em;
  }

  a:nth-child(2) {
    margin-left: 1em;
  }


  @media screen and (min-width:768px){
    width: 350px;
    height: fit-content;
  }
`;

export default StyledProjectCard;
