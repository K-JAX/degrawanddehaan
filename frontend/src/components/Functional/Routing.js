import React from "react";
import { Switch, Router, Route, useLocation } from "react-router-dom";
import { TransitionGroup, Transition } from "react-transition-group";

// Components
import Header from "../Design/Organisms/Header";
import Footer from "../Design/Molecules/Footer";
import Intro from "../Design/Templates/Intro";
// const Home = React.lazy(() => import("../Design/Templates/Home"));
import Home from "../Design/Templates/Home";
import Portfolio from "../Design/Templates/Portfolio";
import ProjectType from "../Design/Templates/Project-Type";
import ProjectSingle from "../Design/Templates/Project-Single";
import About from "../Design/Templates/About";
import PressArticles from "../Design/Templates/PressArticles";
import { PressArticleSingle } from "../Design/Templates/PressArticle-Single";
import Contact from "../Design/Templates/Contact";
import Page from "../Design/Templates/Page";
import Post from "../Design/Templates/Post";
import { NotFound } from "../Design/Templates/404";
import Search from "../Design/Templates/Search";
import Category from "../Design/Templates/Category";
import Headline from "../Design/Atoms/Headline";

import {
	storeVisitedCookie,
	getCookie,
	deleteCookie,
} from "../Functional/StoreCookies";

const Routing = () => {
	const location = useLocation();
	const { pathname, key } = location;

	var visitedCookie = getCookie("visited");
	deleteCookie("visited");

	if (pathname !== "/") {
		storeVisitedCookie();
	}

	// const path = location.pathname;
	// const store = window.localStorage;
	// let url = "";
	// let prevUrl = "";

	// url = store.getItem("url");
	// store.setItem("prevUrl", url);
	// store.setItem("url", path);

	// url = store.getItem("url");
	// prevUrl = store.getItem("prevUrl");
	// console.log(prevUrl);

	let HomeRoute =
		visitedCookie === null || visitedCookie === undefined
			? { path: "/", component: Intro }
			: { path: "/", component: Home };

	const routes = [
		HomeRoute,
		{ path: "/about", component: About },
		{ path: "/press_article", component: PressArticles },
		{ path: "/press_article/:slug", component: PressArticleSingle },
		{ path: "/contact", component: Contact },
		{ path: "/portfolio", component: Portfolio },
		{ path: "/portfolio/:slug", component: ProjectSingle },
		{ path: "/page/:slug", component: Page },
		{ path: "/post/:slug", component: Post },
		{ path: "/category/:slug", component: Category },
		{ path: "/search", component: Search },
		{ path: "/*", component: NotFound },
	];

	return (
		<TransitionGroup component={null}>
			<Transition
				key={key}
				unmountOnExit
				classNames="page-route"
				timeout={1000}
			>
				{(status) => (
					<Switch location={location}>
						{routes.map((route, i) => (
							<Route
								exact
								key={route.path}
								path={route.path}
								render={(rest) => (
									<div
										className={`page page-route-${status} ${
											route.path !== "/" &&
											"offset-header"
										}`}
									>
										<route.component
											{...rest}
											status={status}
										/>
									</div>
								)}
							/>
						))}
					</Switch>
				)}
			</Transition>
		</TransitionGroup>
	);
};

export default Routing;
