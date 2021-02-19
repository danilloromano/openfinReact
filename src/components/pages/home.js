import React, { useEffect } from 'react'
import PageWrapper from '../organisms/page-wrapper/page-wrapper'
import { connect } from 'react-redux';
import { getNews } from '../../redux/actions/actions';
import Loading from '../atoms/loading'

const Home = ({ getNews }) => {
    useEffect(() => getNews(), []);

    return (
        <PageWrapper>
            <Loading />
            <h1>Welcome to the drunk with class</h1>
        </PageWrapper>
    )
}

const mapDispatchToProps = {
    getNews: getNews,
};

export default connect(null, mapDispatchToProps)(Home);