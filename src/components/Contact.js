import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  // REGEX
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,50}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Efface l'erreur du champ touché
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!nameRegex.test(formData.name)) {
      newErrors.name = "Nom invalide : lettres uniquement, min 2 caractères.";
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Adresse email invalide.";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Votre message doit contenir au moins 10 caractères.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("sending");

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(() => {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setStatus("error");
      });
  };

  return (
    <section id="contact" className="container py-5">
      <h2 className="section-title text-center">Contact</h2>
      <div className="row">
      <div className="col-md-8 order-md-1">
      <form ref={formRef} onSubmit={handleSubmit} className="glass-card h-100 d-flex flex-column contact-form-wrapper">
        <div className="row">
        {/* Nom */}
        <div className="col-md-6 mb-3">
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        {/* Email */}
        <div className="col-md-6 mb-3">
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        {/* Message */}
        <div className=" mb-3">
          <textarea
            name="message"
            placeholder="Votre message"
            rows="4"
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && (
            <div className="invalid-feedback">{errors.message}</div>
          )}
        </div>
        </div>

        <button className="btn btn-glass " disabled={status === "sending"}>
          {status === "sending" ? "Envoi en cours..." : "Envoyer"}
        </button>

        {/* Messages de statut */}
        {status === "sent" && (
          <div className="alert alert-success text-success" role="alert">
            <h4 className="alert-heading">Merci !</h4>
            <p>Votre message a bien été envoyé 🎉</p>

            <p className="mb-0"> Je vous réponds rapidement.</p>
          </div>
        )}

        {status === "error" && (
          <div
            className="alert alert-danger d-flex align-items-center text-danger"
            role="alert"
          >
            <svg
              class="bi flex-shrink-0 me-2"
              role="img"
              aria-label="Danger:"
            ></svg>
            <div>
              Impossible d'envoyer le message. Vérifiez vos informations ou
              réessayez plus tard.
            </div>
          </div>
        )}
        
      </form>
      </div>

      {/* Info & Social Media Section */}{" "}
      <div className="col-md-4">
        {" "}
        <div className="glass-card h-auto mb-4 text-center">
          {" "}
          <h4 className="text-uppercase m-0">Phone</h4>{" "}
          <hr className="my-4 mx-auto" />{" "}
          <div className="small text-secondary">+33 6 63 10 65 40</div>{" "}
        </div>{" "}
        <div className="glass-card h-auto text-center">
          {" "}
          <h4 className="text-uppercase m-0">Social Media</h4>{" "}
          <hr className="my-4 mx-auto" />{" "}
          <a
            href="https://x.com/gflahaut62"
            className="social-icon"
            aria-label="Twitter"
          >
            {" "}
            <FontAwesomeIcon icon={faTwitter} />{" "}
          </a>{" "}
          <a
            href="https://www.facebook.com/gwendoline.flahaut.9"
            className="social-icon"
            aria-label="Facebook"
          >
            {" "}
            <FontAwesomeIcon icon={faFacebookF} />{" "}
          </a>{" "}
          <a
            href="https://www.instagram.com/4woln4tion4rt/"
            className="social-icon"
            aria-label="Instagram"
          >
            {" "}
            <FontAwesomeIcon icon={faInstagram} />{" "}
          </a>{" "}
          <a
            href="https://github.com/gflahaut"
            className="social-icon"
            aria-label="Github"
          >
            {" "}
            <FontAwesomeIcon icon={faGithub} />{" "}
          </a>{" "}
        </div>{" "}
      </div>
      </div>
    </section>
  );
}

export default Contact;
