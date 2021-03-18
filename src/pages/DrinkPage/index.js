import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PageWrapper from '~/containers/page-wrapper/page-wrapper'
import { getDrinkDescription } from '~/redux/actions/actions';
import Loading from '~/components/loading'
import DrinksBox from '~/containers/Drink-Box'
import style from './styles';

const DrinkPage = ({ drinkId }) => {
    const dispatch = useDispatch();
    const classes = style();

    useEffect(() => { dispatch(getDrinkDescription(drinkId)) }, [dispatch]);

    return (
        <PageWrapper>
            <Loading />

        </PageWrapper>
    )
}

export default DrinkPage;