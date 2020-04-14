import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import { TodoListItem_todo } from './__generated__/TodoListItem_todo.graphql';

import './TodoListItem.css';

export interface Props {
  completed?: boolean;
  markComplete: (event: React.FormEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
  todo: TodoListItem_todo;
}

function TodoListItem(props: Props) {
  return (
    <label>
      <input 
        type="checkbox"
        readOnly={!props.markComplete}
        checked={props.completed}
        onChange={props.markComplete}
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