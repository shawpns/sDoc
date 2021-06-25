// Card Functions-----------------

const NAME = "Viewers";

const CARDS = [{
    name: "About Me",
    icon: "ri-account-pin-box-fill",
    link: "about.html",
  },
  {
    name: "A Corpse in the Well",
    icon: "ri-ball-pen-fill",
    link: "https://drive.google.com/file/d/1s1BIhmSJyx40jNfJ7sSEjcQDQBC5ixV1/preview",
  },
  {
    name: "EARTH NEVER DIES",
    icon: "ri-ball-pen-fill",
    link: "https://drive.google.com/file/d/1NPaStoCXa7H-XmioojK71t34kfq7RbKG/preview",
  },
  {
    name: "GE GRAMMER",
    icon: "ri-ball-pen-fill",
    link: "https://drive.google.com/file/d/1vLEK0Sh2pYwbPeQjLi19yR7OPFtfwxgw/preview",
  },
  {
    name: "Death of Clerk",
    icon: "ri-ball-pen-fill",
    link: "https://drive.google.com/file/d/1dxFD8AOGJRZuIh8nNNUTeRGvf3S-U4sI/preview",
  },
  {
    name: "DBMS",
    icon: "ri-ball-pen-fill",
    link: "https://drive.google.com/file/d/1FHMKR_m-jnd9y3GvtacHLRvXkWuYUg0u/preview",
  },
  {
    name: "Comming Soon",
    icon: "ri-brush-fill",
    link: "https://www.figma.com/",
  },
  {
    name: "YouTube",
    icon: "ri-youtube-fill",
    link: "https://www.youtube.com/",
  },
  {
    name: "LinkedIn",
    icon: "ri-linkedin-fill",
    link: "https://www.linkedin.com/",
  },
  {
    name: "Gmail",
    icon: "ri-google-fill",
    link: "https://mail.google.com/",
  },
];

/* -------------------------------------------------------- */

/******************/
/* CLOCK FUNCTION */
/******************/

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const updateDate = () => {
  // Create a new Date object and get the complete Date/Time information
  const completeDate = new Date();

  // Time Variables
  let currentHour = formatDigit(completeDate.getHours());
  let currentMinute = formatDigit(completeDate.getMinutes());

  // Date Variables
  let currentDay = completeDate.getDay();
  let currentNumber = completeDate.getDate();
  let currentMonth = completeDate.getMonth();
  let currentYear = completeDate.getFullYear();

  // Update the Time
  currentTime.innerHTML = `${
    currentHour % 12 == 0 ? "12" : currentHour % 12
  }:${currentMinute} ${currentHour > 11 ? "PM" : "AM"}`;

  // Update the Date
  currentDate.innerHTML = `${DAYS[currentDay]} ${currentNumber}, ${MONTHS[currentMonth]} ${currentYear}`;

  // Create a Loop
  setTimeout(() => {
    updateDate();
  }, 1000);
};

const formatDigit = (digit) => {
  return digit > 9 ? `${digit}` : `0${digit}`;
};

/******************/
/* CARDS FUNCTION */
/******************/

const printCards = () => {
  for (const card of CARDS) {
    let currentCard = document.createElement("a");
    let currentCardText = document.createElement("p");
    currentCardText.appendChild(document.createTextNode(card.name));
    let currentCardIcon = document.createElement("i");
    currentCardIcon.classList.add(card.icon);

    // Style the Card Element
    currentCard.classList.add("card");
    currentCard.href = card.link;

    // Style the Icon
    currentCardIcon.classList.add("card__icon");

    // Style the Text
    currentCardText.classList.add("card__name");

    currentCard.append(currentCardIcon);
    currentCard.append(currentCardText);
    cardContainer.appendChild(currentCard);
  }
};

/****************/
/* STARTER CODE */
/****************/

userName.innerHTML = NAME;
printCards();
updateDate();
