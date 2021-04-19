import React from 'react';
import classes from "../Start2.module.css";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';
import axios from "axios";
import {Link, NavLink, Redirect, Route, Switch} from "react-router-dom";
import Film from "../FIlm/Film";

const SliderDiv = (props) => {

    return (
        <Swiper spaceBetween={30}
                slidesPerView={4}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
        >

            {props.films.map((film, id) => (

                <SwiperSlide key={id}
                    src={film.id} style={{cursor: "pointer", marginLeft: "15px"}}>
                    <NavLink to={{
                        pathname: "/film/" +film.id,
                        filmId: film.id
                    }}
                             style={{color: "#FFF", textDecoration: "none"}}>
                        <div className={classes.filmWrapper}>
                            <div>
                                <img src={film.image}/>
                            </div>
                            <div className={classes.descriptionWrapper}>
                                <p className={classes.title}>{film.title}</p>
                                {film.imDbRating
                                    ? <>
                                        <span>
                                        <div style={{ width: "60px", fontSize: '10px',
                                            backgroundColor:"#FAC539",
                                            padding: '4px 0',
                                            textAlign: "center",
                                            color: "black",
                                            fontWeight: 700,
                                            borderRadius: "5px"}}>
                                            IMDb {film.imDbRating}</div>
                                        <br/> {film.genres} | {film.year} </span>
                                    </>
                                    : <span>{film.description}</span> }
                            </div>
                        </div>
                    </NavLink>
                </SwiperSlide>


            ))}
        </Swiper>
    );
};

export default SliderDiv;