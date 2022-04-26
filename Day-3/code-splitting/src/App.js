import React, { Suspense } from "react";
import { Routes, BrowserRouter as Router, Route} from 'react-router-dom';  

//import Welcome from './Welcome'

const Welcome = React.lazy(() => import('./Welcome'))
const LazyExample = React.lazy(() => import('./LazyExample'))

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <Welcome />
          <LazyExample/>
        </section>
      </Suspense>
    </div>
  )
}

//With router
function App2() {
  return(
    <Router>
      <Suspense fallback={<div>loading...</div>}>
        <Routes path='/' element={<Welcome/>}>
          <Route index element={<Welcome/>}/>
          <Route path='/example' element={<LazyExample/>}/>
        </Routes>
      </Suspense>
    </Router>
  )
}


export default App2
