import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  //====VAR===
  let navigate = useNavigate();
  const [dataJob, setDataJob] = useState(null);
  const [input, setInput] = useState({
    company_city: "",
    company_image_url: "",
    company_name: "",
    job_description: "",
    job_qualification: "",
    job_status: 1,
    job_tenure: "",
    job_type: "",
    salary_max: 0,
    salary_min: 0,
    title: "",
  });
  const [fetchStatus, setFetchstatus] = useState(true);
  const [currentId, setCurrentId] = useState(-1);
  const [token, setToken] = useState(
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZGV2LWV4YW1wbGUuc2FuYmVyY2xvdWQuY29tXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjY4MTczNTQ0LCJleHAiOjE2Njg3NzgzNDQsIm5iZiI6MTY2ODE3MzU0NCwianRpIjoiZWFKZDJKTmdUVUgzdUVLZCIsInN1YiI6Nzc4LCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.1bKlYXH7YCCpz_sKES0bXgPbCf0LpYuQmEFt3beMYjo"
  );
  const [lengthData, setLengthData] = useState(0);

  //====FUNCTION====
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
      company_city,
      company_image_url,
      company_name,
      job_description,
      job_qualification,
      job_status,
      job_tenure,
      job_type,
      salary_max,
      salary_min,
      title,
    } = input;

    if (currentId === -1) {
      axios
        .post(
          "https://dev-example.sanbercloud.com/api/job-vacancy",
          {
            ...input,
          },
          { headers: { Authorization: "Bearer " + token } }
        )
        .then((res) => {
          setFetchstatus(true);
          navigate("/dashboard/list-job-vacancy");
        });
    } else {
      axios
        .put(
          `https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`,
          { ...input },
          { headers: { Authorization: "Bearer " + token } }
        )
        .then((res) => {
          setFetchstatus(true);
          navigate("/dashboard/list-job-vacancy");
        });
    }

    //balikin indikator ke -1
    setCurrentId(-1);

    setInput({
      company_city: "",
      company_image_url: "",
      company_name: "",
      job_description: "",
      job_qualification: "",
      job_status: 1,
      job_tenure: "",
      job_type: "",
      salary_max: 0,
      salary_min: 0,
      title: "",
    });
  };

  // //Handle Edit Data
  const handleEditDataJob = (event) => {
    let idData = parseInt(event.target.value);
    setCurrentId(idData);
    navigate(`/dashboard/list-job-vacancy/form/${idData}`);
  };

  // //Handle Delete
  const handleDelete = (event) => {
    let idData = parseInt(event.target.value);
    axios
      .delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        setFetchstatus(true);
      });
  };

  // Menampilkan Data pada tabel
  const fetchDataJob = () => {
    axios
      .get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
      .then((res) => {
        setDataJob([...res.data.data]);
      })
      .catch((error) => {});
  };

  //Memasukan nilai pada Form
  const inputValueForm = (IdData) => {
    axios
      .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${IdData}`)
      .then((res) => {
        let resultData = res.data;
        setInput({ ...resultData });
      });
  };

  //filter lowongan buka
  const statusJobOpen = () => {
    axios
      .get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
      .then((res) => {
        let y = res.data.data.filter((x) => x.job_status !== 0);
        setLengthData(y.length);
      })
      .catch((error) => {});
  };

  //initial function & state
  let state = {
    dataJob,
    setDataJob,
    fetchStatus,
    setFetchstatus,
    input,
    setInput,
    lengthData,
  };

  let handleFunction = {
    handleInput,
    handleSubmit,
    handleDelete,
    handleEditDataJob,
    fetchDataJob,
    inputValueForm,
    statusJobOpen,
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
