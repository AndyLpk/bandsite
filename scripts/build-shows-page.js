
const apiUrl = "https://project-1-api.herokuapp.com";
const apiKey = "dda48748-90db-4914-88e1-8c44444dff0d";

function getShow() {
    axios
        .get(`${apiUrl}/showdates?api_key=${apiKey}`)
        .then((response) => {
            const showData = response.data;
            console.log("showData:",showData);
            showList.innerHTML= "";
            createShow(showData);

            const items = document.querySelectorAll(".main__list--hover");

            items.forEach(function(item) {
                item.addEventListener("click", function() {
                    console.log(item)
                    item.classList.add("active");

                    items.forEach(function(otherItem) {
                        if (otherItem !== item) {
                            otherItem.classList.remove("active");
                        }
                    });
                });
            });

        })
        .catch((error) => {
            console.log("error:" , error);
        });
        
}
getShow();

const showList = document.getElementById("main__item");
console.log(showList)
const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

function createShow(showData) {

    showData.forEach((data) => {
        const showLi = document.createElement("li");
        showLi.classList.add("main__list", "main__list--hover");
      
        const showTitle1 = document.createElement("p");
        showTitle1.classList.add("main__list--sub-title");
        showTitle1.innerText = 'date';
      
        const showDate = document.createElement("p");
        showDate.classList.add("main__list--date");
        showDate.innerText = new Date(data.date).toLocaleDateString('en-GB', options).replace(',', '') ;
      
        const showTitle2 = document.createElement("p");
        showTitle2.classList.add("main__list--sub-title");
        showTitle2.innerText = 'venue';
      
        const showVenue = document.createElement("p");
        showVenue.classList.add("main__list--venue");
        showVenue.innerText = data.place;
      
        const showTitle3 = document.createElement("p");
        showTitle3.classList.add("main__list--sub-title");
        showTitle3.innerText = 'location';
      
        const showLocation = document.createElement("p");
        showLocation.classList.add("main__list--location");
        showLocation.innerText = data.location;
      
        const showButton = document.createElement('a');
        showButton.classList.add("main__list--button");
        showButton.innerText = 'buy tickets';
      
        showLi.appendChild(showTitle1);
        showLi.appendChild(showDate);
        showLi.appendChild(showTitle2);
        showLi.appendChild(showVenue);
        showLi.appendChild(showTitle3);
        showLi.appendChild(showLocation);
        showLi.appendChild(showButton);
      
        console.log(showLi);
        showList.appendChild(showLi);
      });
      

}



