// const commentData = [
//     {
//         name: "Connor Walton",
//         date: "02/17/2021",
//         content: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
//     },
//     {
//         name: "Emilie Beach",
//         date: "01/09/2021",
//         content: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
//     },
//     {
//         name: "Miles Acosta",
//         date: "12/20/2020",
//         content: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
//     },
// ]


// const commentList = document.getElementById("comment__section");

// for (let i = 0; i < commentData.length; i++){

//     const commentBox = document.createElement('div');
//     commentBox.classList.add('comment__box');

//     const commentImg = document.createElement('img');
//     commentImg.classList.add('comment__img');

//     const commentItem = document.createElement('div');
//     commentItem.classList.add('comment__item');

//     const commentName = document.createElement('p');
//     commentName.innerText = commentData[i].name;
//     commentName.classList.add('comment__name');

//     const commentDate = document.createElement('p');
//     commentDate.innerText = commentData[i].date;
//     commentDate.classList.add("comment__date");

//     const commentContent = document.createElement('p');
//     commentContent.innerText = commentData[i].content;
//     commentContent.classList.add('comment__content');

//     commentBox.appendChild(commentImg);
    
//     commentItem.appendChild(commentName);
//     commentItem.appendChild(commentDate);
//     commentItem.appendChild(commentContent);
//     commentBox.appendChild(commentItem);
//     commentList.appendChild(commentBox);
    

// }


const commentForm = document.querySelector(".comment-box");
const commentList = document.querySelector (".comment__section");
const now = Date.now(); 
const formattedDate = new Date(now).toLocaleDateString();

const commentData = [
  {
      name: "Connor Walton",
      date: "02/17/2021",
      content: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
      name: "Emilie Beach",
      date: "01/09/2021",
      content: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
      name: "Miles Acosta",
      date: "12/20/2020",
      content: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
]

commentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const newCommentEntry = {
    name:event.target.name.value,
    date:formattedDate,
    content:event.target.commentBox.value,
  };
  console.log(newCommentEntry);
  commentData.push(newCommentEntry);
  renderCommentEntries();
    event.target.reset();
})

function renderCommentEntries() {
  commentList.innerHTML = "";

  commentData.sort((a, b) => new Date(b.posted) - new Date(a.posted));

  for (let i = 0; i < commentData.length; i++){

    const commentLi = document.createElement("li");
    commentLi.classList.add("comment__section--item");

    const commentBox = document.createElement('div');
    commentBox.classList.add('comment__box');

    const commentImg = document.createElement('img');
    commentImg.classList.add('comment__img');

    const commentItem = document.createElement('div');
    commentItem.classList.add('comment__item');

    const commentName = document.createElement('p');
    commentName.innerText = commentData[i].name;
    commentName.classList.add('comment__name');

    const commentDate = document.createElement('p');
    commentDate.innerText = commentData[i].date;
    commentDate.classList.add("comment__date");

    const commentContent = document.createElement('p');
    commentContent.innerText = commentData[i].content;
    commentContent.classList.add('comment__content');

    commentBox.appendChild(commentImg);
    
    commentItem.appendChild(commentName);
    commentItem.appendChild(commentDate);
    commentItem.appendChild(commentContent);
    commentBox.appendChild(commentItem);
    commentLi.appendChild(commentBox);
    commentList.appendChild(commentLi)
    

    }
}

renderCommentEntries();
