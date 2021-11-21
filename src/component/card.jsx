import React from 'react';

const Card = props => {
    const style =!props.product.isInCart
    ?{color:'#80808080', cursor:'pointer'}
    :{cursor:'pointer'};

    
    return ( 
        
        <il
        style={style}
        onClick={()=> props.onClick(props.product)}
        className="fas fa-cart-plus"></il>
    
     );
}
 
export default Card;