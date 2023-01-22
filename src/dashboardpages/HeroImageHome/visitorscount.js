import Axios from "axios";
import  { useEffect, useState } from "react";

export default function VisitorsCount() {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_FETCH}/visits`).then((res) =>
      setVisitors(res.data).catch((err) => console.log(err))
    );
  }, []);

  return <div>{visitors}</div>;
}
