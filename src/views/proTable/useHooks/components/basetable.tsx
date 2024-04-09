import { useEffect, useState } from "react";
import { Table, DatePicker, Button, Space, Pagination } from "antd";
import useAuthButtons from "@/hooks/useAuthButtons";
import type { PaginationProps } from "antd";

import "../index.less";
const baseTable: React.FC = () => {
	// 按钮权限
	const { BUTTONS } = useAuthButtons();
	const { RangePicker } = DatePicker;

	useEffect(() => {
		// console.log(BUTTONS);
	}, []);

	const dataSource = [
		{
			key: "1",
			name: "胡彦斌",
			age: 32,
			address: "西湖区湖底公园1号"
		},
		{
			key: "2",
			name: "胡彦祖",
			age: 42,
			address: "西湖区湖底公园1号"
		},
		{
			key: "3",
			name: "刘彦祖",
			age: 18,
			address: "西湖区湖底公园1号"
		},
		{
			key: "4",
			name: "刘彦祖",
			age: 18,
			address: "翻斗大街翻斗花园二号楼1001室"
		},
		{
			key: "5",
			name: "刘彦祖",
			age: 18,
			address: "翻斗大街翻斗花园二号楼1001室"
		}
	];
	const [souceD, setSouceData] = useState(dataSource);
	let randomList = (): any[] => {
		let length = Math.round(Math.random() * 30);
		let dataSource = [];
		for (let index = 0; index < length; index++) {
			dataSource.push({
				key: "5" + Math.random(),
				name: "刘彦祖" + Math.random(),
				age: 18 + Math.random() * 10,
				address: "翻斗大街翻斗花园二号楼1001室"
			});
		}

		return dataSource;
	};
	const getData = () => {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve(randomList());
			}, Math.round(Math.random() * 1000));
		});
	};

	const columns: any[] = [
		{
			title: "姓名",
			dataIndex: "name",
			key: "name",
			align: "center"
		},
		{
			title: "年龄",
			dataIndex: "age",
			key: "age",
			align: "center"
		},
		{
			title: "住址",
			dataIndex: "address",
			key: "address",
			align: "center",
			width: "50%"
		}
	];

	const [current, setCurrent] = useState(3);
	const onChange: PaginationProps["onChange"] = async page => {
		setCurrent(page);
		let res: any = await getData();
		setSouceData(res);
	};
	return (
		<div className="card content-box">
			<div className="date">
				<span>切换国际化的时候看我 😎 ：</span>
				<RangePicker />
			</div>
			<div className="auth">
				<Space>
					{BUTTONS.add && <Button type="primary">我是 Admin && User 能看到的按钮</Button>}
					{BUTTONS.delete && <Button type="primary">我是 Admin 能看到的按钮</Button>}
					{BUTTONS.edit && <Button type="primary">我是 User 能看到的按钮</Button>}
				</Space>
			</div>
			<Table bordered={true} dataSource={souceD} pagination={false} columns={columns} />
			<Pagination className="page-style" current={current} onChange={onChange} total={50} />;
		</div>
	);
};

export default baseTable;
