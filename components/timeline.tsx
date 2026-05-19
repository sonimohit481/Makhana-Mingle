"use client";

import type { TimelineEvent } from "@/types";

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="timeline">
      {events.map((event) => (
        <div key={event.year} className="timeline-item">
          <div className="timeline-marker">
            <span className="timeline-year">{event.year}</span>
          </div>
          <div className="timeline-content">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}