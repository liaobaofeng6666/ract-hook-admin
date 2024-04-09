import { Row, Col, Button, Form, Input, Select, Space, Checkbox, message, Radio, DatePicker, InputNumber } from "antd";
import { useState } from "react";
import type { SelectProps } from "antd";
import "./index.less";
type LayoutType = Parameters<typeof Form>[0]["layout"];
type RequiredMark = boolean | "optional";
const { RangePicker } = DatePicker;
const { Option } = Select;

// ______________________________________________________________
const slectOptions: SelectProps["options"] = [
	{
		label: "female",
		value: "0"
	},
	{
		label: "male",
		value: "1"
	},
	{
		label: "other",
		value: "2"
	}
];

const radioOptions = [
	{ label: "horizontal", value: "horizontal" },
	{ label: "vertical", value: "vertical" },
	{ label: "inline", value: "inline" }
];
// _____________________________________________________________________________
const BasicForm: React.FC = () => {
	const [form] = Form.useForm();
	const [formLayout, setFormLayout] = useState<LayoutType>("horizontal");
	const userValue = Form.useWatch("user", form);

	// select change
	const onGenderChange = (value: string) => {
		switch (value) {
			case "1":
				form.setFieldsValue({ note: "Hi, man!" });
				return;
		}
	};

	const formItemLayout =
		formLayout === "horizontal"
			? {
					wrapperCol: { span: 14 }
			  }
			: null;

	const onValuesChange = ({ layout }: { layout: LayoutType }) => {
		console.log(layout);

		setFormLayout(layout);
	};

	// 校验成功后触发
	const onFinish = (values: any) => {
		message.success("提交的数据为 : " + JSON.stringify(values));
		console.log(JSON.stringify(values));
	};

	// 重置
	const onReset = () => {
		form.resetFields();
	};

	// 回显
	const onFill = () => {
		form.setFieldsValue({
			user: "mark",
			note: "Hello world!",
			gender: "0"
		});
	};

	return (
		<div className="card content-box">
			{/* radio */}
			<Form
				form={form}
				colon
				name="control-hooks"
				{...formItemLayout}
				layout={formLayout}
				requiredMark={"requrie" as RequiredMark}
				onFinish={onFinish}
				labelCol={{ span: 8 }}
				onValuesChange={onValuesChange}
			>
				<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
					<Col span={24}>
						<Form.Item label="Form Layout" name="layout">
							<Radio.Group buttonStyle="solid" optionType="button" value={formLayout} options={radioOptions}></Radio.Group>
						</Form.Item>
					</Col>
					<Col span={24}>
						<Form.Item name="user" label="User">
							<Input placeholder="Please enter a user" allowClear />
						</Form.Item>
					</Col>
					<Col span={24}>
						<Form.Item name="note" label="Note">
							<Input placeholder="Please enter a user note" allowClear />
						</Form.Item>
					</Col>
					<Col span={24}>
						<Form.Item name="gender" label="Gender">
							<Select placeholder="Select a option and change input text above" onChange={onGenderChange} allowClear>
								{slectOptions.map((el: any) => (
									<Option key={el.value} value={el.value}>
										{el.label}
									</Option>
								))}
							</Select>
						</Form.Item>
					</Col>
					<Col span={24}>
						<Form.Item label="Password" name="password" rules={[{ required: true, message: "Please input your password!" }]}>
							<Input.Password />
						</Form.Item>
					</Col>
					<Col span={24}>
						<Form.Item label="日期" required name="date" rules={[{ required: true, message: "Please input your password!" }]}>
							<DatePicker />
						</Form.Item>
					</Col>

					<Col span={24}>
						<Form.Item
							label="日期范围"
							required
							name="dateRange"
							rules={[{ required: true, message: "Please input your password!" }]}
						>
							<RangePicker />
						</Form.Item>
					</Col>
					<Col span={24}>
						<Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
							<Checkbox>Remember me</Checkbox>
						</Form.Item>
					</Col>
					<Col span={24}>
						<Form.Item name="age" label="Age (Not Watch)">
							<InputNumber />
						</Form.Item>
					</Col>

					<Col span={24}>
						<Form.Item wrapperCol={{ offset: 1 }}>
							<Space>
								<Button type="primary" htmlType="submit">
									Submit
								</Button>
								<Button htmlType="button" onClick={onReset}>
									Reset
								</Button>
								<Button type="link" htmlType="button" onClick={onFill}>
									Fill form
								</Button>{" "}
							</Space>
						</Form.Item>
					</Col>
				</Row>
			</Form>
			<div>name:{userValue}</div>
		</div>
	);
};

export default BasicForm;
