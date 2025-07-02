import React, { useState } from "react";
import { Button, TextField, Box, Typography, Grid, Paper } from "@mui/material";
import { fontSize, styled } from "@mui/system";
import axios from "axios"; // <-- Make sure you have axios installed
import Classes from './ContactUs.module.css';

// Stepper component
import Stepper from "../../components/Navbar/reactbits/Components/Stepper/Stepper";
import { Step } from "../../components/Navbar/reactbits/Components/Stepper/Stepper";

import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from "@mui/material";
import RoughText from "../../components/RoughText/RoughText";
import { AnimatePresence } from "framer-motion";
import SuccessPopup from "./SuccessPopup";
import { Helmet } from "react-helmet-async";

// Styled Components
const ErrorText = styled(Typography)({
  color: "red",
  fontSize: "0.8rem",
  marginTop: "4px",
});

const StyledTextField = styled(TextField)({
  input: {
    color: "white",
    backgroundColor: "transparent",
    fontSize: '15px',
    fontWeight: '300',
  },
  label: {
    color: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgb(34, 34, 34)",
      borderRadius: '10px',
    },
    "&:hover fieldset": {
      borderColor: "#ffffff3d",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ffffff3d",
    },
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "rgb(255, 255, 255)",
  },
  '& .MuiInputBase-inputMultiline': {
    color: 'white',
  },
});

const SelectionBox = styled(Box)(({ selected }) => ({
  border: selected ? "1px solid #a365ff" : "1px solid rgb(34, 34, 34)",
  padding: "12px",
  textAlign: "center",
  cursor: "pointer",
  borderRadius: "5px",
  backgroundColor: selected ? "rgba(163, 101, 255, 0.2)" : "transparent",
  transition: "all 0.3s",
  color: "white",
  "&:hover": {
    backgroundColor: "rgba(163, 101, 255, 0.1)",
  },
}));

