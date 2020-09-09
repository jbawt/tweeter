$(document).ready(function() {

  // =========== CREATES AND RENDERS TWEETS TO PAGE =======//
  const renderTweets = function(tweets) {
    $('#tweet-container').empty();
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweet-container').prepend($tweet);
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

  const loadTweets = () => {
    $.get('/tweets', (data) => {
      renderTweets(data);  
    })
  };
  loadTweets();
  
  // ===== HANDLES FORM SUBMISSIONS ========= //
  $('.tweet-form').submit(function(event) {
    event.preventDefault();
    const serializeData = $(this).serialize();
    $.post('/tweets', serializeData)
      .then(() => {
        loadTweets();
        $('#tweet-text').val('');
        $('.counter').val(140);
      })
  });
});

