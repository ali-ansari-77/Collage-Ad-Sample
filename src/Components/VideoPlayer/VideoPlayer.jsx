/** @format */

import { useRef } from "react";
import "./VideoPlayer.css";
import v1 from "../../assets/v1.mp4";
const VideoPlayer = ({ playState, setPlayState }) => {
	const player = useRef(null);
	const closePlayer = (e) => {
		if (e.target === player.current) {
			setPlayState(false);
		}
	};

	return (
		<div
			className={`video-player ${playState ? "" : "hide"}`}
			ref={player}
			onClick={closePlayer}>
			<video src={v1} autoPlay muted controls></video>
		</div>
	);
};

export default VideoPlayer;
