import React from "react";
import axios from "axios";

import { Routes, Route, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Card } from "./pages/Card";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";

import { addItems } from "./redux/slices/itemsSlice";
import { Navbar } from "./components/Navbar";
import { addDetailToCard } from "./redux/slices/cardSlice";

function App() {
  const dispatch = useDispatch();

  const select = useSelector((state) => state.select.type);
  const articleItem = useSelector((state) => state.card.item);

  const id = useSelector((state) => state.card.id);

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);

    axios
      .get(`https://63a58fcef8f3f6d4abf9637a.mockapi.io/items?type=${select}`)
      .then((res) => {
        dispatch(addItems(res.data));
        setIsLoading(false);
      });
  }, [select]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home isLoading={isLoading} />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/favorites" element={<div>Here will be favorites</div>} />
        <Route path="/card" element={<Card />} />
        <Route
          path="*"
          element={
            <div>
              <Navbar />
              Page not found <br /> 404 ERORR
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
