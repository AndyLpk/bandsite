const showDataMobile = [
    {
        subTitle1: "date",
        subTitle2: "venue",
        subTitle3: "location",
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA",
        button: "buy tickets",
    },
    {
        subTitle1: "date",
        subTitle2: "venue",
        subTitle3: "location",
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA",
        button: "buy tickets",
    },
    {
        subTitle1: "date",
        subTitle2: "venue",
        subTitle3: "location",
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA",
        button: "buy tickets",
    },
    {
        subTitle1: "date",
        subTitle2: "venue",
        subTitle3: "location",
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA",
        button: "buy tickets",
    },
    {
        subTitle1: "date",
        subTitle2: "venue",
        subTitle3: "location",
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA",
        button: "buy tickets",
    },
    {
        subTitle1: "date",
        subTitle2: "venue",
        subTitle3: "location",
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA",
        button: "buy tickets",
    },

];

// const showDataTablet = [
//     {
//         title1: "date",
//         title2: "venue",
//         title3: "location",
//     },
// ];

const showList = document.getElementById("main__item");
console.log(showList)

// function createShowTitle(showTitle) {

//     const showLit = document.createElement("li");
//     showLit.classList.add("main__item--list", "main__item--list--tablet");

//     const showSubTitle1 = document.createElement("p");
//     showSubTitle1.classList.add("main__item--subtitle");
//     showSubTitle1.innerText = showTitle.title1;

//     const showSubTitle2 = document.createElement("p");
//     showSubTitle2.classList.add("main__item--subtitle");
//     showSubTitle2.innerText = showTitle.title2;

//     const showSubTitle3 = document.createElement("p");
//     showSubTitle3.classList.add("main__item--subtitle");
//     showSubTitle3.innerText = showTitle.title3;

//     showLit.appendChild(showSubTitle1);
//     showLit.appendChild(showSubTitle2);
//     showLit.appendChild(showSubTitle3);
//     showList.appendChild(showLit);

// }

// for (let y = 0; y <showDataTablet.length; y++) {
//     createShowTitle(showDataTablet[y]);
// }

function createShow(show) {
    const showLi = document.createElement("li");
    showLi.classList.add("main__item--list");

    const showTitle1 = document.createElement("p");
    showTitle1.classList.add("main__item--sub-title");
    showTitle1.innerText = show.subTitle1;

    const showDate = document.createElement("p");
    showDate.classList.add("main__item--date");
    showDate.innerText = show.date;

    const showTitle2 = document.createElement("p");
    showTitle2.classList.add("main__item--sub-title");
    showTitle2.innerText = show.subTitle2;

    const showVenue = document.createElement("p");
    showVenue.classList.add("main__item--venue");
    showVenue.innerText = show.venue;

    const showTitle3 = document.createElement("p");
    showTitle3.classList.add("main__item--sub-title");
    showTitle3.innerText = show.subTitle3;

    const showLocation = document.createElement("p");
    showLocation.classList.add("main__item--location");
    showLocation.innerText = show.location;

    const showButton = document.createElement('a');
    showButton.classList.add("main__item--button");
    showButton.innerText = show.button;

    showLi.appendChild(showTitle1);
    showLi.appendChild(showDate);
    showLi.appendChild(showTitle2);
    showLi.appendChild(showVenue);
    showLi.appendChild(showTitle3);
    showLi.appendChild(showLocation);
    showLi.appendChild(showButton);

    console.log(showLi)

    showList.appendChild(showLi);


}

for (let i = 0; i < showDataMobile.length; i++) {
    createShow(showDataMobile[i]);
}




