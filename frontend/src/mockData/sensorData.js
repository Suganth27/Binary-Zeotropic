
const generateRandomData = (min, max, decimalPlaces = 2) => {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round((Math.random() * (max - min) + min) * factor) / factor;
  };
  
  export const getSensorData = () => ({
    solarCollectorTemp: { value: generateRandomData(30, 80), unit: "°C", min: 30, max: 80, status: "Normal" },
    evaporatorTemp: { value: generateRandomData(5, 20), unit: "°C", min: 5, max: 20, status: "Normal" },
    condenserTemp: { value: generateRandomData(40, 60), unit: "°C", min: 40, max: 60, status: "Normal" },
    compressorTemp: { value: generateRandomData(60, 90), unit: "°C", min: 60, max: 90, status: "Warning" },
    ambientTemp: { value: generateRandomData(20, 40), unit: "°C", min: 20, max: 40, status: "Normal" },
    refrigerantPressure: { value: generateRandomData(5, 15), unit: "bar", min: 5, max: 15, status: "Normal" },
    waterFlowRate: { value: generateRandomData(5, 20), unit: "L/min", min: 5, max: 20, status: "Normal" },
    solarIrradiance: { value: generateRandomData(200, 1000), unit: "W/m²", min: 200, max: 1000, status: "Normal" },
    voltage: { value: generateRandomData(220, 240), unit: "V", min: 220, max: 240, status: "Normal" },
    current: { value: generateRandomData(5, 15), unit: "A", min: 5, max: 15, status: "Normal" },
    powerConsumption: { value: generateRandomData(1000, 3000), unit: "W", min: 1000, max: 3000, status: "Normal" },
    humidity: { value: generateRandomData(40, 80), unit: "%", min: 40, max: 80, status: "Normal" },
  });
  
  export const getRefrigerantData = () => ({
    r134a: {
      cop: generateRandomData(3.0, 5.0),
      energyConsumption: generateRandomData(10, 20),
      heatTransferRate: generateRandomData(15, 30),
      compressorEfficiency: generateRandomData(70, 90),
      exergyEfficiency: generateRandomData(30, 50),
    },
    binaryZeotropic: {
      cop: generateRandomData(3.5, 5.5),
      energyConsumption: generateRandomData(8, 18),
      heatTransferRate: generateRandomData(18, 35),
      compressorEfficiency: generateRandomData(75, 95),
      exergyEfficiency: generateRandomData(35, 55),
    },
  });
  
  export const getWaterQualityData = () => ({
    tds: { value: generateRandomData(50, 500), unit: "ppm", min: 50, max: 500, status: "Safe" },
    pH: { value: generateRandomData(6.5, 8.5), unit: "", min: 6.5, max: 8.5, status: "Safe" },
    salinity: { value: generateRandomData(0.1, 0.5), unit: "ppt", min: 0.1, max: 0.5, status: "Safe" },
    waterOutputRate: { value: generateRandomData(100, 300), unit: "L/hr", min: 100, max: 300, status: "Normal" },
    freshwaterProduction: { value: generateRandomData(1000, 5000), unit: "L/day", min: 1000, max: 5000, status: "Normal" },
    waterPurity: { value: generateRandomData(95, 99.9), unit: "%", min: 95, max: 99.9, status: "Safe" },
  });
  
  export const getEnergyAnalyticsData = () => ({
    totalEnergyConsumed: generateRandomData(50, 200),
    solarEnergyUtilized: generateRandomData(20, 100),
    heatRecoveryEfficiency: generateRandomData(70, 90),
    dailyFreshwaterYield: generateRandomData(500, 2000),
    copTrend: Array.from({ length: 10 }, () => generateRandomData(3.0, 5.5)),
    hourlyEnergy: Array.from({ length: 24 }, () => generateRandomData(100, 500)),
    weeklyAnalytics: Array.from({ length: 7 }, () => generateRandomData(1000, 5000)),
    energyDistribution: [
      { name: "Solar", value: generateRandomData(30, 70) },
      { name: "Grid", value: generateRandomData(20, 50) },
      { name: "Heat Pump", value: generateRandomData(10, 30) },
    ],
  });
  
  export const getAlertsData = () => [
    { id: 1, message: "Compressor overheating", severity: "Critical", timestamp: new Date().toLocaleString(), recommendation: "Check coolant levels." },
    { id: 2, message: "Refrigerant leakage risk", severity: "Warning", timestamp: new Date().toLocaleString(), recommendation: "Inspect for leaks." },
    { id: 3, message: "Low solar irradiance", severity: "Normal", timestamp: new Date().toLocaleString(), recommendation: "Monitor weather conditions." },
  ];
