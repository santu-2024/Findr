import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
 

function App() {
  return (
    <BrowserRouter> 
    <div className='grid-container'> 
    <header>
      <div></div>
    </header>
    <main> 
      <Route path='/product/:id' component= {ProductScreen} exact></Route>
      <Route path='/' component={HomeScreen} exact></Route>
    </main> 
        <footer>

        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
