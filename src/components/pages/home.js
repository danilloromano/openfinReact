import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PageWrapper from '../organisms/page-wrapper/page-wrapper'
import { getVodkaDrinks } from '../../redux/actions/actions';
import Loading from '../atoms/loading'

const Home = () => {
    const dispatch = useDispatch();
    const arrDrinks = useSelector(({ vodkaDrinks }) => vodkaDrinks)

    useEffect(() => dispatch(getVodkaDrinks()), []);

    console.log('arrDrinks ____________', arrDrinks)

    return (
        <PageWrapper>
            <Loading />
            <h1>Welcome </h1>
        </PageWrapper>
    )
}

export default Home;