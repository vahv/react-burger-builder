import React from 'react';
import Aux from '../../hoc/Aux';
import Button from '../UI/Button/Button';

const orderSummary = (props) => {
    const jsxIngredients = Object.keys(props.ingredients).filter(key => props.ingredients[key] > 0)
            .map(key => 
                <li key={key}>
                    <span style={{textTransform: "capitalize"}}>{key}</span> 
                    : {props.ingredients[key]}
                </li>);
    return ( 
        <Aux>
            <h3>Your order summary</h3>
            <p>Your burger contains the following ingredients: </p>
            <ul>
                {jsxIngredients}
            </ul>
            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <Button btnType={'Danger'} clicked={props.cancel}>Cancel</Button>
            <Button btnType={'Success'} clicked={props.continue}>Checkout</Button>
        </Aux>
     );
}
 
export default orderSummary;