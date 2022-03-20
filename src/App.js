import logo from './logo.svg';
import './App.css';
import PersonList from './components/PersonList';
import ErrorBoundary from './error-boundary/ErrorBoundary';
import PersonDetail from './components/PersonDetail';
import Err1 from './error-boundary/Err1';
import React, { Suspense, useState } from 'react';
import CalculatorComp from './components/CalculatorComp';
import FallBack from './fallback/FallBack';

//react components lazy loading
const LazyComp = React.lazy(() => {
  return import('./components/ComponentA')
})

function App() {
  const [showComponent, setshowComponent] = useState(false);
  return (
    <div className="App">
      {/* <ErrorBoundary>
        <PersonList />
      </ErrorBoundary>
      <hr />
      <Err1>
        <PersonDetail />
      </Err1> */}
      <CalculatorComp />
      <button onClick={() => { setshowComponent(!showComponent) }}>{showComponent ? 'Hide' : 'Show'}</button>
      {/* {showComponent && <LazyComp/> }  if you write like this then it will ask to write inside the suspense component*/}
      {showComponent &&
        <Suspense fallback={<div>Loading..</div>}>
          <LazyComp />
        </Suspense>
        }
    </div>
  );
}

export default App;
