$(document).ready(function() {
  const tweetData = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1001043000088
    }
  ];

  // =========== CREATES AND RENDERS TWEETS TO PAGE =======//
  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweet-container').append($tweet);
    }
  }

  const createTweetElement = (tweetData) => {
    const user = tweetData["user"]["name"];
    const avatar = tweetData["user"]["avatars"];
    const handle = tweetData["user"]["handle"];
    const tweet = tweetData["content"]["text"];
    const timeStamp = moment(tweetData["created_at"]).fromNow();

    const $tweet = $(
      `<article class="tweet">
        <header>
          <div>
            <img src="${avatar}">
            <p>${user}</p>
          </div>
          <p class="username">${handle}</p>
        </header>

        <p class="tweet-text">${tweet}</p>

        <footer>
          <p>${timeStamp}</p>
          <div>
            <img src="/images/flag.png">
            <img src="/images/refresh.png">
            <img src="/images/heart.png">
          </div>
        </footer>
      </article>`
    );
    return $tweet
  };
  


  renderTweets(tweetData);
});

