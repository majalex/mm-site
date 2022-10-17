import '../styles/Contact.scss';

import { faCommentSms, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
    return (
        <>
            <div className="contact" id="contact">
                <div className="contact-box">
                    <h1>KONTAKT</h1>
                </div>
                <div className="contact-data">
                    <div className="data">
                        <FontAwesomeIcon icon={faPhone} />
                        <p>Zadzwoń : <span>516-682-006</span></p>
                    </div>
                    <div className="data">
                        <FontAwesomeIcon icon={faCommentSms} />
                        <p>lub napisz : <span>516-682-006</span></p>
                    </div>
                    <div className="data">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p>adres e-mail: <span>oskarmaj1@gmail.com</span></p>
                    </div>
                </div>
            </div>
            <div className="footer">
                <p>Wykonanie i projekt strony
                    <a href="https://majalex.github.io/portfolio/" target="_blank" rel="noreferrer"> Link</a>
                </p>
            </div>
        </>
    )
}

export default Contact;