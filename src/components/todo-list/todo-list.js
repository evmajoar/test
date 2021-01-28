import React from 'react';
import TodoItem from './todo-item';

export const TodoList = ({ data }) => {
  const getFirstTenItems = data.slice(0, 10);

  return (
    <ul>
      <TodoItem data={getFirstTenItems} />
    </ul>
  );
};
