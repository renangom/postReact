import React from 'react'
import Post from './Post';

export default class App extends React.Component{
    render(){
        return(
            <div>
                <h1> Hello World </h1>
                <Post title="Olá mundo" />
                <Post title="Isso é muito bom" />
                <Post title="Eu gosto disso" />
            </div>

        );
    }
}