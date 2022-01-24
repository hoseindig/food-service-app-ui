import { Modal } from "react-bootstrap";
import Button from "@mui/material/Button";
import DataTable from "./base/DataTable";
const OrderInfoModal = ({ show, setShow, data, sendShopList }) => {
  const columns = [
    { field: "id", headerName: "ردیف", width: 70 },
    {
      field: "image",
      headerName: "تصویر",
      renderCell: (params) => <img width={50} src={params.value} />,
    },
    { field: "title", headerName: "عنوان", width: 150 },
    { field: "count", headerName: "تعداد" },

    { field: "info", headerName: "جزئیات", width: 250 },
    { field: "price", headerName: "قیمت" },
  ];
  return (
    <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>جزئیات سفارش</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <DataTable data={data} columns={columns} />

        <Button
          variant="contained"
          color="success"
          onClick={() => sendShopList()}
        >
          ثبت سفارش
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => setShow(false)}
        >
          لغو
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default OrderInfoModal;
