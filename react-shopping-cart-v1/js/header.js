function MyHeader(props) {

  const products = props.products
  let sumProduct = 0;

  //Cập nhật số lượng sản phẩm
  for (let i = 0; i < products.length; i++) {
    sumProduct += products[i].quantity;
  }
  
  return (
    <header className="container">
      <h1>Shopping Cart React</h1>
      <ul className="breadcrumb">
        <li>Home</li>
        <li>Shopping Cart bang React</li>
      </ul>
      <span className="count">{sumProduct} items in the bag</span>
    </header>
  );
}





