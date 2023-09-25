import React from "react";

function Map() {
  return (
    <iframe
      title="Google Maps"
      className="object-cover w-full h-64 rounded-lg lg:h-96 mt-10 shadow-lg drop-shadow-lg"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.6813367104105!2d120.92634887489417!3d14.387839986073729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d308387f5639%3A0xe686fe6ad6d78d33!2sSOLARICH%20ECORP%20IMUS!5e0!3m2!1sen!2sph!4v1694923714664!5m2!1sen!2sph"
      alt=""
    />
  );
}

export default Map;
