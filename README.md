# IoT Smart Desalination & Heat Pump Monitoring Dashboard

## Overview

This repository contains a modern, responsive web dashboard titled:
**“Experimental Investigation of R134a and Binary Zeotropic Mixture in Compression Heat Pump Assisted Solar Thermal Desalination System with IoT based Monitoring for Effluent Purification in Remote Locations”**

The dashboard serves as a high fidelity prototype for real time monitoring, visualization and analysis of experimental data from a smart IoT enabled solar thermal desalination and heat pump system.

---

## 🚀 Key Features

### 1. Real Time Sensor Monitoring
- **Live IoT Data:** Visualizes critical parameters including temperatures (Solar Collector, Evaporator, Condenser, Compressor), pressures, flow rates, and ambient conditions.
- **Dynamic Updates:** Simulated sensor values refresh every 3 seconds to demonstrate real time behavior.
- **Status Indicators:** Color coded status (Normal, Warning, Critical) based on experimental thresholds.

### 2. Refrigerant Performance Analysis
- **Binary Mixture Comparison:** Side by side performance analytics for **R134a** vs. **Binary Zeotropic Mixtures**.
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
- **Data:** Simulated IoT Mock API (JSON-based)

---

## 📁 Project Structure

```text
Binary-Zeotropic/
├── frontend/             # React Application
│   ├── src/
│   │   ├── components/   # Reusable UI components (Navbar, Sidebar)
│   │   ├── pages/        # Main dashboard views
│   │   ├── hooks/        # Custom React hooks (Real-time data logic)
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

## 🔬 Research Context

This dashboard is designed to support laboratory scale experimental investigations. It provides a visual bridge between complex thermodynamic data and actionable system insights, specifically focusing on the performance improvements gained by using zeotropic mixtures in solar assisted desalination cycles.

---

## 📜 License

This project is developed for academic and research purposes.
