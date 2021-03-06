import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { motion } from "framer-motion";

// Component
import ProjectTitle from "../Molecules/ProjectTitle";
import Loader from "../Atoms/Loader";

export const ProjectThumb = (props) => {
	const { project, className, delay, status } = props;

	useEffect(() => {}, [status]);

	// const spring = useSpring({
	// 	from: { width: "0%" },
	// 	to: { width: "100%" },
	// 	leave: { width: "0%" },
	// 	delay: delay,
	// });

	return (
		<ThumbLi className={`${className}`}>
			<Link
				to={project.node.link}
				alt={`View the ${project.node.title} project.`}
				className="mb-0 pb-0"
			>
				<figure className="thumb before border position-relative d-flex justify-content-center align-items-center mb-0">
					{/* <animated.div className="animated-container" style={spring}> */}
					<motion.div
						className="animated-container"
						initial={{ width: "0%" }}
						animate={{
							width: `${status === "entered" ? "100%" : "0%"}`,
						}}
						transition={{
							tension: 5,
							delay: `${status === "entered" ? delay : delay}`,
						}}
					>
						<div
							className="thumb-img position-relative w-100 h-100"
							style={{
								backgroundImage: `url(${project.node.featuredImage.node.sourceUrl})`,
							}}
						/>
						<ProjectTitle
							title={project.node.title}
							type="thumbTitle"
						/>
						{/* </animated.div> */}
					</motion.div>
				</figure>
			</Link>
		</ThumbLi>
	);
};

const ThumbLi = styled.li`
	a {
		&:hover{
			opacity: 1;
		}
		.animated-container{
			position: absolute;
			top:0;
			left: 0;
			height: 100%;
		}
		.thumb {
			width: 320px;
			height: 320px;
			overflow:hidden;
			/* background: black; */
			@media all and (max-width: 991px) {
				width: 250px;
				height: 250px;
			}
			@media all and (max-width: 767px) {
				width: 190px;
				height: 190px;
			}
			@media all and (max-width: 500px) {
				width: 150px;
				height: 150px;
			}
			.thumb-img{
				background-repeat: no-repeat;
				background-size: cover;
				background-position: center;
				transform: scale(1.01);
				transition: 0.35s;
			}
			/* &:before {
				width: 100%;
				height: 100%;
				left: 0;
				top: 0;
				z-index: 1;
				transition: 0.5s;
				opacity: 1; */
				/* background: rgb(0, 0, 0);
				background: radial-gradient(
					circle,
					rgba(0, 0, 0, 0.45) 0%,
					rgba(0, 0, 0, 1) 100%
				); */
			}
			&:hover {
				.thumb-img{
					transform: scale(1);
				}
				.thumbTitle{
					/* width: 100%; */
					right: 0;
					&:before, &:after, .title-stack{
						left: 0;
					}
				}
				&:before {
					opacity: 1;
				}
			}
			span {
				z-index: 2;
			}
		}
	}
`;
