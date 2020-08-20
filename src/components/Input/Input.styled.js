import styled from "styled-components";

export const Label = styled.label`
  display: block;
`;

export const Input = styled.input`
  padding: 0.25em 0.5em;
  width: 100%;
  box-sizing: border-box;
  max-width: 310px;
  font-size: 50px;
  border: none;
  border-radius: 10px 0 0 10px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  transition: all 0.5s;
  position: relative;
  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 3px deepskyblue;
    z-index: 2;
  }
  &:disabled {
    background: #fff;
    color: #000;
    cursor: not-allowed;
  }
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`;
