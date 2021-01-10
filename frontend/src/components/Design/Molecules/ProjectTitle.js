import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// components
import Arrow from "../Atoms/Arrow";
import SlideMeter from "../Atoms/SlideMeter";

class ProjectTitle extends Component {
	render() {
		const {
			title,
			subtitle,
			slideTitle,
			percentage,
			attachmentClass,
			active,
		} = this.props;
		return (
			<ProjectTitleDiv
				className={`project-title ${
					slideTitle ? "slideTitle" : "regularTitle"
				} ${attachmentClass}`}
			>
				{slideTitle ? (
					<div className="scroll-indicator">
						<small className="help-text">
							<i>Scroll to view</i>
						</small>
						<Arrow num={3} direction="down" color="#000" animate />
					</div>
				) : (
					<Link className="bcrumb" to={"/portfolio"}>
						Portfolio &#62;
					</Link>
				)}
				<div className="title-stack">
					<h1>{title}</h1>
					{percentage !== undefined && (
						<SlideMeter
							progress={active ? percentage : undefined}
						/>
					)}

					<h2>
						<i>{subtitle}</i>
					</h2>
				</div>
			</ProjectTitleDiv>
		);
	}
}

export default ProjectTitle;

const ProjectTitleDiv = styled.div`
	position: absolute;
	right: 0;
	display: flex;
	min-width: 500px;
	padding: 0px 0;
	text-align: center;
	justify-content: end;
	.bcrumb {
		color: black;
		text-decoration: underline;
		font-style: italic;
		margin-left: 7em;
		margin-top: 2.75em;
	}
	&.slideTitle {
		top: calc(100% - 128px);
		.title-stack {
			background: white;
		}
	}
	&.regularTitle {
		z-index: 1;
		top: 0;
		background: linear-gradient(
			90deg,
			rgba(255, 255, 255, 0.04) 0%,
			rgba(255, 255, 255, 0.75) 50%
		);
		.title-stack {
			padding-left: 1.75em;
			h2 {
				opacity: 1;
				max-height: 200px;
			}
		}
	}
	&.hero {
		position: fixed;
		.scroll-indicator {
			background: rgba(255, 255, 255, 1);
			* {
				opacity: 1;
			}
		}
	}
	&.floating {
		position: fixed;
	}
	&.feature {
		position: absolute;
		top: 100%;
		bottom: initial;
		.title-stack {
			h2 {
				opacity: 1;
				max-height: 80px;
				margin: 0.5em 0;
			}
		}
		.slide-meter {
			&:after {
				width: 100%;
			}
		}
	}
	.scroll-indicator {
		display: flex;
		width: 120px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: rgba(255, 255, 255, 0.5);
		transition: 0.25s;
		* {
			opacity: 0;
			transition: 0.25s;
		}
		.help-text {
			margin-bottom: 1em;
		}
	}
	.title-stack {
		display: flex;
		flex-direction: column;
		align-content: center;
		min-width: 343px;
		padding: 1.5em 3em;
	}
	h1,
	h2 {
		display: inline-block;
	}
	h1 {
		position: relative;
		margin: 1rem 0;
		font-size: 38px;
		font-weight: 100;
	}
	h2 {
		font-size: 1.1em;
		font-family: "Roboto", serif;
		font-weight: 300;
		color: #707070;
		transition: opacity 0.75s, max-height 0.25s;
		opacity: 0;
		margin: 0;
		max-height: 0px;
		overflow: hidden;
	}
	@media all and (max-width: 1199px) {
		&.slideTitle {
			right: 80px;
		}
		&.feature {
			right: 0px;
		}
	}
	@media all and (max-width: 992px) {
		&.slideTitle {
			.title-stack {
				/* padding: 0.25em 1em 1.1em; */
			}
			.scroll-indicator {
				width: 60px;
				padding-left: 1.1em;
				.help-text {
					display: none;
				}
			}
		}
	}
	@media all and (max-width: 767px) {
		right: 0;
		&.slideTitle {
			width: 100%;
			flex-direction: column-reverse;
			align-content: center;
			top: calc(100% - 128px);
			.title-stack {
				min-width: initial;
				h1 {
					margin: 0.25rem 0 1.75rem;
				}
			}
			.scroll-indicator {
				z-index: 3;
				margin: auto;
				margin-top: -50px;
				padding: 5px 2px 10px;
			}
		}
		&.regularTitle {
			width: 100%;
			min-width: auto;
			justify-content: left;
			flex-direction: row;
			align-content: center;
			.bcrumb {
				/* position: absolute; */
				display: flex;
				align-items: center;
				white-space: nowrap;
				margin: 0;
				padding: 0.5em 1em;
				background: white;
			}
			.title-stack {
				width: 100%;
				min-width: auto;
				display: flex;
				flex-direction: column;
				align-content: center;
				padding: 0.25em 0;
				background-color: rgba(255, 255, 255, 0.125);
				h1 {
					font-size: 1.65em;
					margin: 0 0;
				}
				h2 {
					font-weight: 400;
					font-size: 1em;
				}
			}
		}
	}
`;