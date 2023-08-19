import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  width: 400px;
  text-align: center;
  border-collapse: collapse;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid ${p => p.theme.borderColor};
  thead,
  tbody,
  th,
  tr,
  td {
    border-bottom: 2px solid ${p => p.theme.borderColor};
  }
`;
export const Header = styled.tr`
  background-color: ${p => p.theme.borderColor};
`;
export const HeaderItem = styled.th`
font-size: 20px;
  padding: 7px 0;
  border-right: 2px solid ${p => p.theme.borderColor};
`;
export const Data = styled.td`
  padding: 7px 0;
  border-right: 2px solid ${p => p.theme.borderColor};
`;
export const Body = styled.tbody`
  tr:nth-of-type(odd) {
    background-color: rgb(79, 127, 199, 0.15);
  }
`;
