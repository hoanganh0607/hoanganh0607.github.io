class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    name: "Hàng 1",
                    image: "https://via.placeholder.com/200x150",
                    description: "Hàng dễ vỡ xin nhẹ tay 1",
                    price: 1000000,
                    quantity: 1
                },
                {
                    id: 2,
                    name: "Hàng 2",
                    image: "https://via.placeholder.com/200x150",
                    description: "Hàng dễ vỡ xin nhẹ tay 2",
                    price: 1000000,
                    quantity: 1
                },
                {
                    id: 3,
                    name: "Hàng 3",
                    image: "https://via.placeholder.com/200x150",
                    description: "Hàng dễ vỡ xin nhẹ tay 3",
                    price: 1000000,
                    quantity: 1
                }

            ],
        };


    }

    //Chuyển đổi tiền VND
    formatPrice(price) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    }

    // Xóa sản phẩm theo id
    removeProduct(id) {
        // Tạo ra mảng mới chứa các sản phẩm có id khác với id truyền vào
        const newProduct = this.state.products.filter(product => {
            return product.id !== id;
        });

        // Cập nhật lại state (không chứa sản phẩm có id truyền vào)
        this.setState({
            products: newProduct
        });
    }

    // Cập nhật số lượng sản phẩm theo id
    updateQuantity(id, event) {
        const quantity = event.target.value
        const newProduct = this.state.products.map(product => {
            if (product.id === id) {
                product.quantity = parseInt(quantity);
            }
            return product;
        });

        this.setState({
            products: newProduct
        });
    }

    render() {
        return (
            <main>
                <MyHeader products={this.state.products} />
                <Products
                    product={this.state.products}
                    onRemoveProduct={this.removeProduct.bind(this)}
                    onUpdateQuantity={this.updateQuantity.bind(this)}
                    formatPrice={this.formatPrice}
                />
                <Checkout
                    products={this.state.products}
                    formatPrice={this.formatPrice}
                    
                />
            </main>

        );

    }


}    