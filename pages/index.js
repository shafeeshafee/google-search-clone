import { useRef } from "react";
import { useRouter } from "next/router";

import Head from "next/head";
import Avatar from "../components/Avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Footer from "../components/Footer";

export default function Home() {
	const router = useRouter();
	const searchInputRef = useRef(null);

	const search = (e) => {
		e.preventDefault();
		const term = searchInputRef.current.value;

		if (!term) return;
		router.push(`/search/?term=${term}`);
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<Head>
				<title>Search Clone</title>
				<meta name="description" content="Search Clone was generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* Header */}
			<header className="flex w-full p-5 justify-between text-sm text-gray-700">
				{/* Left */}
				<div className="flex space-x-4 items-center">
					<p className="link">About</p>
					<p className="link">Store</p>
				</div>
				{/* Right */}
				<div className="flex space-x-4 items-center">
					<p className="link">Gmail</p>
					<p className="link">Images</p>
					{/* Icon */}
					<ViewGridIcon className="h-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

					<Avatar url="https://64.media.tumblr.com/6e07a77955759da4509acf2fb1414c08/a8dd71779b6be4f8-5c/s250x400/f43441b31fb56d46385a120e0f66c9ff9a5dad1e.png" />
				</div>
			</header>
			{/* Body */}
			<form className="flex flex-col items-center mt-44 flex-grow w-4/5">
				<Image src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png" height={100} width={300} />
				<div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
					<SearchIcon className="h-5 mr-3 text-gray-500" />
					<input ref={searchInputRef} type="text" className="focus:outline-none flex-grow" />
					<MicrophoneIcon className="h-5" />
				</div>
				<div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm-space-x-4">
					<button onClick={search} className="btn">
						Google Search
					</button>
					<button onClick={search} className="btn">
						I'm Feeling Lucky
					</button>
				</div>
			</form>

			<Footer />
		</div>
	);
}
