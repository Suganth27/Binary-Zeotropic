# IoT Smart Desalination & Heat Pump Monitoring Dashboard

## Overview

This repository contains a modern, responsive web dashboard titled:
**“Experimental Investigation of R134a and Binary Zeotropic Mixture in Compression Heat Pump Assisted Solar Thermal Desalination System with IoT based Monitoring for Effluent Purification in Remote Locations”**

The dashboard serves as a high fidelity prototype for real time monitoring, visualization and analysis of experimental data from a smart IoT enabled solar thermal desalination and heat pump system.

---

## 🚀 Key Features

### 1. Real Time Sensor Monitoring (Simulation is done for now)
- **Live Data Visualization:** Visualizes critical parameters including temperatures (Solar Collector, Evaporator, Condenser, Compressor), pressures, flow rates and ambient conditions.
- **Dynamic Simulation:** For this prototype, the dashboard uses **high fidelity mock data** that refreshes every 3 seconds to demonstrate real time IoT behavior.
- **Status Indicators:** Color coded status (Normal, Warning, Critical) based on experimental thresholds.

### 2. Refrigerant Performance Analysis
- **Binary Mixture Comparison:** Side by side performance analytics for **R134a** vs **Binary Zeotropic Mixtures**.
- **Engineering Metrics:** Comparative charts for COP (Coefficient of Performance), Energy Consumption, Heat Transfer Rates and Exergy Efficiency.
- **Advanced Filtering:** Ability to filter data by experimental runs and time ranges.

### 3. Water Quality & Purification
- **Purity Tracking:** Monitors TDS (Total Dissolved Solids), pH and Salinity.
- **Yield Analytics:** Tracks freshwater production rates and total system output.
- **Safety Status:** Automated "Water Safe" classification based on purification parameters.

### 4. Energy & System Analytics
- **Efficiency Scoring:** Calculates overall system efficiency and heat recovery performance.
- **Energy Distribution:** Visualizes energy sourcing (Solar vs Grid vs Heat Pump).
- **Trend Forecasting:** Hourly and weekly analytics for longitudinal research study.

### 5. Alerts & Fault Detection
- **Smart Alert Panel:** Real time detection of anomalies such as compressor overheating or pressure drops.
- **System Recommendations:** Provides automated troubleshooting advice based on fault patterns.

---

## 🛠 Tech Stack

- **Frontend:** [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Glassmorphism & Dark UI)
- **Visualization:** [Recharts](https://recharts.org/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Backend:** [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/)
- **Data:** Simulated IoT Mock API (Logic based simulation in Frontend)

---

## 📁 Project Structure

```text
Binary-Zeotropic/
├── frontend/             # React Application
│   ├── src/
│   │   ├── components/   # Reusable UI components (Navbar, Sidebar)
│   │   ├── pages/        # Main dashboard views
│   │   ├── hooks/        # Custom React hooks (Real time data logic)
│   │   ├── mockData/     # Simulation logic for IoT sensors
│   │   └── index.css     # Global styles & Tailwind config
├── backend/              # Node.js API Server
│   └── server.js         # Express configuration
```

---

## 🏁 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.x or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Suganth27/Binary-Zeotropic.git
   cd Binary-Zeotropic
   ```

2. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   ```

3. **Setup Backend**
   ```bash
   cd ../backend
   npm install
   ```

### Running the Project

To see the dashboard in action, you need to run the development server:

1. **Start Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

2. **Start Backend (Optional for Prototype):**
   ```bash
   cd backend
   npm start
   ```

---

## 🔬 Research Context & Prototype Status

**Note:** This repository currently functions as a **high fidelity UI/UX prototype**. 

- **Data Source:** All sensor readings, energy metrics and refrigerant performance data are currently generated via simulation logic within the frontend. This allows for immediate testing and demonstration of the UI's capabilities.
- **Future Integration:** The architecture is designed to be easily swapped with real IoT sensor data. The `backend` Express server is included as a skeleton to facilitate future integration with real time hardware signals or a database.

The dashboard provides a visual bridge between complex thermodynamic data and actionable system insights, specifically focusing on the performance improvements gained by using zeotropic mixtures in solar assisted desalination cycles.

---

## 📜 License

This project is developed for academic and research purposes.
