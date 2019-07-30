import React, { useState, useEffect } from "react";
import Axios from "axios";

export const useToken = param => {
  const [state, setState] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const url = "need to get url from backend";
    if (token) {
      Axios.get(url, { headers: { Authorization: `${token}` } })
        .then(res => {
          console.log("RES useToken.js", res);
          // setState(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [param]);

  const setValue = value => {
    localStorage.setItem(param, value);
  };

  return [state, setState, setValue];
};