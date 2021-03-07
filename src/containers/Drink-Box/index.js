import React from 'react'
import style from './style'

const DrinksBox = ({drinks}) => {
    
    const classes = style();

    return (
        drinks.map(item => (
            <div className={classes.drink_container}>
                <img src={item.strDrinkThumb} className={classes.drink_image} alt="z"/>
                <p className={classes.drink_id}>{item.drink_id}</p>
                <p className={classes.drink_name}>{item.strDrink}</p>
            </div> 
        ))
    )
}

export default DrinksBox