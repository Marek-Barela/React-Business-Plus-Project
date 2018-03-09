import React from "react";
import Shape from "../../../Images/yellow-shape.png";
import imageOne from "../../../Images/news-image-one.png";
import imageTwo from "../../../Images/news-image-two.png";
import imageThree from "../../../Images/news-image-three.png";
import imageSubOne from "../../../Images/news-subimage-one.png";
import imageSubTwo from "../../../Images/news-subimage-two.png";

const NewsSection = (props) => {
    return (
        <section className="news__section--news">
            <div className="container">
                <h3 className="section__header">News</h3>
                <p className="section__subheading">Featured News</p>
            </div>
            <article className="news-section__article--one">
                <div className="article__container container">
                    <div className="col-2">
                        <div className="article__shape-container">
                            <img src={Shape} alt="shape"/>
                            <p className="shape__paragraph">october-20-05</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="article__image-container">
                            <img className="article__image-news--one" src={imageOne} alt="news"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="article__text-container">
                            <h5 className="article__header">News heading Here</h5>
                            <p className="article__paragraph">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                            <p className="article__sub-paragraph"><span className="fas fa-check"></span> Nam nec urna facilisis, viverra arcu id, aliquam nulla.</p>
                            <p className="article__sub-paragraph"><span className="fas fa-check"></span> Donec ac risus molestie, porta elit vel, hendrerit orci.</p>
                            <p className="article__sub-paragraph"><span className="fas fa-check"></span> Aenean in sapien sed mauris tincidunt posuere.</p>
                        </div>
                    </div>
                </div>
            </article>
            <article className="news-section__article--two">
                <div className="article__container container">
                    <div className="col-2">
                        <div className="article__shape-container">
                            <img src={Shape} alt="shape"/>
                            <p className="shape__paragraph">october-22-05</p>
                        </div>
                    </div>
                    <div className="col-10">
                        <div className="article__text-container">
                            <h5 className="article__header">News heading Here</h5>
                            <p className="article__paragraph">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing. There are many variations of passages of Lorem.</p>
                        </div>
                    </div>
                </div>
            </article>
            <article className="news-section__article--three">
                <div className="article__container container">
                    <div className="col-2">
                        <div className="article__shape-container">
                            <img src={Shape} alt="shape"/>
                            <p className="shape__paragraph">october-24-05</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="article__image-container">
                            <img className="article__image-news--one" src={imageTwo} alt="news"/>
                            <div className="article__sub-image-container">
                                <img src={imageSubOne} alt="news"/>
                                <img src={imageSubTwo} alt="news"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="article__text-container">
                            <h5 className="article__header">News heading Here</h5>
                            <p className="article__paragraph">Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem.</p>
                        </div>
                        <div className="article__blue-box">
                            <p className="article__paragraph blue-box__paragraph">Normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages </p>
                        </div>
                    </div>
                </div>
            </article>
            <article className="news-section__article--four">
                <div className="article__container container">
                    <div className="col-2">
                        <div className="article__shape-container">
                            <img src={Shape} alt="shape"/>
                            <p className="shape__paragraph">october-26-05</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="article__image-container">
                            <img src={imageThree} alt="news"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="article__text-container">
                            <h5 className="article__header">News heading Here</h5>
                            <p className="article__paragraph">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                 </div>
            </article>
        </section>
    );
  }

export default NewsSection;
