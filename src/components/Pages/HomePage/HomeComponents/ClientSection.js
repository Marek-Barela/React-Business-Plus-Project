import React, { Component } from 'react';
import client1 from '../../../Images/client-one.png';
import client2 from '../../../Images/client-two.png';
import client3 from '../../../Images/client-three.png';
import icon1 from '../../../Images/quote-icon-one.png';
import icon2 from '../../../Images/quote-icon-two.png';
import icon3 from '../../../Images/quote-icon-three.png';
//import { Link } from 'react-router-dom';

const ClientSection = (props) => {
    return (
      <section className='client__section--home'>
        <div className='client__container container'>
            <div className='row'>
                <div className='col-12 client__column-12'>
                    <h5 className='section__header'>Clients</h5>
                    <span className='section__subheading'>Whats our client says</span>
                </div>
                <div className='col-4'>
                    <div className='client__content'>
                        <img className='quote__img' src={icon1} alt="quote"/>
                        <p className='section__paragraph client__paragrph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                        <div className='client__data'>
                            <img className='client__photo' src={client1} alt="client"/>
                            <div className='client__details'>
                                <h6 className='client__header'>Krishnan Unni</h6>
                                <p className='section__paragraph client__paragraph'>Designation</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='client__content'>
                        <img className='quote__img' src={icon2} alt="quote"/>
                        <p className='section__paragraph client__paragrph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                        <div className='client__data'>
                            <img className='client__photo' src={client2} alt="client"/>
                            <div className='client__details'>
                                <h6 className='client__header'>Mariya Jeorge</h6>
                                <p className='section__paragraph client__paragraph'>Designation</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='client__content'>
                        <img className='quote__img' src={icon3} alt="quote"/>
                        <p className='section__paragraph client__paragrph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                        <div className='client__data'>
                            <img className='client__photo' src={client3} alt="client"/>
                            <div className='client__details'>
                                <h6 className='client__header'>Akhil Designer</h6>
                                <p className='section__paragraph client__paragraph'>Designation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
  }

export default ClientSection;