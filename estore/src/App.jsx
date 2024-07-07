import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/Card";
import Cards2 from "./components/Cards2";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Aside2 from "./components/Aside2";

function App() {
  const [initialProducts, setInitialProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [priceValue, setPriceValue] = useState(false);
  const [categories, setCategories] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortCriteria, setSortCriteria] = useState('');

  // Fetch products on component mount
  useEffect(() => {
    axios.get(`https://dummyjson.com/products`).then((res) => {
      setInitialProducts(res.data.products);
      setProducts(res.data.products);
    });
  }, []);

  // Fetch categories on component mount
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setCategories(res.data));
  }, []);

  // Handle category selection
  const handleCategoryChange = event => {
    const category = event.target.value;
    setSelectedCategory(category);
    if (category) {
      axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then(res => setProducts(res.data.products))
        .catch(error => console.error('Error fetching products for category:', error));
    } else {
      setDisplayedProducts(products);
    }
  };
 

 /* const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    if (category) {
      const filteredProducts = products.filter((item) => item.category.toLowerCase() === category.toLowerCase());
      setProducts(filteredProducts);
    } else {
      setProducts(initialProducts);
    }
  }; */

  /* const handleSearchProducts = (event) => {
    const searchValue = event.target.value;
    if (searchValue) {
      const filteredProducts = products.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));
      setProducts(filteredProducts);
    } else {
      setProducts(initialProducts);
    }
  } */

  // Handle sorting


  return (    
    <>
    <Aside2 handleCategoryChange={handleCategoryChange}  selectedCategory={selectedCategory} categories={categories}/>
   <main>
   {products.map(x=><Cards2 key={x.id} product={x}/>)}
   </main>
   </>
  );
}

export default App;
