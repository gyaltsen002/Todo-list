import React from "react";

const useLocalStorage = function (key, todo) {
  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(todo));
  }, [todo]);
};

export default useLocalStorage;
