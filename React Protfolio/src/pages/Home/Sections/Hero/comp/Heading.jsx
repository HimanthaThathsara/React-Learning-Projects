import { useRef } from "react";
import VariableProximity from "../../../../../components/Navbar/reactbits/VariableProximity/VariableProximity";
import Classes from "../Hero.module.css";

export default function Heading() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className={Classes.headingCon}>
      <VariableProximity
        label={"Your website is your business's digital storefront."}
        className={"variable-proximity-demo"}
        fromFontVariationSettings="'wght' 500, 'opsz' 9"
        toFontVariationSettings="'wght' 1000, 'opsz' 40"
        containerRef={containerRef}
        radius={100}
        falloff="linear"
      />
    </div>
  );
}
