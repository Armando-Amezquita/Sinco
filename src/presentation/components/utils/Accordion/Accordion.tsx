import { ReactNode, useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './Accordion.scss'


interface AccordionItemProps {
    title: string;
    children: ReactNode;
}

export const AccordionItem = ({ title, children }: AccordionItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => setIsOpen(!isOpen);

    return (
        <div className="accordion__item">
            <div className="accordion__header" onClick={toggleAccordion}>
                <p>{title}</p>
                {
                    !isOpen 
                    ? <KeyboardArrowDownIcon sx={{ color: "#503a3a" }} />
                    : <KeyboardArrowUpIcon sx={{ color: "#503a3a" }} />
                }

            </div>
            <div className={`accordion__content ${isOpen ? "accordion__content--open" : ""}`}>
                {children}
            </div>
        </div>
    );
};