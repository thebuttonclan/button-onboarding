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
      query {
        ...TodoList_todos
      }
    }
  }
`;

function CreateTodo(props) {
  const submit = (e) => {
    const input = e.target.form.elements.newTodo;

    commitMutation(props.relay.environment, {
      mutation,
      variables: {
        input: {
          todo: { task: input.value }
        }
      },
      onCompleted: () => input.value = ''
    })
  };

  return (
    <div className="input-new">
      <input name="newTodo" placeholder="Something to do..." />
      <button onClick={ submit }>Add</button>
    </div>
  );
}

const CreateTodoContainer = createFragmentContainer(CreateTodo, {});

export { CreateTodo, CreateTodoContainer }
