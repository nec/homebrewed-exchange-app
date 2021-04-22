import styled from "styled-components";

export const Label = styled.label`
  display: block;
`;

export const Select = styled.select`
  appearance: none;
  padding: 0.27em 1.5em 0.27em 0.5em;
  position: relative;
  font-size: 50px;
  color: #fff;
  border-radius: 0 10px 10px 0;
  border: none;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
    linear-gradient(to bottom, deepskyblue, var(--main));
  background-repeat: no-repeat, repeat;
  background-position: right 0.6em top 50%, 0 0;
  background-size: 0.5em auto, 100%;
  transition: all 0.5s;
  option {
    color: #000;
  }
  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 3px skyblue;
    z-index: 10;
  }
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`;
