import { IoPersonSharp } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import style from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <>
      <div className={style.contact}>
        <p className={style.text}>
          <IoPersonSharp className={style.icon} />
          {contact.name}
        </p>
        <p className={style.text}>
          <BsTelephoneFill className={style.icon} />
          {contact.number}
        </p>
      </div>
      <button className={style.btnDelete} onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};

export default Contact;
