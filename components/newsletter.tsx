"use client";

export function Newsletter() {
  return (
    <section id="newsletter" className="section newsletter">
      <div className="container">
        <div className="newsletter-box">
          <h2>Join the Mingle</h2>
          <p>Get new recipes, wellness notes, and first access to small-batch flavors before they disappear.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
          <p className="newsletter-note">No spam, only pantry notes worth opening.</p>
        </div>
      </div>
    </section>
  );
}