import { useReducer } from "react";
import { Button } from "antd";
const children3 = () => {
	const reducer = (state: any, action: { type: any }) => {
		switch (action.type) {
			case "add":
				return (state = state + 1);
				break;
			case "decrease":
				return (state = state - 1);
				break;
			default:
				break;
		}
	};
	const [count, dispatch] = useReducer(reducer, 0);
	return (
		<>
			<div>count:{count}</div>
			<Button
				type="primary"
				onClick={() => {
					dispatch({ type: "add" });
				}}
			>
				add
			</Button>
		</>
	);
};

export default children3;
