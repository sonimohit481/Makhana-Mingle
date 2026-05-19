"use client";

interface VideoEmbedProps {
  videoId: string;
  title: string;
}

export function VideoEmbed({ videoId, title }: VideoEmbedProps) {
  return (
    <div className="video-card">
      <div className="video-wrapper">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <h3>{title}</h3>
    </div>
  );
}

interface VideoGridProps {
  videos: { id: string; title: string }[];
  columns?: 1 | 2 | 3;
}

export function VideoGrid({ videos, columns = 2 }: VideoGridProps) {
  const gridClass = columns === 1 ? "video-single" : `video-grid ${columns === 3 ? "three-col" : ""}`;
  return (
    <div className={gridClass}>
      {videos.map((video) => (
        <VideoEmbed key={video.id} videoId={video.id} title={video.title} />
      ))}
    </div>
  );
}