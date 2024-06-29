import React from "react";
import { useParams } from "react-router-dom";
import { IT } from "./IT";
import { CSE } from "./CSE";


export const Index = () => {
  const { id } = useParams();
  const idNumber = parseInt(id);

  return (
    <div>
      {idNumber === 1 && <IT />}
      {idNumber === 2 && <CSE />}
    </div>
  );
};
