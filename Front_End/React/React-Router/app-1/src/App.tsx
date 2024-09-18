import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import People from "./components/People";
import Person from "./components/Person";
import Items from "./components/Items";
import Profile from "./components/Profile";
import Login from "./components/Login";
import { AuthContextProvider } from "./components/Auth";
import Authentication from "./components/Authentication";

const App = (): JSX.Element => {
  return (
    <>
      <Header />

      <BrowserRouter>
        <AuthContextProvider>
          <Navbar />

          <Routes>
            <Route path="/" element={<h1>Root Page</h1>} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/people" element={<People />}>
              <Route index element={<h2>People List</h2>} />
              <Route path=":id" element={<Person />} />
            </Route>
            <Route path="/items" element={<Items />} />
            <Route
              path="/profile"
              element={
                <Authentication>
                  <Profile />
                </Authentication>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
