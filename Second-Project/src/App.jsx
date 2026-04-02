import { useState } from "react";
import Layout from "./Layout";

const App =() => {
  const [user] = useState({name: "ram", role: "admin"});
  return <Layout user={user}/>;
};
export default App;
