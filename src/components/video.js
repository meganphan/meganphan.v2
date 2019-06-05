import React from "react"


const Video = ({ videoSrcURL, videoTitle, ...props }) => (
    <div className="video">
      <iframe
        src={"https://giphy.com/gifs/1XgIXQEzBu6ZWappVu/html5"}
        title={"Under Construction"}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </div>
  )

function newFunction() {
    return "videoTitle";
}
