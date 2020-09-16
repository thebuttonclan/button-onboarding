import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer, commitMutation, RelayProp } from 'react-relay';
import { TodoListItem_todo } from './__generated__/TodoListItem_todo.graphql';

import './TodoListItem.css';

export interface Props {
  todo: TodoListItem_todo;
  relay: RelayProp
}

const mutation = graphql`
  mutation TodoListItemMutation ($input: UpdateTodoInput!) {
    updateTodo(input: $input) {
      todo {
        id
        completed
      }
    }
  }
`;

function TodoListItem(props: Props) {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedVal = e.target.checked;
    commitMutation(props.relay.environment, {
      mutation,
      variables: {
        input: {
          id: props.todo.id,
          todoPatch: {
            completed: updatedVal
          }
        }
      },
      optimisticResponse: {
        updateTodo: {
          todo: {
            completed: updatedVal,
            id: props.todo.id
          },
        }
      },
      onError: (err) => console.log('Error...', err)
    });
  };

  return (
    <label>
      <input 
        type="checkbox"
        checked={props.todo.completed}
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