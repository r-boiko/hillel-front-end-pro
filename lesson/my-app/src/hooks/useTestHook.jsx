import {useEffect} from "react";

const useTestHook = () => {
  useEffect(() => {
    console.log('Hello from useTestHook!');
  }, [])
}

export default useTestHook;
