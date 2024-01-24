import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import CardID from './components/CardID/CardID';
import About_company from './components/pages/about_company/about_company';
import CreateCard from './components/pages/createCard/createCard';
import Admin_main from './components/pages/admin_main/admin_main';
import Categories from './components/pages/categories/categories';
import CategoriesCreate from './components/pages/categoriesCreate/categoriesCreate';
import Contacts from './components/pages/contacts/contacts';
import DeleteCard from './components/pages/deleteCard/deleteCard';
import DeleteCategories from './components/pages/deleteCategories/deleteCategories';
import Delivery_and_payment from './components/pages/delivery_and_payment/delivery_and_payment';
import Main from './components/pages/main/main';
import News from './components/pages/news/news';
import Personal_data from './components/pages/personal_data/personal_data';
import Privacy_policy from './components/pages/privacy_policy/privacy_policy';
import UpdateCard from './components/pages/updateCard/updateCard';
import UpdateCategories from './components/pages/updateCategories/updateCategories';
import Products_from_the_category from './components/pages/products_from_the_category/products_from_the_category';
import Basket from './components/pages/basket/basket';
import RegistrationForm from './components/registration/registration';
import Login from './components/login/login';
import Order_registration from './components/pages/order_registration/order_registration';
/* цвет: #45dcdd */
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/o-kompanii" element={<About_company/>} />
          <Route path="/kontakty" element={<Contacts/>} />
          <Route path="/dostavka-i-oplata" element={<Delivery_and_payment/>} />
          <Route path="/soglasie-na-obrabotku-personalnyh-dannyh" element={<Personal_data/>} />
          <Route path="/politika-konfidencialnosti" element={<Privacy_policy/>} />
          <Route path="/news" element={<News/>} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/categories/:categoryName" element={<Products_from_the_category/>} />
          <Route path="/admin" element={<Admin_main/>}/>
          <Route path="/items/:id" element={<CardID/>}/>
          <Route path="/admin/updateCard" element={<UpdateCard/>}/>
          <Route path="/admin/deleteCard" element={<DeleteCard/>}/>
          <Route path="/admin/createCard" element={<CreateCard/>}/>
          <Route path="/admin/updateCategories" element={<UpdateCategories/>}/>
          <Route path="/admin/deleteCategories" element={<DeleteCategories/>}/>
          <Route path="/admin/createCategories" element={<CategoriesCreate/>}/>
          <Route path="/basket" element={<Basket/>}/>
          <Route path="/registration" element={<RegistrationForm/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/checkout" element={<Order_registration/>}/>
          <Route path="/" element={<Main/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;