export default function ContactUs() {
  const [loading, setloading] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);
  const handleCloseSuccessPopup = () => {
    setSuccessPopup(false);
    setStep(1);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      companyWebsite: "",
      projectSummary: "",
      projectType: "",
      customProjectType: "",
      services: [],
      budget: "",
      role: "",
    })
  };

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    companyWebsite: "",
    projectSummary: "",
    projectType: "",
    customProjectType: "",
    services: [],
    budget: "",
    role: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: "" });
  };

  // Handle selection for project type (Single Selection)
  const handleProjectTypeSelection = (type) => {
    setFormData({ ...formData, projectType: type, customProjectType: "" });
    setErrors({ ...errors, projectType: "" });
  };

  // Handle services selection (Multi-selection)
  const toggleServiceSelection = (service) => {
    setFormData((prev) => {
      const newServices = prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];

      return { ...prev, services: newServices };
    });
  };

  // Validate fields before moving to next step
  const validateStep = () => {
    let newErrors = {};

    // Step-based validation
    if (step === 1) {
      if (!formData.firstName) newErrors.firstName = "First name is required";
      if (!formData.lastName) newErrors.lastName = "Last name is required";
      if (!formData.email) newErrors.email = "Email is required";
    }

    if (step === 2) {
      if (!formData.projectType) newErrors.projectType = "Please select a project type";
      if (formData.projectType === "Other" && !formData.customProjectType)
        newErrors.customProjectType = "Please specify project type";
    }

    if (step === 4) {
      if (!formData.budget) newErrors.budget = "Please select a budget range";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    }
    return true;
  };

  const handleNextMUIbtn = () => {
    if (validateStep()) {
      setStep(step + 1);
      return true;
    } else {
      return false;
    }
  };

  const handleBackMUIbtn = () => {
    setStep(step - 1);
  };

  /**
   * Final submission of the form
   */
  const handleSubmit = async () => {
    if (!validateStep()) return;
    setloading(true);
    try {
      // Combine relevant fields (the backend currently expects: fullName, subject, email, message)
      const fullName = `${formData.firstName} ${formData.lastName}`.trim();
      const subject = `Project Inquiry - ${formData.projectType === "Other"
        ? formData.customProjectType
        : formData.projectType
        }`;

      // Build a detailed "message" so the backend/EJS template can show all fields in one place
      const message = `
        Company Name: ${formData.companyName}
        Company Website: ${formData.companyWebsite}
        Project Summary: ${formData.projectSummary}

        Services Needed: ${formData.services.join(", ")}

        Budget Range: ${formData.budget}
        Role: ${formData.role}
      `;

      // Make POST request to your backend route
      const response = await axios.post("https://evolvion-356ce550bb9d.herokuapp.com/contact", {
        fullName,
        subject,
        email: formData.email,
        message,
      });
      // console.log(response);

      setSuccessPopup(true);

      // alert(response.data.message || "Form submitted successfully!");
      // Optionally reset form or navigate somewhere
    } catch (error) {
      console.error("Error submitting form data:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setTimeout(() => {
        setloading(false);
      }, 3000);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Get a Free Quote</title>
        <meta name="description" content="Fill out the form to get a custom quote for your project through 30 min free Meeting. We respond quickly!" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://evolvion.io/contact-us" />
      </Helmet>

      <div className={Classes.hero}>
        <h2>
          Let’s Build Something <br className={Classes.end480} />
          <span>
            <RoughText type="underline" color="white" strokeWidth={1} padding={2} iterations={1}>
              Great Together
            </RoughText>
          </span>
        </h2>

        <Stepper
          initialStep={1}
          onStepChange={setStep}
          currentStep={step}
          setCurrentStep={setStep}
          handleNextMUIbtn={handleNextMUIbtn}
          handleBackMUIbtn={handleBackMUIbtn}
          loading={loading}
          handleSubmit={handleSubmit}
        >
          {/* Step 1: Basic Info */}
          <Step>
            <Typography variant="h6">Basic Information</Typography>

            <div className={Classes.flexBetween10}>
              <StyledTextField
                fullWidth
                label="First Name"
                placeholder="John"
                error={!!errors.firstName}
                helperText={errors.firstName}
                value={formData.firstName}
                required
                onChange={(e) => handleChange("firstName", e.target.value)}
                sx={{ mt: 2 }}
                InputLabelProps={{ shrink: true }}
              />
              <StyledTextField
                fullWidth
                label="Last Name"
                placeholder="Doe"
                error={!!errors.lastName}
                helperText={errors.lastName}
                value={formData.lastName}
                required
                onChange={(e) => handleChange("lastName", e.target.value)}
                sx={{ mt: 2 }}
                InputLabelProps={{ shrink: true }}
              />
            </div>

            <StyledTextField
              fullWidth
              label="Email"
              placeholder="example@mail.com"
              error={!!errors.email}
              helperText={errors.email}
              value={formData.email}
              required
              onChange={(e) => handleChange("email", e.target.value)}
              sx={{ mt: 2 }}
              InputLabelProps={{ shrink: true }}
            />

            <div className={Classes.flexBetween10}>
              <StyledTextField
                fullWidth
                label="Company Name"
                placeholder="Apple"
                value={formData.companyName}
                onChange={(e) => handleChange("companyName", e.target.value)}
                sx={{ mt: 2 }}
                InputLabelProps={{ shrink: true }}
              />
              <StyledTextField
                fullWidth
                label="Company Website"
                placeholder="apple.com"
                value={formData.companyWebsite}
                onChange={(e) => handleChange("companyWebsite", e.target.value)}
                sx={{ mt: 2 }}
                InputLabelProps={{ shrink: true }}
              />
            </div>

            <StyledTextField
              fullWidth
              label="Project Summary"
              value={formData.projectSummary}
              onChange={(e) => handleChange("projectSummary", e.target.value)}
              multiline
              rows={4}
              sx={{ mt: 2 }}
              InputLabelProps={{ shrink: true }}
            />
          </Step>

          {/* Step 2: Project Type */}
          <Step>
            <Typography variant="h6">Project Type</Typography>
            {["New Website Development", "Website Redesign", "New Features for an Existing Website", "Other"].map(
              (type) => (
                <SelectionBox
                  key={type}
                  selected={formData.projectType === type}
                  onClick={() => handleProjectTypeSelection(type)}
                  sx={{ mt: 1 }}
                >
                  {type}
                </SelectionBox>
              )
            )}
            {formData.projectType === "Other" && (
              <StyledTextField
                fullWidth
                label="Specify Project Type"
                error={!!errors.customProjectType}
                helperText={errors.customProjectType}
                value={formData.customProjectType}
                onChange={(e) => handleChange("customProjectType", e.target.value)}
                sx={{ mt: 2 }}
                required
                InputLabelProps={{ shrink: true }}
              />
            )}
          </Step>

          {/* Step 3: Services */}
          <Step>
            <Typography variant="h6">Services Needed</Typography>
            {[
              "UI/UX Design & Prototyping",
              "Frontend Development",
              "Backend Development & API Integration",
              "AI/ML Development",
              "DevOps & Deployment",
              "Mobile App Development",
            ].map((service) => (
              <SelectionBox
                key={service}
                selected={formData.services.includes(service)}
                onClick={() => toggleServiceSelection(service)}
                sx={{ mt: 1 }}
              >
                {service}
              </SelectionBox>
            ))}
          </Step>

          {/* Step 4: Budget & Role */}
          <Step>
            <Typography variant="h6">Budget & Role</Typography>

            <FormControl component="fieldset" error={!!errors.budget} sx={{ mt: 2 }}>
              <RadioGroup
                name="budget"
                value={formData.budget}
                onChange={(e) => handleChange("budget", e.target.value)}
              >
                <FormControlLabel
                  value="<$10,000"
                  control={<Radio sx={{ color: 'white', '&.Mui-checked': { color: '#a365ff' } }} />}
                  label="< $10,000"
                  sx={{ color: 'white' }}
                />
                <FormControlLabel
                  value="$10,000 - $25,000"
                  control={<Radio sx={{ color: 'white', '&.Mui-checked': { color: '#a365ff' } }} />}
                  label="$10,000 - $25,000"
                  sx={{ color: 'white' }}
                />
                <FormControlLabel
                  value="$25,000 - $50,000"
                  control={<Radio sx={{ color: 'white', '&.Mui-checked': { color: '#a365ff' } }} />}
                  label="$25,000 - $50,000"
                  sx={{ color: 'white' }}
                />
                <FormControlLabel
                  value="$50,000 - $100,000"
                  control={<Radio sx={{ color: 'white', '&.Mui-checked': { color: '#a365ff' } }} />}
                  label="$50,000 - $100,000"
                  sx={{ color: 'white' }}
                />
                <FormControlLabel
                  value=">$100,000"
                  control={<Radio sx={{ color: 'white', '&.Mui-checked': { color: '#a365ff' } }} />}
                  label="> $100,000"
                  sx={{ color: 'white' }}
                />
              </RadioGroup>
              {errors.budget && <ErrorText>{errors.budget}</ErrorText>}
            </FormControl>

            <StyledTextField
              fullWidth
              label="Your Role"
              placeholder="Individual/Company representative"
              error={!!errors.role}
              helperText={errors.role}
              value={formData.role}
              onChange={(e) => handleChange("role", e.target.value)}
              sx={{ mt: 2 }}
              InputLabelProps={{ shrink: true }}
            />
          </Step>
        </Stepper>
      </div>

      <AnimatePresence mode='wait'>
        {successPopup && <SuccessPopup handleClose={handleCloseSuccessPopup} name={formData.firstName + ' ' + formData.lastName} />}
      </AnimatePresence>
    </>
  );
}
