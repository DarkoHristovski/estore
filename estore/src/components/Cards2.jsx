const Cards2 = ({ product }) => {

    {console.log({product})}
    
      return (
        <div className="card" style={{ width: "18rem" }}>
          <img src={product.thumbnail} className="card-img-top" alt={product.brand} />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">
              {product.description}
            </p>
            <p className="card-text">
              Price: {product.price}$
            </p>
            <p className="card-text">
              Category: {product.category}
            </p>
            <p className="card-text">
              Category: {product.rating}
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      )

   
  }
  
  export default Cards2;