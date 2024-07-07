const Aside2 = ({categories,selectedCategory,handleCategoryChange}) => {
    return (
     <>
       <div className="aside">
      
   
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
 
 export default Aside2;