import { useEffect, useState } from 'react';
import './App.css';
import Discussions from './component/Discussions';
import Form from './component/Form';

function App() {

  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/discussions')
      .then((res) => res.json())
      .then((data) => {
        setDiscussions(data)
      })
  }, [])

  return (
    <main>
      <h1>My Agora States</h1>
      <Form />
      <Discussions discussions={discussions} />
    </main>
  );
}

export default App;
