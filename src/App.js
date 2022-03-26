import { createGlobalStyle } from 'styled-components';
import {Route, Link, BrowserRouter} from 'react-router-dom';
import RatingComponent from './components/RatingComponent';
import './App.css';

const GlobalStyle = createGlobalStyle`
body {
  font-family: Roboto;
  background:  #131518;
}

*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;

}
`


function App() {
  return (
    <>
    <GlobalStyle />
    <RatingComponent />
    </>
  );
}

export default App;
