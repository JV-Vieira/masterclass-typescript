import React , { useEffect, useState } from 'react';
import api from './services/api';
import User from './components/User'

interface IUser {
  name: string;
  email?: string;
}

//usar a api dentro de um useEffect para os dados carregar assim que aparecerem na tela
//useState tbm recebe um parametro
function App() {
  const [users, setUsers] = useState<IUser[]> ([]);
  useEffect(() => {
      api.get<IUser[]>('/users').then(response => { 
        setUsers(response.data);

      })
  }, []);
  return (
    <div className="App">
      { users.map(user => <User key={user.email} user={user}/>)  }
    </div>
  );
}

export default App;
