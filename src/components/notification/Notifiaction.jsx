import { ToastContainer } from "react-toastify";
import "./notifiaction.css";
import "react-toastify/dist/ReactToastify.css";

const Notifiaction = () => {
  return (
    <div className="notifiaction">
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Notifiaction;
