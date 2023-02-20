const commentForm = document.querySelector(".comment__form");
const commentList = document.querySelector(".comment__section");
const now = Date.now();
const formattedDate = new Date(now).toLocaleDateString();

const commentData = [ 
    {   name: "Connor Walton",
        date: "02/17/2021",    
        content: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    },
    {   name: "Emilie Beach",    
        date: "01/09/2021",    
        content: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",  
    },  
    {   name: "Miles Acosta",    
        date: "12/20/2020",    
        content: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",  
    },
];

commentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = event.target.name.value;
  const content = event.target.commentBox.value;

  const newCommentEntry = {
    name,
    date: formattedDate,
    content,
  };

  commentData.unshift(newCommentEntry);
  renderCommentEntries();
  event.target.reset();
});

function renderCommentEntries() {
  commentList.innerHTML = "";

  commentData.sort((a, b) => new Date(b.date) - new Date(a.date));

  for (let i = 0; i < commentData.length; i++) {
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
    commentName.innerText = commentData[i].name;
    commentName.classList.add("comment__name");

    const commentDate = document.createElement("p");
    commentDate.innerText = commentData[i].date;
    commentDate.classList.add("comment__date");

    const commentFiller = document.createElement("div");
    commentFiller.classList.add("comment__filler");

    const commentContent = document.createElement("p");
    commentContent.innerText = commentData[i].content;
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
renderCommentEntries();
