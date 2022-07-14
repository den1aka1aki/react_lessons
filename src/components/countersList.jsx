import React, { useState } from "react";
import Counter from "./counter";



const CountersList = () => {
    const initialState = [
        { id: 0, value: 0, name: "Ненужная вещь" },
        { id: 1, value: 4, name: "Ложка" },
        { id: 2, value: 0, name: "Вилка" },
        { id: 3, value: 0, name: "Тарелка" },
        { id: 4, value: 0, name: "Набор минималиста" },
    ]
  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };
  const handleReset = () =>{
    setCounters(initialState)
  }
  const handleIncrement = (id) => {

         const incrementValue = counters.map((count) => {
          if (count.id === id){
              count.value ++
          }
          return count;
      });
       setCounters(incrementValue)
      }
  const handleDecrement =(id) =>{


      const decrementtValue = counters.map((count) => {
          if (count.id === id){
              count.value --
          }
          return count;
      });
      setCounters(decrementtValue)
  }

  return (
    <div>
      {counters.map((count) => (
        <Counter key={count.id} onDelete={handleDelete} {...count} onIncrement = {handleIncrement} onDecrement ={handleDecrement}/>
      ))}
        <button className="btn btn-primary btn-sm n-2" onClick={handleReset}>Сброс</button>
    </div>
  );
};

export default CountersList;
