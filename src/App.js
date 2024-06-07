import { Routes, Route, Outlet, Link } from "react-router-dom";
import TemplateDefault from "./templates/Default";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Project from "./pages/Project";

import { useState, useEffect } from "react";
import { db } from './firebase';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';

const NoMatch = () => {
  return '404';
}

export default function App() {
  return <div id="APP">
    <Routes>
      <Route path="/" element={<TemplateDefault />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  </div>
}

// return;
// function App() {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState('');

//   useEffect(() => {
//     const q = query(collection(db, 'todos'), orderBy('timestamp', 'desc'))
//     onSnapshot(q, (snapshot) => {
//       setTodos(snapshot.docs.map(doc => {
//         // console.log(doc)
//         let data = doc.data();
//         return { ...data, id: doc.id }
//       }))
//     })
//   }, []);

//   const addTodo = (e) => {
//     e.preventDefault();
//     addDoc(collection(db, "todos"), {
//       todo: input,
//       timestamp: serverTimestamp(),
//     });
//     setInput("");
//   };

//   return (
//     <div className="App">

//       <div className="todos">
//         <h2> TODO List App</h2>
//         <form>
//             <input type="text" value={input} onChange={e => setInput(e.target.value)} />
//             <button onClick={addTodo}>Add Todo</button>
//         </form>
//         { JSON.stringify(todos) }
//         <ul>
//           { todos.map(item => <li key={ item.id }>{ item.todo }</li>) }
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;
