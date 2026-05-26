import React from "react";
import Classes from "./Faq.module.css";
import RoughText from "../../../../components/RoughText/RoughText";
import UnicornEmbed from "../../../../utils/Unicom/UnicornEmbed";
import AccordionMUI from "./AccordionMUI";
import { useNavigate } from "react-router-dom";

export default function FAQ() {
  const scene = "wBd76fLeefXdT5b7smRe"; //blue
  const navigateTo = useNavigate();

  return (
    <section className={Classes.hero} id="faq">
      <div className={Classes.container}>
        <h2>
          <span>
            {" "}
            <RoughText
              type="underline"
              color="white"
              strokeWidth={1}
              padding={2}
              iterations={1}
            >
              FAQ's
            </RoughText>
          </span>{" "}
          <button
            className={Classes.exploreBtn}
            onClick={() => {
              navigateTo("/contact-us");
            }}
          >
            {" "}
            <h5>Get in touch! {"->"}</h5>{" "}
          </button>
        </h2>
      </div>
      <div className={Classes.grid}>
        <div className={Classes.sceneCon}>
          <UnicornEmbed projectId={scene} />
        </div>
        <div className={Classes.faqCon}>
          <AccordionMUI />
        </div>
      </div>
    </section>
  );
}
