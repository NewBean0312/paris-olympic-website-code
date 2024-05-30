import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3950.1608629288876!2d2.446480140203412!3d48.64015644907548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sko!2skr!4v1717032972403!5m2!1sko!2skr"
        style={{ border: "0" }}
        allowFullScreen={true}
      ></iframe>
      <p className="copyright">Paris 2024</p>
    </footer>
  );
};

export default Footer;
