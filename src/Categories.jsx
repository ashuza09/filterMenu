const Categories = ({categories ,filterItem}) => {
  return (
    <div className="btn-container">
        {
            categories.map((category) => {
                return (
                    <button type="button" className="btn" key={category} onClick={() => filterItem(category)}>
                        {category}
                    </button>
                );
            })
        }
    </div>
  )
}
export default Categories