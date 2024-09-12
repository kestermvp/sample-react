import React, { useEffect, useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [response, setResponse] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error(`Oops error! Error status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);

      // fetch('https://jsonplaceholder.typicode.com/posts')
      //   .then(response => response.json())
      //   .then(data => {
      //     console.log(data);
      //   });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the page from refreshing on form submit

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST", // HTTP method
          headers: {
            "Content-Type": "application/json", // Specifies the content type of the request body
          },
          body: JSON.stringify({ title, body }), // Converts the JavaScript object into a JSON string
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`); // Handle HTTP errors
      }

      const result = await response.json(); // Parse JSON response
      setResponse(result); // Update state with the server response
    } catch (error) {
      setError(error.message); // Update state with error message
    }
  };

  useEffect(() => {
    // fetchData();
  }, []);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }
  // if (error) {
  //   return <p>Error: {error}</p>;
  // }

  return (
    <div>
      {/* <h1>Post List</h1> */}
      {/* <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul> */}
      <div>
        <h1>Post Data to API</h1>
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
      </div>
    </div>
  );
};

export default App;
