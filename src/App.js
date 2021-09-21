import { useState } from 'react'
import Menu from './components/Menu'
import Categories from './components/Categories'
import items from './data'

function App() {
  const [menu, setMenu] = useState(items)

  const filterItems = (category) => {

    if(category==="all"){ 
    setMenu(items)
    return
    }

    let newItems = items.filter((item)=> {
      return item.category === category
    }) 
    setMenu(newItems)
  }
  return (
    <main className="main__container">
      <h1> Our Menu</h1>
      <div className="underline"></div>
      <Categories filterItems={filterItems}/>
      <div className="menu__items--container">
        {menu.map(item=> {
        return <Menu key={item.id} item={item}/>})}
      </div>
    </main>
  );
}

export default App;
