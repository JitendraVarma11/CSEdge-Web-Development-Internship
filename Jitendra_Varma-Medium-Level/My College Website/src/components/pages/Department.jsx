import React from "react";
import { Link } from "react-router-dom";

export const Department = () => {
  const departments = [
    {
      id: 1,
      name: "Information Technology",
      details: "Details about Information Technology",
    },
    {
      id: 2,
      name: "Computer Engineering",
      details: "Details about Computer Engineering",
    },
    {
      id: 4,
      name: "Electrical Engineering",
      details: "Details about Electrical Engineering",
    },
    {
      id: 3,
      name: "Civil Engineering",
      details: "Details about Civil Engineering",
    },
    {
      id: 9,
      name: "Applied Mechanics",
      details: "Details about Applied Mechanics",
    },
    {
      id: 5,
      name: "Bio Medical Engineering",
      details: "Details about Bio Medical Engineering",
    },
    {
      id: 6,
      name: "Chemical Engineering",
      details: "Details about Chemical Engineering",
    },
    {
      id: 7,
      name: "Electronics & Communication Engineering",
      details: "Details about Electronics & Communication Engineering",
    },
    {
      id: 8,
      name: "Environmental Engineering",
      details: "Details about Environmental Engineering",
    },
    {
      id: 10,
      name: "Instrumentation & Control Engineering",
      details: "Details about Instrumentation & Control Engineering",
    },
    {
      id: 11,
      name: "Science and Humanities",
      details: "Details about Science and Humanities",
    },
    {
      id: 12,
      name: "Mechanical Engineering",
      details: "Details about Mechanical Engineering",
    },
    {
      id: 13,
      name: "Plastic Technology",
      details: "Details about Plastic Technology",
    },
    {
      id: 14,
      name: "Rubber Technology",
      details: "Details about Rubber Technology",
    },
    {
      id: 15,
      name: "Textile Technology",
      details: "Details about Textile Technology",
    },
    {
      id: 16,
      name: "Automobile Engineering",
      details: "Details about Automobile Engineering",
    },
  ];
  return (
    <div className="w-10/12 mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Departments</h2>
      <ul>
        {departments.map((dept) => (
          <Link key={dept.id} to={`/departments/${dept.id}`}>
            <li
              className="cursor-pointer py-2 px-4 bg-gray-100 mb-2 rounded hover:bg-gray-200 w-full"
            >
              {dept.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
