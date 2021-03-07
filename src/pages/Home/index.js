import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PageWrapper from '~/containers/page-wrapper/page-wrapper'
import { getVodkaDrinks } from '~/redux/actions/actions';
import Loading from '~/components/loading'
import DrinksBox from '~/containers/Drink-Box'
import style from './styles';

const Home = () => {
    const dispatch = useDispatch();
    const classes = style();    
    const drinks = useSelector(({ vodkaDrinks }) => vodkaDrinks);
    
    useEffect(() => { dispatch(getVodkaDrinks()) }, [dispatch]);

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