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


const commentList = document.getElementById("comment__section");

for (let i = 0; i < commentData.length; i++){

    const commentName = document.createElement('p');
    commentName.innerText = commentData[i].name;
    commentName.classList.add('comment__section--name');

    const commentDate = document.createElement('p');
    commentDate.innerText = commentData[i].date;
    commentDate.classList.add("comment__section--date");

    const commentContent = document.createElement('p');
    commentContent.innerText = commentData[i].content;
    commentContent.classList.add('comment__section--content');


    commentList.appendChild(commentName);
    commentList.appendChild(commentDate);
    commentList.appendChild(commentContent);

}
