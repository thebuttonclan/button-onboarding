import React from 'react';
import logo from './logo.svg';
import './App.css';
import environment from './RelayEnvironment';

import { QueryRenderer } from 'react-relay';
const graphql = require('babel-plugin-relay/macro');

function App() {
  return (
    <QueryRenderer
      environment={environment}
      query={ graphql`
        query AppQuery {
          taskById(id: 11) {
            task
          }
        }
      `}
      variables={{}} 
      render={({error, props}) => {
        if(error) {
          return <div>Error!</div>;
        }
        if(!props || props == null){
          return <div>Loading...</div>
        }
        return <div>To do: {props['taskById']['task']}</div>;
      }}
      />
  );
}

export default App;
