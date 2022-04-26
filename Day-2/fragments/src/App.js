import { Fragment } from 'react'

/*
function App() {
  return (
    <div>
      <h1>Fragment Demo</h1>
      <h2>Welcome onboard</h2>
      <h4>Hi Abbas, how are you doing</h4>
      <p>Some other text</p>
    </div>
  )
}
*/

/*
function App() {
  return (
    <Fragment>
      <h1>Fragment Demo</h1>
      <h2>Welcome onboard</h2>
      <h4>Hi Abbas, how are you doing</h4>
      <p>Some other text</p>
    </Fragment>
  )
}
*/
/*
function App() {
  return (
    <>
      <h1>Fragment Demo</h1>
      <h2>Welcome onboard</h2>
      <h4>Hi Abbas, how are you doing</h4>
      <p>Some other text</p>
    </>
  )
}
*/

const colors = [
  {
    "id": 1,
    "color": "black",
    "category": "hue",
    "code": "#000"
  },
  {
    "id": 2,
    "color": "white",
    "category": "value",
    "code": "#FFF"
  },
  {
    "id": 3,
    "color": "red",
    "category": "hue",
    "code": "#FF0"
  },
  {
    "id": 4,
    "color": "blue",
    "category": "hue",
    "code": "#00F"
  },
  {
    "id": 5,
    "color": "yellow",
    "category": "hue",
    "code": "#FF0"
  },
  {
    "id": 6,
    "color": "green",
    "category": "hue",
    "code": "#0F0"
  },
]


function App() {
  return (
    <Fragment>
      {
        colors.map(color => 
          <Fragment key={color.id}>
            <h3 >{color.color}</h3>
            <p>{color.category}</p>
            <p>{color.code}</p>
            <hr/>
          </Fragment>
        )
      }
    </Fragment>
  )
}

export default App
