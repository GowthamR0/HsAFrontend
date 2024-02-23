import React from "react";
import Header from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

import About from "./components/About";
import Start from "./components/Start";
import SCard from "./components/Card";

import ECard from "./components/CardComponents/ECard";
import PCard from "./components/CardComponentsP/PCard";
import ACard from "./components/CardComponentsA/ACard";
import HcCard from "./components/CardComponentsHc/HcCard";
import HpCard from "./components/CardComponentsHp/HpCard";
import PestCard from "./components/CardComponentsPest/PestCard";

import Orders from "./components/SmsOrders/Orders";
import OrdersPest from "./components/SmsOrders/OrdersPest";
import OrdersHp from "./components/SmsOrders/OrdersHp";
import OrdersHc from "./components/SmsOrders/OrdersHc";
import OrdersP from "./components/SmsOrders/OrdersP";
import OrdersA from "./components/SmsOrders/OrdersA";

import Books from "./components/VendorProfile/Vendors";
import Evendor from "./components/VendorProfile/Evendor";
import Evendor1 from "./components/VendorProfile/Evendor1";
import Orders1 from "./components/Order1";

import Sms1 from "./components/Sms";

import Log from "./components/VendorsLogin/Log";
import Sig from "./components/VendorsLogin/Sig";

import Login from "./components/VendorsLogin/VendorLogins";
import LoginPest from "./components/VendorsLogin/VendorLoginsPest";
import LoginHc from "./components/VendorsLogin/VendorLoginsHc";
import LoginHp from "./components/VendorsLogin/VendorLoginsHp";
import LoginP from "./components/VendorsLogin/VendorLoginsP";
import LoginA from "./components/VendorsLogin/VendorLoginsA";

import SignUp from "./components/VendorsLogin/VendorSigin";
import SignUpPest from "./components/VendorsLogin/VendorSiginPest";
import SignUpHc from "./components/VendorsLogin/VendorSiginHc";
import SignUpHp from "./components/VendorsLogin/VendorSiginHp";
import SignUpA from "./components/VendorsLogin/VendorSiginA";
import SignUpP from "./components/VendorsLogin/VendorSiginP";




import VendorHc from "./components/VendorProfileHc/Vendors";
import VendorHp from "./components/VendorProfileHp/Vendors";
import VendorP from "./components/VendorProfileP/Vendors";
import VendorA from "./components/VendorProfileA/Vendors";
import VendorPest from "./components/VendorProfilePest/Vendors";

import Confirm_O from "./components/ConfirmOrders/ConfirmOrders";
import Mail22 from "./components/ConfirmOrders/mail";
import { Mail } from "@material-ui/icons";

function App() {

  return (
    <React.Fragment>
      <header>
        <Header />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Start />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/home" element={<Home />} exact />
          <Route path="/card" element={<SCard />} exact />

          <Route path="/Ecard" element={<ECard />} exact />
          <Route path="/Pcard" element={<PCard />} exact />
          <Route path="/Acard" element={<ACard />} exact />
          <Route path="/Hccard" element={<HcCard />} exact />
          <Route path="/Hpcard" element={<HpCard />} exact />
          <Route path="/Pestcard" element={<PestCard />} exact />

          <Route path="/orders/:id" element={<Orders />} exact />
          <Route path="/ordersPest/:id" element={<OrdersPest />} exact />
          <Route path="/ordersHp/:id" element={<OrdersHp />} exact />
          <Route path="/ordersHc/:id" element={<OrdersHc />} exact />
          <Route path="/ordersP/:id" element={<OrdersP />} exact />
          <Route path="/ordersA/:id" element={<OrdersA />} exact />

          <Route path="/vendor" element={<Books />} exact />
          <Route path="/vendorHc" element={<VendorHc />} exact />
          <Route path="/vendorHp" element={<VendorHp />} exact />
          <Route path="/vendorP" element={<VendorP />} exact />
          <Route path="/vendorA" element={<VendorA />} exact />
          <Route path="/vendorPest" element={<VendorPest />} exact />

          <Route path="/Evendor" element={<Evendor />} exact />
          <Route path="/Evendor1" element={<Evendor1 />} exact />

          <Route path="/api/messages" element={<Sms1 />} exact />
          <Route path="/add/:id" element={<Orders1 />} exact />

          <Route path="/Log" element={<Log />} exact />
          <Route path="/Sig" element={<Sig />} exact />

          <Route path="/signup" element={<Login />} exact />
          <Route path="/signupPest" element={<LoginPest />} exact />
          <Route path="/signupHp" element={<LoginHp />} exact />
          <Route path="/signupHc" element={<LoginHc />} exact />
          <Route path="/signupA" element={<LoginA />} exact />
          <Route path="/signupP" element={<LoginP />} exact />

          <Route path="/sigin" element={<SignUp />} exact />
          <Route path="/siginPest" element={<SignUpPest />} exact />
          <Route path="/siginHp" element={<SignUpHp />} exact />
          <Route path="/siginHc" element={<SignUpHc />} exact />
          <Route path="/siginA" element={<SignUpA />} exact />
          <Route path="/siginP" element={<SignUpP />} exact />

          <Route path="/confirmor" element={<Confirm_O />} exact />
          <Route path="/aaemail" element={<Mail22 />} exact />


        </Routes>
      </main>
    </React.Fragment>
  );

}

export default App;