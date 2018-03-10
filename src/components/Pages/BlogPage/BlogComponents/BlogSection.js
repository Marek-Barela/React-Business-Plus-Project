import React from "react";
import man from "../../../Images/blog-man-image.png";
import imageOne from "../../../Images/blog-image-one.png";
import imageTwo from "../../../Images/blog-image-two.png";
import imageThree from "../../../Images/blog-image-three.png";
import pyramids from "../../../Images/pyramid-shape.png";
import { Link } from "react-router-dom";

const BlogSection = (props) => {
    return (
        <section className="blog__section--blog">
            <div className="blog__container--blog container">
                <h3 className="section__header">Blog Page</h3>
                <p className="section__subheading">Our featured Post</p>
                <img className="blog__pyramids" src={pyramids} alt="pyramids"/>
                <article className="blog__article">
                    <div className="col-1">
                        <img src={man} alt="man"/>
                    </div>
                    <div className="col-10">
                        <h5 className="article__header blog-article__header">Blog Heading Here</h5>
                        <p className="article__paragraph blog-article__subheading">Posted by: admin,  October- 11- 2015</p>
                        <img className="blog-article__image" src={imageOne} alt="blog article"/>
                        <p className="article__paragraph blog-article__paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also 
                        the leap into electronic typesetting, remaining essentially unchanged. It was popularised..</p>
                        <div className="media__container">
                            <p>SHARE:</p>
                            <div className="blog-media__item facebook-icon">
                                <a href="https://www.facebook.com/" rel='noopener noreferrer' target="_blank"><span className="fab fa-facebook-f"></span></a>
                            </div>
                            <div className="blog-media__item twitter-icon">
                                <a href="https://twitter.com/" rel='noopener noreferrer' target="_blank"><span className="fab fa-twitter"></span></a>
                            </div>
                            <div className="blog-media__item google-icon">
                                <a href="https://plus.google.com/" rel='noopener noreferrer' target="_blank"><span className="fab fa-google-plus-g"></span></a>
                            </div>
                        </div>
                        <Link to="/Blog/Article-1"><button className="btn section__button blog__button">Read More</button></Link>
                    </div>
                </article>
                <article className="blog__article">
                    <div className="col-1">
                        <img src={man} alt="man"/>
                    </div>
                    <div className="col-10">
                        <h5 className="article__header blog-article__header">Blog Heading Here</h5>
                        <p className="article__paragraph blog-article__subheading">Posted by: admin,  October- 11- 2015</p>
                        <img className="blog-article__image" src={imageTwo} alt="blog article"/>
                        <p className="article__paragraph blog-article__paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also 
                        the leap into electronic typesetting, remaining essentially unchanged. It was popularised..</p>
                        <div className="media__container">
                            <p>SHARE:</p>
                            <div className="blog-media__item facebook-icon">
                                <a href="https://www.facebook.com/" rel='noopener noreferrer' target="_blank"><span className="fab fa-facebook-f"></span></a>
                            </div>
                            <div className="blog-media__item twitter-icon">
                                <a href="https://twitter.com/" rel='noopener noreferrer' target="_blank"><span className="fab fa-twitter"></span></a>
                            </div>
                            <div className="blog-media__item google-icon">
                                <a href="https://plus.google.com/" rel='noopener noreferrer' target="_blank"><span className="fab fa-google-plus-g"></span></a>
                            </div>
                        </div>
                        <Link to="/Blog/Article-2"><button className="btn section__button blog__button">Read More</button></Link>
                    </div>
                </article>
                <article className="blog__article">
                    <div className="col-1">
                        <img src={man} alt="man"/>
                    </div>
                    <div className="col-10">
                        <h5 className="article__header blog-article__header">Blog Heading Here</h5>
                        <p className="article__paragraph blog-article__subheading">Posted by: admin,  October- 11- 2015</p>
                        <img className="blog-article__image" src={imageThree} alt="blog article"/>
                        <p className="article__paragraph blog-article__paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also 
                        the leap into electronic typesetting, remaining essentially unchanged. It was popularised..</p>
                        <div className="media__container">
                            <p>SHARE:</p>
                            <div className="blog-media__item facebook-icon">
                                <a href="https://www.facebook.com/" rel='noopener noreferrer' target="_blank"><span className="fab fa-facebook-f"></span></a>
                            </div>
                            <div className="blog-media__item twitter-icon">
                                <a href="https://twitter.com/" rel='noopener noreferrer' target="_blank"><span className="fab fa-twitter"></span></a>
                            </div>
                            <div className="blog-media__item google-icon">
                                <a href="https://plus.google.com/" rel='noopener noreferrer' target="_blank"><span className="fab fa-google-plus-g"></span></a>
                            </div>
                        </div>
                        <Link to="/Blog/Article-3"><button className="btn section__button blog__button">Read More</button></Link>
                    </div>
                </article>
            </div>
        </section>
    );
  }

export default BlogSection;
