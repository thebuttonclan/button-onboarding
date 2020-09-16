import React from 'react';
import { TodoListItemContainer as TodoListItem } from './TodoListItem';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import { TodoList_todos } from './__generated__/TodoList_todos.graphql';

import './TodoList.css';

export interface Props {
  todos: TodoList_todos;
  children?: React.ReactNode
};

function TodoList ({ todos, children }: Props) {
  const items = todos?.allTodos.nodes;

  const listItems = items.map((item, i) => {
    return (
      <TodoListItem 
        key={item.id}
        todo={item}
        >
      </TodoListItem>
    )
  });
  return (
    <form onSubmit={e => e.preventDefault()}>
      { listItems.length === 0 ? <p>Nothing to be done! Add a new task:</p> : listItems }
      { children }
    </form>
  );
}

TodoList.defaultProps = {
  // todos: [],
};

const TodoListContainer = createFragmentContainer(TodoList, {todos: graphql`
  fragment TodoList_todos on Query {
    allTodos {
      nodes {
        id
        ...TodoListItem_todo
      }
    }
  }
`});

export { TodoListContainer, TodoList };