import { useState, useEffect } from "react";
import Item from "./components/ComponentsItem";
import "./App.css";

function App() {
  const [meneger, setMeneger] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Manager list updated:", meneger);
  }, [meneger]);

  const addMeneger = () => {
    if (!name.trim()) return;


    setMeneger((prev) => [
      ...prev,
      { id: Date.now(), name },
    ]); 
    setName("");

  };

  const removeMeneger = (id) => {
    setMeneger((prev) => prev.filter((meneger) => meneger.id !== id));
  };

  return (
    <div className="app">
      <h1 className="app__title">Manager List</h1>

      <div className="app__controls">
        <input
          className="app__input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter meneger name"
        />
        <button className="app__add-btn" onClick={addMeneger}>
          Add
        </button>
      </div>

      <div className="app__list">
        {meneger.map((meneger) => (
          <Item
            key={meneger.id}
            id={meneger.id}
            name={meneger.name}
            onDelete={removeMeneger}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
