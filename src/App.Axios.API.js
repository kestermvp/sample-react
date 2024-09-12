import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // NOTE: This code will hlep

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceeeholder.typicode.com/posts/"
      ); // Axios GET request
      setData(response.data); // Update state with the fetched data
    } catch (err) {
      setError(err.message); // Update state with error message
    } finally {
      setLoading(false); // Set loading to false after fetch is complete
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(
        "https://jsonplaceeeholder.typicode.com/posts",
        {
          title,
          body,
        }
      );
      setResponse(result.data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Post Data to API with Axios</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Body:
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

      {response && (
        <div>
          <h3>Response from Server:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <h2>Get Post Using Axios</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li> // Render fetched data
        ))}
      </ul>
    </div>
  );
};

export default App;
