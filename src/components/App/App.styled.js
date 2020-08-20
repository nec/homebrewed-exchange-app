import styled from "styled-components";

import bg from "./bg.png";

export const App = styled.div`
  text-align: center;
  background: #2f2f2f;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  transition: min-height 0.3s;
  color: #fff;
`;

export const Header = styled.header`
  padding: 0.5em;
  font-size: 29px;
  background-color: var(--main);
  display: flex;
  justify-content: center;
  color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  transition: all 0.5s;
  span {
    margin-right: 0.5ch;
    transform: rotate(-5deg);
  }
  @media screen and (max-width: 500px) {
    font-size: 26px;
  }
  @media screen and (max-width: 380px) {
    font-size: 23px;
  }
  @media screen and (max-width: 320px) {
    font-size: 20px;
  }
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding: 1em;
  position: relative;
  background: url(${bg}) 0 0 repeat;
  @media screen and (max-width: 380px) {
    background-size: 200px;
  }
`;

export const Footer = styled.footer`
  padding: 1.25em 0.5em;
  font-size: 12px;
  background-color: var(--main);
  color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

export const A = styled.a`
  color: #fff;
  &:hover {
    color: #ff0 !important;
  }
`;
