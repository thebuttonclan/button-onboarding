import React from 'react';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from './RelayEnvironment';
import TodoList from './TodoList';
import {AppQuery} from './__generated__/AppQuery.graphql'
import './App.css';


function App() {
    return (
      <div className="App">
        <main>
          <QueryRenderer<AppQuery>
            environment={environment}
            query={ graphql`
              query AppQuery {
                query {
                  ...TodoList_taskListData
                }
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
                  <TodoList taskListData={props.query} />
                </div>
              );
            }}
          />
        </main>
      </div>
    );
}

export default App;
