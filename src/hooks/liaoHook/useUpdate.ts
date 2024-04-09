// 这里的意思时不依赖其他变量进行更新
import { useReducer } from "react";
export function useUpdate(): () => void {
	const [, update] = useReducer((num: number): number => num + 1, 0);
	return update;
}
