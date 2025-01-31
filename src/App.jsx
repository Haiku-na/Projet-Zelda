import { useState } from "react";
import Router from "./routes/Router";
import "./App.css";
import { AuthProvider } from "./auth/AuthProvider";
import { PrivateRoute } from "./auth/PrivateRoute";


function App() {
  return (
    <>
    <AuthProvider>
      <PrivateRoute>
        <Router />
      </PrivateRoute>
    </AuthProvider>
    </>
  );
}

export default App;