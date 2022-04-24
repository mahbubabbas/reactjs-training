const myList = ['Abbas', 'Mahboob', 'Anil', 'Suresh']

const listItems = myList.map((list) => <li>{list}</li>)

function App() {
  return (
    <div>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}

export default App
