import React, { Component } from "react";
import man from "../../../Images/blog-man-image.png";
import imageOne from "../../../Images/blog-image-three.png";
import author from "../../../Images/post-author.png";
import { Link } from "react-router-dom";

class BlogArticleThree extends Component {
    componentDidMount () {
      window.scrollTo(0, 0)
    }
    render() {
    return (
    <main>
        <section className="hero__section--blog"></section>
        <section className="post__section"> 
            <div className="post__container container">
                <div className="row">
                    <header>
                        <h3 className="section__header">Blog Post</h3>
                        <p className="section__subheading">Our featured Post</p>
                    </header>
                    <article className="blog__article post__article">
                    <div className="col-1">
                        <img src={man} alt="man"/>
                    </div>
                    <div className="col-10">
                        <h5 className="article__header blog-article__header">Blog Heading Here</h5>
                        <p className="article__paragraph blog-article__subheading">Posted by: admin,  October- 11- 2015</p>
                        <img className="blog-article__image" src={imageOne} alt="blog article"/>
                        <p className="article__paragraph blog-article__paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also 
                        the leap into electronic typesetting, remaining essentially unchanged. It was popularised..</p>
                        <h5 className="article__header blog-article__header">Many publishing packages</h5>
                        <p className="article__paragraph blog-article__paragraph">Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged It was popularised Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s.</p>
                        <div className="post__yellow-container">
                            <p className="yellow-container__paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type. </p>
                        </div>
                        <p className="article__paragraph blog-article__paragraph">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem 
                        Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages</p>
                        <div className="media__container">
                            <p>SHARE:</p>
                            <div className="blog-media__item facebook-icon">
                                <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank"><span className="fab fa-facebook-f"></span></a>
                            </div>
                            <div className="blog-media__item twitter-icon">
                                <a href="https://twitter.com/" rel="noopener noreferrer" target="_blank"><span className="fab fa-twitter"></span></a>
                            </div>
                            <div className="blog-media__item google-icon">
                                <a href="https://plus.google.com/" rel="noopener noreferrer" target="_blank"><span className="fab fa-google-plus-g"></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-12">
                        <div className="article__post-author">
                            <div className="col-2">
                                <img src={author} alt="author"/>
                            </div>
                            <div className="col-10">
                                <div className="post-author__message-content">
                                    <div className="post-author__triangle"></div>
                                    <h5 className="post-author__header">Admin Name</h5>
                                    <p className="post-author__paragraph" >Established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="return__button">
                        <Link to="/Blog"><button className="btn section__button">RETURN</button></Link>
                    </div>
                </article>
                </div>
            </div>
        </section>
    </main>
    );
  }
}
export default BlogArticleThree;
