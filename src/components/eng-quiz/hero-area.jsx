import React from "react";
import Link from "next/link";

const HeroArea = () => {
  return (
    <section className="hero-area">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">
          <h1>
            Welcome to <br />
            <span>English Practice!</span>
          </h1>

          <p>Learn & improve your English skills.</p>

          <div className="hero-buttons">
            <Link href="/lessons" className="btn btn-primary">
              Start Learning
            </Link>

            <Link href="/dashboard" className="btn btn-secondary">
              View Dashboard
            </Link>
          </div>
        </div>  

        {/* RIGHT IMAGE */}
        <div className="hero-image">
          <img
            src="../assets/images/english-test/hero-background.png"
            alt="Learning"
          />
        </div>

      </div> 
    </section>
  );
};

export default HeroArea;
