import { BrowserRouter, Route, Routes, Link, NavLink, Outlet } from 'react-router-dom'

//Layout with Link
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

//Layout with NavLink
const Layout2 = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/" style={
              {color: 'red'}
            }>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" style={
              {color: 'orange'}
            }>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}


const About = () => {
  return (
    <h1>About us page</h1>
  )
}

const Contact = () => {
  return (
    <h1>
      Contact us page
    </h1>
  )
}

const Home = () => {
  return (
    <h1>Welcome to our home page</h1>
  )
}

function NoPage () {
  return(
    <h1>Oops 404</h1>
  )
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout2 />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path='*' element={<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
