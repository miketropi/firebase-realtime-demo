import { useState, useEffect } from "react";
import { useAppContext } from "./context/AppContext";
import { db } from './firebase';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';

function App() {
  const { user, onSignInWithGoogle, onHandleLogout, } = useAppContext();
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'todos'), orderBy('timestamp', 'desc'))
    onSnapshot(q, (snapshot) => {
      setTodos(snapshot.docs.map(doc => {
        // console.log(doc)
        let data = doc.data();
        return { ...data, id: doc.id }
      }))
    })
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    addDoc(collection(db, "todos"), {
      todo: input,
      timestamp: serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      {user ? (
        <>
          <h1>Hello, {user?.displayName}</h1>
          <button onClick={onHandleLogout}>Log out</button>
        </>
      ) : (
        <button onClick={onSignInWithGoogle}>Sign In with Google</button>
      )}

      <div className="todos">
        <h2> TODO List App</h2>
        <form>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={addTodo}>Add Todo</button>
        </form>
        { JSON.stringify(todos) }
        <ul>
          { todos.map(item => <li key={ item.id }>{ item.todo }</li>) }
        </ul>
      </div>
    </div>
  );
}

export default App;
