import React from "react";
import { Modal, Form, Input, DatePicker, TimePicker, Button } from "antd";

export default function BokaBordModal({ visible, onClose }) {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    console.log("Bokningsdata:", values);
    form.resetFields();
    onClose();
  };


//   const handleFinish = (values) => {
//   emailjs.send(
//     'din_service_id',      // från EmailJS dashboard
//     'din_template_id',     // från EmailJS dashboard
//     {
//       namn: values.namn,
//       datum: values.datum.format("YYYY-MM-DD"),
//       tid: values.tid.format("HH:mm"),
//     },
//     'din_user_id'          // från EmailJS
//   )
//   .then(() => {
//     message.success("Bokningen har skickats!");
//     form.resetFields();
//     onClose();
//   })
//   .catch((error) => {
//     console.error("Email error:", error);
//     message.error("Något gick fel. Försök igen.");
//   });
// };


  return (
    <Modal
      title="Bokningsförfrågan"
      open={visible}
      onCancel={onClose}
      footer={null}
    >
      <Form layout="vertical" form={form} onFinish={handleFinish}>
        <Form.Item
          label="Namn"
          name="namn"
          rules={[{ required: true, message: "Vänligen ange ditt namn" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Datum"
          name="datum"
          rules={[{ required: true, message: "Välj ett datum" }]}
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          label="Tid"
          name="tid"
          rules={[{ required: true, message: "Välj en tid" }]}
        >
          <TimePicker style={{ width: "100%" }} format="HH:mm" />
        </Form.Item>
        
         <Form.Item
          label="Allergier"
          name="allergi"
          rules={[{ message: "Skriv ner eventuella allergier" }]}
        >
          <Input />
        </Form.Item>

                 <Form.Item
          label="Övrigt"
          name="overigt"
          rules={[{ message: "Övrigt" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block className="skicka-bokning-knapp">
            Skicka bokning
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
