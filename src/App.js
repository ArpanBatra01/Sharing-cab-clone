import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './pages/user-login';
import Register from './pages/user-registration';
import RideCreationPage from './pages/ride-creation-page';
import RideSearch from './pages/ride-search';
import UserProfile from './pages/user-profile';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="ride-creation-page" element={<RideCreationPage />} />
          <Route path="ride-search" element={<RideSearch />} />
          <Route path="user-profile" element={<UserProfile />} />
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
