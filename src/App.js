import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Aside from "./aside";
import Header from "./header";
import Dashboard from "./dashbord";
import Settings from "./settings";
import Profile from "./profile";
import Projects from "./projects";
import Courses from "./courses";
import Friends from "./friends";
import Files from "./flies";
import Plans from "./plans";
function App() {
  return (
    <BrowserRouter>
      <div className="parents">
        <Aside />
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/files" element={<Files />} />
          <Route path="/plans" element={<Plans />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
