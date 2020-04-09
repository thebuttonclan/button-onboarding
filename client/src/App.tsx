import React from 'react';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from './RelayEnvironment';

import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <QueryRenderer environment={environment} query={graphql`
          query AppQuery {
            allTodos {
              nodes {
                id,
                task,
                completed,
                dateCreated,
                dateUpdated
              }
            }
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if(error) {
            return <div>Error rendering query...</div>
          }
          return <div>{JSON.stringify(props)}</div>
        }}>
        </QueryRenderer>
      </main>
    </div>
  );
}

export default App;
