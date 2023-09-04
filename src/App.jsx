import { useState } from "react";
import Title from "./Title";
import menu from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

// const tempCategory = menu.map((item)=> item.category)
// const tempSet = new Set(tempCategory)
// const temp = ['all',...tempSet]

const allCategory = ['all',...new Set( menu.map((item)=> item.category))]


const App = () => {
  const [menuItem, setMenuItem] = useState(menu)
  const [categories, setCategories] = useState(allCategory)
  const filterItem = (category) =>{
    if(category === 'all'){
      setMenuItem(menu)
      return
    }
    const newItem = menu.filter((item) => item.category === category)
    setMenuItem(newItem)
  }
  return <main>
    <section className="menu">
      <Title text='Filter menu'/>
      <Categories categories={categories} filterItem={filterItem}/>
      <Menu items={menuItem} />
      
    </section>
  </main>;
};
export default App;
