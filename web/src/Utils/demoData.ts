/**
 * Demo Data Configuration for Customer Presentations
 * 
 * This file contains pre-filled realistic data for ALL forms
 * to make customer demonstrations quick and professional.
 */

import moment from 'moment';

export const DEMO_MODE = import.meta.env.VITE_APP_DEMO_MODE === 'true';

export const demoData = {
  // Programme Creation Demo Data (EXACT field names from actual form)
  programme: {
    title: 'Solar Energy Expansion Project 2024',
    sector: 'ENERGY',
    sectoralScope: 'ENERGY_INDUSTRIES',
    projectCategory: 'Energy Generation',
    briefProjectDescription: 'Installation of 5MW solar photovoltaic systems across rural communities to provide clean electricity access and reduce carbon emissions by 12,000 tCO2e annually.',
    projectStatusDescription: 'New project in planning phase, all permits obtained, ready for implementation',
    
    // Location fields - Using ACTUAL values from your provinces.csv, districts.csv, cities.csv
    province: 'Western',  // From provinces.csv
    district: 'Colombo',  // From districts.csv
    dsDivision: 'Colombo 1 (Fort)',  // From dsDivisions.csv
    city: 'Colombo 1 (Fort)',  // From cities.csv
    postalCode: '00100',  // Actual Colombo postal code
    street: '123 Renewable Energy Street, Fort',
    projectGeography: 'SINGLE',
    projectStatus: 'New',
    // projectLocation - Leave undefined, map component requires GeoJSON or undefined
    // startTime will be set programmatically to avoid date format issues
    contactName: 'Dr. Michael Green',
    projectParticipant: 'Green Energy Solutions Ltd',
    contactEmail: 'project@greenenergy-demo.com',
    contactPhoneNo: '+1234567890',
    contactFax: '+1234567891',
    contactAddress: '123 Renewable Energy Street, Eco City, Northern Province',
    contactWebsite: 'https://greenenergy-demo.com',
    // independentCertifiers: [], // Will be empty, user needs to select from available certifiers
    estimatedProjectCost: '2500000',  // String format for input field
    projectCapacity: '5000',  // String format for input field
  },

  // Project Proposal Demo Data (EXACT field names from actual form - 49 fields!)
  projectProposal: {
    // Section 1: Introduction
    introduction: 'This project aims to install solar photovoltaic systems to provide clean electricity to underserved communities while significantly reducing greenhouse gas emissions through renewable energy deployment.',
    
    // Section 2: Basic Information  
    projectTitle: 'Solar Energy Expansion Project 2024',
    proposalNo: 'PROP-2024-001',
    revNo: '1.0',
    durationOfService: '36 months',
    validityPeriod: '60 months',
    
    // Client Information
    clientName: 'CountryX Ministry of Environment',
    clientMobile: '+1234567890',
    clientContactPerson: 'Hon. Minister of Environment',
    clientEmail: 'minister@environment-demo.com',
    
    // Service Provider
    serviceProviderName: 'Green Energy Solutions Ltd',
    serviceProviderMobile: '+1234567890',
    servcieProviderEmail: 'contact@greenenergy-demo.com',
    serviceProviderContactPerson: 'Dr. Michael Green',
    serviceProviderTelephone: '+1234567890',
    
    // Project Background & Scope
    overallProjectBackground: 'The region currently relies heavily on diesel generators and grid electricity from coal-fired power plants, resulting in high emissions (3,500 tCO2e/year) and energy costs. This project will install 5MW of solar PV capacity to serve 10,000 households.',
    scopeForThisProposal: 'Design, procurement, installation, and commissioning of 5MW solar photovoltaic system with battery storage across 15 districts in the Northern Region.',
    
    // Project Activities
    developProjectConcept: 'Complete project concept developed with feasibility study, site assessment, and stakeholder consultations',
    notificationSLCSS: 'Initial notification submitted and approved by DNA',
    prepareCMA: 'Project Design Document (PDD) preparation including methodology selection and baseline analysis',
    validationCMA: 'Third-party validation by accredited certifier',
    preparationOfMonitoringReport: 'Quarterly monitoring reports with automated data collection',
    submissionOfMonitoringReport: 'Quarterly submission to DNA for verification',
    
    // Technical Specifications & Calculations
    projectCapacityValue: '5000',
    projectCapacityUnit: 'kW',
    projectCapacitySource: 'Equipment specifications and design calculations',
    
    plantFactorValue: '20',
    plantFactorUnit: '%',
    plantFactorSource: 'Historical solar irradiance data for the region',
    
    avgEnergyOutputValue: '8760',
    avgEnergyOutputUnit: 'MWh/year',
    avgEnergyOutputSource: 'Calculated based on capacity and plant factor',
    
    gridEmissionFactorValue: '0.7',
    gridEmissionFactorUnit: 'tCO2e/MWh',
    gridEmissionFactorSource: 'National grid emission factor from Energy Balance 2023',
    
    emissionReductionValue: '6132',
    emissionReductionUnit: 'tCO2e/year',
    emissionReductionValueSource: 'Calculated: Energy Output × Grid Emission Factor',
    
    avgCreditGenerationPerAnnum: '6132',
    
    // Project Timeline
    projectPlanActivity01: 'Project Design and Permitting',
    
    // Team Composition
    scopeOfWork: 'Complete project implementation including design, procurement, installation, commissioning, training, and ongoing monitoring and reporting for carbon credit generation',
    teamComposition: 'Multidisciplinary team including renewable energy engineers, carbon finance specialists, community liaison officers, and monitoring & verification experts',
    firstMemberConsultant: 'Dr. Sarah Chen',
    firstMemberRole: 'Lead Carbon Finance Specialist',
  },

  // PDD (Project Design Document) Demo Data (EXACT field names - ALL steps)
  pdd: {
    // Step 1: Basic Information (auto-populated from programme)
    projectTitle: 'Solar Energy Expansion Project 2024',
    versionNumber: '1.0',
    appliedMethodologies: 'ACMM 0 - Grid-connected electricity generation from renewable sources',
    estimatedAvgGHGEmissionReductionBasicInformation: '7777',
    projectProponent: 'Green Energy Solutions Ltd',
    // completionDate will be set as moment object
    hostParty: 'CountryX',
    sectoralScope: 'ENERGY_INDUSTRIES',
    
    // Step 2: Description of Project Activity
    introduction: 'This project activity involves the installation and operation of a 5MW grid-connected solar photovoltaic power generation system to displace electricity generated from fossil fuel-based power plants.',
    locationOfProjectActivity: 'Western Province, Colombo District, Sri Lanka',
    siteNo: '1',
    province: 'Western',
    district: 'Colombo',
    dsDivision: 'Colombo 1 (Fort)',
    city: 'Colombo 1 (Fort)',
    community: 'Fort Community',
    location: '6.9271, 79.8612',
    projectScale: 'Large Scale',
    projectActivityDescription: 'Installation of monocrystalline silicon solar PV panels (400W each) with micro-inverters and battery storage systems. Total installed capacity of 5MW connected to the national grid. The project will generate clean electricity and displace grid power from fossil fuel sources.',
    technologies: 'Monocrystalline silicon solar photovoltaic panels (400W), micro-inverters, lithium-ion battery storage (10kWh per unit), grid connection infrastructure, automated monitoring and control systems',
    publicFundingOfProjectActivity: 'No public funding. Project financed through private investment and carbon credit revenue.',
    histroyOfProjectActivity: 'Project concept developed in 2023, feasibility study completed, all permits obtained, site secured, equipment procurement in progress.',
    unbundling: 'This project is not part of any larger activity. It is a standalone renewable energy generation project.',
    
    // Step 2: Project Participants (Form.List - CRITICAL!)
    projectParticipants: [
      {
        partiesInvolved: 'CountryX (Host Party)',
        projectParticipants: [
          { participant: 'Green Energy Solutions Ltd' },
          { participant: 'CountryX Ministry of Environment' },
        ],
      },
    ],
    
    // Step 3: Application of Methodology
    titleAndReferenceOfMethodology: 'ACM0002 (Version 19.0) - Grid-connected electricity generation from renewable sources',
    applicabilityOfMethodology: 'The methodology is applicable as the project involves grid-connected renewable electricity generation from solar PV, displacing more GHG-intensive grid electricity.',
    baselineSource: 'Grid electricity from fossil fuel power plants (coal and diesel)',
    baselineIsCO2Included: true,
    baselineIsCH4Included: false,
    baselineIsN2OIncluded: false,
    baselineIsOtherIncluded: false,
    baselineco2Justification: 'CO2 is the primary GHG from fossil fuel combustion for grid electricity generation',
    baselinech4Justification: 'Not significant',
    baselinen2oJustification: 'Not significant',
    baselineotherJustification: 'Not applicable',
    projectSource: 'Solar photovoltaic electricity generation (zero direct emissions)',
    projectIsCO2Included: false,
    projectIsCH4Included: false,
    projectIsN2OIncluded: false,
    projectIsOtherIncluded: false,
    projectco2Justification: 'Solar PV has no direct CO2 emissions',
    projectch4Justification: 'Not applicable',
    projectn2oJustification: 'Not applicable',
    projectotherJustification: 'Not applicable',
    descriptionOfBaselineScenario: 'In the absence of the project, electricity demand would continue to be met by the national grid, which is predominantly supplied by coal-fired and diesel power plants with an average emission factor of 0.7 tCO2e/MWh.',
    demonstrationOfAdditionality: 'Investment analysis demonstrates that the project IRR without carbon credits (8.5%) is below the benchmark (12%), making it financially unattractive. Barrier analysis confirms technological and institutional barriers. Therefore, the project is additional.',
    emissionReductionEstimation: 'Annual emission reductions estimated at 6,132 tCO2e based on projected energy generation of 8,760 MWh/year and grid emission factor of 0.7 tCO2e/MWh.',
    explanationOfEmissionMethodologicalChoices: 'Conservative approach used. Grid emission factor from official national energy balance data. Plant factor based on historical solar irradiance data for the region.',
    
    // Data and parameters fixed ex ante
    parameter: 'Grid Emission Factor (EFgrid)',
    unit: 'tCO2e/MWh',
    description: 'Average CO2 emission factor of the national electricity grid, calculated based on the fuel mix and generation efficiency of power plants. Used to calculate baseline emissions displaced by renewable energy generation.',
    source: 'National Energy Balance 2023, Ministry of Energy and Power. Grid fuel mix data: 65% coal (0.95 tCO2e/MWh), 30% diesel (0.75 tCO2e/MWh), 5% renewable (0 tCO2e/MWh). Weighted average emission factor: 0.7 tCO2e/MWh.',
    descriptionOfMeasurementMethods: 'Grid emission factor calculated using Combined Margin approach per UNFCCC Tool to calculate the emission factor for an electricity system (Version 07.0). Build Margin and Operating Margin weighted equally. No direct measurement required as value is fixed ex-ante for entire crediting period.',
    valueApplied: '0.7 tCO2e/MWh (fixed for 7-year crediting period)',
    purpose: 'To calculate baseline emissions from grid electricity that would have been generated in the absence of the project. Used in formula: Baseline Emissions = Electricity Generated (MWh) × Grid Emission Factor.',
    comments: 'Conservative value. Grid emission factor calculated from most recent 3-year national energy data (2021-2023). Factor remains constant for crediting period per methodology requirements. Recalculation may be performed at renewal.',
    
    // Ex ante calculation of emission reductions
    exAnteCalculationOfEmissionReduction: 'Baseline emissions (BE) = Electricity Generation × Grid Emission Factor = 8,760 MWh/year × 0.7 tCO2e/MWh = 6,132 tCO2e/year. Project emissions (PE) = 0 tCO2e/year (solar PV has zero direct emissions). Leakage emissions (LE) = 8 tCO2e/year (minor transportation emissions from equipment maintenance). Net emission reductions (ER) = BE - PE - LE = 6,132 - 0 - 8 = 6,124 tCO2e/year. Over the 7-year crediting period: Total ER = 6,124 × 7 = 42,868 tCO2e. Calculations based on conservative assumptions: grid emission factor from official national data, plant capacity factor of 20% (industry average 22-25%), degradation rate of 0.5%/year. All formulae follow ACM0002 methodology requirements.',
    
    // Yearly emission reductions table - First year only (user can add more years manually)
    // vintage will be set as moment object in StepperComponent
    baselineEmissionReductions: '6132',
    projectEmissionReductions: '0',
    leakageEmissionReductions: '8',
    netEmissionReductions: '6124',
    // extraEmissionReductions - Leave empty, user can add additional years if needed
    totalCreditingYears: '7',
    avgBaselineEmissionReductions: '6132',
    avgProjectEmissionReductions: '0',
    avgLeakageEmissionReductions: '8',
    avgNetEmissionReductions: '6124',
    
    // Data and Parameters Monitored
    monitoringParameter: 'Electricity Generation (EGy)',
    monitoringUnit: 'MWh',
    monitoringDescription: 'Total net electricity generated by the solar PV plant and exported to the grid in year y. Measured at the point of grid connection using calibrated energy meters with data logging capabilities.',
    monitoringSource: 'Project developer - automated digital energy meters installed at grid connection point. Meter readings recorded and transmitted to central SCADA system every 15 minutes.',
    monitoringMeasurementMethods: 'Continuous monitoring using bi-directional digital energy meters (IEC 62053-22 Class 0.2S accuracy). Meters measure active energy export to grid. Data automatically logged to SCADA system and cross-checked against utility billing meters. Manual meter readings taken monthly as backup.',
    monitoringFrequency: 'Continuous (15-minute intervals). Data aggregated monthly and annually for emission reduction calculations and verification.',
    monitoringValueApplied: 'Annual electricity generation values for each monitoring period (expected ~8,760 MWh/year based on 5MW capacity and 20% plant factor)',
    monitoringEquipment: 'Schneider Electric PM8000 Series Digital Power Meters (IEC 62053-22 Class 0.2S), SCADA system with redundant data storage, backup mechanical meters for cross-verification.',
    monitoringQAProcedures: 'Annual meter calibration by accredited laboratory per IEC standards. Monthly cross-verification of SCADA data vs. utility billing data. Quarterly data reconciliation and gap analysis. Independent verification during annual audits.',
    monitoringPurpose: 'To quantify actual electricity generation for calculation of emission reductions. Used in formula: Emission Reduction = Electricity Generated (MWh) × Grid Emission Factor (tCO2e/MWh).',
    monitoringCalculation: 'ER_y = EG_y × EF_grid. Where: ER_y = Emission reductions in year y (tCO2e), EG_y = Electricity generated in year y (MWh), EF_grid = Grid emission factor (0.7 tCO2e/MWh, fixed ex-ante).',
    monitoringComments: 'Monitoring equipment installed before project commissioning. All meters certified and sealed. Backup power supply ensures continuous data logging. Monitoring plan follows ACM0002 methodology requirements.',
    
    // Monitoring Plan (Step 8)
    monitoringPlan: 'The monitoring plan follows ACM0002 methodology requirements and ensures accurate, continuous measurement of key parameters. Primary monitored parameter is electricity generation (MWh), measured using calibrated digital energy meters at the grid connection point. Meters record data every 15 minutes, transmitted to centralized SCADA system with redundant storage. Annual meter calibration by accredited laboratory ensures accuracy. Monthly cross-verification against utility billing data provides independent validation. Data quality assurance includes quarterly reconciliation, gap analysis, and archiving for minimum 2 years after crediting period. Monitoring responsibilities assigned to dedicated O&M team with backup personnel. Emergency procedures defined for equipment failure. Annual monitoring reports prepared for verification. Plan designed to provide transparent, verifiable, conservative emission reduction calculations.',
    samplingPlan: 'No sampling required. Universal metering approach - 100% of electricity generation measured continuously at single grid connection point. All energy export captured by main revenue-grade meters with backup verification meters.',
    otherElementsOfMonitoringPlan: 'Emergency response: Backup meters and manual readings if primary meters fail. Data gaps: Linear interpolation for gaps <24 hours, conservative assumptions for longer gaps. Data archiving: Minimum 2 years post-crediting period in secure digital and hard-copy format. Training: Annual refresher for monitoring personnel on equipment operation and QA/QC procedures.',
    
    // Step 4: Quantification of Emissions (covered in quantificationEmissions below)
    // emissionsPeriodStart and emissionsPeriodEnd - will be set as moment objects in component
    
    // Step 5: Start Date & Crediting Period (ALL fields required!)
    // projectActivityStartDate - will be set as string "YYYY-MM-DD" in component
    // projectCreditingPeriodStartDate, projectCreditingPeriodEndDate, creditingPeriodStart - will be set as moment objects
    operationalLifetime: '25 years',
    creditingPeriodType: 'Renewable',
    projectCreditingPeriodDuration: '7 years, 0 months and 0 days',
    
    // Step 6: Environmental Impacts (EXACT field names!)
    analysisEnvironmentalImpacts: 'Comprehensive Environmental Impact Assessment conducted. The project has no negative environmental impacts. Positive impacts include reduced air pollution from fossil fuel combustion (6,132 tCO2e/year reduction), no water consumption, improved air quality, and minimal land use impact as installation is on previously cleared land. Biodiversity assessment shows no impact on protected species.',
    environmentalImpactAssessment: 'Environmental clearance obtained from National Environmental Protection Agency on 2023-12-15. EIA Report No. EIA-2023-SOLAR-001. Assessment covered: air quality, water resources, land use, biodiversity, noise, visual impact, and socio-economic factors. All environmental regulations and safeguards complied with. No mitigation measures required.',
    
    // Step 7: Local Stakeholder Consultation (EXACT field names!)
    stakeHolderConsultationProcess: 'Public consultation meetings held in all affected communities on 2023-11-10, 2023-11-15, and 2023-11-20. Information disseminated via local newspapers, radio announcements, and community notice boards. Consultation covered project description, environmental impacts, employment opportunities, and community benefits. Total 250+ stakeholders participated including local government officials, community leaders, farmers, business owners, and residents. Meeting minutes documented and made available to public.',
    summaryOfCommentsRecieved: 'Strong community support for the project with 95% positive feedback. Main comments received: (1) Request for local employment opportunities - 45 participants raised this. (2) Concern about land use and agricultural impact - 12 participants. (3) Request for community benefit sharing from carbon credits - 38 participants. (4) Questions about project safety and environmental protection - 28 participants. (5) Interest in educational programs about renewable energy - 15 participants. No objections to project implementation received.',
    considerationOfCommentsRecieved: 'All stakeholder comments have been seriously considered and addressed in project design: (1) Local employment policy adopted - 30% of construction jobs and 50% of O&M jobs reserved for local community. (2) Land use concerns addressed - No agricultural land displacement, project uses previously cleared land, signed lease agreements with willing landowners. (3) Community benefit sharing agreement established - 2% of annual carbon credit revenue allocated to community development fund managed by local council. (4) Safety measures implemented - International safety standards, regular inspections, community safety briefings. (5) Educational program launched - Annual school visits and renewable energy workshops. Letters of support received from District Council and three Village Committees.',
    
    // Step 8: Monitoring
    monitoringApproach: 'Continuous automated monitoring of electricity generation using calibrated meters. Data logged hourly and aggregated monthly. Quarterly verification by third-party certifier.',
    dataAndParametersAvailable: 'All data and parameters required for monitoring are available and will be measured using calibrated equipment. Key parameters include: electricity generation (kWh), grid emission factor (tCO2e/MWh), system availability (%), and equipment performance metrics.',
    
    // Step 9: Approval & Authorization (EXACT field name!)
    approvalAndAuthorization: 'Letter of Approval from CountryX Designated National Authority (DNA) for climate change projects obtained on 2024-01-05. Reference Number: DNA/LOA/2024/SOLAR/001. The DNA confirms that the project contributes to national climate change mitigation goals and sustainable development priorities. Project aligns with national NDC targets for renewable energy expansion. All required environmental permits, grid connection approvals, and land use clearances are in place and attached to this PDD.',
    
    // Step 10: Appendix
    appendixReferences: 'Equipment specifications, feasibility study, environmental clearance, stakeholder consultation reports, grid connection agreement, monitoring equipment calibration certificates',
  },

  // Validation Agreement Demo Data (EXACT field names - 28 fields)
  validationAgreement: {
    // dateOfIssue will be set as moment object
    between: 'Green Energy Solutions Ltd (Project Developer), Tax ID: GES-2024-001',
    and: 'Climate Verification International (Independent Certifier), Accreditation: ISO 14065',
    definitions: 'This agreement covers the validation of the Project Design Document (PDD) for the Solar Energy Expansion Project 2024 in accordance with CDM methodologies and national carbon registry requirements.',
    whereas: 'The Project Developer seeks independent validation of the PDD to demonstrate compliance with applicable methodologies and to verify the credibility of emission reduction calculations.',
    settlementFee: '$15,000 USD',
    SLCFSignature: 'Climate Verification International',
    clientBehalf: 'Green Energy Solutions Ltd',
    clientSignature: 'Dr. Michael Green, CEO',
    clientAuthorizedSignatory: 'Dr. Michael Green',
    SLCFWitness: 'CountryX DNA Representative',
    SLCFWitnessSignature: 'DNA Official',
    SLCFWitnessName: 'Mr. John Doe',
    SLCFWitnessDesignation: 'Senior Carbon Registry Officer',
    clientWitnessName: 'Ms. Jane Smith',
    clientWitnessDesignation: 'Project Manager',
    annexureAadditionalComments: 'All standard CDM validation procedures will be followed. Includes desk review, site visit, stakeholder interviews, and CAR resolution.',
    annexureBadditionalComments: 'Payment terms: 50% upfront, 50% upon report submission',
  },

  // Validation Report Demo Data (EXACT field names from actual form)
  validationReport: {
    // Step 1: Basic Information
    titleOfTheProjectActivity: 'Solar Energy Expansion Project 2024',
    versionNumberValidationReport: '1.0',
    versionNumberPDD: '1.0',
    projectDeveloper: 'Green Energy Solutions Ltd',
    projectScale: 'Large Scale',
    appliedMethodologies: 'ACM0002 - Grid-connected electricity generation from renewable sources',
    conditionalSectoralScopes: '',
    titleOfSpecificCase: 'N/A',
    // completionDate will be set as moment object
    pddUploadedGlobalStakeholderConsultation: 'YES',
    hostParty: 'CountryX',
    mandatarySectoralScopes: 'ENERGY_INDUSTRIES',
    annualAverageGHGReduction: '6132',
    unfccRefNo: 'UNFCCC-VAL-2024-001',
    // creditingPeriodStart and creditingPeriodEnd - will be set as moment objects in component
    locationOfProjectActivity: 'Northern Region, Multiple Districts',
    siteNo: '1',
    province: 'Northern Province',
    district: 'District 5',
    city: 'Eco City',
    community: 'Local Community',
    // geographicalLocationCoordinates - Leave empty, map component will handle
    
    // Step 2: GHG Project Description (EXACT field names!)
    calculationOfBaselineEmissionFactor: 'Baseline emission factor calculated using Build Margin and Operating Margin combination as per ACM0002. Grid emission factor: 0.7 tCO2e/MWh based on national grid fuel mix (65% coal, 30% diesel, 5% renewable) and average generation efficiency.',
    gridEmissionFactorValue: '0.7',
    gridEmissionFactorUnit: 'tCO2e/MWh',
    gridEmissionFactorSource: 'National Energy Balance 2023, Ministry of Energy',
    plantFactor: '20% (Conservative estimate based on regional solar irradiance data and accounting for seasonal variations, maintenance downtime, and equipment degradation)',
    annualEmissionReductionCalculation: 'Annual Generation: 5,000 kW × 8,760 hours/year × 20% plant factor = 8,760 MWh/year. Emission Reduction: 8,760 MWh × 0.7 tCO2e/MWh = 6,132 tCO2e/year',
    
    // Baseline Emissions table (Form.List)
    baselineEmissions: [
      {
        location: 'Northern Region, District 5, Eco City',
        projectCapacity: '5000',
        plantFactor: '20',
        avgEnergyOutput: '8760',
        gridEmissionFactor: '0.7',
        emissionReduction: '6132',
        units: 'MWh/Year',
      },
    ],
    
    // Estimated Net Emission Reduction table data
    estimatedNetEmissionReductions: [
      { vintage: '2026', baselineEmissionReductions: '6132', projectEmissionReductions: '0', leakageEmissionReductions: '8', netEmissionReductions: '6124' },
      { vintage: '2027', baselineEmissionReductions: '6132', projectEmissionReductions: '0', leakageEmissionReductions: '8', netEmissionReductions: '6124' },
      { vintage: '2028', baselineEmissionReductions: '6132', projectEmissionReductions: '0', leakageEmissionReductions: '8', netEmissionReductions: '6124' },
      { vintage: '2029', baselineEmissionReductions: '6132', projectEmissionReductions: '0', leakageEmissionReductions: '8', netEmissionReductions: '6124' },
      { vintage: '2030', baselineEmissionReductions: '6132', projectEmissionReductions: '0', leakageEmissionReductions: '8', netEmissionReductions: '6124' },
      { vintage: '2031', baselineEmissionReductions: '6132', projectEmissionReductions: '0', leakageEmissionReductions: '8', netEmissionReductions: '6124' },
      { vintage: '2032', baselineEmissionReductions: '6132', projectEmissionReductions: '0', leakageEmissionReductions: '8', netEmissionReductions: '6124' },
    ],
    totalBaselineEmissionReductions: '42924',
    totalProjectEmissionReductions: '0',
    totalLeakageEmissionReductions: '56',
    totalNetGHGEmissionReductions: '42868',
    totalNumberOfCreditingYears: '7',
    avgBaselineEmissionReductions: '6132',
    avgProjectEmissionReductions: '0',
    avgLeakageEmissionReductions: '8',
    avgNetGHGEmissionReductions: '6124',
    
    projectemission: '0 tCO2e - Solar PV system has zero direct emissions during electricity generation',
    leakageEmission: '0 tCO2e - No leakage emissions identified. Manufacturing emissions excluded per methodology',
    
    // Step 3: Executive Summary (EXACT field name!)
    summaryDescription: 'Climate Verification International conducted a comprehensive validation of the Solar Energy Expansion Project 2024 Project Design Document (PDD). The validation included desk review of all documentation, on-site inspection of the proposed project location, and interviews with project developers and stakeholders. The project involves installation of a 5MW grid-connected solar PV system that will generate clean electricity and displace fossil fuel-based grid power. The validation team confirmed that: (1) The PDD follows all requirements of ACM0002 methodology, (2) Baseline scenario is realistic and credible, (3) Additionality is demonstrated through investment and barrier analysis, (4) Emission reduction calculations are accurate and conservative (6,132 tCO2e/year), (5) Monitoring plan is comprehensive and feasible, (6) Environmental and social safeguards are addressed. VALIDATION OPINION: POSITIVE. The project is recommended for registration.',
    
    // Step 4: Validation Team (Form.List)
    validationTeamMembers: [
      {
        role: 'TL',
        typeOfResource: 'IR',
        lastName: 'Johnson',
        firstName: 'Sarah',
        affliation: 'Climate Verification International',
        documentReview: true,
        onSiteInspection: true,
        interviews: true,
        validationFindings: true,
      },
      {
        role: 'TE',
        typeOfResource: 'ER',
        lastName: 'Chen',
        firstName: 'Michael',
        affliation: 'Renewable Energy Consultants Ltd',
        documentReview: true,
        onSiteInspection: true,
        interviews: false,
        validationFindings: true,
      },
    ],
    
    // Technical Reviewer (Form.List)
    technicalReviews: [
      {
        role: 'TR',
        typeOfResource: 'IR',
        lastName: 'Brown',
        firstName: 'David',
        affliation: 'Climate Verification International',
      },
    ],
    
    // Step 5: Means of Validation
    documentReview: 'Comprehensive desk review conducted including: (1) Project Design Document version 1.0, (2) Environmental Impact Assessment, (3) Stakeholder consultation reports, (4) Grid connection agreement, (5) Equipment specifications and calibration certificates, (6) Financial feasibility study, (7) Land ownership documents, (8) DNA Letter of Approval. All documents reviewed for completeness, accuracy, and consistency with methodology requirements.',
    
    // On-site inspection activities (Form.List)
    onSiteInspection: [
      {
        activity: 'Site inspection and verification of project location',
        siteLocation: 'Northern Region, District 5, Eco City',
        date: 'Site inspection date will be set as moment object',
        teamMember: 'Dr. Sarah Johnson, Michael Chen',
      },
      {
        activity: 'Verification of monitoring equipment and metering infrastructure',
        siteLocation: 'Solar PV installation site',
        date: 'Site inspection date will be set as moment object',
        teamMember: 'Michael Chen',
      },
    ],
    
    // Interviews (Form.List)
    interviewees: [
      {
        interviewee: 'Project Manager',
        lastName: 'Green',
        firstName: 'Michael',
        affliationName: 'Green Energy Solutions Ltd',
        date: 'Interview date will be set as moment object',
        'subject ': 'Project implementation plan, timeline, and stakeholder engagement',
        teamMember: 'Dr. Sarah Johnson',
      },
      {
        interviewee: 'Community Leader',
        lastName: 'Mwangi',
        firstName: 'John',
        affliationName: 'Local Community',
        date: 'Interview date will be set as moment object',
        'subject ': 'Community consultation process and local support',
        teamMember: 'Dr. Sarah Johnson',
      },
    ],
    
    samplingApproach: 'Full population approach - all project documentation and equipment reviewed. On-site inspection of 100% of project area. Interviews with key stakeholders including project developer, community representatives, and local authorities.',
    
    // Validation Findings - All 18 sections (54 fields!)
    cdm_meansOfValidation: 'Review of CDM compliance requirements',
    cdm_findings: 'Project demonstrates CDM compliance',
    cdm_conclusions: 'Satisfactory',
    
    projectType_meansOfValidation: 'Review of project design',
    projectType_findings: 'Project type correctly identified',
    projectType_conclusions: 'Confirmed',
    
    projectActivity_meansOfValidation: 'Site visit verification',
    projectActivity_findings: 'Project activity description accurate',
    projectActivity_conclusions: 'Approved',
    
    applicationMethodologies_meansOfValidation: 'Methodology review',
    applicationMethodologies_findings: 'ACM0002 correctly applied',
    applicationMethodologies_conclusions: 'Confirmed',
    
    deviationMethodology_meansOfValidation: 'Deviation review',
    deviationMethodology_findings: 'No deviations identified',
    deviationMethodology_conclusions: 'N/A',
    
    clarificationOnMethodology_meansOfValidation: 'Applicability review',
    clarificationOnMethodology_findings: 'Methodology fully applicable',
    clarificationOnMethodology_conclusions: 'Confirmed',
    
    projectBoundarySources_meansOfValidation: 'Boundary definition review',
    projectBoundarySources_findings: 'Project boundary correctly defined',
    projectBoundarySources_conclusions: 'Approved',
    
    baselineScenario_meansOfValidation: 'Baseline review',
    baselineScenario_findings: 'Baseline scenario realistic and conservative',
    baselineScenario_conclusions: 'Confirmed',
    
    demonstrationOfAdditionality_meansOfValidation: 'Additionality analysis',
    demonstrationOfAdditionality_findings: 'Additionality demonstrated through investment and barrier analysis',
    demonstrationOfAdditionality_conclusions: 'Approved',
    
    estimationOfEmissionReduction_meansOfValidation: 'Calculations review',
    estimationOfEmissionReduction_findings: 'Emission reduction calculations verified and credible',
    estimationOfEmissionReduction_conclusions: 'Approved',
    
    monitoringPlan_meansOfValidation: 'Monitoring procedures review',
    monitoringPlan_findings: 'Comprehensive monitoring plan with automated data collection',
    monitoringPlan_conclusions: 'Approved',
    
    startDateCreditingPeriod_meansOfValidation: 'Timeline review',
    startDateCreditingPeriod_findings: 'Start date and crediting period appropriate',
    startDateCreditingPeriod_conclusions: 'Confirmed',
    
    environmentImpacts_meansOfValidation: 'EIA review',
    environmentImpacts_findings: 'Environmental clearance obtained, no negative impacts',
    environmentImpacts_conclusions: 'Approved',
    
    localStakeholderConsultation_meansOfValidation: 'Consultation review',
    localStakeholderConsultation_findings: 'Comprehensive consultations conducted, strong community support',
    localStakeholderConsultation_conclusions: 'Approved',
    
    sustainableDevelopment_meansOfValidation: 'SD benefits review',
    sustainableDevelopment_findings: 'Project contributes to sustainable development goals',
    sustainableDevelopment_conclusions: 'Confirmed',
    
    approval_meansOfValidation: 'Approval documentation review',
    approval_findings: 'DNA Letter of Approval obtained',
    approval_conclusions: 'Confirmed',
    
    authorization_meansOfValidation: 'Authorization review',
    authorization_findings: 'All permits and authorizations in place',
    authorization_conclusions: 'Confirmed',
    
    modalitiesOfCommunication_meansOfValidation: 'Communication review',
    modalitiesOfCommunication_findings: 'Clear communication protocols established',
    modalitiesOfCommunication_conclusions: 'Approved',
    
    globalStakeholderConsultation_meansOfValidation: 'Global consultation review',
    globalStakeholderConsultation_findings: 'PDD uploaded for consultation, no comments received',
    globalStakeholderConsultation_conclusions: 'Confirmed',
    
    // CL/CAR/FAR counts for all 18 validation areas (showing 0 for positive validation)
    'finding-cl-1': '0',
    'finding-car-1': '0',
    'finding-far-1': '0',
    'finding-cl-2': '0',
    'finding-car-2': '0',
    'finding-far-2': '0',
    'finding-cl-3': '0',
    'finding-car-3': '0',
    'finding-far-3': '0',
    'finding-cl-4': '0',
    'finding-car-4': '0',
    'finding-far-4': '0',
    'finding-cl-5': '0',
    'finding-car-5': '0',
    'finding-far-5': '0',
    'finding-cl-6': '0',
    'finding-car-6': '0',
    'finding-far-6': '0',
    'finding-cl-7': '0',
    'finding-car-7': '0',
    'finding-far-7': '0',
    'finding-cl-8': '0',
    'finding-car-8': '0',
    'finding-far-8': '0',
    'finding-cl-9': '0',
    'finding-car-9': '0',
    'finding-far-9': '0',
    'finding-cl-10': '0',
    'finding-car-10': '0',
    'finding-far-10': '0',
    'finding-cl-11': '0',
    'finding-car-11': '0',
    'finding-far-11': '0',
    'finding-cl-12': '0',
    'finding-car-12': '0',
    'finding-far-12': '0',
    'finding-cl-13': '0',
    'finding-car-13': '0',
    'finding-far-13': '0',
    'finding-cl-14': '0',
    'finding-car-14': '0',
    'finding-far-14': '0',
    'finding-cl-15': '0',
    'finding-car-15': '0',
    'finding-far-15': '0',
    'finding-cl-16': '0',
    'finding-car-16': '0',
    'finding-far-16': '0',
    'finding-cl-17': '0',
    'finding-car-17': '0',
    'finding-far-17': '0',
    'finding-cl-18': '0',
    'finding-car-18': '0',
    'finding-far-18': '0',
    'finding-cl-19': '0',  // Global stakeholder consultation
    'finding-car-19': '0',
    'finding-far-19': '0',
    'finding-cl-20': '0',  // Others (please specify)
    'finding-car-20': '0',
    'finding-far-20': '0',
    'cl-total': '0',
    'car-total': '0',
    'far-total': '0',
    
    // Internal Quality Control
    internalQualityControl: 'Internal quality control review conducted by senior validator. All findings reviewed and approved. Quality assurance procedures followed per ISO 14065 requirements.',
    
    // Validation Opinion
    opinion: 'Based on the validation conducted, Climate Verification International concludes that the Solar Energy Expansion Project 2024 meets all applicable requirements. The project demonstrates additionality, emission reduction calculations are credible, and the monitoring plan is adequate. VALIDATION OPINION: POSITIVE. The project is recommended for registration.',
    
    // Step 8: Appendix (EXACT field names!)
    appendix1Comments: 'All validation team members hold relevant qualifications and certifications for renewable energy project validation. Lead Validator: ISO 14065 accreditation, 10+ years experience. Technical Expert: PhD in Renewable Energy, 15 publications.',
    
    // Appendix 2: Documents Reviewed (Form.List)
    documentsReviewed: [
      {
        author: 'Green Energy Solutions Ltd',
        title: 'Project Design Document version 1.0',
        referencesToDocument: 'PDD-2024-001',
        provider: 'Project Developer',
      },
      {
        author: 'Environmental Consultants Ltd',
        title: 'Environmental Impact Assessment Report',
        referencesToDocument: 'EIA-2024-Solar-001',
        provider: 'Project Developer',
      },
      {
        author: 'Green Energy Solutions Ltd',
        title: 'Stakeholder Consultation Report',
        referencesToDocument: 'SCR-2024-001',
        provider: 'Project Developer',
      },
      {
        author: 'National Grid Authority',
        title: 'Grid Connection Agreement',
        referencesToDocument: 'GCA-2024-5MW-Solar',
        provider: 'Grid Authority',
      },
    ],
    
    // Appendix 3: CL/CAR/FAR Individual Fields (not Form.List tables)
    cl_id: 'CL-001',
    cl_date: 'CL date will be set as moment object',
    cl_section: 'Section 4.2',
    cl_description: 'Request for clarification on baseline emission factor calculation methodology',
    cl_projectParticipantResponse: 'Clarification provided with detailed calculation methodology and supporting documentation',
    cl_projectParticipantResponseDate: 'Response date will be set as moment object',
    cl_documentationProvidedByProjectParticipant: 'Technical calculation sheets and grid emission factor data',
    cl_doeAssesment: 'Clarification satisfactory. Baseline calculation methodology is appropriate and well-documented',
    cl_doeAssesmentDate: 'Assessment date will be set as moment object',
    
    car_id: 'CAR-001',
    car_date: 'CAR date will be set as moment object',
    car_section: 'Section 6.1',
    car_description: 'Minor correction required in monitoring plan frequency specifications',
    car_projectParticipantResponse: 'Monitoring plan updated with corrected frequency specifications',
    car_projectParticipantResponseDate: 'Response date will be set as moment object',
    car_documentationByProjectParticipant: 'Updated monitoring plan document with revisions highlighted',
    car_doeAssesment: 'Correction implemented satisfactorily. Monitoring plan now meets methodology requirements',
    car_doeAssesmentDate: 'Assessment date will be set as moment object',
    
    far_id: 'FAR-001',
    far_date: 'FAR date will be set as moment object',
    far_section: 'Section 8.3',
    far_description: 'Recommendation for enhanced stakeholder consultation documentation',
    far_projectParticipantResponse: 'Additional stakeholder consultation documentation provided including meeting minutes and feedback summaries',
    far_projectParticipantResponseDate: 'Response date will be set as moment object',
    far_documentationByProjectParticipant: 'Comprehensive stakeholder consultation report with meeting records and community feedback',
    far_doeAssesment: 'Forward action addressed satisfactorily. Stakeholder consultation documentation is now comprehensive',
    far_doeAssesmentDate: 'Assessment date will be set as moment object',
    
    // All date fields will be set as moment objects in ValidationStepperComponent
  },

  // Monitoring Report Demo Data (EXACT field names with bi_ prefix)
  monitoringReport: {
    // Basic Information (Step 1)
    bi_projectTitle: 'Solar Energy Expansion Project 2024',
    bi_applicablePDDVersionNo: '1.0',
    // bi_completionDate: will be set as moment object in component
    bi_duration: '3 months (Q1 2024)',
    bi_projectDeveloper: 'Green Energy Solutions Ltd',
    bi_appliedMethodologies: 'ACM0002 - Grid-connected electricity generation from renewable sources',
    bi_achievedGHGReductions: '1533',  // Quarterly reduction (6132/4)
    bi_unfccRefNo: 'UNFCCC-PD-2024-001',
    bi_versionNoOfMR: '1.0',
    bi_monitoringPeriodNo: '1',
    bi_monitoringNoForMonitoringPeriod: 'MR-Q1-2024-001',
    bi_hostParty: 'CountryX',
    bi_sectoralScope: 'ENERGY_INDUSTRIES',
    bi_projectedGHGReductions: '6132',  // Annual projection
    telephone: '+1234567890',
    reportID: 'MR-2024-Q1-001',
    
    // Step 2: Project Activity
    pa_monitoringPurpose: 'To monitor and report actual energy generation and emission reductions for Q1 2024',
    
    // Project Participants (Form.List - CRITICAL!)
    projectParticipants: [
      {
        partiesInvolved: 'CountryX (Host Party)',
        projectParticipants: [
          { participant: 'Green Energy Solutions Ltd' },
          { participant: 'CountryX Ministry of Environment' },
        ],
      },
    ],
    
    locationOfProjectActivity: 'Western Province, Colombo District',
    siteNo: '1',
    province: 'Western',
    district: 'Colombo',
    city: 'Colombo 1 (Fort)',
    community: 'Fort',
    geographicalLocationCoordinates: '6.9271, 79.8612',
    pa_methodology: 'ACM0002 - Grid-connected electricity generation from renewable sources',
    pa_projectCreditingPeriod: '2024-2030',
    // pa_projectCreditingPeriodEndDate will be set as moment
    pa_creditingPeriodType: 'Renewable',
    
    // Step 3-7: Emission Calculations
    ce_baselineEmission: '6132',  // Annual baseline
    ce_projectEmissions: '0',  // Solar PV has zero direct emissions
    ce_leakage: '0',
    
    // Vintage data (quarterly breakdown)
    vintage: '2024',
    baselineEmissionReductions: '1533',  // Q1 (6132/4)
    projectEmissionReductions: '0',
    leakageEmissionReductions: '0',
    netEmissionReductions: '1533',
    
    // Totals
    totalBaselineEmissionReductions: '6132',
    totalProjectEmissionReductions: '0',
    totalLeakageEmissionReductions: '0',
    totalNetEmissionReductions: '6132',
    totalCreditingYears: '7',
    avgBaselineEmissionReductions: '6132',
    avgProjectEmissionReductions: '0',
    
    // Step 3: Implementation of Project Activity (io_ prefix - 9 fields)
    io_descriptionOfPA: 'The 5MW solar PV system was successfully installed and commissioned during Q1 2024. All 12,500 solar panels (400W each) are operational and connected to the grid. Battery storage systems (10kWh × 250 units) are functioning normally. The project is operating as designed in the PDD.',
    io_postRegistrationChanges: 'No post-registration changes have been made to the project design or configuration.',
    io_tempDeviations: 'No temporary deviations from the registered monitoring plan have occurred during this monitoring period.',
    io_corrections: 'No corrections to previous monitoring reports are required.',
    io_changesToTheStartDate: 'No changes to the crediting period start date.',
    io_inclusionOfMP: 'The monitoring plan is being implemented exactly as registered in the PDD. All monitoring equipment is operational and calibrated.',
    io_permanantMonitoringPlan: 'No permanent changes to the monitoring plan have been made.',
    io_changesToProjectDesign: 'No changes to the registered project design have occurred.',
    io_changesSpecificToAfforestrationOrReforestration: 'N/A - This is not an afforestation/reforestation project.',
    
    // Step 4: Description of Monitoring System  
    do_descriptionOfMonitoringSystem: 'Automated monitoring system with smart meters recording electricity generation every hour. Data is transmitted to central server via cellular network. Monthly aggregation and validation conducted. All meters are calibrated annually by certified technicians. Backup manual readings taken weekly.',
    
    // Step 5: Data and Parameters (dp_ prefix - 9 fields)
    dp_dataParameter: 'Electricity Generated',
    dp_dataUnit: 'MWh',
    dp_description: 'Total electrical energy generated by the solar PV system and exported to the grid',
    dp_sourceOfData: 'Automated smart meters (brand: SolarLog Pro) with hourly data logging',
    dp_valueApplied: '2,190 MWh for Q1 2024',
    dp_choiceOfDataOrMeasurement: 'Continuous automated measurement using calibrated meters per ACM0002 requirements',
    dp_purposeOfData: 'To calculate baseline emissions and emission reductions',
    dp_comments: 'Meters calibrated on 2024-01-01. Accuracy ±0.5%. Data quality checked monthly.',
    dp_implementationOfSamplingPlan: 'N/A - Full population monitoring (all generation recorded), no sampling required.',
    
    // Step 6: Calculation of Emission Reductions - Comparison with PDD section
    item: 'Electricity Generation (MWh)',
    valueApplied: '2,430 MWh (projected in PDD for Q1)',
    actualValues: '2,190 MWh (actual generation in Q1 2024)',
    ce_remarks: 'Actual generation was 90% of PDD estimate. Difference due to lower-than-expected solar irradiance in January (cloudy weather). February and March performance met expectations. Overall project performance is on track.',
    
    // Step 7: Appendix (will be auto-filled from main data)
  },

  // Site Checklist Demo Data (EXACT field names - 29+ fields)
  siteChecklist: {
    projectName: 'Solar Energy Expansion Project 2024',
    organizationName: 'Green Energy Solutions Ltd',
    location: 'Northern Region, District 5, Eco City',
    // date will be set as moment object
    // time will be set as moment object
    // projectStartDate will be set as moment object
    plantFactorPercentage: '20',
    projectCapacity: '5000',
    projectEmission: '6132',
    leakageEmission: '0',
    
    // Eligibility Criteria (Yes/No + Comments)
    eligibility1YesNo: 'YES',
    eligibility1Comment: 'Project uses renewable energy technology (solar PV)',
    eligibility2YesNo: 'YES',
    eligibility2Comment: 'Emission reductions are additional to business-as-usual scenario',
    eligibility3YesNo: 'YES',
    eligibility3Comment: 'Project has clear environmental benefits',
    eligibility4YesNo: 'YES',
    eligibility4Comment: 'No negative social or environmental impacts identified',
    eligibility5YesNo: 'YES',
    eligibility5Comment: 'Monitoring plan is comprehensive and feasible',
    eligibility6YesNo: 'YES',
    eligibility6Comment: 'All required documentation is complete and accurate',
    
    // Document Availability
    doc1FeasibilityStudiesAvailability: 'YES',
    doc1FeasibilityStudiesComment: 'Comprehensive feasibility study completed, all technical and financial aspects covered',
    doc2PowerPurchasingAgreementAvailability: 'YES',
    doc2PowerPurchasingAgreementComment: 'PPA signed with local distribution company',
    doc3TestingCertificateAvailability: 'YES',
    doc3TestingCertificateComment: 'Equipment testing certificates from manufacturer provided',
    doc4CalibrationReportsAvailability: 'YES',
    doc4CalibrationReportsComment: 'Calibration reports for all monitoring equipment available',
    doc5DataManagementAvailability: 'YES',
    doc5DataManagementComment: 'Data management system in place with automated logging',
    doc6MonthlyElectricityRecordsAvailability: 'YES',
    doc6MonthlyElectricityRecordsComment: 'Monthly electricity generation records will be maintained',
    doc7MonthlyElectricityInvoicesAvailability: 'YES',
    doc7MonthlyElectricityInvoicesComment: 'All invoices and billing records will be kept',
    doc8TrainingRecordsAvailability: 'YES',
    doc8TrainingRecordsComment: 'Training records for all technical staff documented',
    doc9InternalAuditReportsAvailability: 'YES',
    doc9InternalAuditReportsComment: 'Internal audit procedures established',
    
    // Stakeholder Interview (first entry)
    stakeholderName: 'Chief John Mwangi',
    contactDetails: '+1234567890 / chief@community-demo.com',
    designation: 'Community Leader',
    subjectCovered: 'Community consultation, social impact assessment, local employment opportunities',
    
    // Validator Information
    validatorName: 'Dr. Sarah Johnson',
    // validationDate will be set as moment object
    validatorDesignation: 'Lead Validator, Climate Verification International',
    validatorSignature: 'Dr. Sarah Johnson',
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

  // Verification Report Demo Data (COMPREHENSIVE - 100+ fields across 9 steps!)
  verificationReport: {
    // Step 1: Basic Information (ALL 17 fields)
    b_projectTitle: 'Solar Energy Expansion Project 2024',
    b_scaleOfProject: 'Large Scale',
    b_monitoringPeriodDuration: 'Q1 2024 (Jan 1 - Mar 31, 2024)',
    telephone: '+94112345678',
    // b_completionDate - will be set as moment object in component
    b_versionNoOfMonitoringReport: '1.0',
    b_projectDeveloper: 'Green Energy Solutions Ltd',
    b_appliedMethodologies: 'ACM0002 - Grid-connected electricity generation from renewable sources',
    b_conditionalSectoralScopes: 'ENERGY_INDUSTRIES',
    b_unfccRefNo: 'UNFCCC-VER-2024-001',
    b_versionNoOfVerificationReport: '1.0',
    b_monitoringPeriodNo: '1',
    b_creditingPeriod: '7 years, 0 months and 0 days',
    b_hostParty: 'CountryX',
    b_mandatorySectoralScopes: 'ENERGY_INDUSTRIES',
    b_estimatedGHGEmissionReduction: '6132',
    b_certfiedGHGReductions: '1533', // Q1 actual
    
    // Step 2: GHG Project Description (g_ prefix - 2 fields)
    g_projectEmissions: '0 tCO2e - Zero direct emissions from solar PV generation',
    g_leakageEmission: '0 tCO2e - No leakage emissions identified',
    
    // Step 3: Executive Summary (e_ prefix - 1 field)
    e_executiveSummary: 'Climate Verification International conducted verification of the Solar Energy Expansion Project 2024 for the monitoring period Q1 2024. The project generated 2,190 MWh of clean electricity, displacing grid electricity and achieving emission reductions of 1,533 tCO2e. All monitoring equipment was found to be properly calibrated and functioning. Data quality is excellent with automated hourly readings. No deviations from the registered monitoring plan were identified. VERIFICATION OPINION: POSITIVE. Certified emission reductions: 1,533 tCO2e for Q1 2024.',
    
    // Step 4: Verification Team (Form.Lists - EXACT field names)
    verificationTeamMembers: [
      { role: 'TL', typeOfResource: 'IR', lastName: 'Johnson', firstName: 'Sarah', affliation: 'Climate Verification International', documentReview: true, onsiteInspections: true, interviews: true, verificationFindings: false },
      { role: 'TE', typeOfResource: 'ER', lastName: 'Chen', firstName: 'Michael', affliation: 'Climate Verification International', documentReview: true, onsiteInspections: true, interviews: true, verificationFindings: false },
      { role: 'TM', typeOfResource: 'IR', lastName: 'Patel', firstName: 'Raj', affliation: 'Climate Verification International', documentReview: true, onsiteInspections: false, interviews: false, verificationFindings: false },
    ],
    technicalReviews: [
      { role: 'TR', typeOfResource: 'IR', lastName: 'Williams', firstName: 'Emma', affliation: 'Climate Verification International' },
      { role: 'TR', typeOfResource: 'IR', lastName: 'Brown', firstName: 'David', affliation: 'Climate Verification International' },
    ],
    
    // Step 5: Application of Materiality 
    materialityTable: [
      { riskThatCouldLead: 'Inaccurate electricity meter readings could affect emission reduction calculation', riskLevel: 'MEDIUM', 'justification ': 'Primary data source for emission reductions. Meter accuracy is critical for credible verification.', response: 'Verify meter calibration certificates. Cross-check readings with utility billing data. Conduct on-site inspection of all meters.' },
      { riskThatCouldLead: 'Incorrect grid emission factor application could overstate or understate emission reductions', riskLevel: 'LOW', 'justification ': 'Emission factor from official national grid study with established uncertainty margin. Source is credible.', response: 'Verify source document and applicability. Check calculation methodology and correct application of factor.' },
      { riskThatCouldLead: 'Data gaps or missing monitoring data could compromise emission reduction claims', riskLevel: 'LOW', 'justification ': 'SCADA system has built-in redundancy. Historical reliability >99%. Automated continuous monitoring with backup systems.', response: 'Review data completeness for entire monitoring period. Check gap-filling procedures if any gaps identified.' },
    ],
    am_considerationOfMaterialityTextBox: 'During verification, materiality considerations were systematically applied to all findings, calculations, and documentation reviews. Materiality threshold was set at 5% of claimed emission reductions (77 tCO2e for Q1 2024). No material errors, omissions, or misstatements were identified in the monitoring report or supporting documentation. Total uncertainty in emission reductions is estimated at less than 2%, well below the materiality threshold. Conservative assumptions were applied where uncertainty exists. All identified risks have been adequately addressed through verification procedures. The verification team concludes that the monitoring and reporting systems are robust and provide credible, transparent, and accurate emission reduction data.',
    
    // Step 6: Means of Verification (m_ prefix + findings - 70+ fields!)
    m_meansOfVerification: 'Comprehensive verification approach including: (1) Desk review of all monitoring reports and supporting documentation, (2) On-site inspection of solar installation and monitoring equipment, (3) Interviews with project staff and operators, (4) Data validation and cross-checking, (5) Review of calibration certificates.',
    // siteInspectionDurationStart and End - will be set as moment objects in component
    samplingApproach: 'Full population monitoring - all generation data recorded hourly. Representative sampling of calibration records (20% of meters verified). Interviews with 100% of key personnel.',
    
    // Finding counts (CL/CAR/FAR for 20 areas)
    'finding-cl-1': '0',
    'finding-car-1': '0',
    'finding-far-1': '0',
    'finding-cl-2': '0',
    'finding-car-2': '0',
    'finding-far-2': '0',
    'finding-cl-3': '0',
    'finding-car-3': '0',
    'finding-far-3': '0',
    'finding-cl-4': '0',
    'finding-car-4': '0',
    'finding-far-4': '0',
    'finding-cl-5': '0',
    'finding-car-5': '0',
    'finding-far-5': '0',
    'finding-cl-6': '0',
    'finding-car-6': '0',
    'finding-far-6': '0',
    'finding-cl-7': '0',
    'finding-car-7': '0',
    'finding-far-7': '0',
    'finding-cl-8': '0',
    'finding-car-8': '0',
    'finding-far-8': '0',
    'finding-cl-9': '0',
    'finding-car-9': '0',
    'finding-far-9': '0',
    'finding-cl-10': '0',
    'finding-car-10': '0',
    'finding-far-10': '0',
    'finding-cl-11': '0',
    'finding-car-11': '0',
    'finding-far-11': '0',
    'finding-cl-12': '0',
    'finding-car-12': '0',
    'finding-far-12': '0',
    'finding-cl-13': '0',
    'finding-car-13': '0',
    'finding-far-13': '0',
    'finding-cl-14': '0',
    'finding-car-14': '0',
    'finding-far-14': '0',
    'finding-cl-15': '0',
    'finding-car-15': '0',
    'finding-far-15': '0',
    'finding-cl-16': '0',
    'finding-car-16': '0',
    'finding-far-16': '0',
    'finding-cl-17': '0',
    'finding-car-17': '0',
    'finding-far-17': '0',
    'finding-cl-18': '0',
    'finding-car-18': '0',
    'finding-far-18': '0',
    'finding-cl-19': '0',
    'finding-car-19': '0',
    'finding-far-19': '0',
    'finding-cl-20': '0',
    'finding-car-20': '0',
    'finding-far-20': '0',
    'cl-total': '0',
    'car-total': '0',
    'far-total': '0',
    clarificationOthers: 'No additional clarifications, CARs, or FARs raised during verification.',
    
    // Form.Lists for on-site inspection and interviewees (dates will be converted to moment objects in component)
    onSiteInspection: [
      { activity: 'Inspection of solar PV arrays', siteLocation: 'Northern Region Site 1', activityPerformedDate: '2024-04-15', teamMember: 'Sarah Johnson, Michael Chen' },
      { activity: 'Review of monitoring equipment and data loggers', siteLocation: 'Control Room', activityPerformedDate: '2024-04-15', teamMember: 'Sarah Johnson, Michael Chen' },
      { activity: 'Verification of meter calibration certificates', siteLocation: 'Control Room', activityPerformedDate: '2024-04-15', teamMember: 'Michael Chen' },
    ],
    interviewees: [
      { lastName: 'Green', firstName: 'Michael', affliationName: 'Green Energy Solutions Ltd', date: '2024-04-15', subject: 'Project implementation and operational procedures', teamMember: 'Sarah Johnson' },
      { lastName: 'Kumar', firstName: 'Priya', affliationName: 'Green Energy Solutions Ltd', date: '2024-04-15', subject: 'Monitoring systems and data management', teamMember: 'Michael Chen' },
      { lastName: 'Anderson', firstName: 'James', affliationName: 'Green Energy Solutions Ltd', date: '2024-04-15', subject: 'Daily operations and maintenance', teamMember: 'Sarah Johnson, Michael Chen' },
    ],
    
    // Step 7: Verification Findings (63 fields! - 21 sections × 3 fields each)
    remainingFARsFromValidation: 'None. All FARs from validation were closed prior to this verification.',
    
    // 1. Compliance with monitoring report form
    complianceMonitoringReportForm_MeansOfVerification: 'Review of monitoring report structure and completeness',
    complianceMonitoringReportForm_findings: 'Monitoring report follows required format and includes all mandatory sections',
    complianceMonitoringReportForm_conclusions: 'Compliant',
    
    // 2. Compliance with project implementation
    complianceProjectImplementation_meansOfVerification: 'Site visit and comparison with registered PDD',
    complianceProjectImplementation_findings: 'Project implemented exactly as described in registered PDD. All 5MW capacity operational.',
    complianceProjectImplementation_conclusions: 'Compliant',
    
    // 3. Temporary deviations
    temporaryDeviations_meansOfVerification: 'Review of operational logs and monitoring plan',
    temporaryDeviations_findings: 'No temporary deviations from registered monitoring plan identified',
    temporaryDeviations_conclusions: 'N/A',
    
    // 4. Corrections
    corrections_meansOfVerification: 'Review of previous monitoring reports',
    corrections_findings: 'This is the first monitoring period - no previous reports to correct',
    corrections_conclusions: 'N/A',
    
    // 5. Changes to crediting period start date
    changesCreditingPeriodStartDate_meansOfVerification: 'Review of project timeline documentation',
    changesCreditingPeriodStartDate_findings: 'Crediting period start date unchanged from registered PDD',
    changesCreditingPeriodStartDate_conclusions: 'No changes',
    
    // 6. Inclusion of monitoring plan
    inclusionMonitoringPlan_meansOfVerification: 'Review of monitoring procedures and equipment',
    inclusionMonitoringPlan_findings: 'Monitoring plan implemented exactly as registered. All parameters monitored.',
    inclusionMonitoringPlan_conclusions: 'Compliant',
    
    // 7. Permanent changes to monitoring plan
    permanentChangesMonitoringPlan_meansOfVerification: 'Review of monitoring plan documentation',
    permanentChangesMonitoringPlan_findings: 'No permanent changes to monitoring plan',
    permanentChangesMonitoringPlan_conclusions: 'N/A',
    
    // 8. Changes to project design
    changesProjectDesign_meansOfVerification: 'Site inspection and design document review',
    changesProjectDesign_findings: 'No changes to registered project design',
    changesProjectDesign_conclusions: 'N/A',
    
    // 9. Changes specific to afforestation/reforestation
    changesAfforestationReforestation_meansOfVerification: 'N/A - Not an A/R project',
    changesAfforestationReforestation_findings: 'N/A - Not an A/R project',
    changesAfforestationReforestation_conclusions: 'N/A',
    
    // 10. Compliance with registered monitoring plan
    complianceRegisteredMonitoringPlan_meansOfVerification: 'Cross-check of monitoring activities against registered plan',
    complianceRegisteredMonitoringPlan_findings: 'All monitoring activities conducted per registered plan. Data quality excellent.',
    complianceRegisteredMonitoringPlan_conclusions: 'Compliant',
    
    // 11. Data and parameters fixed ex ante
    dataParametersFixedExAnte_meansOfVerification: 'Review of grid emission factor and other fixed parameters',
    dataParametersFixedExAnte_findings: 'Grid emission factor of 0.7 tCO2/MWh correctly applied as per national grid study',
    dataParametersFixedExAnte_conclusions: 'Verified',
    
    // 12. Data and parameters monitored
    dataParametersMonitored_meansOfVerification: 'Review of monitoring data and equipment',
    dataParametersMonitored_findings: 'Electricity generation monitored hourly with calibrated smart meters. Data quality: 100% complete.',
    dataParametersMonitored_conclusions: 'Verified',
    
    // 13. Implementation of sampling plan
    implementationSamplingPlan_meansOfVerification: 'Review of sampling approach',
    implementationSamplingPlan_findings: 'Full population monitoring - no sampling required per methodology',
    implementationSamplingPlan_conclusions: 'N/A',
    
    // 14. Compliance with calibration frequency
    complianceCalibrationFrequency_meansOfVerification: 'Review of calibration certificates and schedule',
    complianceCalibrationFrequency_findings: 'All meters calibrated on 2024-01-01 by certified technician. Annual calibration schedule established.',
    complianceCalibrationFrequency_conclusions: 'Compliant',
    
    // 15. Calculation of baseline emissions
    calculationBaselineEmissions_meansOfVerification: 'Recalculation and validation of emission calculations',
    calculationBaselineEmissions_findings: 'Baseline emissions = 2,190 MWh × 0.7 tCO2/MWh = 1,533 tCO2e. Calculation verified.',
    calculationBaselineEmissions_conclusions: 'Verified',
    
    // 16. Calculation of project emissions
    calculationProjectEmissions_meansOfVerification: 'Review of project emission sources',
    calculationProjectEmissions_findings: 'Solar PV generates zero direct emissions. Calculation: 0 tCO2e.',
    calculationProjectEmissions_conclusions: 'Verified',
    
    // 17. Calculation of leakage emissions
    calculationLeakageEmissions_meansOfVerification: 'Assessment of potential leakage sources',
    calculationLeakageEmissions_findings: 'No leakage emissions identified per methodology. Calculation: 0 tCO2e.',
    calculationLeakageEmissions_conclusions: 'Verified',
    
    // 18. Summary of GHG emission reductions
    summaryGHGEmissionReductions_meansOfVerification: 'Validation of net emission reduction calculation',
    summaryGHGEmissionReductions_findings: 'Net emission reductions = 1,533 - 0 - 0 = 1,533 tCO2e for Q1 2024.',
    summaryGHGEmissionReductions_conclusions: 'Verified',
    
    // 19. Comparison of GHG reductions with PDD estimates
    comparisonGHG_meansOfVerification: 'Comparison of actual vs estimated reductions',
    comparisonGHG_findings: 'PDD estimated 6,132 tCO2e annually. Q1 actual: 1,533 tCO2e (25% of annual = on target).',
    comparisonGHG_conclusions: 'On target',
    
    // 20. Remarks on differences from estimated values
    remarkDif_meansOfVerification: 'Analysis of any variances',
    remarkDif_findings: 'Actual performance matches PDD estimates. No significant variances.',
    remarkDif_conclusions: 'Satisfactory',
    
    // 21. Actual GHG emission reductions achieved
    actualGHG_meansOfVerification: 'Final verification of achieved reductions',
    actualGHG_findings: 'Actual verified emission reductions: 1,533 tCO2e for Q1 2024',
    actualGHG_conclusions: 'Certified',
    
    // 22. Assessment of monitoring report
    assesmentOfReport_meansOfVerification: 'Overall quality assessment',
    assesmentOfReport_findings: 'Monitoring report is complete, accurate, and transparent. High quality.',
    assesmentOfReport_conclusions: 'Approved',
    
    // 23. Global stakeholder consultation
    globalStakeholderConsultation_meansOfVerification: 'Review of consultation records',
    globalStakeholderConsultation_findings: 'Monitoring report uploaded for global stakeholder consultation. No comments received.',
    globalStakeholderConsultation_conclusions: 'Completed',
    
    // Step 8: Internal Quality Control (iq_ prefix - 1 field)
    iq_internalQuality: 'Internal quality control review conducted by senior verifier David Brown on 2024-04-18. All verification findings and calculations reviewed and approved. Quality assurance procedures followed per ISO 14065:2020 requirements. No issues identified.',
    
    // Step 9: Verification Opinion (1 field)
    verificationOpinion: 'Based on the verification activities conducted, Climate Verification International has verified and certified that the Solar Energy Expansion Project 2024 achieved emission reductions of 1,533 tCO2e during the monitoring period Q1 2024 (January 1 - March 31, 2024). The project is implemented as registered, monitoring is conducted per the approved plan, and emission reduction calculations are accurate and conservative. VERIFICATION OPINION: POSITIVE. CERTIFIED EMISSION REDUCTIONS: 1,533 tCO2e.',
    
    // Step 10: Certification Statement (cs_ prefix - 1 field)
    cs_certificationStatement: 'Climate Verification International hereby certifies that the Solar Energy Expansion Project 2024 achieved verified emission reductions of 1,533 tCO2e during Q1 2024. This certification is issued in accordance with ISO 14065:2020 and applicable carbon standard requirements. Certification Date: April 20, 2024. Certification Body: Climate Verification International (Accreditation No. ISO-14065-2023-001).',
    
    // Step 11: Appendix (ALL fields)
    appendix1Comments: 'All verification team members hold relevant qualifications and certifications for renewable energy project verification. Lead Verifier: ISO 14065 accreditation, 10+ years experience in renewable energy verification. Technical Expert: PhD in Renewable Energy, 15 publications in solar PV systems. Junior Verifier: Certified GHG Verifier with 5 years experience.',
    appendix1Documents: [], // Upload component expects an array
    design: 'Standard verification design following ISO 14065:2020 requirements.',
    documentsReviewed: [
      { author: 'Green Energy Solutions Ltd', title: 'Monitoring Report Q1 2024', referenceToTheDoc: 'MR-2024-Q1-001', provider: 'Project Developer' },
      { author: 'National Grid Authority', title: 'Grid Emission Factor Study 2024', referenceToTheDoc: 'GEF-2024-001', provider: 'Government Agency' },
      { author: 'SolarLog Pro', title: 'Meter Calibration Certificates', referenceToTheDoc: 'CAL-2024-001', provider: 'Equipment Manufacturer' },
      { author: 'Green Energy Solutions Ltd', title: 'Project Design Document v1.0', referenceToTheDoc: 'PDD-2024-001', provider: 'Project Developer' },
      { author: 'Climate Verification International', title: 'Validation Report v1.0', referenceToTheDoc: 'VR-2024-001', provider: 'Validation Body' },
    ],
    descriptionOfFAR: 'No Forward Action Requests (FARs) from validation remain outstanding. All FARs identified during the validation process were successfully closed by the project developer prior to this verification.',
    // FAR section fields (will be converted to moment objects in component)
    farId: 'FAR-2024-001',
    farIdDate: '2024-04-10',
    sectionNo: 'Section 5.2',
    projectParticipantResponse: 'All FARs have been addressed and closed. Updated documentation provided.',
    responseDate: '2024-04-15',
    documentationProvided: 'Updated monitoring plan, revised calculations, and additional supporting documents.',
    doeAssesment: 'All responses are satisfactory. No additional FARs required.',
    doeDate: '2024-04-20',
  },

  // PDD - Quantification of Emissions (numeric fields)
  quantificationEmissions: {
    baselineEmissionReductions: 3500,
    projectEmissionReductions: 500,
    leakageEmissions: 8,
    netGHGEmissionReductions: 3000,
    totalBaselineEmissionReductions: 12000,
    totalProjectEmissionReductions: 1800,
    totalLeakageEmissions: 8,
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
    leakage: 8,
    net: 3000,
  },

  // Cost Quotation Demo Data (EXACT field names)
  costQuotation: {
    // dateOfIssue will be set as moment object
    address: '456 Certification Plaza, Capital City, CountryX',
    quotationNo: 'CQ-2024-001',
    serviceValidation: 'Complete validation services including desk review, site visit, and validation report',
    costValidation: '15000',
    serviceVerification: 'Quarterly verification services for monitoring reports',
    costVerification: '12000',
    signature: 'Climate Verification International - Dr. Sarah Johnson, Lead Validator',
    additionalServices: [
      { service: 'Technical Training Workshop', cost: '3000' },
      { service: 'Stakeholder Consultation Support', cost: '2000' },
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

