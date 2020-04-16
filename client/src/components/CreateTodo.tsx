import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer, commitMutation } from 'react-relay';

import './CreateTodo.css';
import './TodoListItem.css';

const mutation = graphql`
  mutation CreateTodoMutation ($input: CreateTodoInput!) {
    createTodo(input: $input) {
      todo {
        id
        task
      }
    }
  }
`;

function CreateTodo(props) {
  const submit = (e) => {
    const task = e.target.form.elements.newTodo.value;

    commitMutation(props.relay.environment, {
      mutation,
      variables: {
        input: {
          todo: { task }
        }
      }
    })
  };

  return (
    <div className="input-new">
      <input name="newTodo" placeholder="Something to do..." />
      <button onClick={ submit }>Add</button>
    </div>
  );
}

const CreateTodoContainer = createFragmentContainer(CreateTodo, graphql`
  fragment CreateTodo_todo on Todo {
    task
    ...TodoListItem_todo
  }
`);

export { CreateTodo, CreateTodoContainer }