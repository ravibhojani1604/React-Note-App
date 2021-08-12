import React from "react";

function Footer() {

  const date = new Date().getFullYear();

  return (
    <>
      <div className="footer-copyright text-center py-3 page-footer Footer font-small pt-4">
        © {date} Copyright:
        <a href="https://mdbootstrap.com/"> Google.com</a>
      </div>
    </>
  );
}
export default Footer;
