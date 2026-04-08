import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Website Design and Build",
    copy: "Modern marketing sites, portfolio sites, and business websites designed to feel premium and convert clearly.",
    tag: "Product",
  },
  {
    title: "App Development",
    copy: "React Native and Expo based app work with a strong eye for interface quality, user flow, and performance.",
    tag: "Mobile",
  },
  {
    title: "Backend and Data",
    copy: "Secure APIs, robust database design, authentication flows, and scalable foundations for real products.",
    tag: "Engineering",
  },
  {
    title: "SEO and Performance",
    copy: "Technical improvements that help websites load faster, rank better, and turn traffic into meaningful leads.",
    tag: "Growth",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-space pt-4">
      <div className="container-edge">
        <p className="section-kicker">Services</p>
        <h2 className="section-title">I build digital work that looks strong and performs properly.</h2>
        <p className="section-copy">
          If you need a new website, a cleaner product experience, a mobile app prototype, or stronger technical foundations behind the scenes, I can help shape and build it.
        </p>

        <div className="services-grid mt-10">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="service-card glass-card"
              data-spotlight="true"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, rotateX: 4, rotateY: index % 2 === 0 ? -4 : 4 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 230, damping: 20, delay: index * 0.05 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="service-card-glow" aria-hidden="true" />
              <div className="service-card-inner">
                <span className="service-tag">{service.tag}</span>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
