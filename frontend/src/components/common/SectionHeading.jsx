function SectionHeading({ tag, title, subtitle, center = false }) {
  return (
    <div
      style={{
        textAlign: center ? "center" : "left",
        marginBottom: "44px",
      }}
    >
      {tag && <div className="section-tag">{tag}</div>}

      {title && (
        <h2
          className="section-title"
          style={{
            marginLeft: center ? "auto" : "0",
            marginRight: center ? "auto" : "0",
          }}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          className="section-subtitle"
          style={{
            marginLeft: center ? "auto" : "0",
            marginRight: center ? "auto" : "0",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;