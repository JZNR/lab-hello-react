import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="grande-div">
        <div className="menu">
          <img src="./images/package-lock.png" alt="logo" />
          <img src="./images/menu-top-xs.png" alt="menu"/>
        </div>
        <div className="cool-stuff">
          <h1>Say Hello to ReactJS</h1>
          <div>
            <p>You will learn how to use the most popular frontend library, and become a super Ninja Developer</p>
          </div>
          <a>Awesome!</a>
        </div>
      </div>
      <div className="images">
          <img src="./images/icon1.png" alt="logo" />
          <img src="./images/icon2.png" alt="logo" />
          <img src="./images/icon3.png" alt="logo" />
          <img src="./images/icon4.png" alt="logo" />
      </div>
    </div>
  );
}
export default App;
