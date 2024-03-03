import { db } from "./db";

function App() {
  db.put({
    _id: "mydoc",
    title: "test",
  });

  return (
    <>
      <h1>This is a pouch db test</h1>
    </>
  );
}

export default App;
