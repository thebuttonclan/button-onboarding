import React, { useState } from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';

export interface Props {
  todos: {task: string, id: string, completed?: boolean}[];
  // markComplete: (id: string, completed?: boolean) => void;
};

export default function TodoList({todos}: Props) {
  const [items, setItems] = useState(todos);

  const listItems = items.map((item, i) => {
    const handleChange = () => {
      setItems(prev => {
        return [
          ...prev.slice(0, i),
          {...prev[i], completed: !prev[i].completed},
          ...prev.slice(i+1)
        ]
      });
      // markComplete(item.id, !item.completed)
    };

    return (
      <TodoListItem 
        key={item.id}
        completed={item.completed}
        markComplete={handleChange}
        >
      {item.task}
      </TodoListItem>
    )
  });
  return <form>{
    listItems.length === 0 ? <p>Nothing left to do!</p> : listItems
  }</form>
}

TodoList.defaultProps = {
  todos: [],
};