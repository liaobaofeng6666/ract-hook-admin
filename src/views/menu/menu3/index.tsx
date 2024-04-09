import { useState, useEffect } from "react";
import Children1 from "./children1";
import Children2 from "./children2";
import Children3 from "./children3";
import Children4 from "./children4";
import Children5 from "./children5";
import Children6 from "./children6";
const Menu3 = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			// console.log("count:", count);
			setCount(v => v + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<div>自定义Hooks：useLatestt</div>
			<div>count: {count}</div>
			<Children1 />
			<hr />
			<div>使用fulushsync</div>
			<Children2 />
			<hr />
			<div>useReducer的使用，它只能用在单个组件中</div>
			<Children3 />
			<hr />
			<div>使用自己的hookuseReactive</div>
			<Children4 />
			<hr />
			<div>经典面试题的填写</div>
			<Children5 />
			<hr />
			<div>使用fullscreen</div>
			<Children6 />
		</>
	);
};

export default Menu3;
