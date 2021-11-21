import React, { Component } from 'react';

import qs from 'query-string';

class ProductDetails extends Component {
    handleSave = () =>{
        // console.log("Save");
        this.props.history.replace("/Card");
    };
    render() { 
        const res =qs.parse(this.props.location.search);
        console.log(res);
       const product =this.props.products.filter(
           c => c.id === parseInt(this.props.match.params.id)
           )[0];
   
       return (
            <React.Fragment>
               <h1>productDetails No.{this.props.match.params.id}</h1>
               <h2>{product.name}</h2>
               <h3>count = {product.count}</h3>
               <button onClick={this.handleSave} className="btn btn-primary ptn-primary-sm">Save</button>
           </React.Fragment>
           );
   
    }
}
 
export default ProductDetails;

