"use client";

import { useEffect, useRef, useState } from "react";

type FooterInfoModalProps = {
  title: string;
  description: string;
  bullets: string[];
  triggerLabel: string;
  links?: Array<{
    href: string;
    label: string;
  }>;
};

export default function FooterInfoModal({
  title,
  description,
  bullets,
  triggerLabel,
  links = [],
}: FooterInfoModalProps) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (open && !dialog.open) {
      dialog.showModal();
    }

    if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  return (
    <>
      <button type="button" className="footer-modal-trigger" onClick={() => setOpen(true)}>
        {triggerLabel}
      </button>

      <dialog
        ref={dialogRef}
        className="footer-dialog"
        onClose={() => setOpen(false)}
        aria-label={title}
      >
        <div className="footer-dialog-card">
          <div className="footer-dialog-top">
            <div>
              <p className="section-eyebrow">Quick Details</p>
              <h3>{title}</h3>
            </div>
            <button
              type="button"
              className="footer-dialog-close"
              onClick={() => setOpen(false)}
              aria-label={`Close ${title}`}
            >
              Close
            </button>
          </div>

          <p className="footer-dialog-copy">{description}</p>

          <div className="footer-dialog-list">
            {bullets.map((bullet) => (
              <div key={bullet} className="footer-dialog-point">
                {bullet}
              </div>
            ))}
          </div>

          {links.length > 0 ? (
            <div className="footer-dialog-links">
              {links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer noopener">
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </dialog>
    </>
  );
}
