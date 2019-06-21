import React from 'react';
import styles from "./BuildControls.module.css";
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {ingredientLabel:'Salad', type:'salad'},
    {ingredientLabel:'bacon', type:'bacon'},
    {ingredientLabel:'meat', type:'meat'},
    {ingredientLabel:'cheese', type:'cheese'}
];
const buildControls = (props) => {
    
    return ( 
        <div className={styles.BuildControls}>
            {controls.map(control => 
                <BuildControl 
                    onClickMore={props.addIngredient.bind(this, control.type)}
                    onClickLess={props.removeIngredient.bind(this, control.type)}
                    key={control.ingredientLabel} 
                    ingredientLabel={control.ingredientLabel}
                    disabled={props.disabled[control.type]}
                />)
            }
        </div>
     );
}
 
export default buildControls;