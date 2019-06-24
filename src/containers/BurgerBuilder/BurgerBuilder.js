import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

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
        total: 4,
        purchaseable: false,
        purchasing: false
    }
    
    updatePurchaseState(ingredients){
        const sum = Object.keys(ingredients)
            .map(key => ingredients[key])
                .reduce((sum, value) => {return sum+= value}, 0);
        this.setState({purchaseable: sum > 0});
    }
    
    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    cancelPurchaseHandler = () => {
        this.setState({purchasing: false});
    }

    continuePurchaseHandler = () => {
        alert('You have clicked on checkout!');
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
        this.updatePurchaseState(updatedIngredIngredients);
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
                total: updatedTotal
            });
            this.updatePurchaseState(updatedIngredIngredients); 

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
                <Modal show={this.state.purchasing} modalClose={this.cancelPurchaseHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        cancel={this.cancelPurchaseHandler}
                        continue={this.continuePurchaseHandler}
                    />
                </Modal>
              <Burger ingredients={this.state.ingredients} />
              <BuildControls 
                    addIngredient={this.addIngredientHandler} 
                    removeIngredient={this.removeIngredientHandler}
                    order={this.purchaseHandler}
                    disabled={disabledInfo}
                    purchaseable={this.state.purchaseable}
                    total={this.state.total}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;