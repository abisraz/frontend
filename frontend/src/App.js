import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Login from "./component/main/Login";
import Signup from "./component/main/Signup";
import Main from "./component/main";
import Home from "./component/main/Home";
import AddEquipment from "./component/admin/AddEquipment";
import Admin from "./component/admin";
import BrowseEquipments from "./component/main/BrowseEquipments";
import Solarshop from "./component/main/Solarshop";
import EquipmentDetails from "./component/main/EquipmentDetails";
import AdminAuth from "./auth/AdminAuth";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ProductProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/main/Home" />} />
            <Route path="main" element={<Main />}>
              <Route path="Home" element={<Home />} />
              <Route path="Login" element={<Login />} />
              <Route path="Signup" element={<Signup />} />
              <Route path="Solarshop" element={<BrowseEquipments />} />
              <Route path="EquipmentDetails" element={<EquipmentDetails />} />
            </Route>

            <Route
              path="admin"
              element={
                <AdminAuth>
                  {" "}
                  <Admin />{" "}
                </AdminAuth>
              }
            >
              <Route path="AddEquipment" element={<AddEquipment />} />
            </Route>
          </Routes>
        </ProductProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
