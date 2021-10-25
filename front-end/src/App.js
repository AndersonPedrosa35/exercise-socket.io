import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Mural de Depoimentos</h1>
      <div className="container-mural">

      </div>
      <form action="">
        <input type="text" className="input-name" />
        <input type="text" className="inputmessage" />
        <button className="send-button">Send</button>
      </form>
    </div>
  );
}

export default App;
