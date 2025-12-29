export default function YoutubeEmbed({ url, height = "175px" }) {
  return (
    <iframe
      width="100%"
      height={height}
      src={`https://www.youtube.com/embed/${url}`}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen={true}
    ></iframe>
  );
}
