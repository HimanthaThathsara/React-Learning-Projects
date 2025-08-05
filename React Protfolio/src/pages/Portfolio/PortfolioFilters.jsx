import { styled } from "@mui/system";
import React, { useState } from "react";
import Classes from "./Portfolio.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

/* ======== Styled Components for Accordion & Checkboxes ======== */
const StyledAccordion = styled(Accordion)({
  backgroundColor: "transparent",
  color: "#FFFFFF",
  borderRadius: "8px",
  marginBottom: 0,
  "&:before": {
    display: "none",
  },
});

const StyledAccordionSummary = styled(AccordionSummary)({
  backgroundColor: "transparent",
  color: "#FFFFFF",
  borderRadius: "8px",
  padding: 0,
  height: "30px",
  minHeight: "30px !important",
  margin: "0 !important",
  "&:hover": {
    backgroundColor: "transparent",
  },
});

const StyledAccordionDetails = styled(AccordionDetails)({
  backgroundColor: "transparent",
  color: "#FFFFFF",
  borderRadius: "8px",
  padding: "12px 0",
});

const StyledTypography = styled(Typography)({
  fontSize: "15px",
  fontWeight: 400,
  color: "#FFF",
});

const CustomCheckbox = styled(Checkbox)({
  color: "#bbb", // color when unchecked
  padding: "1px 9px",
  "&.Mui-checked": {
    color: "#fff", // color when checked
  },
});

/* ======== Custom Menu Props for MUI Select ======== */
const menuProps = {
  PaperProps: {
    sx: {
      backgroundColor: "#222",
      color: "white",
      maxHeight: 200,
      "& .MuiMenuItem-root": {
        padding: "3px 13px",
        fontSize: "14px",
        "&:hover": {
          backgroundColor: "#333",
        },
      },
      "& .Mui-selected": {
        backgroundColor: "#555 !important",
      },
    },
  },
  disableScrollLock: true,
};

export default function PortfolioFilters({ onFilterChange }) {
  // Local state for dropdowns
  const [industry, setIndustry] = useState("All");
  const [projectType, setProjectType] = useState("All");
  const [budget, setBudget] = useState("All");
  // Local state for features (Accordion checkboxes)
  const [features, setFeatures] = useState([]);

  // Example data, including "All" as the first item
  const filterOptions = {
    industry: [
      "All",
      "SaaS",
      "Healthcare",
      "E-commerce",
      "Fintech",
      "Real Estate",
    ],
    projectType: ["All", "Web App", "E-commerce", "Dashboard", "AI Chatbot"],
    features: [
      "AI Applications",
      "Payment Integration",
      "Real-time Chat",
      "CMS-Based",
    ],
  };

  /* ======== Dropdown Handlers ======== */
  const handleSelectChange = (type, value) => {
    if (type === "industry") {
      setIndustry(value);
    } else if (type === "projectType") {
      setProjectType(value);
    }

    // Notify parent with updated values
    onFilterChange({
      industry: type === "industry" ? value : industry,
      projectType: type === "projectType" ? value : projectType,
      features,
    });
  };

  /* ======== Features Handler ======== */
  const handleFeaturesChange = (feature) => {
    let updatedFeatures;
    if (features.includes(feature)) {
      updatedFeatures = features.filter((f) => f !== feature);
    } else {
      updatedFeatures = [...features, feature];
    }
    setFeatures(updatedFeatures);

    // Notify parent with new features
    onFilterChange({
      industry,
      projectType,
      features: updatedFeatures,
    });
  };

  // Common styling for all selects
  const DropDownStyle = {
    color: "white",
    height: "2.4rem",
    borderRadius: "5px",
    fontSize: "14px",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    // Hover outline color
    "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    svg: { color: "white" },
  };

  // Label styling
  const labelStyle = {
    color: "white",
    "&.Mui-focused": {
      color: "white",
    },
  };

  return (
    <div style={{ color: "#FFF" }}>
      <div className={Classes.dropdownCon}>
        {/* ====== Industry Dropdown ====== */}
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel sx={labelStyle}>Industry</InputLabel>
          <Select
            value={industry}
            label="Industry"
            onChange={(e) => handleSelectChange("industry", e.target.value)}
            MenuProps={menuProps}
            sx={DropDownStyle}
          >
            {filterOptions.industry.map((ind) => (
              <MenuItem key={ind} value={ind}>
                {ind}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* ====== Project Type Dropdown ====== */}
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel sx={labelStyle}>Project Type</InputLabel>
          <Select
            value={projectType}
            label="Project Type"
            onChange={(e) => handleSelectChange("projectType", e.target.value)}
            MenuProps={menuProps}
            sx={DropDownStyle}
          >
            {filterOptions.projectType.map((pt) => (
              <MenuItem key={pt} value={pt}>
                {pt}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* ====== Features Accordion ====== */}
      <StyledAccordion defaultExpanded>
        <StyledAccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="features-content"
          id="features-header"
        >
          <StyledTypography>Features</StyledTypography>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <FormGroup>
            {filterOptions.features.map((option) => (
              <FormControlLabel
                key={option}
                control={
                  <CustomCheckbox
                    checked={features.includes(option)}
                    onChange={() => handleFeaturesChange(option)}
                  />
                }
                label={
                  <Typography style={{ color: "#FFF" }}>{option}</Typography>
                }
              />
            ))}
          </FormGroup>
        </StyledAccordionDetails>
      </StyledAccordion>
    </div>
  );
}
