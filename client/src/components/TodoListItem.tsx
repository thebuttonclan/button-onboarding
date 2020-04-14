import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';

import './TodoListItem.css';

export interface Props {
  completed?: boolean;
  markComplete: (event: React.FormEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
  todo: {}
}

function TodoListItem(props: Props) {
  if(props.todo) {
    console.log('I have a todo!: ', props.todo);
  }
  return (
    <label>
      <input 
        type="checkbox"
        readOnly={!props.markComplete}
        checked={props.completed}
        onChange={props.markComplete}
        />
      <span>{props.children}</span>
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