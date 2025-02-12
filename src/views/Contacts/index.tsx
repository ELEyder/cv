import React from "react";
import styles from "./index.module.css";
import { ReactComponent as GitHub } from '../../assets/contact/github.svg';
import { ReactComponent as LinkedIn } from '../../assets/contact/linkedin.svg';
import { ReactComponent as Correo } from '../../assets/contact/email.svg';
import { ReactComponent as Internet } from '../../assets/contact/internet.svg';
import { ReactComponent as Whatsapp } from '../../assets/contact/whatsapp.svg';
import { ReactComponent as Phone } from '../../assets/contact/phone.svg';

const CONTACTS = [
  {
    name: "Whatsapp",
    url: "https://wa.me/51919593169",
    icon: <Whatsapp className={styles.icon}/>,
  },
  {
    name: "Teléfono",
    url: "tel:+51919593169",
    icon: <Phone className={styles.icon}/>,
  },
  {
    name: "GitHub",
    url: "https://github.com/eleyder",
    icon: <GitHub className={styles.icon}/>,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/eyder-huayta",
    icon: <LinkedIn className={styles.icon}/>,
  },
  {
    name: "Correo",
    url: "mailto:eyderhuayta26@gmail.com",
    icon: <Correo className={styles.icon}/>,
  },
  // {
  //   name: "Portafolio",
  //   url: "#",
  //   icon: <Internet className={styles.icon}/>,
  // },
];

const Contacts: React.FC = () => {
  return (
    <section className={styles.container}>
      <h1>Contacto</h1>
      <div className={styles.contactList}>
        {CONTACTS.map((contact, index) => (
          <a key={index} href={contact.url} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
            {contact.icon}
            <span>{contact.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contacts;
