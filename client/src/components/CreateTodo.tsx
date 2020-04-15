import React from 'react';
// import graphql from 'babel-plugin-relay/macro';

import './CreateTodo.css';
import './TodoListItem.css';

export interface Props {

};

// const mutation = graphql`
//   mutation CreateTodoMutation ($input: CreateTodoInput!) {
//     createTodo(input: $input) {
//       todo {
//         task
//       }
//     }
//   }
// `;

function CreateTodo(props: Props) {
  return (
    <div className="input-new">
      <input type="text" value="something"/>
      <button>Add</button>
    </div>
  );
}

export { CreateTodo }