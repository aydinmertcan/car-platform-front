import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './components/mainPage.jsx'

const routeArray = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  }
])
function App() {
  return (
    <RouterProvider router={routeArray} />
  );
}

export default App;
