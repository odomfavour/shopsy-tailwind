import React from "react";

const Alert = () => {
  return (
    <div className="fixed top-0 w-full h-screen z-50">
        <div className="w-1/3 mx-auto absolute bottom-6 right-5 flex justify-between text-green-200 shadow-inner rounded p-3 bg-green-600">
      <p class="self-center">
        <strong>Success </strong>This is Success alert.
      </p>
      <strong class="text-xl align-center cursor-pointer alert-del">
        &times;
      </strong>
    </div>
    </div>
  );
};

export default Alert;
