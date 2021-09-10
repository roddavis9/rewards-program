import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import mockUserData from './_mock_/users.mockdata.json';
import mockTransData from './_mock_/transactions.mockdata.json';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import './App.css';

export const AppContext = React.createContext({});

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userData, setUserData] = useState('');
    const [userMockData, setUserMockData] = useState('');
    const [transactionData, setTransactionData] = useState('');
    const [transactionMockData, setTransactionMockData] = useState('');
    const [userId, setUserId] = useState('');
    const [username, setUsername] = useState('');


    const value = {
        isAuthenticated,
        setIsAuthenticated,
        userData,
        transactionData,
        userId,
        username,
        setUsername,
        setUserId
    }

    const getMockData = () => {
        console.log('get mockdata');
        const defaultUserData = localStorage.getItem('userData');
        const defaultTransactionData = localStorage.getItem('transactionData');

        if (defaultUserData !== '' && defaultUserData !== null) {
            // no default data so set it into localStorage
            localStorage.setItem('userData', mockUserData);
            localStorage.setItem('transactionData', mockTransData);
            setUserMockData(mockUserData);
            setTransactionData(mockTransData);
        } else {
            console.log('defaultUserData', defaultUserData);
        }

    }

    useEffect(() => {
        getMockData();
    }, []);


    return (
        <AppContext.Provider value={value}>
            <Layout>
                <Switch>
                    <Route path='/' exact>
                        <Redirect to='/home' />
                    </Route>
                    <Route path='/home' exact>
                        <Home />
                    </Route>
                </Switch>
            </Layout>
        </AppContext.Provider>
    );
}

export default App;
