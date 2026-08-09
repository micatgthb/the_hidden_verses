type AudioPlayerProps = {
  title: string;
  src: string;
};

export default function AudioPlayer({ title, src }: AudioPlayerProps) {
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
        <source src={src} type="audio/mp4" />
        Dein Browser unterstützt die Audiowiedergabe nicht. Du kannst den Song
        stattdessen <a href={src}>als Audiodatei öffnen</a>.
      </audio>
    </div>
  );
}
