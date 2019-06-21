import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from './Burger/Burger';
import BuildControls from './BuildControls/BuildControls';
const INGREDIENT_PRICES={
    meat:3,
    bacon:2,
    salad:1,
    cheese:1    
};
class BurgerBuilder extends Component{
    
    state = {
        ingredients: {
            meat:0,
            bacon:0,
            salad:0,
            cheese:0
        },
        total: 4
    }

    addIngredientHandler = (type) => {
        const oldIngredientCount = this.state.ingredients[type];
        const updatedIngredIngredientCount = oldIngredientCount + 1;
        const updatedIngredIngredients = {...this.state.ingredients};
        updatedIngredIngredients[type] = updatedIngredIngredientCount;

        const oldTotal = this.state.total;
        const addedIngredientPrice = INGREDIENT_PRICES[type];
        const updatedTotal = oldTotal + addedIngredientPrice;
        
        this.setState({
            ingredients: updatedIngredIngredients,
            total:updatedTotal
        }); 
    }

    removeIngredientHandler = (type) => {
        const oldIngredientCount = this.state.ingredients[type];
        if(oldIngredientCount > 0) {
            const updatedIngredIngredientCount = oldIngredientCount - 1;
            const updatedIngredIngredients = {...this.state.ingredients};
            updatedIngredIngredients[type] = updatedIngredIngredientCount;
    
            const oldTotal = this.state.total;
            const addedIngredientPrice = INGREDIENT_PRICES[type];
            const updatedTotal = oldTotal - addedIngredientPrice;
            
            this.setState({
                ingredients: updatedIngredIngredients,
                total:updatedTotal
            }); 

        }
    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
              <Burger ingredients={this.state.ingredients} total={this.state.total}/>
              <BuildControls 
                    addIngredient={this.addIngredientHandler} 
                    removeIngredient={this.removeIngredientHandler}
                    disabled={disabledInfo}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;