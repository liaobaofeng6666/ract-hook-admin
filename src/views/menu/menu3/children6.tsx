import { memo } from "react";
import useFullscreen from "@/hooks/liaoHook/useFullscreen";

import { Button } from "antd";
const Children6 = memo(() => {
	const { isFullscreen, isEnabled, enterFullscreen, exitFullscreen } = useFullscreen(document.getElementById("root"));

	const handle = () => {
		!isFullscreen ? enterFullscreen() : exitFullscreen();
	};
	return (
		<div style={{ padding: 20 }}>
			<div>{JSON.stringify(isFullscreen)}</div>
			<div>{JSON.stringify(isEnabled)}</div>
			<div>使用fullscreen</div>
			<Button onClick={handle}>{!isFullscreen ? "进入全屏" : "退出全屏"}</Button>
		</div>
	);
});

Children6.displayName = "Children6";
export default Children6;
