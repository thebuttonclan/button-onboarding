import React from 'react';
import './TodoListItem.css';

export interface Props {
  completed?: boolean;
  markComplete: (event: React.FormEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
}

export default function TodoListItem(props: Props) {
  return (
    <label>
      <input 
        type="checkbox"
        checked={props.completed}
        onChange={props.markComplete}
        />
      <span>{props.children}</span>
    </label>
  )
}