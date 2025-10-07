# 🎯 Demo Mode - Customer Presentation Guide

## Overview

Demo Mode automatically pre-fills all forms with realistic data, making customer presentations smooth and professional. No more typing during demos!

## Features

✅ **Auto-filled Forms** - All forms pre-populated with realistic project data  
✅ **One-Click Submit** - Just review and submit  
✅ **Professional Data** - Real-world examples and values  
✅ **Zero Configuration** - Works out of the box

## ✅ Enabled Forms (Auto-Filled)

### ✨ Programme Creation
- **Title:** Solar Energy Expansion Project 2024
- **Sector:** Energy / Solar  
- **Emission Reduction:** 12,000 tCO2e/year
- **Investment:** $2.5M USD
- **Timeline:** 2024-2030
- **Beneficiaries:** 10,000 households

### ✨ Project Proposal  
- Complete project background
- Technical description (5MW solar PV)
- Capacity building plans
- Environmental & social impact assessment
- Market analysis & financial planning
- Risk assessment & mitigation
- Comprehensive monitoring plan

### ✨ PDD (Project Design Document)
- Methodology: ACM0002
- Project type & scale
- Baseline scenario
- Additionality justification
- Monitoring methodology
- Safeguards documentation

### ✨ Validation Agreement
- Date & parties
- Validation scope
- Validator qualifications
- Deliverables & timeline
- Fees & terms

### ✨ Validation Report
- Complete validation findings
- Team members
- Executive summary
- Methodology review
- Emission calculations verification
- Monitoring plan approval
- Positive opinion

### ✨ Monitoring Report
- Quarterly operational data
- Energy generated: 3,200 MWh
- Emissions reduced: 3,000 tCO2e
- System availability: 98.5%
- Performance analysis
- Next steps planning

### ✨ Site Checklist
- Site conditions assessment
- Infrastructure evaluation
- Community consultations
- Environmental impact
- Technical requirements
- Approval recommendation

### ✨ Other Forms
- User Management
- Company Creation
- Investment Requests
- Verification Reports

## How to Use

### For Demonstrations

1. **Start the Application**
   ```bash
   docker compose up -d
   ```

2. **Login** 
   - Email: `tnd+dna@demo.com`
   - Password: `123`

3. **Create New Programme**
   - Navigate to "Programme Management"
   - Click "Add Programme"
   - **Forms are auto-filled!** ✨
   - Review the data
   - Click "Submit"

4. **Create Project Proposal**
   - Go to programme details
   - Click "Create Project Proposal"
   - **All fields pre-filled!** ✨
   - Click "Next" through steps
   - Submit

### Enable/Disable Demo Mode

**Enabled by default in `docker-compose.yml`:**

```yaml
environment:
  VITE_APP_DEMO_MODE: "true"  # Demo mode ON
```

**To disable:**

```yaml
environment:
  VITE_APP_DEMO_MODE: "false"  # Demo mode OFF
```

## Demo Data Examples

### Programme Details
```
Title: Solar Energy Expansion Project 2024
Sector: Energy / Solar
Scope: Installation of 5MW solar panels
Emissions Reduction: 12,000 tCO2e/year
Investment: $2,500,000 USD
Timeline: 2024-2030
Beneficiaries: 10,000 households
```

### Project Description
```
Objectives:
- Provide renewable energy to underserved communities
- Reduce fossil fuel dependency  
- Create 200 green jobs
- Achieve 60% energy cost reduction

Technical Approach:
- Monocrystalline silicon solar panels (400W)
- Micro-inverters with battery storage (10kWh/household)
- Monthly monitoring & quarterly audits
```

## Deployment on DigitalOcean

Demo mode is **already configured** for your DO droplet. Just:

1. SSH into droplet: `ssh root@164.92.193.13`
2. Clone repository
3. Run `docker compose up -d`
4. Access at `http://164.92.193.13:3030`

## Tips for Best Demos

1. **Login first** before customer sees screen
2. **Navigate to forms** during introduction
3. **Show auto-filled data** - customers love this!
4. **Modify a field** to show validation works
5. **Submit successfully** to show the flow
6. **Show the result** in programme listing

## Customizing Demo Data

Edit `web/src/Utils/demoData.ts` to change:
- Project names
- Values and metrics
- Descriptions
- Dates and timelines

## Troubleshooting

**Forms not auto-filling?**
- Check `VITE_APP_DEMO_MODE="true"` in docker-compose.yml
- Rebuild: `docker compose up --build -d`
- Clear browser cache

**Need different data?**
- Edit `web/src/Utils/demoData.ts`
- Restart containers

## Support

For issues or questions:
- Check console for errors
- Verify environment variable is set
- Ensure forms are in CREATE mode (not VIEW/EDIT)

---

**Happy Demoing!** 🚀✨

