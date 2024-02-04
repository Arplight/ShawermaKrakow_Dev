import { contactInfo } from "../../../../../Data/contact/Contact";
import ContactCard from "../contact_card/ContactCard";

const ContactInfo = () => {
  return (
    <section className=" w-full py-6">
      <div className="container m-auto flex flex-col justify-center gap-4">
        <span className="">
          <iframe
            title="map-location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10245.38541504437!2d19.935124!3d50.0610749!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165bad973da3bd%3A0x2112d623d77fc5d5!2sShawerma%20Klub%20Haus!5e0!3m2!1sen!2seg!4v1704720921091!5m2!1sen!2seg"
            height="600"
            className="w-full"
            loading="lazy"
          ></iframe>
        </span>
        <span>
          <ul className="flex flex-col lg:flex-row justify-center xl:justify-between flex-wrap xl:flex-nowrap items-center lg:items-center gap-2">
            {contactInfo.map((contact, index) => (
              <li key={index} className="w-full md:w-[400px]  h-[260px]">
                <ContactCard
                  cardIcon={contact.contactIcon}
                  cardInfo={contact.contactInfo}
                  cardTitle={contact.contactTitle}
                />
              </li>
            ))}
          </ul>
        </span>
      </div>
    </section>
  );
};

export default ContactInfo;
