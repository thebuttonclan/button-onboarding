import React from 'react';
import { storiesOf } from '@storybook/react';

import TodoList from '../TodoList';

const todos = [
  {task: "Do Task 1", id: "WyJ0b2RvcyIsMl0=", completed: false},
  {task: "Do Task 2", id: "WyJ0b2RvcyIsM10=", completed: false},
  {task: "Do Task 3", id: "WyJ0b2RvcyIsNF0=", completed: false}
];

storiesOf('TodoList', module)
  .add('Base (read only)', () => {
    return <TodoList items={todos}/>
  })
  .add('Mark tasks completed', () => {
    return <TodoList todos={todos} markComplete={(id, bool) => console.log(`Mark ${id} completed: ${bool}`)}/>
  })