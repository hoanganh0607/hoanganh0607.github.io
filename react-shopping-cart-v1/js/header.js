class MyHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className="container">
        <h1>Shopping Cart React</h1>
        <ul className="breadcrumb">
          <li>Home</li>
          <li>Shopping Cart bang React</li>
        </ul>
        <span className="count">3 items in the bag</span>
      </header>
    );
  }
}



