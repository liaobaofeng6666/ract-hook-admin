import { useEffect } from "react";
import { Tabs } from "antd";
import BaseTable from "./components/basetable";
import DynamicTable from "./components/dynamicHead";
import type { TabsProps } from "antd";
import "./index.less";

const UseHooks: React.FC = () => {
	const items: TabsProps["items"] = [
		{
			key: "1",
			label: "baseTable",
			children: <BaseTable />
		},
		{
			key: "2",
			label: "DynamicHead",
			children: <DynamicTable />
		},
		{
			key: "3",
			label: "Tab 3",
			children: "Content of Tab Pane 3"
		}
	];

	const onChangeTab = (key: string) => {
		console.log(key);
	};

	useEffect(() => {
		//
	}, []);

	return (
		<Tabs
			defaultActiveKey="1"
			type="card"
			destroyInactiveTabPane={true}
			className="use-hooks-tabs"
			items={items}
			onChange={onChangeTab}
		></Tabs>
	);
};

export default UseHooks;
