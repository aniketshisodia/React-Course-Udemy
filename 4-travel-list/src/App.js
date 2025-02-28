const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 1, description: "Passports", quantity: 2, packed: true },
];



export default function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}


function Logo() {
  return <h1>
    🎄Farm List
  </h1>
}

function Form() {
  return (
    <form className="add-form">
      <h3>
        What do you need for the trip?
      </h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map
          ((num) => (
            <option value={num} key={num}>{num}</option>
          ))
        }
      </select>
      <input type="text" />
      <button>Add</button>
    </form>
  )
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  )
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}{item.description}
      </span>
      <button>🛶</button>
    </li>
  )
}

function Stats() {
  return (
    <footer className="stats">
      <em>
        You have N items on your list ,and you already placed X
      </em>
    </footer>
  )
}