type AudioPlayerProps = {
  title: string;
  src: string;
};

export default function AudioPlayer({ title, src }: AudioPlayerProps) {
  const mimeType = src.split("?")[0].endsWith(".mp3") ? "audio/mpeg" : "audio/mp4";

  return (
    <div className="audio-player">
      <div className="audio-player-heading">
        <div>
          <p className="audio-label">Direkt anhören</p>
          <strong>{title}</strong>
        </div>
        <span>Ohne Anmeldung</span>
      </div>
      <audio controls preload="metadata" aria-label={`${title} abspielen`}>
        <source src={src} type={mimeType} />
        Dein Browser unterstützt die Audiowiedergabe nicht. Du kannst den Song
        stattdessen <a href={src}>als Audiodatei öffnen</a>.
      </audio>
    </div>
  );
}
