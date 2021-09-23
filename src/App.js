import { useState } from 'react';
import './App.css';
import EditorContainer from './Container/editorContainer';
import SideToolbar from './Container/sideToolbar';
function App() {
  const [Tlength, setTlength] = useState([]);
console.log(Tlength)
  return (
    <div className="container">
      <div><EditorContainer Tlength={Tlength} setTlength={setTlength}/></div>
      <div><SideToolbar Tlength={Tlength} /></div>
    </div>
  );
}

export default App;
