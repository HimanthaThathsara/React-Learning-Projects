import "./App.css";
import { useEffect } from "react";
import { Expo, TimelineMax } from "gsap";

function App() {
  useEffect(() => {
    let parent = document.querySelectorAll("[data-collapse]");
    parent.forEach((element) => {
      let clickTarget = element.querySelector("*");
      let collapseElement = element.nextElementSibling;
      let collapseElementChildren = collapseElement.children;
      let tl = new TimelineMax({
        reversed: true,
        paused: true,
      });

      tl.from(
        collapseElement,
        1.6,
        {
          className: "+=heightZero",
          ease: Expo.easeInOut,
        },
        "open"
      );
      tl.staggerFrom(
        collapseElementChildren,
        1,
        {
          autoAlpha: 0,
          y: "40%",
          ease: Expo.easeInOut,
        },
        0.08,
        "open+=.1"
      );

      clickTarget.addEventListener("click", () => {
        tl.reversed() ? tl.play() : tl.reverse();
      });
    });
  }, []);

  return (
    <>
      <div className="acc-toggle" data-collapse="">
        <div className="acc-block">
          <div className="acc-title">Financial Statement</div>
          <div className="acc-toggle-icon">
            <ion-icon name="add-outline"></ion-icon>
          </div>
        </div>
      </div>
      <ul>
        <li>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </li>
        <li>Lorem Ipsum has been the standard dummy text</li>
        <li>when an unknown printer took a galley of type and scrambled.</li>
      </ul>

      <div className="acc-toggle" data-collapse="">
        <div className="acc-block">
          <div className="acc-title">TAX</div>
          <div className="acc-toggle-icon">
            <ion-icon name="add-outline"></ion-icon>
          </div>
        </div>
      </div>
      <ul>
        <li>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </li>
        <li>Lorem Ipsum has been the standard dummy text</li>
        <li>when an unknown printer took a galley of type and scrambled.</li>
      </ul>

      <div className="acc-toggle" data-collapse="">
        <div className="acc-block">
          <div className="acc-title">Accounting</div>
          <div className="acc-toggle-icon">
            <ion-icon name="add-outline"></ion-icon>
          </div>
        </div>
      </div>
      <ul>
        <li>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </li>
        <li>Lorem Ipsum has been the standard dummy text</li>
        <li>when an unknown printer took a galley of type and scrambled.</li>
      </ul>
    </>
  );
}

export default App;
