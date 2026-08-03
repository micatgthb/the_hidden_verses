"use client";

import { useState } from "react";

type SoundCloudPlayerProps = {
  title: string;
  trackUrl: string;
  trackId: string;
  secretToken: string;
};

export default function SoundCloudPlayer({ title, trackUrl, trackId, secretToken }: SoundCloudPlayerProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const playerUrl = `https://w.soundcloud.com/player/?url=${encodeURIComponent(`https://api.soundcloud.com/tracks/${trackId}`)}&secret_token=${secretToken}&color=%23a2472e&auto_play=true&hide_related=true&show_comments=false&show_user=true&show_reposts=false&visual=false`;

  return (
    <div className={`soundcloud-player${isLoaded ? " is-loaded" : ""}`}>
      {!isLoaded ? (
        <>
          <div>
            <p className="audio-label">Auf SoundCloud hören</p>
            <strong>{title}</strong>
            <small>
              Erst nach dem Start wird eine Verbindung zu SoundCloud hergestellt.
              Dabei gelten die Datenschutzbestimmungen von SoundCloud.
            </small>
          </div>
          <button type="button" onClick={() => setIsLoaded(true)} aria-label={`${title} auf SoundCloud abspielen`}>
            <i aria-hidden="true">▶</i><span>Song anhören</span>
          </button>
        </>
      ) : (
        <iframe
          title={`${title} – SoundCloud Player`}
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          src={playerUrl}
        />
      )}
      <a className="soundcloud-link" href={trackUrl} target="_blank" rel="noreferrer">Auf SoundCloud öffnen ↗</a>
    </div>
  );
}
