function toggleMute() {

    var video=document.getElementById("video_id");
  
    video.muted = !video.muted;
  
  }

  var video=document.getElementById("video_id") ;   

$(video).on("click", function(e){
  video.muted = !video.muted;
});