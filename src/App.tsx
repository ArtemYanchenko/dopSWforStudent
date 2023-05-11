import React, {ChangeEvent} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';
import store, {ActionsType, RootType, StorePropsType} from './components/redux/state';


type AppProps = {
    store: StorePropsType
    dispatch: (action: ActionsType) => void
}



function App(props:AppProps){
    const state = props.store.getState()
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>

            <div className="app-wrapper-content">
                <Routes>
                    <Route path={'/profile'} element={<Profile profilePage={state.profilePage} dispatch={props.dispatch.bind(store)}/>}/>
                    <Route path={'/dialogs'} element={<Dialogs messagesPage={state.messagesPage} dispatch={props.dispatch.bind(store)}/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;
