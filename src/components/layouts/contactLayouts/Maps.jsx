function Maps() {
  return (
    <div className="rounded-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255248.41900918787!2d99.15119521552626!3d1.603187205349166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x302c245bc766b06b%3A0xd663ee1f0b6d7d85!2sKec.%20Sipirok%2C%20Kabupaten%20Tapanuli%20Selatan%2C%20Sumatera%20Utara!5e0!3m2!1sid!2sid!4v1697421169000!5m2!1sid!2sid"
        width="100%"
        height="450"
        style={{
          border: "0",
          borderRadius: "5px",
          boxShadow:
            "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Maps;
