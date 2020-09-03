import firebase from 'firebase/app';
import 'firebase/database';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Kodenames } from './Pages/Kodenames';
import { Recipes } from './Pages/Recipes';
import store from './Redux/store';

function App() {

    useEffect(() => {
        // Set the configuration for your app
        // TODO: Replace with your project's config object
        var config = {
            apiKey: "apiKey",
            authDomain: "projectId.firebaseapp.com",
            databaseURL: "https://benreynolds-me.firebaseio.com/",
            storageBucket: "bucket.appspot.com"
        };
        firebase.initializeApp(config);

        // Get a reference to the database service
        var database = firebase.database();

        function writeUserData(userId, name, email) {
            database.ref('users/' + userId).set({
              username: name,
              email: email,
            });
        }

        writeUserData('foo', 'Ben', 'ben@example.com')

    }, [ ]);

    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/kodenames'>
                        <Kodenames />
                    </Route>
                    <Route exact path='/recipes'>
                        <Recipes />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
