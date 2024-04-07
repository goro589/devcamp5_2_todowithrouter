import {useState } from 'react';
import { useParams } from 'react-router-dom';

export default function TodoDetails() {
  const { id } = useParams(); // Extracting todo ID from URL
    console.log (id)
  return (
    <div className="todo-details">
      <h2>Todo Details for todo item {id} </h2>
    </div>
        );
      }