import { createContext, useState } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  //====VAR===

  const [data, setData] = useState(null);
  const [input, setInput] = useState({
    name: "",
    description: "",
    category: "",
    size: 0,
    price: 0,
    rating: 0,
    image_url: "",
    release_year: 2007,
    is_android_app: 0,
    is_ios_app: 0,
  });
  const [fetchStatus, setFetchstatus] = useState(true);
  const [currentId, setCurrentId] = useState(-1);

  //====FUNCTION===
  //menentukan perangkat
  const handleDevice = (ios, android) => {
    if (ios === 1 && android === 1) {
      return <>Android &amp; Ios</>;
    } else if (ios === 1 && android === 0) {
      return "Ios";
    } else if (ios === 0 && android === 1) {
      return "Android";
    } else {
      return "Other Device";
    }
  };

  //Mengatur Format Rupiah
  const formatRupiah = (number) => {
    if (number === 0) {
      return "Free";
    } else {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(number);
    }
  };

  const formatBytes = (bytes, decimals = 2) => {
    if (!+bytes) return "0 MB";

    const k = 1000;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
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
    let {
      name,
      description,
      category,
      size,
      price,
      rating,
      image_url,
      release_year,
      is_android_app,
      is_ios_app,
    } = input;

    if (currentId === -1) {
      axios
        .post("https://backendexample.sanbercloud.com/api/mobile-apps", {
          ...input,
        })
        .then((res) => {
          setFetchstatus(true);
        });
    } else {
      axios
        .put(
          `https://backendexample.sanbercloud.com/api/mobile-apps/${currentId}`,
          { ...input }
        )
        .then((res) => {
          setFetchstatus(true);
        });
    }

    //balikin indikator ke -1
    setCurrentId(-1);

    setInput({
      name: "test",
      description: "test",
      category: "test",
      size: 0,
      price: 0,
      rating: 0,
      image_url: "test",
      release_year: 2007,
      is_android_app: 0,
      is_ios_app: 0,
    });
  };

  //Handle Delete
  const handleDelete = (event) => {
    let idData = parseInt(event.target.value);
    axios
      .delete(
        `https://backendexample.sanbercloud.com/api/mobile-apps/${idData}`
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
      .get(`https://backendexample.sanbercloud.com/api/mobile-apps/${idData}`)
      .then((res) => {
        let resultData = res.data;
        setInput({ ...resultData });
      });
  };

  //fetchdata
  let fetchdata = () => {
    axios
      .get("https://backendexample.sanbercloud.com/api/mobile-apps")
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
    handleDevice,
    handleInput,
    handleSubmit,
    handleDelete,
    handleEditData,
    fetchdata,
    formatRupiah,
    formatBytes,
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
