import styled from 'styled-components';

export const StatsCard = styled.section`
  width: fit-content;
  margin: 0 auto 50px;
  border: 2px solid ${p => p.theme.borderColor};
  border-radius: 10px;
  overflow: hidden;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  background-color: rgb(79, 127, 199, 0.1);
  border-top: 1px solid ${p => p.theme.borderColor};
  li:not(:last-of-type) {
    border-right: 1px solid ${p => p.theme.borderColor};
  }
`;

export const ListItem = styled.li`
  padding: 10px;
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  flex-grow: 1;
  background-color: ${p => {
    return p.color;
  }};
`;

export const Stats = styled.span`
  font-size: ${p => {
    return p.$fs;
  }};
  text-align: center;
`;

export const Header = styled.h2`
  text-align: center;
  margin: 10px;
`;
