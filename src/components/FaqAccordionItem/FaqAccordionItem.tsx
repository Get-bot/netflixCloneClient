import classes from "./FaqAccordionItem.module.css";
import React from "react";

type FaqAccordionItemProps = {
    index: number,
    title: string,
    content: TrustedHTML |string,
  }

const FaqAccordionItem: React.FC<FaqAccordionItemProps> = ({ index, title, content }) => {
    const buttonId = `button-card-faq-accordion_${index}`;
    const contentId = `card-faq-accordion_${index}`;

    const toggleAttribute = (element: Element, attributeName: string, trueValue: string, falseValue: string ) => {
      const currentValue = element.getAttribute(attributeName);
      const newValue = currentValue === trueValue  ? falseValue : trueValue;
      element.setAttribute(attributeName, newValue);
    };

    const toggleClasses = (element: Element, classesToToggle: string[]) => {
      classesToToggle.forEach(className => element.classList.toggle(className));
    };

  const toggleHandler = (e: React.BaseSyntheticEvent) => {
    const button = e.target.closest("button");
    if(!button) return;

    const content = document.getElementById(contentId);
    if (!content) return;

    const contentClasses = [
      classes.cardFaqAccordionItemContentClose,
      classes.cardFaqAccordionItemContentOpen
    ];

    toggleAttribute(button, "aria-expanded", "true", "false");
    toggleAttribute(content, "data-is-open", "true", "false");
    toggleClasses(content, contentClasses);
    setIsExpanded(prevState => !prevState);
  }

    const [isExpanded, setIsExpanded] = React.useState(false);

    const svgElements = () => {
      return (
        <>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={isExpanded ? classes.cardFaqAccordionItemCancelIcon : classes.cardFaqAccordionItePlusIcon} data-name="Plus">
            <path fillRule="evenodd" clipRule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path>
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={isExpanded ? classes.cardFaqAccordionItemMobileCancelIcon :classes.cardFaqAccordionItemMobilePlusIcon} data-name="Plus">
            <path fillRule="evenodd" clipRule="evenodd" d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z" fill="currentColor"></path>
          </svg>
        </>
      )
    }

  return (
    <li className={classes.cardFaqAccordionItem}>
      <h3 className={classes.cardFaqAccordionItemContainer} onClick={toggleHandler}>
        <button aria-expanded="false" aria-controls={`card-faq-accordion_${index}`} id={`button-card-faq-accordion_${index}`} className={classes.cardFaqAccordionItemButton} type="button">
          <span>{title}</span>
          {svgElements()}
        </button>
      </h3>
      <div id={`card-faq-accordion_${index}`} aria-labelledby={`button-card-faq-accordion_${index}`} role="region" data-is-open="false"
           className={classes.cardFaqAccordionItemContentClose}>
        <span dangerouslySetInnerHTML={{__html: content}}></span>
      </div>
    </li>
  )
}

export default FaqAccordionItem