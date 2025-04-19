import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const searchFilter = useSelector((state) => state.filters.name);

  const searchContact = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchFilter.toLowerCase())
    );

  return (
    <ul className={style.list}>
      {searchContact.map((contact) => (
        <li className={style.item} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
