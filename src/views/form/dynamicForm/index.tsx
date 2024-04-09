import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space } from "antd";
import "./index.less";

const DynamicForm = () => {
	const onFinish = (values: any) => {
		console.log("Received values of form:", values);
	};

	return (
		<div className="card content-box">
			<Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
				<Form.List name="users">
					{(fields, { add, remove, move }) => (
						<>
							{fields.map(({ key, name, ...restField }) => (
								<Space key={key} style={{ display: "flex", marginBottom: 8 }} align="baseline">
									<Form.Item
										label="姓名"
										{...restField}
										name={[name, "first"]}
										rules={[{ required: true, message: "Missing first name" }]}
									>
										<Input placeholder="First Name" />
									</Form.Item>
									<Form.Item {...restField} name={[name, "last"]} rules={[{ required: true, message: "Missing last name" }]}>
										<Input placeholder="Last Name" />
									</Form.Item>
									<MinusCircleOutlined onClick={() => remove(name)} />
								</Space>
							))}
							<Form.Item>
								<Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
									Add field
								</Button>
								<Button type="dashed" onClick={() => add("The head item", 0)} block icon={<PlusOutlined />}>
									Add field head
								</Button>
								<Button type="dashed" onClick={() => move(1, 0)} block icon={<PlusOutlined />}>
									move field
								</Button>
							</Form.Item>
						</>
					)}
				</Form.List>
				<Form.Item>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default DynamicForm;
