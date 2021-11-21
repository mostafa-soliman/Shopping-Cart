import React from 'react';
import Card from './card';
// import product from './Product';


const Menus = props => {
    return (        
      <React.Fragment>
        <h1>Menu</h1>
        <table className="table">
            <thead>
                <th>Name</th>
                <th>Price</th>
                <th></th>
            </thead>
            <tbody>
                {props.products.map(product =>(
                    <tr>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                        <Card onClick={props.onClick} product={product}/>
                    </td>
                </tr>
                ))}

            </tbody>
        </table>
      </React.Fragment> 
      );
};
 
export default Menus;

// class Menus extends Component {
//     render() { 
//         return (
//             <React.Fragment>
//               <h1>Menu</h1>
//               <table className="table">
//                   <thead>
//                       <th>Name</th>
//                       <th>Price</th>
//                       <th></th>
//                   </thead>
//                   <tbody>
//                       {props.products.map(product =>(
//                           <tr>
//                           <td>{product.name}</td>
//                           <td>{product.price}</td>
//                           <td>
//                               <Card onClick={this.props.onClick} product={product}/>
//                           </td>
//                       </tr>
//                       ))}

//                   </tbody>
//               </table>
//             </React.Fragment>
//         )
        
//     }
// }
 
// export default Menus;