export default function YoutubeEmbed({ url }) {
  const containerStyle = {
    contain: "size",
    marginBottom: "1rem",
    aspectRatio: "16 / 9",
  };
  const style = {
    height: "100%",
  };

  return (
    <div style={containerStyle}>
      <iframe
        width="100%"
        src={`https://www.youtube.com/embed/${url}`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
        style={style}
      ></iframe>
    </div>
  );
}
