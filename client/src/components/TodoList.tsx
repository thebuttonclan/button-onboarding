import React, { useState } from 'react';
import { TodoListItemContainer as TodoListItem } from './TodoListItem';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import { TodoList_todos } from './__generated__/TodoList_todos.graphql';

import './TodoList.css';

export interface Props {
  todos: TodoList_todos;
  // markComplete: (id: string, completed?: boolean) => void;
};

function TodoList ({todos}: Props) {
  // const [items, setItems] = useState(todos);
  const items = todos?.allTodos.nodes;

  const listItems = items.map((item, i) => {
    const handleChange = () => {
      // setItems(prev => {
      //   return [
      //     ...prev.slice(0, i),
      //     {...prev[i], completed: !prev[i].completed},
      //     ...prev.slice(i+1)
      //   ]
      // });
      // markComplete(item.id, !item.completed)
    };

    return (
      <TodoListItem 
        key={item.id}
        // markComplete={handleChange}
        todo={item}
        >
      </TodoListItem>
    )
  });
  return <form>{
    listItems.length === 0 ? <p>Nothing left to do!</p> : listItems
  }</form>
}

TodoList.defaultProps = {
  // todos: [],
  // markComplete: () => {},
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