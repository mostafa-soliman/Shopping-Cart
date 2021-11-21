import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class product extends Component {

    // state={
    //     name:this.props.product.name,
    //     count:this.props.product.count
    //     };

       

    render() { 
        return (
            <div className="row">
                <div className="col-1 m-2">
                <span className="fw-bold m-3">
                <Link to={`/product/${this.props.product.id}`}>{this.props.product.name} </Link>
                </span>
                </div>
                <div className="col">
                <span className="fw-bold btn btn-secondary m-1">{this.props.product.count}</span>
                <button onClick={()=> this.props.onDecrement(this.props.product)} className="btn btn-primary m-2" >-</button>
                <button onClick={()=>this.props.onIncrement(this.props.product)} className="btn btn-primary m-2" >+</button>
                <span style={{cursor:'pointer'}} onClick={()=> this.props.onDelete(this.props.product)}>
                    <i className="fas fa-trash"></i>
                </span>
                </div>
            </div>
        );
    }
}
export default product; 