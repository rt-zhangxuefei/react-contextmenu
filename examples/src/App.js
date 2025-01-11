import logo from './logo.svg';
import './App.css';
// import { ContextMenu, ContextMenuTrigger } from './ContextMenu/index';
import { ContextMenu, ContextMenuTrigger } from './Lib';

function App() {
  return (
    <div className="App">
      <ContextMenuTrigger
        id="sampleID"
        onContextMenu={() => {
          console.log('context menu triggered');
        }}
      >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </ContextMenuTrigger>
      <ContextMenu id="sampleID">
        <ul className="menu-list">
          <li>
            <span className="text">下载</span>
          </li>
          <li>
            <span className="text">移动</span>
          </li>
          <li>
            <span className="text">删除</span>
          </li>
          <li>
            <span className="text">重命名</span>
          </li>
          <li>
            <span className="text">属性</span>
          </li>
        </ul>
      </ContextMenu>
    </div>
  );
}

export default App;
