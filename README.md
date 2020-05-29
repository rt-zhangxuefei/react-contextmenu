[![NPM](https://nodei.co/npm/react-contextmenu-lite.png)](https://nodei.co/npm/react-contextmenu-lite/)

# react-contextmenu-lite

基于 React 实现的右键菜单，仅提供基本功能，样式由你自己定义

## Introduction

- 包含 2 个高阶组件( ContextMenu, ContextMenuTrigger )
- 两个组件必须包含相同的 id 属性 ( className 参数可选 )

## Installation

Using npm

```
npm install --save react-contextmenu-lite
```

Using yarn

```
yarn add react-contextmenu-lite
```

## Example

```javascript
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ContextMenuTrigger, ContextMenu } from 'react-contextmenu-lite';

function App() {
  return (
    <div className="App">
      <ContextMenuTrigger id="sampleID">
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
```

## Licence

MIT
