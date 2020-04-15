import React from 'react';
import { storiesOf } from '@storybook/react';

import { TodoList } from '../TodoList';
import { TodoListItem } from '../TodoListItem';
import { CreateTodo } from '../CreateTodo';

import '../../index.css';

const todos = [
  {task: "Do Task 1", id: "WyJ0b2RvcyIsMl0=", completed: false},
  {task: "Do Task 2", id: "WyJ0b2RvcyIsM10=", completed: true},
  {task: "Do Task 3", id: "WyJ0b2RvcyIsNF0=", completed: false}
];

storiesOf('TodoList', module)
  .add('Mark tasks completed', () => {
    return <TodoList todos={todos} markComplete={(id, bool) => console.log(`Mark ${id} completed: ${bool}`)}/>
  })
  .add('List is empty (no todos)', () => {
    return <TodoList />
  })

storiesOf('TodoListItem', module)
  .add('Completed item (readonly)', () => {
    return <TodoListItem completed={true}>{todos[1].task}</TodoListItem>
  })
  .add('Incomplete item (readonly)', () => {
    return <TodoListItem completed={false}>{todos[0].task}</TodoListItem>
  })

storiesOf('CreateTodo', module)
  .add('Create a new todo', () => {
    return <CreateTodo/>
  })