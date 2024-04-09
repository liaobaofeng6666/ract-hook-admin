import { useEffect, useState } from "react";
import { Table, Pagination } from "antd";
import DropList from "./dropDown";
import type { PaginationProps } from "antd";
import { headList } from "../mixin/index";
import "../index.less";
const baseTable: React.FC = () => {
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
	const [columns, setColumns] = useState([]);

	useEffect(() => {
		const defaultHead = headList.filter(el => el.selected);
		setColumns(defaultHead);
	}, []);

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

	const [current, setCurrent] = useState(3);
	const onChange: PaginationProps["onChange"] = async page => {
		setCurrent(page);
		let res: any = await getData();
		setSouceData(res);
	};

	const selectHead = (val: string[]) => {
		const choosedList = headList.filter(el => {
			return val.includes(el.dataIndex);
		});
		setColumns(choosedList);
	};

	return (
		<div className="card content-box">
			<div className="head-select">{<DropList selectList={headList} select={selectHead} />}</div>
			<Table bordered={true} dataSource={souceD} pagination={false} columns={columns} />
			<Pagination className="page-style" current={current} onChange={onChange} total={50} />;
		</div>
	);
};

export default baseTable;
