
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import SensorMonitoring from './pages/SensorMonitoring';
import RefrigerantAnalysis from './pages/RefrigerantAnalysis';
import WaterQuality from './pages/WaterQuality';
import EnergyAnalytics from './pages/EnergyAnalytics';
import AlertsFaultDetection from './pages/AlertsFaultDetection';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import useRealtimeData from './hooks/useRealtimeData';

function App() {
  const { sensorData, refrigerantData, waterQualityData, energyAnalyticsData, alertsData } = useRealtimeData();

  return (
    <Router>
      <div className="flex h-screen bg-[#0d1117]">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
            <Routes>
              <Route path="/" element={<Dashboard sensorData={sensorData} energyAnalyticsData={energyAnalyticsData} />} />
              <Route path="/sensor-monitoring" element={<SensorMonitoring sensorData={sensorData} />} />
              <Route path="/refrigerant-analysis" element={<RefrigerantAnalysis refrigerantData={refrigerantData} />} />
              <Route path="/water-quality" element={<WaterQuality waterQualityData={waterQualityData} />} />
              <Route path="/energy-analytics" element={<EnergyAnalytics energyAnalyticsData={energyAnalyticsData} />} />
              <Route path="/alerts-fault-detection" element={<AlertsFaultDetection alertsData={alertsData} />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
