export default function(dateAndTime) {
  dateAndTime = new Date(dateAndTime).toString().split(" ");

  const months = {
    Jan: "January",
    Feb: "February",
    Mar: "March",
    Apr: "April",
    May: "May",
    Jun: "June",
    Jul: "July",
    Aug: "August",
    Sep: "September",
    Oct: "October",
    Nov: "November",
    Dec: "December"
  };
  const month = months[dateAndTime[1]];
  const year = dateAndTime[3];
  let day = dateAndTime[2];

  if (day[0] === "0") day = day[1];

  return `${month} ${day}, ${year}`;
}
