const Aside = ({ categories, handleCategoryChange, selectedCategory, handlePriceChange }) => {
   return (
    <>
      <div className="aside">
        <button type="button" className="btn btn-primary" onClick={handlePriceChange}>
          Price (from smallest to largest)
        </button>
        <button type="button" className="btn btn-secondary">
          Rating
        </button>
  
        <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">All categories</option>
        {categories.map((cat, i) => (
          <option key={i} value={cat.name}>
            {cat.name}
          </option>
        ))}
      </select>
          <br />
          <br />
      </div>
    </>
  );
};

export default Aside;
