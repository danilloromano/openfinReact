import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PageWrapper from '~/containers/page-wrapper/page-wrapper'
import { getAllAlcolicDrinks, } from '~/redux/actions/actions';
import Loading from '~/components/loading'
import DrinksBox from '~/containers/Drink-Box'
import TextField from '@material-ui/core/TextField';
import style from './styles';

const Home = () => {
    const dispatch = useDispatch();
    const classes = style();

    const drinks = useSelector(({ allAlcolicDrinks }) => allAlcolicDrinks);
    const [filtered, setFiltered] = useState(drinks);

    useEffect(() => { dispatch(getAllAlcolicDrinks()) }, []);
    useEffect(() => {setFiltered(drinks)}, [drinks]);

    const handleSearch = (e) => {
        let filteredItems = drinks.filter(drink => {
            return drink['strDrink'].toLowerCase().includes(e.target.value.toLowerCase())
        });

        setFiltered(filteredItems)
    }

    return (
        <PageWrapper>
            <Loading />

            <div className={classes.home_container}>
                <div className={classes.container}>
                    <TextField
                        id="Search"
                        label="Search"
                        variant="outlined"
                        placeholder="Search drink"
                        onChange={handleSearch}
                    />
                </div>
                {filtered && <DrinksBox drinks={filtered} />}
            </div>
        </PageWrapper>
    )
}

export default Home;