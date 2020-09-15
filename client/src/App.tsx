import React from 'react';
import logo from './logo.svg';
import './App.css';
import environment from './RelayEnvironment';

import { graphql, QueryRenderer } from 'react-relay';

function App() {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query AppQuery {
          taskById(id: 10) {
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
        return <div>To do: {JSON.stringify(props)}</div>;
      }}
      />
  );
}

export default App;
