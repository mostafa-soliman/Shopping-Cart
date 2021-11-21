import React, {Component} from 'react';
import Product from './Product';

class ShoppingCard extends Component {
    render() { 
        const {onReset,products,onDelete,onDecrement,onIncrement} = this.props;
        return (
            <React.Fragment>
           
                <h1>Shopping card</h1>
                <button onClick={onReset} className="btn btn-secondary">Resat</button>
                {products.map(products =>(
                <Product
                product={products}
                key={products.id} 
                onDelete={onDelete}
                onDecrement={onDecrement} 
                onIncrement={onIncrement}
                >
                </Product>
                ))}
        </React.Fragment>
        );

    }
}
 
export default ShoppingCard;