import { useState, useEffect } from "react";
import { useLatest } from "@/hooks/liaoHook/useLatest";
// import { useMount } from "@/hooks/liaoHook/useMount";
const children2 = () => {
	const [count, setCount] = useState(0);
	const ref = useLatest(count);
	useEffect(() => {
		const interval = setInterval(() => {
			setCount(ref.current + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	/* useMount(() => {
		const interval = setInterval(() => {
			console.log("count:", count);
			console.log("ref:", ref);
			setCount(ref.current + 1);
		}, 1000);
		return () => clearInterval(interval);
	}); */

	return (
		<>
			<div>自定义Hooks：useLatestt</div>
			<div>count: {count}</div>
		</>
	);
};

export default children2;
