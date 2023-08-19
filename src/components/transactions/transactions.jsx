import { Table, Header, HeaderItem, Data, Body } from "./transactions.styled";

export const Transactions = ({transactions}) => {
  return (
    <Table>
      <thead>
        <Header>
          <HeaderItem>Type</HeaderItem>
          <HeaderItem>Amount</HeaderItem>
          <HeaderItem>Currency</HeaderItem>
        </Header>
      </thead>
      <Body>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <Data>{type}</Data>
              <Data>{amount}</Data>
              <Data>{currency}</Data>
            </tr>
          );
        })}
      </Body>
    </Table>
  );
};
