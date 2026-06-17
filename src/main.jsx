import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Heart, Sparkles, RotateCcw } from "lucide-react";
import "./style.css";

function App() {
  const [broken, setBroken] = useState(false);

  const breakHeart = () => {
    if (!broken) setBroken(true);
  };

  const resetHeart = (event) => {
    event.stopPropagation();
    setBroken(false);
  };

  return (
    <main className="page">
      <div className="background-hearts">
        <span>❤</span><span>♡</span><span>❤</span><span>♡</span><span>❤</span>
      </div>

      <section className={`love-card ${broken ? "is-broken" : ""}`} onClick={breakHeart}>
        <div className="tap-text">
          <Sparkles size={18} />
          {broken ? "Message opened" : "Touch the heart"}
        </div>

        <div className="heart-stage" aria-label="animated heart button">
          <div className="glow-ring"></div>

          <div className="heart-half left-half">
            <Heart className="heart-icon" fill="currentColor" strokeWidth={1.5} />
          </div>
          <div className="heart-half right-half">
            <Heart className="heart-icon" fill="currentColor" strokeWidth={1.5} />
          </div>

          <div className="crack crack-one"></div>
          <div className="crack crack-two"></div>
          <div className="crack crack-three"></div>

          <span className="piece p1">❤</span>
          <span className="piece p2">♥</span>
          <span className="piece p3">♡</span>
          <span className="tear t1"></span>
          <span className="tear t2"></span>
        </div>

        <article className="message-box">
          <p className="small-title">From my heart</p>
          <h1></h1>
          <p>
            I am a girl working towards my dream of building a successful career in the IT industry. Every day, I learn new technologies, improve my skills, and move one step closer to my goals. My IT journey is not just about coding and projects; it is about passion, determination, and believing in myself. There are challenges, but they make me stronger. I love the process of learning, growing, and creating something meaningful through technology. ❤️✨

          </p>
          <p>
          </p>
          {/* <button className="reset-btn" onClick={resetHeart}>
            <RotateCcw size={17} /> Try again
          </button> */}
        </article>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
