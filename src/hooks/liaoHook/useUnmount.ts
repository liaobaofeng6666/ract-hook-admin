//组件卸载时的钩子
import { useEffect } from "react";
import { useLatest } from "@/hooks/liaoHook/useLatest";
export const useUnmount = (fn: () => void) => {
	const fnRef = useLatest(fn);
	useEffect(
		() => () => {
			fnRef.current();
		},
		[]
	);
};
