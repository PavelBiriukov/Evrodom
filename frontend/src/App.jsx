import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import About_company from './components/pages/about_company/about_company';
import CategoryForm from './components/pages/admin/admin';
import Bulochnye_izdeliya from './components/pages/categories/bulochnye_izdeliya/bulochnye_izdeliya';
import Categories from './components/pages/categories/categories';
import Cookies from './components/pages/categories/cookies/cookies';
import Gastronomiya from './components/pages/categories/gastronomiya/gastronomiya';
import Hleba from './components/pages/categories/hleba/hleba';
import Konditerskie_izdeliya from './components/pages/categories/konditerskie_izdeliya/konditerskie_izdeliya';
import Contacts from './components/pages/contacts/contacts';
import Delivery_and_payment from './components/pages/delivery_and_payment/delivery_and_payment';
import Main from './components/pages/main/main';
import News from './components/pages/news/news';
import Personal_data from './components/pages/personal_data/personal_data';
import Privacy_policy from './components/pages/privacy_policy/privacy_policy';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/o-kompanii" element={<About_company/>} />
          <Route path="/kontakty" element={<Contacts/>} />
          <Route path="/dostavka-i-oplata" element={<Delivery_and_payment/>} />
          <Route path="/soglasie-na-obrabotku-personalnyh-dannyh" element={<Personal_data/>} />
          <Route path="/politika-konfidencialnosti" element={<Privacy_policy/>} />
          <Route path="/news" element={<News/>} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/categories/hleba/" element={<Hleba/>} />
          <Route path="/categories/bulochnye-izdeliya/" element={<Bulochnye_izdeliya/>} />
          <Route path="/categories/gastronomiya/" element={<Gastronomiya/>} />
          <Route path="/categories/konditerskie-izdeliya/" element={<Konditerskie_izdeliya/>} />
          <Route path="/categories/novaya-kategoriya/" element={<Cookies/>} />
          <Route path="/admin" element={<CategoryForm/>}/>
      </Routes>
    </BrowserRouter>
  );
};
export default App;