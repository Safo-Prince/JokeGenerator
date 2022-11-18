import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HomeScreen() {
  const [loading, setLoading] = useState(true);

  const [joke, setJoke] = useState("");

  const handleButtonClick = async () => {
    setLoading(true);
    const { data: joke } = await axios.get(
      "https://v2.jokeapi.dev/joke/Any?type=single"
    );
    setJoke(joke);
    setLoading(false);
  };

  useEffect(() => {
    handleButtonClick();
  }, []);

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center ">
      { loading ? (
        <div className="flex justify-center items-center">
          <div
            className="   w-80 h-80 border-t-8  animate-spin  rounded-full "
            role="status"
          ></div>
        </div> 
      ) : (
        <div className="h-3/6 w-3/6 bg-white rounded-tl-3xl rounded-br-3xl  flex justify-center items-center flex-col">
          <h1 className="   text-5xl font-bold tracking-wider mr-20 ml-20  pb-64">
            {JSON.stringify(joke.joke)}
          </h1>
          <button
            onClick={handleButtonClick}
            className="w-56 h-12 bg-black mx-auto rounded-3xl text-white  fixed mt-80  transition-all"
          >
            Get Another Joke
          </button>
        </div>
      )}
    </div>
  );
}
