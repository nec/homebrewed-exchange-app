import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
`;

export const Arrows = styled.div`
  font-size: 50px;
  font-weight: bold;
  line-height: 2;
  transition: transform 0.3s;
  cursor: pointer;
  &:hover {
    color: deepskyblue;
  }
  &:hover::first-letter {
    color: tomato;
  }
  &.reverse {
    transform: rotate(180deg);
  }
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

export const Dashboard = styled.div``;
export const DashboardRow = styled.div`
  display: flex;
  justify-content: center;
`;
