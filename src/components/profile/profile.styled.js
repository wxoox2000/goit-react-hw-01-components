import styled from 'styled-components';
export const ProfileWrap = styled.div`
  width: fit-content;
  margin: 0 auto 50px;
  border: 2px solid ${p => p.theme.borderColor};
  border-radius: 10px;
  overflow: hidden;
`;
export const InfoWrap = styled.div`
  border-bottom: 1px solid ${p => p.theme.borderColor};
  padding: 10px 20px 0 20px;
  background-color: aliceblue;
`;
export const Text = styled.p`
  font-size: ${p => {
    return p.$fs;
  }};
  color: ${p => {
    return p.color;
  }};
  text-align: center;
  margin-bottom: 10px;
`;
export const Avatar = styled.img`
  width: 100px;
  margin: 0 auto;
  border-radius: 50px;
  border: 3px solid ${p => p.theme.borderColor};
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  background-color: rgb(79, 127, 199, 0.1);
  li:not(:last-of-type) {
    border-right: 1px solid ${p => p.theme.borderColor};
  }

`;

export const ListItem = styled.li`
padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  flex-basis: calc((100% - 20px) / 3);
  flex-grow: 1;
`;

export const Stats = styled.span`
border: none;
  font-size: ${p => {
    return p.$fs;
  }};
  text-align: center;
`;
