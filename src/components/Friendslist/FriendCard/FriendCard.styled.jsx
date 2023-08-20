import styled from 'styled-components';

const statusColor = p => {
  switch (p.$status) {
    case 'true':
      return 'green';
    case 'false':
      return 'red';
    default:
      return null;
  }
};

export const ListItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: 2px solid ${p => p.theme.borderColor};
  border-radius: 10px;
  box-shadow: 0 5px 7px -2px ${p => p.theme.borderColor};
  p {
    font-size: 20px;
  }
`;
export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50px;
  background-color: ${statusColor};
`;
export const Avatar = styled.img`
  border-radius: 50px;
  border: 1px solid ${p => p.theme.borderColor};
`;
