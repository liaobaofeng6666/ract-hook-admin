import { Button, Input } from "antd";
import { useMemo, memo } from "react";
import { useReactive } from "@/hooks/liaoHook/useReactive";

const Children4 = memo(() => {
	let state = useReactive({
		count: 1,
		name: "liaobaofeng",
		hobby: "打球",
		status: true,
		inputValue: "",
		ulArray: ["aa", "bb"]
	});

	const ulCount = useMemo(() => {
		return state.ulArray.length;
	}, [state.ulArray]);

	const addUl = (v: string) => {
		state.ulArray.push(v);
	};

	return (
		<>
			<div>count:{state.count}</div>
			<Button
				type="primary"
				onClick={() => {
					state.count++;
				}}
			>
				add
			</Button>
			<div>status:{state.status.toString()}</div>
			<Button
				type="primary"
				onClick={() => {
					state.status = !state.status;
				}}
			>
				切换状态
			</Button>
			<div>数量：{ulCount}</div>
			<form
				onSubmit={() => {
					state.inputValue ? addUl(state.inputValue) : addUl("我是空的");
					state.inputValue = "";
				}}
			>
				<Input
					type="text"
					onChange={e => {
						state.inputValue = e.target.value;
					}}
					value={state.inputValue}
				></Input>
				<Button type="primary" htmlType="submit" style={{ marginLeft: 8 }}>
					增加
				</Button>
			</form>
			<ul>
				{state.ulArray.map((item: any, index: number) => {
					return (
						<div key={index} style={{ display: "flex" }}>
							<li style={{ border: "1px solid blue", width: "50px" }}>{item}</li>
							<label
								onClick={() => {
									state.ulArray.splice(index, 1);
								}}
							>
								删除
							</label>
						</div>
					);
				})}
			</ul>
		</>
	);
});
Children4.displayName = "Children4";
export default Children4;
