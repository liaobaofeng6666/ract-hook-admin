import { useEffect } from "react";
import { useLatest } from "@/hooks/liaoHook/useLatest";
// ?: 表示可选参数  void 表示函数没有返回值   ...e: any 表示任何类型的参数的集合
const useEventListener = (event: string, handler: (...e: any) => void, target?: any) => {
	const handlerRef = useLatest(handler);

	useEffect(() => {
		// 支持useRef 和 DOM节点
		let targetElement: any;
		if (!target) {
			targetElement = window;
		} else if ("current" in target) {
			targetElement = target.current;
		} else {
			targetElement = target;
		}

		//  防止没有 addEventListener 这个属性
		if (!targetElement?.addEventListener) return;

		const useEventListener = (event: Event) => {
			return handlerRef.current(event); //这里其实是调用最新的传进来的handler
		};
		targetElement.addEventListener(event, useEventListener);
		return () => {
			targetElement.removeEventListener(event, useEventListener);
		};
	}, [event, target]);
};

export default useEventListener;
