import { createContext, useState } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  //====STATE===
  const [data, setData] = useState(null);
  const [input, setInput] = useState({
    name: "",
    course: "",
    score: 0,
  });
  const [fetchStatus, setFetchstatus] = useState(true);
  const [currentId, setCurrentId] = useState(-1);

  //====FUNCTION===
  //Menentukan Index Score
  const handleIndexScore = (score) => {
    if (score >= 80) {
      return "A";
    } else if (score >= 70 && score < 80) {
      return "B";
    } else if (score >= 60 && score < 70) {
      return "C";
    } else if (score >= 50 && score < 60) {
      return "D";
    } else {
      return "E";
    }
  };

  //Mengatur isi form inputan
  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setInput({ ...input, [name]: value });
  };

  //handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    let { name, course, score } = input;

    if (currentId === -1) {
      axios
        .post("https://backendexample.sanbercloud.com/api/student-scores", {
          ...input,
        })
        .then((res) => {
          setFetchstatus(true);
        });
    } else {
      axios
        .put(
          `https://backendexample.sanbercloud.com/api/student-scores/${currentId}`,
          { ...input }
        )
        .then((res) => {
          setFetchstatus(true);
        });
    }

    //balikin indikator ke -1
    setCurrentId(-1);

    setInput({
      name: "",
      course: "",
      score: 0,
    });
  };

  //Handle Delete
  const handleDelete = (event) => {
    let idData = parseInt(event.target.value);
    axios
      .delete(
        `https://backendexample.sanbercloud.com/api/student-scores/${idData}`
      )
      .then((res) => {
        setFetchstatus(true);
      });
  };

  //Handle Edit Data
  const handleEditData = (event) => {
    let idData = parseInt(event.target.value);
    setCurrentId(idData);

    axios
      .get(
        `https://backendexample.sanbercloud.com/api/student-scores/${idData}`
      )
      .then((res) => {
        let resultData = res.data;
        setInput({ ...resultData });
      });
  };

  //fetchdata
  let fetchdata = () => {
    axios
      .get("https://backendexample.sanbercloud.com/api/student-scores")
      .then((res) => {
        setData([...res.data]);
      })
      .catch((error) => {});

    setFetchstatus(false);
  };

  //initial function & state
  let state = {
    data,
    setData,
    input,
    setInput,
    fetchStatus,
    setFetchstatus,
    currentId,
    setCurrentId,
  };

  let handleFunction = {
    handleIndexScore,
    handleInput,
    handleSubmit,
    handleDelete,
    handleEditData,
    fetchdata,
  };
  return (
    <GlobalContext.Provider
      value={{
        state,
        handleFunction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
