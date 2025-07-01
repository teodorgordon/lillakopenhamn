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
      title="Under uppbyggnad"
      open={visible}
      onCancel={onClose}
      footer={null}
    >
      <Form layout="vertical" form={form} onFinish={handleFinish}>

        <p>Sidan är fortfarande under uppbyggnad. Meny och bokningsfunktion kommer inom kort.</p>

        <Form.Item>
          <Button type="primary" htmlType="submit" block className="skicka-bokning-knapp">
            Okej
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
