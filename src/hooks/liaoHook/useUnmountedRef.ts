// 判断组件是否卸载
import { useEffect, useRef } from "react";
export const useUnmountedRef = (): { readonly current: boolean } => {
	const unmountedRef = useRef<boolean>(false);
	useEffect(() => {
		unmountedRef.current = false;
		return () => {
			unmountedRef.current = true;
		};
	}, []);
	return unmountedRef;
};
