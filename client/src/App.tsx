import React from 'react';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from './RelayEnvironment';

import './App.css';


function App() {
    return (
      <div className="App">
        <main>
          <QueryRenderer
            environment={environment}
            query={ graphql`
              query AppQuery {
                ...TodoList_list
              }
            `}

            variables={{}} 
            render={({error, props}) => {
              if(error) {
                return (
                  <p>{JSON.stringify(error)}</p>
                );
              }
              if(!props || props == null){
                return (
                  <div>Loading...</div>
                );
              }

              return(
                <div>
                  <p>{JSON.stringify(props)}</p>
                </div>
              );
            }}
          />
        </main>
      </div>
    );
}

export default App;
