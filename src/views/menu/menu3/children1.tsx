import { useState } from "react";
import React from "react";
import { flushSync } from "react-dom";
import { Button } from "antd";

const Children1 = React.memo(() => {
	//父组件变化了，子组件没有变化，用了memo 就不会触发重新渲染了。
	const [x, setX] = useState(10);
	const [y, setY] = useState(20);
	const [z, setZ] = useState(30);
	const handle = () => {
		flushSync(() => {
			//用了flushSync 会立即刷新 ， 不会说将队列三个合成一个执行，而是用了flushSync执行一次，下面的执行一次。
			setX(x + 1);
			setY(y + 1);
		});
		setZ(z + 1);
	};
	return (
		<>
			<div>使用flushSync</div>
			<Button onClick={handle} type="primary">
				点击更改
			</Button>
			<div>count: {x}</div>
			<div>count: {y}</div>
			<div>count: {z}</div>
		</>
	);
});
Children1.displayName = "Children1";
export default Children1;
