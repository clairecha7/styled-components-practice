import { MainBGDiv } from "../styles/Theme.style";

const Contact = () => {
  return (
    <MainBGDiv className="contact">
      <h2>Contact Me ...</h2>
      <div className="contact__list">
        <div className="contact__item">
          <i className="fas fa-envelope"></i> Email
          <div className="text-secondary">nurettin@clarusway.com</div>
        </div>
        <div className="contact__item">
          <i className="fas fa-mobile-alt"></i> Phone
          <div className="text-secondary">+90 (546) 472-XXXX</div>
        </div>
        <div className="contact__item">
          <i className="fas fa-map-marker-alt"></i> Address
          <div className="text-secondary">
            3539 St. Yenimahalle, Ankara/Turkey
          </div>
        </div>
      </div>
    </MainBGDiv>
  );
};

export default Contact;
