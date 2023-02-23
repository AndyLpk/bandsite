const apiUrl = "https://project-1-api.herokuapp.com";
const apiKey = "dda48748-90db-4914-88e1-8c44444dff0d";

function getComment() {
  axios
    .get(`${apiUrl}/comments?api_key=${apiKey}`)
    .then((response) => {
      const data = response.data;
      
      data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      
      console.log(data);
      commentList.innerHTML = "";
      renderCommentEntries(data);
      
    })
    .catch((error) => {
      console.log("error: ", error);
    });
}
getComment();

function renderCommentEntries(data) {
  commentList.innerHTML = "";
  // console.log("data:",data)
  data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  for (let i = 0; i < data.length; i++) {
    const commentLi = document.createElement("li");
    commentLi.classList.add("comment__item", "comment__item--list");

    const commentBox = document.createElement("div");
    commentBox.classList.add("comment__header", "comment__header--list");

    const commentImg = document.createElement("img");
    commentImg.classList.add("comment__img");

    const commentForm = document.createElement("div");
    commentForm.classList.add("comment__wrapper");
    

    const commentItem = document.createElement("div");
    commentItem.classList.add("comment__top");

    const commentName = document.createElement("p");
    commentName.innerText = data[i].name;
    commentName.classList.add("comment__name");

    const commentDate = document.createElement("p");
    commentDate.innerText = new Date(data[i].timestamp).toLocaleDateString('en-GB');
    commentDate.classList.add("comment__date");

    const commentFiller = document.createElement("div");
    commentFiller.classList.add("comment__filler");

    const commentContent = document.createElement("p");
    commentContent.innerText = data[i].comment;
    commentContent.classList.add("comment__content");

    commentFiller.appendChild(commentContent);
    commentItem.appendChild(commentName);
    commentItem.appendChild(commentDate);
    commentForm.appendChild(commentItem);
    commentForm.appendChild(commentFiller);
    commentBox.appendChild(commentImg);
        
    commentLi.appendChild(commentBox);
    commentLi.appendChild(commentForm);
    commentList.appendChild(commentLi);
  }
}




const commentForm = document.querySelector(".comment__form");
const commentList = document.querySelector(".comment__section");
const now = Date.now();

commentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = event.target.name.value;
  const comment = event.target.commentBox.value;
console.log(name);
console.log(comment);
  const newCommentEntry = {
    name,
    comment,
  };
  
  axios
    .post(`${apiUrl}/comments?api_key=${apiKey}`, newCommentEntry)
    .then((response) => {
      console.log(response);
      getComment();
      renderCommentEntries();
    })
    .catch((error) => {
      console.log("error:", error)
    });

  event.target.reset();

});


