import { useEffect, useState } from "react";
import Card from "./components/Card";
import { getUsers } from "./api/getUsers";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // IIFE (Immediately Invoked Function Expression)
    (async () => {
      const result = await getUsers();
      setData(result)
    })();
  }, []);

  return (
    <>
      <div>
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {data.map((user) => (
            <Card
              key={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
