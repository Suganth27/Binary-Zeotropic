
import { useState, useEffect } from "react";
import { getSensorData, getRefrigerantData, getWaterQualityData, getEnergyAnalyticsData, getAlertsData } from "../mockData/sensorData";

const useRealtimeData = () => {
  const [sensorData, setSensorData] = useState(getSensorData());
  const [refrigerantData, setRefrigerantData] = useState(getRefrigerantData());
  const [waterQualityData, setWaterQualityData] = useState(getWaterQualityData());
  const [energyAnalyticsData, setEnergyAnalyticsData] = useState(getEnergyAnalyticsData());
  const [alertsData, setAlertsData] = useState(getAlertsData());

  useEffect(() => {
    const interval = setInterval(() => {
      setSensorData(getSensorData());
      setRefrigerantData(getRefrigerantData());
      setWaterQualityData(getWaterQualityData());
      setEnergyAnalyticsData(getEnergyAnalyticsData());
      setAlertsData(getAlertsData());
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return { sensorData, refrigerantData, waterQualityData, energyAnalyticsData, alertsData };
};

export default useRealtimeData;
