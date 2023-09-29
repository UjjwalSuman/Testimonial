import React from "react";
import Tetstimonials from "./components/Tetstimonials";
import reviews from "./data";



const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Friendship Goals</h1>
        <div className="bg-violet-400 h-[4px] w-1/6 mt-4 mx-auto "></div>
        <Tetstimonials reviews={reviews} />
      </div>  
    </div>
  );
};

export default App;


