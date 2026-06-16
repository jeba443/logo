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
          <h1>Sorry da...</h1>
          <p>
            Ipo oru three days ah sanda than sanda arugurement than ...Namma rendu perukum sanda varalam 😞Aana Nee enakku romba mukkiyam🫶
            Sometimes naan wrong ah pesiruppen. Unna hurt pannirundha sorry.I'm really sorry for everything 🥹
          </p>
          <p>
            Argument vida, nee venum namma bond venum 😫namma bond strong ah irukkanum. Please smile pannidu.
            without you I'm nothing 🥺ipolam ennlah frist iruthah matri hope ah strong ah irukah mudiyala athan naa etho matri behaviour pandren I'm really sry sry by abitha 🥲
            Na evlo kullah irukan nah reason nee ...sometimes neethan hurt pannuvah...sometimes meethan healum pannuvah... WHATVEVER WE CAN FACE ANYTHING TOGETHER ...GROW AND LIVE TOGETGER...🥹🎀💙
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
