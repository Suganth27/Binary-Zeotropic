
import React from "react";
import { Thermometer, Droplet, Zap, Gauge, Sun, Cloud, Waves, Wind } from "lucide-react";

const SensorCard = ({ title, value, unit, icon: Icon, min, max, status }) => {
  let statusColor = "bg-green-700";
  if (status === "Warning") statusColor = "bg-yellow-700";
  if (status === "Critical") statusColor = "bg-red-700";

  return (
    <div className="card p-4 rounded-lg shadow-md flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        {Icon && <Icon size={24} className="text-blue-400" />}
      </div>
      <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
        {value} {unit}
      </p>
      <div className="text-sm text-gray-400 mb-2">
        Min: {min} {unit} / Max: {max} {unit}
      </div>
      <span
        className={`text-sm font-medium px-2.5 py-0.5 rounded-full ${statusColor} text-gray-100`}
      >
        {status}
      </span>
    </div>
  );
};

function SensorMonitoring({ sensorData }) {
  if (!sensorData) return <div>Loading sensor data...</div>;

  const sensors = [
    { title: "Solar Collector Temperature", key: "solarCollectorTemp", icon: Sun },
    { title: "Evaporator Temperature", key: "evaporatorTemp", icon: Thermometer },
    { title: "Condenser Temperature", key: "condenserTemp", icon: Thermometer },
    { title: "Compressor Temperature", key: "compressorTemp", icon: Thermometer },
    { title: "Ambient Temperature", key: "ambientTemp", icon: Cloud },
    { title: "Refrigerant Pressure", key: "refrigerantPressure", icon: Gauge },
    { title: "Water Flow Rate", key: "waterFlowRate", icon: Droplet },
    { title: "Solar Irradiance", key: "solarIrradiance", icon: Sun },
    { title: "Voltage", key: "voltage", icon: Zap },
    { title: "Current", key: "current", icon: Zap },
    { title: "Power Consumption", key: "powerConsumption", icon: Zap },
    { title: "Humidity", key: "humidity", icon: Wind },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Live Sensor Monitoring</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sensors.map((sensor) => (
          <SensorCard
            key={sensor.key}
            title={sensor.title}
            value={sensorData[sensor.key].value}
            unit={sensorData[sensor.key].unit}
            icon={sensor.icon}
            min={sensorData[sensor.key].min}
            max={sensorData[sensor.key].max}
            status={sensorData[sensor.key].status}
          />
        ))}
      </div>
    </div>
  );
}

export default SensorMonitoring;
