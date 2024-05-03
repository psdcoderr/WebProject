import React from 'react';

export default function ShowData(props) {
  const { name } = props;

  return (
    <div className="todo">
      <div className="text">{name}</div>
    </div>
  );
}
