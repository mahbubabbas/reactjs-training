import './App.css'
import myStyles from './myStyles.module.css'

import styled from 'styled-components'

/*
// 1a) Inline
function AppInline1() {
  return (
    <div style={{backgroundColor: 'green'}}>
      <h1 style={{color: 'red'}}>This is my style inline</h1>
    </div>
  )
}


// 1b) Inline javascript object
function AppInline2() {
  const myStyle = {
    color: 'white',
    fontSize: '100px'
  }

  return (
    <div style={{backgroundColor: 'green'}}>
      <h1 style={myStyle}>This is my style using Inline js object</h1>
    </div>
  )
}

// 2) CSS Stylesheet
function CSSStylesheet() {
  return(
    <div>
      <h1>This is my style suing CSS Stylesheet</h1>
    </div>
  )
}
*/
/*
// 3) CSS Module
function CSSModule() {
  return(
    <div>
      <h1 className={myStyles.style1}>This is my style using CSS module</h1>
    </div>
  )
}
*/


// 4) 
function StyledComponents() {
  const Div = styled.div `
    text-alignment: 'center';
    color: green;
  `
  const Header = styled.h1`
    font-size: 70px
  `

  return(
    <Div>
      <Header>This is my style using styled components</Header>
    </Div>
  )
}

export default AppInline1
//export default AppInline2
//export default CSSStylesheet
//export default CSSModule
export default StyledComponents