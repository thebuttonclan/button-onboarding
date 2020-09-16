import React from 'react';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../RelayEnvironment';
import { TodoListContainer as TodoList } from './TodoList';
import { CreateTodoContainer as CreateTodo } from './CreateTodo';

import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <QueryRenderer environment={environment} query={graphql`
          query AppQuery {
            query {
              ...TodoList_todos
            }
          }
        `}
        variables={{}}
        render={({error, props}:{error: any, props: any}) => {
          if(error) {
            return <div>Error rendering query...</div>
          }
          if(props) {
            return (
              <TodoList todos={props.query}>
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
