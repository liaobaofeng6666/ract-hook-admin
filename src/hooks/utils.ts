import type BasicTarget from "@/hooks/BasicTarget";
type TargetType = HTMLElement | Element | Window | Document;
export const getTarget = <T extends TargetType>(target: BasicTarget<T>) => {
	let targetElement: any;

	if (!target) {
		targetElement = window;
	} else if ("current" in target) {
		targetElement = target.current;
	} else {
		targetElement = target;
	}

	return targetElement;
};
