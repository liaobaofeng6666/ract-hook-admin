import React, { useEffect, useState } from "react";
import { Button, Popover, Checkbox, Col, Row } from "antd";
import { AppstoreOutlined, DownOutlined } from "@ant-design/icons";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
const DropList: React.FC = (props: any) => {
	const { selectList, select } = props;
	const [isShow, setClicked] = useState(false);
	const [checkedList, setChecked] = useState<CheckboxValueType[]>([]);

	useEffect(() => {
		const list = selectList.filter((el: any) => el.selected).map((el2: any) => el2.dataIndex);
		setChecked(list);
	}, []);

	const confirm = () => {
		select(checkedList);
		setClicked(false);
	};

	const onChange = (checkedValues: CheckboxValueType[]) => {
		setChecked(checkedValues);
	};

	const handleClickChange = (open: boolean) => {
		setClicked(open);
	};

	const content = (
		<>
			<div className="drop-container">
				<Checkbox.Group defaultValue={["Apple"]} onChange={onChange} value={checkedList}>
					{selectList.map((el: any, idx: any) => (
						<Row key={idx}>
							<Col span={24}>
								<Checkbox value={el.dataIndex}>{el.title}</Checkbox>
							</Col>
						</Row>
					))}
				</Checkbox.Group>
				<Row justify="end">
					<Button type="primary" size="small" onClick={confirm}>
						确定
					</Button>
				</Row>
			</div>
		</>
	);

	return (
		<>
			<Popover content={content} placement="bottom" trigger="click" onOpenChange={handleClickChange} open={isShow}>
				<Button icon={<AppstoreOutlined />}>{<DownOutlined rotate={isShow ? 180 : 0} />}</Button>
			</Popover>
		</>
	);
};
export default DropList;
