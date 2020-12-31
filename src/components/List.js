import React from "react";

export default function List({ data = [], renderItem }) {
  const renderEmpty = () => <p>there's no data...</p>;
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
