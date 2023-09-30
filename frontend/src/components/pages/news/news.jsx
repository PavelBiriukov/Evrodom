import React from 'react';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import "../../../styles/styles.css";
import "../../../styles/dop_styles.css";
const News = () => {
    return (
        <div className='wrapper'>
            <Header />
            <main>
                <div className='block main'>
                    <div className='inner'>
                        <div className="content nositebar ">
                            <div className="breadcrumb">
                                <span><a href="/">Главная</a> / </span>
                                <span>Новости</span>
                            </div>
                            <h1 className="shop-title">Новости</h1>
                            <div className="news">
                                <div className="new">
                                    <a href="/news/rossiyanka-pokazala-na-video-vzorvavshijsya-hleb/">
                                        <div className="img" style={{overflow:"hidden"}}>
                                            <img src="/img/150x150/6958/news/pexels-despierres-c-cile-299113_16303909323938.jpg" alt="Россиянка показала на видео взорвавшийся хлеб"/>
                                        </div>
                                    </a><div className="text"><a href="/news/rossiyanka-pokazala-na-video-vzorvavshijsya-hleb/">
                                    </a><a href="/news/rossiyanka-pokazala-na-video-vzorvavshijsya-hleb/">Россиянка показала на видео взорвавшийся хлеб</a>
                                        <span>04.09.2023 17:01</span>
                                        <p></p>
                                    </div>

                                </div>
                                <div className="new">
                                    <a href="/news/dietologi-nazvali-sposoby-est-hleb-i-ne-polnet/">
                                        <div className="img" style={{overflow:"hidden"}}>
                                            <img src="/img/150x150/6958/news/pic_04f5e60b69627e965bd673f9ec1bc75a_16303908232927.jpg" alt="Диетологи назвали способы есть хлеб и не полнеть"/>
                                        </div>
                                    </a><div className="text"><a href="/news/dietologi-nazvali-sposoby-est-hleb-i-ne-polnet/">
                                    </a><a href="/news/dietologi-nazvali-sposoby-est-hleb-i-ne-polnet/">Диетологи назвали способы есть хлеб и не полнеть</a>
                                        <span>04.09.2023 17:01</span>
                                        <p>Американские диетологи назвали способы, позволяющие есть хлеб и не полнеть</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default News;