import React from 'react';

export const TodoItem = ({ data }) => {
  const renderItems = () => {
    return data.map((item) => (
      <li key={item.id}>
        <b>#{item.id}</b>
        <p>{item.title}</p>
      </li>
    ));
  };

  return renderItems();
};
