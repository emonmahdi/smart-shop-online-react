import React from "react";

const SectionHeading = ({ title, subtitle, align = "left" }) => {
  return (
    <div className={`mb-8 ${align === "center" ? "text-center" : "text-left"}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">{title}</h2>
      {subtitle && (
        <p
          className={`mt-2 text-text max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
