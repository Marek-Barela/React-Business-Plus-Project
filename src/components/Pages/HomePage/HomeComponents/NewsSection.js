import React from "react";
import comment from "../../../Images/comment-icon.png";
import view from "../../../Images/view-icon.png";
import articleImg from "../../../Images/article-photo.png";
import { Link } from "react-router-dom";

const NewsSection = (props) => {
    return(
        <section className="news__section--home">
            <div className="news__container--home container">
                <div className="row">
                    <div className="col-12 news__column-12--home">
                        <h5 className="section__header">News</h5>
                        <span className="section__subheading">From Our Blog</span>
                    </div>
                    <div className="col-1">
                        <div className="news__statistics--home">
                            <div className="statistic__container">
                                <div className="statistics__object">
                                    <span>30</span>
                                    <p className="statistic__paragraph">Oct-2015</p>
                                </div>
                                <div className="statistics__object">
                                    <img src={comment} alt="commenst"/>
                                    <p className="statistic__paragraph">8- Com</p>
                                </div>
                                <div className="statistics__object--last">
                                    <img src={view} alt="views"/>
                                    <p className="statistic__paragraph">16- View</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <article className="news__article--home">
                            <img src={articleImg} alt="article"/>
                            <h5 className="article__header">Blog Heading</h5>
                            <p className="article__paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy...</p>
                        </article>
                    </div>
                    <div className="col-6">
                        <article className="news__article--right news__separator">
                            <h5 className="article__header news__article-header--no-margin">Blog Heading</h5>
                            <p className="article__date">30 - Oct - 2015</p>
                            <p className="article__paragraph news__article-paragraph--home">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy...</p>
                        </article>
                        <article className="news__article--right">
                            <h5 className="article__header">Blog Heading</h5>
                            <p className="article__date">1 - Nov - 2015</p>
                            <p className="article__paragraph news__article-paragraph--home">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled...</p>
                        </article>
                        <Link to="/News"><button className="btn section__button news__button--home">read more</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
  }

export default NewsSection;