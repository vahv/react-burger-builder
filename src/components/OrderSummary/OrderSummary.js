import React from 'react';
import Aux from '../../hoc/Aux';

const orderSummary = (props) => {
    const jsxIngredients = Object.keys(props.ingredients)
            .map(key => 
                <li key={key}>
                    <span style={{textTransform: "capitalize"}}>{key}:</span> 
                    {props.ingredients[key]}
                </li>);
    return ( 
        <Aux>
            <h3>Your order summary</h3>
            <p>Your burger contains the following ingredients: </p>
            <ul>
                {jsxIngredients}
            </ul>
            <button>Continue to Checkout</button>
        </Aux>
     );
}
 
export default orderSummary;