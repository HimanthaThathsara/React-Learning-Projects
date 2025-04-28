import "./App.css";
import image from "./assets/image.jpg";
import { useEffect } from "react";
import $ from "jquery";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP); // register any plugins, including the useGSAP hook

function App() {
  useEffect(() => {
    var cursor = $(".cursor"),
      follower = $(".cursor-follower");

    var posX = 0,
      posY = 0,
      mouseX = 0,
      mouseY = 0;

    gsap.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        gsap.set(follower, {
          css: {
            left: posX - 20,
            top: posY - 20,
          },
        });

        gsap.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY,
          },
        });
      },
    });

    $(document).on("mousemove", function (e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
    });

    $(".portfolio-item img").on("mouseenter", function () {
      cursor.addClass("active");
      follower.addClass("active");
    });

    $(".portfolio-item img").on("mouseleave", function () {
      cursor.removeClass("active");
      follower.removeClass("active");
    });
  }, []); // <-- scope is for selector text (optional)
  return (
    <>
      <div className="cursor"></div>
      <div className="cursor-follower"></div>
      <div id="wrapper">
        <div className="portfolio-item">
          <div className="portfolio-thumb">
            <img src={image} alt="Portfolio" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
