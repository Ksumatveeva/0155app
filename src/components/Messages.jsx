import { useEffect, useState } from "react";

export const Messages = () => {
  const [advice, setAdvice] = useState("");
  useEffect(() => {
    const url = "https://api.adviceslip.com/advice";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
       console.log(json.slip.advice);
       setAdvice(json.slip.advice);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
    fetchData();
   }, []);
    
  return ( 
    <div className="row">
<div className="mx-auto border-4 p-5 border-red-400 hover:border-red-200 text-emerald-500">{advice}</div>
    </div>
    );
  };