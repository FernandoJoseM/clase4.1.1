import axios from "axios";
import { useState } from "react";

const useFetch = (urlBase) => {
  const [infoApi, setInfoApi] = useState();

  const getApi = (path) => {
    const url = `${urlBase}${path}`;
    axios
      .get(url)
      .then((res) => setInfoApi(res.data))
      .catch((err) => console.log(err));
  };
  //   post
  const postApi = (path, data) => {
    const url = `${urlBase}${path}`;
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
        setInfoApi([...infoApi, res.data]);
      })
      .catch((err) => console.log(err));
  };
  //   delete
  const deleteApi = (path, id) => {
    const url = `${urlBase}${path}${id}/`;
    axios
      .delete(url)
      .then((res) => {
        setInfoApi(infoApi.filter((el) => el.id !== id));
      })
      .catch((err) => console.log(err));
  };

  //   update
  const updateApi = (path, id, data) => {
    const url = `${urlBase}${path}${id}/`;
    axios
      .put(url, data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return [infoApi, getApi, postApi, deleteApi, updateApi];
};

export default useFetch;
