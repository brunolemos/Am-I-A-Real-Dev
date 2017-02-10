setTimeout(
  function() {
    var className = document.getElementById('footer').className;
    document.getElementById('footer').className = className.replace('show-animation', '');
  },
  5000
);

function tryEncodeURI(uri) {
  if (!uri) return '';

  try {
    return encodeURI(uri);
  } catch (e) {
    return uri;
  }
}

function tryDecodeURI(uri) {
  if (!uri) return '';

  try {
    return decodeURI(uri).trim();
  } catch (e) {
    return uri;
  }
}

document.location.hash = '';
var index = document.location.search.indexOf('q=');
var hasCustomQuestion = index >= 0;

if (hasCustomQuestion) {
  var q = document.location.search.substr(index + 2).split('&')[0];
  if (q) {
    document.getElementById('question').innerText = tryDecodeURI(q);
  }
}

var twitterShareLink = "https://twitter.com/intent/tweet?text=&hashtags=&url="+tryEncodeURI(window.location.href)+"#";
document.getElementById('twitter-share-link-1').href = twitterShareLink;
document.getElementById('twitter-share-link-2').href = twitterShareLink;