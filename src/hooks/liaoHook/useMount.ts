// 组件挂载时触发
import { useEffect } from "react";
export const useMount = (fn: () => void) => {
	useEffect(() => {
		fn?.();
	}, []);
};
