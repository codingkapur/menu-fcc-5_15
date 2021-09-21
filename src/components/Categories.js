function Categories({ cat, filterItems }) {
  return (
    <button className="filter-btn" onClick={()=> filterItems(cat)}>{cat}</button>
  );
}

export default Categories;
