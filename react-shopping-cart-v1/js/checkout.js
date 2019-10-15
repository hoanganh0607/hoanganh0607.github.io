function Checkout(props) {
  const formatPrice = props.formatPrice
  const products = props.products
  let sumPrice = 0;

  //Tính tổng tiền tạm thời
  for (let i = 0; i < products.length; i++) {
    sumPrice += (products[i].price * products[i].quantity);
  }

  //Tính tổng tiền
  let total = sumPrice + sumPrice * 0.1;


  return (
    <section className="container">
      <div className="promotion">
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input type="text" id="promo-code" /> <button type="button" />
      </div>
      <div className="summary">
        <ul>
          <li>
            Tạm tính: <span>{formatPrice(sumPrice)}</span>
          </li>
          <li>
            Thuế: <span>10%</span>
          </li>
          <li className="total">
            Tổng tiền: <span>{formatPrice(total)}</span>
          </li>
        </ul>
      </div>
      <div className="checkout">
        <button type="button">Check Out</button>
      </div>
    </section>

  );
}




