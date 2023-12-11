import React from 'react';
import Block_slider from '../../block_slider/block_slider';
import Bottom_menu from '../../bottom_menu/bottom_menu';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import Main_category_items from '../../main_category_items/main_category_items';
import Main_text from '../../main_text/main_text';
import Middle_menu from '../../middle_menu/middle_menu';
import More_category from '../../more_category/more_category';
import New_items from '../../new_items/new_items';
import Shop_advantages from '../../shop_advantages/shop_advantages';
import Top_menu from '../../top_menu/top_menu';
import "../../../styles/styles.css";
import "../../../styles/dop_styles.css";

const Main = () => {
  return (
    <div className='wrapper'>
      <Header/>
      <Block_slider/>
      <main>
        <div className='block main'>
          <div className='inner'>
            <div className='content nositebar'>
              <h2 className='shop-title'>Популярные категории товаров</h2>
              <Main_category_items/>
              <More_category/>
              <New_items/>
             {/*  <Shop_advantages/> */}
              {/* <Main_text/> */}
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Main;