import React, { useState } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer, commitMutation, RelayProp } from 'react-relay';
import { TodoListItem_todo } from './__generated__/TodoListItem_todo.graphql';
import { TodoListItemMutationResponse } from './__generated__/TodoListItemMutation.graphql';

import './TodoListItem.css';

export interface Props {
  todo: TodoListItem_todo;
  relay: RelayProp
}

const mutation = graphql`
  mutation TodoListItemMutation ($input: UpdateTodoInput!) {
    updateTodo(input: $input) {
      todo { completed }
      clientMutationId
    }
  }
`;

function TodoListItem(props: Props) {
  const [completed, setCompleted] = useState(props.todo.completed);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedVal = e.target.checked;
    commitMutation(props.relay.environment, {
      mutation,
      variables: {
        input: {
          id: props.todo.id,
          todoPatch: {
            completed: updatedVal
          },
          clientMutationId: `${Date.now()}-${props.todo.id}`
        }
      },
      onCompleted: (resp: TodoListItemMutationResponse) => {
        setCompleted(resp.updateTodo.todo.completed);
      },
      onError: (err) => console.log('Error...', err)
    });
  };

  return (
    <label>
      <input 
        type="checkbox"
        checked={completed}
        onChange={handleChange}
        />
      <span>{props.todo.task}</span>
    </label>
  )
}

const TodoListItemContainer = createFragmentContainer(TodoListItem, {todo: graphql`
  fragment TodoListItem_todo on Todo {
    id,
    task,
    completed,
    dateCreated,
    dateUpdated
  }
`});

export { TodoListItemContainer, TodoListItem };