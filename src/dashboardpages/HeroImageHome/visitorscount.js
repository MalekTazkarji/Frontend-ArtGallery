import Axios from "axios";
import  { useEffect, useState } from "react";

export default function VisitorsCount() {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/visits").then((res) =>
      setVisitors(res.data).catch((err) => console.log(err))
    );
  }, []);

  return <div>{visitors}</div>;
}
