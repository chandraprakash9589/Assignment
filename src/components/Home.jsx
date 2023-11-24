import React from "react";
import useFetch from "./useFetch";

const Home = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <>
      {data &&
        data?.map((item) => {
          return <p key={item.id}>No: {item.id} <br />Title : {item.title}</p>;
        })}
    </>
  );
};

export default Home;
