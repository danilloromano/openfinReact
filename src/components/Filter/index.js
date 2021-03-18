import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import styles from './styles'

const Filter = ({ drinks, handleFilteredDrinks }) => {
    const classes = styles();
    const [inputValue, setInputValue] = useState('')

    const handleSearch = (e) => {
        setInputValue(e.target.value);
        return drinks.filter(drink => {
            // console.log('drink', drink['strDrink'], inputValue)
            //  return drink['strDrink'].toLowerCase().includes(inputValue.toLowerCase())
             console.log('filtered', drink['strDrink'].toLowerCase().includes(inputValue.toLowerCase()))
            //  handleFilteredDrinks(filtered)
        })
    }

return (
    <div className={classes.container}>
        <TextField
            id="Search"
            label="Search"
            variant="outlined"
            placeholder="Search drink"
            onChange={handleSearch}
        />
        <IconButton color="primary" aria-label="upload picture" component="span">
            <SearchIcon />
        </IconButton>
    </div>
);
}

export default Filter