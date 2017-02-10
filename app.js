setTimeout(
  function() {
    var className = document.getElementById('footer').className;
    document.getElementById('footer').className = className.replace('kinda-show', '');
  },
  3000
);

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
