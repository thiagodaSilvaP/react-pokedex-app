import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/index'
import GlobalStyle from './styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
