import { GlobalStyles } from './GlobalStyles';
import { Statistics } from './Statistics/Statistics';
import { Profile } from './profile/profile';
import userData from './user.json';
import stats from './data.json';
import friendsList from './friends.json';
import transactions from './transactions.json';
import { FriendList } from './Friendslist/friendlist';
import { Transactions } from './transactions/transactions';

export const App = () => {
  return (
    <div>
      <Profile userData={userData} />
      <Statistics stats={stats} title="Upload stats" />
      <FriendList friends={friendsList}/>
      <Transactions transactions={transactions}/>
      <GlobalStyles />
    </div>
  );
};
