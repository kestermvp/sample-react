import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  useCallback,
} from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState(0);
  const divRef = useRef(null);
  const inputRef = useRef(null);

  // useEffect Hook to replicate componentDidMount and componentDidUpdate
  useEffect(() => {
    // This code block runs after every render
    console.log("Component did mount or update");

    if (count === 2) {
      console.log("Hello");
    }

    // Clean-up function (replicating componentWillUnmount)
    return () => {
      console.log("Component will unmount");
    };
  }, []);

  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

  useLayoutEffect(() => {
    console.log("Hi useLayoutEffect");
    // This runs synchronously after DOM updates
    if (divRef.current) {
      setSize(divRef.current.clientHeight);
    }
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {/* <input ref={inputRef} type="text" /> */}
      <div ref={divRef}>The width of this div is {size}px</div>
    </div>
  );
};

export default App;
