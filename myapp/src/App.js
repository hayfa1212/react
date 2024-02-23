import logo from './logo.svg';
import Image from './Image_1_g5mxyi.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <form>
  <img src={Image}/>
  <h1>Blog post published</h1>
  <p>this blog post has been published . members will be able to edit this post and republish changes.</p>
  <input type="button" value="cancel" id="btn1"/>
  <input type="button" value="Confirm" id="btn" />
</form>
      </header>
    </div>
  );
}

export default App;
