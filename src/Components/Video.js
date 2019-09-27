import React from "react";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";

function video() {
  return (
    <div>
      {/* <div class="vp-live-viewer-status-wrapper">
        <div class="vp-live-status">
          <div class="vp-live-status-circle"></div>
          <span>LIVE</span>
        </div>
        <div class="vp-live-viewer-count">
          <div class="vp-live-viewer-count-person">
            {" "}
            <svg width="12" height="14" viewBox="0 0 12 14">
              <g transform="translate(-5 -4)" fill="#FFF" fill-rule="evenodd">
                <circle cx="11" cy="7" r="3"></circle>
                <path d="M9 12h4a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4z"></path>
              </g>
            </svg>{" "}
          </div>
          <span class="vp-live-viewer-count-value">1</span>
        </div>
      </div> */}
      <div style={{ width: 660, height: "auto" }}>
        <ResponsiveEmbed aspectRatio="16by9">
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/362083224"
            frameborder="0"
            allowfullscreen=""
            name="fitvid0"
            autoplay="true"
          ></iframe>
        </ResponsiveEmbed>
      </div>
    </div>
  );
}

export default video;
