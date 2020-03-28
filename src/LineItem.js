import React from "react";
import { useParams } from "react-router-dom";

const LineItem = () => {
  const { id } = useParams();
  return (
    <div>
      <h4>{`Item: ${id}`}</h4>
    </div>
  );
};

export default LineItem;
