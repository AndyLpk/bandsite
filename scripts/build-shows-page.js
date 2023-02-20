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

const showList = document.getElementById("main__item");
console.log(showList)


function createShow(show) {
    const showLi = document.createElement("li");
    showLi.classList.add("main__list", "main__list--hover");

    const showTitle1 = document.createElement("p");
    showTitle1.classList.add("main__list--sub-title");
    showTitle1.innerText = show.subTitle1;

    const showDate = document.createElement("p");
    showDate.classList.add("main__list--date");
    showDate.innerText = show.date;

    const showTitle2 = document.createElement("p");
    showTitle2.classList.add("main__list--sub-title");
    showTitle2.innerText = show.subTitle2;

    const showVenue = document.createElement("p");
    showVenue.classList.add("main__list--venue");
    showVenue.innerText = show.venue;

    const showTitle3 = document.createElement("p");
    showTitle3.classList.add("main__list--sub-title");
    showTitle3.innerText = show.subTitle3;

    const showLocation = document.createElement("p");
    showLocation.classList.add("main__list--location");
    showLocation.innerText = show.location;

    const showButton = document.createElement('a');
    showButton.classList.add("main__list--button");
    showButton.innerText = show.button;

    showLi.appendChild(showTitle1);
    showLi.appendChild(showDate);
    showLi.appendChild(showTitle2);
    showLi.appendChild(showVenue);
    showLi.appendChild(showTitle3);
    showLi.appendChild(showLocation);
    showLi.appendChild(showButton);

    console.log(showLi)

  
    showList.appendChild(showLi)



}

for (let i = 0; i < showDataMobile.length; i++) {
    createShow(showDataMobile[i]);
}

const items = document.querySelectorAll(".main__list--hover");

items.forEach(function(item) {
    item.addEventListener("click", function() {
        this.classList.add("active");

        items.forEach(function(otherItem) {
            if (otherItem !== item) {
                otherItem.classList.remove("active");
            }
        });
    });
});