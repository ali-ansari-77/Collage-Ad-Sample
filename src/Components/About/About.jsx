/** @format */

import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
	return (
		<div className='about'>
			<div className='about-left'>
				<img src={about_img} alt='' className='about-img' />
				<img
					src={play_icon}
					alt=''
					className='playIcon'
					onClick={() => {
						setPlayState(true);
					}}
				/>
			</div>
			<div className='about-right'>
				<h3>ABOUT UNIVERSITY</h3>
				<h2> Nurturing Tomorrows Leaders Today </h2>
				<p>
					Embark on a transfomative educational journey with our universitys
					comprehensive education programs . our cutting edge curriculum is
					designed to empower students with the knowledge , skills , and
					expreiences needed to exel in the dynamic field of education
				</p>
				<p>
					with a focus on innovation , hands-on learning , and personalized
					mentorship , our programs perpare aspiring educators to make a
					meaningful impact in classrooms , schools , and communities .
				</p>
				<p>
					Wheather aspire to become a teacher , administor , aounselor , or
					educational leader , our diverse range of programs offers the perfect
					pathways to achive your goals and unlock your full potential in
					shaping the future of education .
				</p>
			</div>
		</div>
	);
};

export default About;
