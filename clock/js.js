const display_clock = () => {
  const today = new Date();
  const date_options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const locale = "en-US";
  const time = today.toLocaleTimeString(locale);
  const date = today.toLocaleDateString(locale, date_options);

  document.querySelector(".time").innerHTML = time;
  document.querySelector(".date").innerHTML = date;

  setTimeout(display_clock, 100);
};

display_clock();
