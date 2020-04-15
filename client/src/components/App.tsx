import React from 'react';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../RelayEnvironment';
import { TodoListContainer as TodoList } from './TodoList';

import './App.css';
import { CreateTodo } from './CreateTodo';

function App() {
  return (
    <div className="App">
      <main>
        <QueryRenderer environment={environment} query={graphql`
          query AppQuery {
            ...TodoList_todos
          }
        `}
        variables={{}}
        render={({error, props}:{error: any, props: any}) => {
          if(error) {
            return <div>Error rendering query...</div>
          }
          if(props) {
            return (
              <TodoList todos={props}>
                <CreateTodo/>
              </TodoList>
            );
          }
        }}>
        </QueryRenderer>
      </main>
    </div>
  );
}

export default App;
