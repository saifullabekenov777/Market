import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullIlem from "./components/ShowFullIlem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      correntItems: [],
      items: [
        {
          id: 1,
          title: "Стул-серый",
          img: "image.png",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 2,
          title: "Стол",
          img: "image copy.png",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          category: "tables",
          price: "149.00",
        },
        {
          id: 3,
          title: "Диван",
          img: "image copy 2.png",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          category: "sofa",
          price: "549.99",
        },
        {
          id: 4,
          title: "Лампа",
          img: "image copy 3.png",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          category: "light",
          price: "25.00",
        },
        {
          id: 5,
          title: "Стул-белый",
          img: "image copy 4.png",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
          category: "chairs",
          price: "49.99",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.correntItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.correntItems}
          onAdd={this.addToOrder}
        />
        {this.state.showFullItem && (
          <ShowFullIlem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    );
  }
  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }
  chooseCategory(category) {
    if (category === "all") {
      this.setState({ correntItems: this.state.items });
      return;
    }
    this.setState({
      correntItems: this.state.items.filter((el) => el.category === category),
    });
  }
  deleteOrder = (id) => {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  };
  addToOrder = (item) => {
    let isInAttay = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInAttay = true;
    });
    if (!isInAttay) this.setState({ orders: [...this.state.orders, item] });
  };
}

export default App;
