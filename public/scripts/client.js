$(document).ready(function() {
  
  // =========== CREATES AND RENDERS TWEETS TO PAGE =======//
  const renderTweets = function(tweets) {
    $('#tweet-container').empty();
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweet-container').prepend($tweet);
    }
  };


  // helper function for preventing xss attacks
  const escape =  function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

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
            <img src="${escape(avatar)}">
            <p>${escape(user)}</p>
          </div>
          <p class="username">${escape(handle)}</p>
        </header>

        <p class="tweet-text">${escape(tweet)}</p>

        <footer>
          <p>${escape(timeStamp)}</p>
          <div>
            <img src="/images/flag.png">
            <img src="/images/refresh.png">
            <img src="/images/heart.png">
          </div>
        </footer>
      </article>`
    );
    return $tweet;
  };

  const loadTweets = () => {
    $.get('/tweets', (data) => {
      renderTweets(data);
    });
  };
  loadTweets();
  
  // ===== HANDLES FORM SUBMISSIONS ========= //
  $('#error-msg').hide();
  $('#tweet-text').click(() => {
    $('#error-msg').slideUp();
  });
  $('.tweet-form').submit(function(event) {
    event.preventDefault();
    if ($('#tweet-text').val() === '' || $('#tweet-text').val().length > 140) {
      $('#error-msg').slideDown();
      return;
    }
    const serializeData = $(this).serialize();
    $.post('/tweets', serializeData)
      .then(() => {
        loadTweets();
        $('#tweet-text').val('');
        $('.counter').val(140);
      });

    $('#new-tweet').delay(1000).slideUp(500);
  });

  // ======= TOGGLES NEW TWEET FORM ===== //
  $('#new-tweet').hide();
  $('#new-tweet-toggle-btn').click(() => {
    $('#new-tweet').slideToggle(800);
    $('#tweet-text').focus();
  });
});

