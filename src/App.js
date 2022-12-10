import { useEffect, useState } from 'react';
import './App.css';
import Details from './components/Details';
import List from './components/List';

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  useEffect(() => {
    let URL = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json'
    let fetchData = async () => {
      const response = await fetch(URL);
      if (!response.ok) {
      }

      const users = await response.json();
      setUsers(users)
    }

    fetchData();
    
  }, []);

  const onChooseUser = (user) => {
    setUser(user);
  }

  return (
    <div className="App">
      <List 
        users={users}
        onChooseUser={onChooseUser} />
      <Details info={user}/>
    </div>
  );
}

export default App;
