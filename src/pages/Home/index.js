import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PageWrapper from '~/containers/page-wrapper/page-wrapper'
import { getAllAlcolicDrinks, } from '~/redux/actions/actions';
import Loading from '~/components/loading'
import DrinksBox from '~/containers/Drink-Box'
import style from './styles';

const Home = () => {
    const dispatch = useDispatch();
    const classes = style();    
    const drinks = useSelector(({ allAlcolicDrinks }) => allAlcolicDrinks);
    
    useEffect(() => { dispatch(getAllAlcolicDrinks()) }, [dispatch]);

    return (
        <PageWrapper>
            <Loading />
            <div className={classes.home_container}>
                {drinks && <DrinksBox drinks={drinks} />}
            </div>
        </PageWrapper>
    )
}

export default Home;