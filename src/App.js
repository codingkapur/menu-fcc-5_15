import { useState } from 'react'
import Menu from './components/Menu'
import Categories from './components/Categories'
import items from './data'

function App() {
  const [menu, setMenu] = useState(items)
  return (
    <main className="main__container">
      <h1> Our Menu</h1>
      <div className="menu__items--container">
        {menu.map(item=> {
        return <Menu key={item.id} item={item}/>})}
      </div>
    </main>
  );
}

export default App;
