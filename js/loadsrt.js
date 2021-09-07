var x = document.getElementById("srt");
var file_name = x.getAttribute("data"); 

var loadSRT = function(url, callback) {
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function() {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        var subtitles = parser.fromSrt(httpRequest.responseText, true);

        for (var i in subtitles) {
          subtitles[i] = {
            start : subtitles[i].startTime / 1000,
            end   : subtitles[i].endTime / 1000,
            text  : subtitles[i].text
          };
        }

        callback(subtitles);
      }
    };

    httpRequest.open('GET', url, true);
    httpRequest.send(null);
  };

  loadSRT('static/srt/'+file_name+'.srt', function(subtitles) {
    var youtubeExternalSubtitle = new YoutubeExternalSubtitle.Subtitle(document.getElementById('video'), subtitles);
  });
  document.getElementById('fullscreen-btn').addEventListener('click', function(e) {
    var elem = document.getElementById('fullscreen-container');

    var openFullscreen = function() {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
      }
    };

    openFullscreen();
  });  