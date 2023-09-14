import { useEffect, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import FormCard from "./components/FormCard";
import CarInfo from "./components/CarInfo";

function App() {
  const [updateInfo, setUpdateInfo] = useState([])
  const urlBase = "http://cars-crud.academlo.tech";
  const [cars, getCars, createCar,deleteCard] = useFetch(urlBase);
 
  useEffect(() => {
    getCars("/cars/");
  }, []);
  console.log(cars);

  return (
    <div className="content-form">
      <div>
        <h1>Metdos http</h1>
        <FormCard createCar={createCar}updateInfo={updateInfo} />
      </div>
      <div>
        {cars?.map((el) => (
          <CarInfo key={el.id} el={el} deleteCard={deleteCard} setUpdateInfo={setUpdateInfo} />
        ))}
      </div>
    </div>
  );
}

export default App;
