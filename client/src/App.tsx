import React from 'react';
import logo from './logo.svg';
import './App.css';
import environment from './RelayEnvironment';

import { QueryRenderer } from 'react-relay';
const graphql = require('babel-plugin-relay/macro');

class App extends React.Component {
  render() { 
    return (
      <QueryRenderer
        environment={environment}
        // query={ graphql`
        //   query AppQuery {
        //     ...TodoList_list
        //   }
        // `}

        query={ graphql`
          query AppQuery {
              allTasks {
                nodes{
                  id,
                  task,
                  completed
                }
            }
          }
        `}
        variables={{}} 
        render={({error, props}) => {


          if(error) {
            return <p>{JSON.stringify(error)}</p>;
          }
          if(!props || props == null){
            return <div>Loading...</div>;
          }

          return(
            <div>
              <p>{JSON.stringify(props)}</p>
            </div>
          );
        }}
        />
      );
    }
}

export default App;
