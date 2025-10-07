/**
 * Demo Data Configuration for Customer Presentations
 * 
 * This file contains pre-filled realistic data for ALL forms
 * to make customer demonstrations quick and professional.
 */

export const DEMO_MODE = import.meta.env.VITE_APP_DEMO_MODE === 'true';

export const demoData = {
  // Programme Creation Demo Data
  programme: {
    title: 'Solar Energy Expansion Project 2024',
    sector: 'Energy',
    sectoralScope: 'Solar',
    programmeProperties: 'Installation of 5MW solar panels across rural communities',
    buyerCountryEligibility: 'All Paris Agreement countries',
    geographicalLocation: 'Northern Region',
    creditEstimation: 12000,
    estimatedProgrammeCostUSD: 2500000,
    startTime: '2024-01-01',
    endTime: '2030-12-31',
    proponentTaxVatId: '33333',
    proponentPercentage: 100,
  },

  // Project Proposal Demo Data
  projectProposal: {
    introduction: 'This project aims to install solar photovoltaic systems to provide clean electricity to underserved communities while significantly reducing greenhouse gas emissions.',
    projectBackground: 'The region currently relies heavily on diesel generators and grid electricity from coal-fired power plants, resulting in high emissions and energy costs.',
    technicalDescription: 'Installation of monocrystalline silicon solar panels (400W each) with micro-inverters and battery storage systems (10kWh per household).',
    capacityBuilding: 'Training 50 local technicians in solar installation and maintenance, creating sustainable employment opportunities.',
    environmentalImpact: 'Reduction of 12,000 tons of CO2 equivalent per year, improvement in local air quality, and preservation of natural resources.',
    socialImpact: 'Improved quality of life for 10,000 households, reduced energy costs by 60%, enhanced educational opportunities through reliable electricity access.',
    marketAnalysis: 'Growing demand for renewable energy solutions with government subsidies and carbon credit incentives making the project economically viable.',
    financialPlan: 'Total investment of $2.5M with ROI expected in 7 years through energy savings and carbon credit revenue.',
    riskAssessment: 'Weather variability mitigated through battery storage; technical risks managed through quality equipment selection and regular maintenance protocols.',
    monitoringPlan: 'Monthly energy generation tracking, quarterly emission reduction verification, annual third-party audits.',
    projectCapacity: 5000,
    plantFactor: 20,
    avgEnergyOutput: 8760,
    gridEmissionFactor: 0.7,
    emissionReductionValue: 12000,
  },

  // PDD (Project Design Document) Demo Data
  pdd: {
    projectTitle: 'Solar Energy Expansion Project 2024',
    versionNumber: '1.0',
    completionDate: '2024-01-20',
    appliedMethodologies: 'ACM0002 - Grid-connected electricity generation from renewable sources',
    projectDescription: 'Installation of 5MW solar PV system with battery storage to provide clean energy to 10,000 households',
    projectType: 'Renewable Energy',
    projectScale: 'Large Scale',
    estimatedEmissionReduction: 12000,
    projectLocation: 'Northern Region, Multiple Districts',
    projectDuration: '7 years (2024-2030)',
    baselineScenario: 'Continuation of diesel generators and coal-based grid electricity',
    additionalityJustification: 'Project not financially viable without carbon credit revenue; demonstrates clear environmental additionality',
    monitoringMethodology: 'Continuous monitoring of energy output, quarterly verification of emission reductions',
    safeguards: 'Full compliance with social and environmental safeguards, community consultation completed',
  },

  // Validation Agreement Demo Data
  validationAgreement: {
    dateOfIssue: '2024-01-15',
    between: 'Green Energy Solutions Ltd (Project Developer) and Climate Verification International (Independent Validator)',
    and: 'CountryX Designated National Authority',
    projectTitle: 'Solar Energy Expansion Project 2024',
    validationScope: 'Complete validation of PDD, baseline methodology, emission reduction calculations, and monitoring plan',
    validatorQualifications: 'Climate Verification International is accredited under ISO 14065 with 15 years experience in renewable energy project validation',
    deliverables: 'Validation Report, Validation Opinion, Corrective Action Request (CAR) resolution documentation',
    timeline: '30 working days from agreement signing',
    fees: '$15,000 USD (inclusive of site visit, document review, and report preparation)',
    termsAndConditions: 'Standard validation terms as per CDM/VCS guidelines',
  },

  // Validation Report Demo Data
  validationReport: {
    vr_projectTitle: 'Solar Energy Expansion Project 2024',
    vr_pddVersion: '1.0',
    vr_validationDate: '2024-01-15',
    vr_validator: 'Climate Verification International',
    vr_leadValidator: 'Dr. Sarah Johnson',
    vr_teamMembers: 'Dr. Sarah Johnson (Lead), Michael Chen (Technical Expert), Aisha Mohammed (Social Impact Specialist)',
    vr_executiveSummary: 'The project demonstrates strong alignment with ACM0002 methodology and shows credible emission reduction potential of 12,000 tCO2e annually. All documentation has been verified and found to be complete and accurate.',
    vr_projectDescription: 'Installation of 5MW solar PV system across 15 districts to provide clean energy access',
    vr_methodology: 'ACM0002 - Grid-connected electricity generation from renewable sources',
    vr_baselineScenario: 'Diesel generators and coal-based grid electricity (verified and approved)',
    vr_additionality: 'Investment analysis and barrier analysis both confirmed. Project demonstrates clear additionality.',
    vr_emissionCalculations: 'Reviewed and verified. Emission reduction estimate of 12,000 tCO2e/year is conservative and credible.',
    vr_monitoringPlan: 'Comprehensive monitoring plan approved. Includes automated meter reading and quarterly verification.',
    vr_safeguards: 'Full compliance verified. Community consultations documented. No negative social or environmental impacts identified.',
    vr_findings: 'All documentation verified. Three minor CARs raised and satisfactorily resolved. Baseline scenarios confirmed. Monitoring plan approved.',
    vr_recommendations: 'Proceed with project registration. Recommend quarterly monitoring reports and annual verification.',
    vr_conclusion: 'The project is validated as conforming to all applicable requirements. Validation opinion: POSITIVE',
  },

  // Monitoring Report Demo Data  
  monitoringReport: {
    bi_projectTitle: 'Solar Energy Expansion Project 2024',
    bi_monitoringPeriod: 'Q1 2024 (January - March 2024)',
    bi_preparedBy: 'Green Energy Solutions Ltd',
    bi_submissionDate: '2024-04-15',
    bi_reportVersion: '1.0',
    
    // Operational Data
    op_energyGenerated: 3200,
    op_operatingHours: 2160,
    op_capacityFactor: 21.3,
    op_systemAvailability: 98.5,
    op_householdsServed: 2500,
    
    // Emission Reductions
    er_actualReductions: 3000,
    er_baselineEmissions: 3500,
    er_projectEmissions: 500,
    er_leakageEmissions: 0,
    
    // Status & Issues
    status_operationalStatus: 'Fully Operational',
    status_issues: 'None reported. All systems functioning within design parameters.',
    status_deviations: 'No deviations from monitoring plan',
    status_correctiveActions: 'N/A - No issues identified',
    
    // Next Steps
    next_plans: 'Continue monitoring and expand to additional districts. Planning Phase 2 installation.',
    next_improvements: 'Exploring additional battery storage capacity to improve evening power availability',
  },

  // Site Checklist Demo Data
  siteChecklist: {
    projectName: 'Solar Energy Expansion Project 2024',
    organizationName: 'Green Energy Solutions Ltd',
    siteLocation: 'Northern Region, District 5',
    visitDate: '2024-01-10',
    visitedBy: 'Jane Doe, Senior Site Inspector',
    visitPurpose: 'Pre-installation site assessment and verification',
    
    // Site Conditions
    site_solarIrradiance: 'Excellent - 5.5 kWh/m²/day average',
    site_landAvailability: '15 hectares available, suitable topography',
    site_gridConnection: 'Grid connection point 2km away, capacity confirmed',
    site_accessRoads: 'Good access via main road, suitable for equipment delivery',
    site_waterDrainage: 'Adequate drainage, no flooding risk identified',
    
    // Infrastructure
    infra_electricalGrid: 'Available, sufficient capacity confirmed',
    infra_telecommunications: 'Mobile coverage available for remote monitoring',
    infra_security: 'Perimeter fencing planned, security arrangements in place',
    
    // Community & Environment
    comm_consultations: 'Completed - full community support documented',
    comm_employment: 'Local employment opportunities identified, training program designed',
    env_assessment: 'Environmental clearance obtained, no protected species identified',
    env_impacts: 'Minimal impact. Land restoration plan prepared.',
    
    // Technical Assessment
    tech_equipmentSpace: 'Adequate space for panels, inverters, and battery storage',
    tech_foundations: 'Soil testing completed, foundations design approved',
    tech_safety: 'Safety protocols developed, emergency access planned',
    
    findings: 'Site is highly suitable for installation. Good solar irradiance levels confirmed. Grid connection available and adequate. Strong community support. All technical requirements can be met.',
    recommendations: 'Proceed with installation. Ensure proper grounding and safety measures. Complete perimeter fencing before equipment delivery. Coordinate with local grid operator for connection timeline.',
    overallAssessment: 'APPROVED - Site suitable for project implementation',
  },

  // User Creation Demo Data
  user: {
    name: 'John Smith',
    email: 'john.smith@demo.com',
    phoneNo: '+1234567890',
    taxId: '33333',
    role: 'Admin',
  },

  // Company Creation Demo Data
  company: {
    name: 'Green Energy Solutions Ltd',
    email: 'contact@greenenergy-demo.com',
    phoneNo: '+1234567890',
    website: 'https://greenenergy-demo.com',
    address: '123 Renewable Street, Eco City, Northern Region',
    taxId: 'GES-2024-001',
    paymentId: 'PAY-GES-001',
    companyRole: 'PD',
  },

  // Investment Demo Data
  investment: {
    investmentTitle: 'Solar Infrastructure Investment',
    amount: 500000,
    instrumentType: 'Grant',
    interestRate: 0,
    purpose: 'Solar panel procurement and installation equipment',
    requestedAmount: 500000,
    level: 'National',
    investmentPeriod: '2024-2025',
    expectedReturns: 'Social and environmental returns through emission reductions and energy access',
    riskProfile: 'Low - Government backed renewable energy initiative',
  },

  // Verification Report Demo Data (for issued credits)
  verificationReport: {
    vf_projectTitle: 'Solar Energy Expansion Project 2024',
    vf_monitoringPeriod: 'Q1 2024',
    vf_verificationDate: '2024-04-20',
    vf_verifier: 'Climate Verification International',
    vf_leadVerifier: 'Dr. Sarah Johnson',
    vf_emissionsVerified: 3000,
    vf_emissionsApproved: 3000,
    vf_deviations: 'None identified',
    vf_opinion: 'POSITIVE - Emission reductions verified and approved',
    vf_recommendations: 'Continue monitoring as per plan. Credits approved for issuance.',
  },

  // PDD - Quantification of Emissions (numeric fields)
  quantificationEmissions: {
    baselineEmissionReductions: 3500,
    projectEmissionReductions: 500,
    leakageEmissions: 0,
    netGHGEmissionReductions: 3000,
    totalBaselineEmissionReductions: 12000,
    totalProjectEmissionReductions: 1800,
    totalLeakageEmissions: 0,
    totalNetGHGEmissionReductions: 10200,
  },

  // PDD - Application of Methodology (numeric fields)
  applicationMethodology: {
    energyOutput: 8760,
    capacityFactor: 20,
    systemEfficiency: 98,
    degradationRate: 0.5,
    gridEmissionFactor: 0.7,
    baselineEmissions: 3500,
    projectEmissions: 500,
    emissionReductions: 3000,
  },

  // Emission Calculation Demo Data
  emissionCalculation: {
    activityData: 8760,
    emissionFactor: 0.7,
    netCalorificValue: 0,
    oxidationFactor: 1,
    conversionFactor: 1,
    emissionReduction: 3000,
    baseline: 3500,
    project: 500,
    leakage: 0,
    net: 3000,
  },

  // Cost Quotation Demo Data
  costQuotation: {
    costValidation: 15000,
    costVerification: 12000,
    costCertification: 8000,
    costRegistration: 5000,
    totalCost: 40000,
    additionalServices: [
      { service: 'Technical Review', cost: 3000 },
      { service: 'Stakeholder Consultation', cost: 2000 },
    ],
  },

  // NDC Action Details (numeric fields)
  ndcAction: {
    tonnesOnDryBasis: 1000,
    totalLandArea: 500,
    numberOfTrees: 10000,
    expectedCarbonSequestration: 5000,
    projectDuration: 20,
    annualEmissionReduction: 250,
    totalEmissionReduction: 5000,
  },

  // Means of Verification (validation numbers)
  meansOfVerification: {
    'cl-total': 0,
    'car-total': 2,
    'far-total': 1,
    'finding-cl-1': 0,
    'finding-car-1': 1,
    'finding-car-2': 1,
    'finding-far-1': 1,
    onSiteInspection: [
      { activity: 'Site visit to solar installation', date: '2024-01-10', findings: 'All equipment installed correctly' },
      { activity: 'Review of monitoring equipment', date: '2024-01-11', findings: 'Automated systems functioning properly' },
    ],
    interviewees: [
      { lastName: 'Johnson', firstName: 'Sarah', role: 'Project Manager', date: '2024-01-10' },
      { lastName: 'Chen', firstName: 'Michael', role: 'Technical Lead', date: '2024-01-10' },
    ],
  },

  // Investment Creation with all numeric fields
  investmentCreation: {
    investmentTitle: 'Solar Infrastructure Investment',
    investmentAmount: 500000,
    requestedAmount: 500000,
    interestRate: 0,
    paybackPeriod: 7,
    internalRateOfReturn: 12.5,
    netPresentValue: 350000,
    costOfDebt: 0,
    costOfEquity: 8,
    wacc: 8,
    loanTenure: 0,
    gracePeriod: 0,
  },
};

/**
 * Get demo data for a specific form
 * @param formName - Name of the form
 * @returns Demo data object or empty object if demo mode is disabled
 */
export const getDemoData = (formName: keyof typeof demoData) => {
  if (!DEMO_MODE) {
    return {};
  }
  return demoData[formName] || {};
};

/**
 * Helper to set initial values in Ant Design forms
 * @param form - Ant Design form instance
 * @param formName - Name of the form to get demo data for
 */
export const setDemoFormValues = (form: any, formName: keyof typeof demoData) => {
  if (DEMO_MODE && form) {
    const data = getDemoData(formName);
    form.setFieldsValue(data);
  }
};

