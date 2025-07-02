import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RoughText from '../../../../components/RoughText/RoughText';

// Styled components using MUI's `styled` function
const AccordionContainer = styled('div')({
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
});

const StyledAccordion = styled(Accordion)({
    background: '#0e142f6b',
    border: '1px solid #282d4575',
    backdropFilter: 'blur(7px)',
    color: 'white',
    marginBottom: '10px !important',
    borderRadius: '10px !important',
    padding: '5px 15px !important',
    '&:before': {
        display: 'none',
    },
});

const StyledAccordionSummary = styled(AccordionSummary)({
    minHeight: '32px !important',
    margin: '0 !important',
    padding: '0px 10px !important',
    '&.Mui-expanded': {
        margin: '0 !important',
        minHeight: '32px !important',
        padding: '0px 10px !important',
    },
    '.MuiAccordionSummary-content': {
        margin: '10px 0 !important',
    },
});

const StyledAccordionDetails = styled(AccordionDetails)({
    padding: '0 16px 16px 10px !important',
    textAlign: 'left',
});

const AccordionHeader = styled('h5')({
    fontWeight: 'bold',
    fontSize: '1rem',
});

const AccordionText = styled('h5')({
    fontSize: '15px',
    color: 'white',
    fontWeight: '200',
});

const SectionE = () => {
    const [expanded, setExpanded] = useState('panel1');
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const navigateTo = useNavigate();

    const faqs = [
        {
            question: "What services does your agency offer?",
            answer: "We specialize in custom web development, UI/UX, AI/ML, DevOps AI-powered applications, interactive dashboards, SEO-optimized websites, SaaS applications, AI chatbots. Our team builds high-performance digital solutions that enhance user experience and drive business growth."
        },
        {
            question: "Do you provide AI-powered solutions for businesses?",
            answer: "Yes! We develop AI-driven chatbots, automation tools, recommendation engines, and AI-integrated applications that streamline operations, enhance customer engagement, and improve decision-making."
        },
        {
            question: "Do you offer ongoing support and maintenance?",
            answer: "Yes! We provide regular updates, security patches, performance optimizations, and feature enhancements to keep your website or application running smoothly.",
        },
        {
            question: "Do you integrate third-party APIs and tools?",
            answer: "Yes! We can integrate payment gateways, CRM systems, AI models, data analytics tools, and other third-party APIs to enhance your website’s functionality."
        },
        {
            question: "How can I get started with my project?",
            answer: (
                <>
                    You can submit your basic project requirements through <RoughText type="underline" color="#a365ff" strokeWidth={1} padding={1} iterations={1} > <a onClick={() => { navigateTo('/contact-us') }} >contact us</a> </RoughText> or set up a free <RoughText type="underline" color="#a365ff" strokeWidth={1} padding={1} iterations={1} ><a target='_blank' href='https://cal.com/brandon-feinstein-apkvsi/30min' > 30-minute meeting </a></RoughText> to discuss your project in detail. We’ll go over your needs, suggest the best solutions, and provide a customized proposal.
                </>
            )
        }
    ];

    return (
        <AccordionContainer>
            {faqs.map((faq, index) => (
                <StyledAccordion
                    key={index}
                    expanded={expanded === `panel${index + 1}`}
                    onChange={handleChange(`panel${index + 1}`)}
                >
                    <StyledAccordionSummary
                        expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                        aria-controls={`panel${index + 1}bh-content`}
                        id={`panel${index + 1}bh-header`}
                    >
                        <AccordionHeader>{faq.question}</AccordionHeader>
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                        <AccordionText>{faq.answer}</AccordionText>
                    </StyledAccordionDetails>
                </StyledAccordion>
            ))}
        </AccordionContainer>
    );
};

export default SectionE;
