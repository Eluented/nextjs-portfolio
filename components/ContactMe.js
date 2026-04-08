import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactMe() {
  const [validEmail, setValidEmail] = useState(false);
  const [touched, setTouched] = useState({});
  const [contactState, setContactState] = useState({
    email: "",
    subject: "",
    message: "",
    isLoading: false,
    error: "",
  });

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const formSubmitDisable =
    !contactState.email ||
    !contactState.subject ||
    !contactState.message ||
    !validEmail ||
    contactState.isLoading;

  const validateEmail = (email) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

  const buildMailtoLink = () => {
    const subject = encodeURIComponent(contactState.subject);
    const body = encodeURIComponent(
      [
        `From: ${contactState.email}`,
        "",
        contactState.message,
      ].join("\n")
    );

    return `mailto:onurbelek@outlook.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = () => {
    window.location.href = buildMailtoLink();
    setContactState({
      email: "",
      subject: "",
      message: "",
      isLoading: false,
      error: "",
    });

    toast.info("Your email client is opening", {
      position: "bottom-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setValidEmail(!!validateEmail(e.target.value));
    }
    setContactState({ ...contactState, [e.target.name]: e.target.value });
  };
  return (
    <section id="contact" className="section-space pb-24">
      <ToastContainer
        position="bottom-center"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="container-edge grid gap-8 lg:grid-cols-[0.9fr_1fr]">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Let&apos;s build something people remember.</h2>
          <p className="section-copy">
            If you need a website for your business, a sharper product experience, or help improving search visibility and rankings, send me a message and I will get back to you quickly.
          </p>
          <div className="glass-card mt-8 rounded-3xl p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-white/65">Email</p>
            <a href="mailto:onurbelek@outlook.com" className="mt-2 inline-block text-lg font-semibold text-cyan-300">
              onurbelek@outlook.com
            </a>
            <p className="mt-3 text-sm text-slate-300">Website design, development, SEO focused improvements, and performance tuning available for a fee.</p>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          onSubmit={(e) => {
            e.preventDefault();
            if (!formSubmitDisable) {
              setContactState((prev) => ({
                ...prev,
                isLoading: true,
              }));
              handleSubmit();
            }
          }}
          className="glass-card rounded-3xl p-6"
        >
          {contactState.error && <p className="mb-4 text-sm text-red-300">{contactState.error}</p>}

          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-white/90">
            Your email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={contactState.email}
            placeholder="name@email.com"
            onChange={handleChange}
            onBlur={onBlur}
            className="input-modern"
            required
          />
          {touched.email && !validEmail && <p className="mt-2 text-sm text-red-300">Enter a valid email address</p>}

          <label htmlFor="subject" className="mb-2 mt-5 block text-sm font-semibold text-white/90">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={contactState.subject}
            placeholder="What is this about?"
            onChange={handleChange}
            className="input-modern"
            required
          />

          <label htmlFor="message" className="mb-2 mt-5 block text-sm font-semibold text-white/90">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={contactState.message}
            placeholder="Tell me about your idea, role, or project goals"
            onChange={handleChange}
            className="textarea-modern"
            required
          />

          <button type="submit" className="pill-button primary-btn mt-6" disabled={formSubmitDisable}>
            {contactState.isLoading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
