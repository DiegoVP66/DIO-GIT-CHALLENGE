import { useState } from "react";
import RoutesComponent from "Routes";
import { AuthContext, AuthContextData } from "./AuthContextData";
import "./App.css";

function App() {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });
  return (
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
      <RoutesComponent />
    </AuthContext.Provider>
  );
}

export default App;
