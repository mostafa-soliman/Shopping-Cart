import React, { Component } from 'react';
import NavBar from './navbar';
import ShoppingCard from './shoppingCard';
import { Route , Switch , Redirect} from 'react-router-dom';
import About from './about';
import Contact from './contact';
import Home from './home';
import ProductDetails from './productDetails';
import NotFound from './notFound';
import Menus from './menus';
import Login from './login';

class App extends Component {
    state={
        products:[
            {id:1,name:"Burger",price:30,count:0,isInCart:false},
            {id:2,name:"Fries",price:20,count:0,isInCart:false},
            {id:3,name:"Cola",price:10,count:0,isInCart:false}
        ]
    }

    handleDelete= product =>{
        const newProduct=this.state.products.filter(p=> p.id !== product.id);
        this.setState({products:newProduct});
    }

    handelReset= ()=>{
       //clone
        let prod =[...this.state.products];
       //Edit
       prod= prod.map(p =>{
            p.count =0;
            return p;
        });
        //setStat
        this.setState({products:prod});
    }

    get= product =>{
        //clone
        const products =[...this.state.products];
        const index = products.indexOf(product);
        products[index]={...products[index]};
        //Edit
        products[index].count++;
        this.setState({ products }); 
     };
    getN= product =>{
          //clone
          const products =[...this.state.products];
          const index = products.indexOf(product);
          products[index]={...products[index]};
          //Edit
          products[index].count--;
          this.setState({ products }); 
     };

     handleInCardChange = product => {
        //clone
        const products =[...this.state.products];
        const index =products.indexOf(product);
        products[index]={...products[index]};
        //Edit
        products[index].isInCart = !products[index].isInCart;
        //set state
        this.setState({products});
     };

    render() { 
        return(
            <React.Fragment>
                <NavBar productsCount={this.state.products.filter(p=> p.count>0 ).length} />
                <main className="container">
                    
                <Switch>


                    <Route
                        path="/product/:id/:name?" 
                        render={props => (
                            <ProductDetails products={this.state.products} {...props}/>
                            )}
                    />
                    <Route path="/Card" render={(props) =><ShoppingCard 
                        products={this.state.products}
                        onReset={this.handelReset}
                        onDelete={this.handleDelete}
                        onDecrement={this.getN}
                        onIncrement={this.get}
                        {...props}
                        /> } />
                    <Route path="/notfound" component={NotFound} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route
                    path="/menus"
                    render={props => (
                        <Menus
                        {...props}
                        products={this.state.products}
                        onClick={this.handleInCardChange}
                        />
                    )} 
                    />
                    <Redirect from="/" to ="/home"  />
                    <Redirect to="/notfound" />
                    </Switch>
                 
                 {/* react Element  */}
                    {/* <ShoppingCard 
                    products={this.state.products}
                    onReset={this.handelReset}
                    onDelete={this.handleDelete}
                    onDecrement={this.getN}
                    onIncrement={this.get}
                    /> */}
                </main>   
            </React.Fragment>
        );
    }
}
 
export default App;