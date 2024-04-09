import { useState, useEffect, memo } from "react";
import { useLatest } from "@/hooks/liaoHook/useLatest";
import { Button, message } from "antd";
const Children5 = memo(() => {
	const [count, setCount] = useState(0);
	const ref = useLatest(count);
	useEffect(() => {
		const timer = setTimeout(() => {
			setCount(v => v + 1);
		}, 2000);
		return () => {
			clearTimeout(timer);
		};
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => {
			message.info(`当前的count为：${ref.current}`);
		}, 5000);
		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<div style={{ padding: 20 }}>
			<div>数字：{count}</div>
			<Button onClick={() => setCount(v => v + 1)}>加1</Button>
		</div>
	);
});

Children5.displayName = "Children5";
export default Children5;
