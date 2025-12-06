import React, { useState, useRef } from "react";
import keys from "./keys.json";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(""); // '', 'sending', 'sent', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Le nom est requis.";
    if (!formData.email) {
      newErrors.email = "L'email est requis.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "L'adresse email est invalide.";
    }
    if (!formData.message) newErrors.message = "Le message est requis.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("sending");

    emailjs
      .sendForm(
        keys.YOUR_SERVICE_ID,
        keys.YOUR_TEMPLATE_ID,
        form.current,
        keys.YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("sent");
        },
        (error) => {
          console.log(error.text);
          setStatus("error");
        }
      );
  };

    return (
        <section id="contact" className="container py-5">
      <h2 className="section-title text-center">Contact</h2>
      <div className="row justify-content-center align-items-stretch g-5">

        {/* Contact Form Section */}
        <div className="col-lg-7">
          <div className="glass-card h-100 d-flex flex-column">
            <h4 className="text-uppercase text-center mb-4">Mailing</h4>
            <form ref={form} onSubmit={handleSubmit} className="d-flex flex-column h-100">
              <div className="mb-3">
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  placeholder="Votre nom"
                  aria-label="Nom"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Votre email"
                  aria-label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div className="mb-3 flex-grow-1">
                <textarea
                  className={`form-control h-100 ${errors.message ? "is-invalid" : ""}`}
                  rows="4"
                  placeholder="Votre message"
                  aria-label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
              </div>
                            <button className="btn btn-glass w-100" disabled={status === "sending"}>
                {status === "sending" ? "Envoi en cours..." : "Envoyer"}
              </button>
              {status === "error" && <div className="text-danger mt-3">Une erreur est survenue. Veuillez réessayer.</div>}
            </form>
          </div>
        </div>

        {/* Info & Social Media Section */}
        <div className="col-lg-5">
          <div className="glass-card h-auto mb-4 text-center">
            <h4 className="text-uppercase m-0">Phone</h4>
            <hr className="my-4 mx-auto" />
            <div className="small text-secondary">+33 6 63 10 65 40</div>
          </div>
          <div className="glass-card h-auto text-center">
            <h4 className="text-uppercase m-0">Social Media</h4>
            <hr className="my-4 mx-auto" />
            <a href="https://x.com/gflahaut62" className="social-icon" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.facebook.com/gwendoline.flahaut.9" className="social-icon" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.instagram.com/4woln4tion4rt/" className="social-icon" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://github.com/gflahaut" className="social-icon" aria-label="Github">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
