import "./style.css";

const Students = ({ student }) => {
  return (
    <div className="card-container">
      <div className="left">
        <img className="card-img" src={student.image} alt={student.image} />
      </div>
      <div className="rigth">
        <label className="label-format">{student.name}</label>
        <label className="label-format">Casa: {student.house}</label>
        <label className="label-format">{student.gender}</label>
        <label className="label-format">{student.yearOfBirth}</label>
      </div>
    </div>
  );
};

export default Students;
