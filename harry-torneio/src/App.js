import "./App.css";
import { useState } from "react";
import Menu from "./components/Menu";
import Students from "./components/Students";
import { useEffect } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [init, setInit] = useState(false);
  const [selectedStudents, setSelectedStudents] = useState([]);

  useEffect(() => {
    fetch(`https://hp-api.herokuapp.com/api/characters/students`)
      .then((response) => response.json())
      .then((response) => setStudents(response))
      .catch((err) => console.log(err));
  }, []);

  const startGame = () => {
    setInit(true);
    selectStudents();
  };

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const selectStudents = () => {
    let student1 = students[randomNumber(0, students.length - 1)];
    let student2 = students[randomNumber(0, students.length - 1)];
    let student3 = students[randomNumber(0, students.length - 1)];

    while (student2.house === student1.house) {
      student2 = students[randomNumber(0, students.length - 1)];
    }
    while (
      student3.house === student1.house ||
      student3.house === student2.house
    ) {
      student3 = students[randomNumber(0, students.length - 1)];
    }

    setSelectedStudents([student1, student2, student3]);
  };

  return (
    <div className="App">
      <header className="App-header">
        {!init ? (
          <Menu startGame={startGame} />
        ) : (
          <div className="game">
            <div className="container">
              {selectedStudents.map((student) => (
                <Students key={student.name} student={student} />
              ))}
            </div>
            <button className="button" onClick={selectStudents}>
              Tentar novamente
            </button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
