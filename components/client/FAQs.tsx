import Image from "next/image";
import { Accordion, AccordionItem as Item} from "@szhsin/react-accordion";
import { FC } from "react";

import AccordionDown from "@/public/assets/images/blogs/AccordionDown.svg"

interface AccordionItemProps {
  header: any;
  children: any;
}

const AccordionItem: FC<AccordionItemProps> = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <Image className="accordion-down" src={AccordionDown} alt="accordion-down" />
      </>
    }
  />
);

const FAQs = () => {

  return (
    <div className="faq-section">
        <div className="faq-heading">
          <h2>FAQs</h2>
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className="faq-content">
          <Accordion transition transitionTimeout={250}>
            <AccordionItem header="What makes The Kapda Project a sustainable fashion brand?">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              tincidunt non elit vitae porta. Donec pharetra sagittis metus in
              venenatis. Pellentesque nec ipsum sagittis, ullamcorper tellus ut,
              varius sapien. Praesent at tortor semper, blandit quam vitae,
              eleifend magna.
            </AccordionItem>
          </Accordion>
          <Accordion transition transitionTimeout={250}>
            <AccordionItem header="How do you ensure fair treatment of artisans and workers?">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              tincidunt non elit vitae porta. Donec pharetra sagittis metus in
              venenatis. Pellentesque nec ipsum sagittis, ullamcorper tellus ut,
              varius sapien. Praesent at tortor semper, blandit quam vitae,
              eleifend magna.
            </AccordionItem>
          </Accordion>
          <Accordion transition transitionTimeout={250}>
            <AccordionItem header="What is your approach to minimizing waste and reducing environmental impact?">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              tincidunt non elit vitae porta. Donec pharetra sagittis metus in
              venenatis. Pellentesque nec ipsum sagittis, ullamcorper tellus ut,
              varius sapien. Praesent at tortor semper, blandit quam vitae,
              eleifend magna.
            </AccordionItem>
          </Accordion>
          <Accordion transition transitionTimeout={250}>
            <AccordionItem header="Are your garments durable and of high quality?">
              Absolutely. We believe in creating garments that stand the test of
              time. We prioritize quality craftsmanship and meticulous attention
              to detail to ensure that each piece is durable and long-lasting.
              Our commitment to sustainability extends to encouraging conscious
              consumption and reducing the need for frequent replacements.
            </AccordionItem>
          </Accordion>
          <Accordion transition transitionTimeout={250}>
            <AccordionItem header="How can I contribute to sustainable fashion as a consumer?">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              tincidunt non elit vitae porta. Donec pharetra sagittis metus in
              venenatis. Pellentesque nec ipsum sagittis, ullamcorper tellus ut,
              varius sapien. Praesent at tortor semper, blandit quam vitae,
              eleifend magna.
            </AccordionItem>
          </Accordion>
          <Accordion transition transitionTimeout={250}>
            <AccordionItem header="How can I stay updated on The Kapda Project's latest releases and initiatives?">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              tincidunt non elit vitae porta. Donec pharetra sagittis metus in
              venenatis. Pellentesque nec ipsum sagittis, ullamcorper tellus ut,
              varius sapien. Praesent at tortor semper, blandit quam vitae,
              eleifend magna.
            </AccordionItem>
          </Accordion>
        </div>
      </div>
  );
}

export default FAQs;