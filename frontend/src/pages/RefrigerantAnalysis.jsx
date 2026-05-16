
import React, { useState } from "react";
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#161b22] p-3 border border-[#30363d] rounded-md shadow-lg">
        <p className="text-gray-300">{label}</p>
        {payload.map((entry, index) => (
          <p key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value} ${entry.unit || ""}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

function RefrigerantAnalysis({ refrigerantData }) {
  const [timeRange, setTimeRange] = useState("all");
  const [refrigerantType, setRefrigerantType] = useState("all");

  if (!refrigerantData) return <div>Loading refrigerant data...</div>;

  const { r134a, binaryZeotropic } = refrigerantData;

  const data = [
    {
      name: "COP",
      R134a: r134a.cop,
      BinaryZeotropic: binaryZeotropic.cop,
      unit: "",
    },
    {
      name: "Energy Consumption",
      R134a: r134a.energyConsumption,
      BinaryZeotropic: binaryZeotropic.energyConsumption,
      unit: "kWh",
    },
    {
      name: "Heat Transfer Rate",
      R134a: r134a.heatTransferRate,
      BinaryZeotropic: binaryZeotropic.heatTransferRate,
      unit: "kW",
    },
    {
      name: "Compressor Efficiency",
      R134a: r134a.compressorEfficiency,
      BinaryZeotropic: binaryZeotropic.compressorEfficiency,
      unit: "%",
    },
    {
      name: "Exergy Efficiency",
      R134a: r134a.exergyEfficiency,
      BinaryZeotropic: binaryZeotropic.exergyEfficiency,
      unit: "%",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Refrigerant Analysis</h1>

      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex items-center space-x-2">
          <label htmlFor="timeRange" className="text-gray-300">Time Range:</label>
          <select
            id="timeRange"
            className="bg-[#161b22] border border-[#30363d] text-white rounded-md p-2"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option value="all">All</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <label htmlFor="refrigerantType" className="text-gray-300">Refrigerant Type:</label>
          <select
            id="refrigerantType"
            className="bg-[#161b22] border border-[#30363d] text-white rounded-md p-2"
            value={refrigerantType}
            onChange={(e) => setRefrigerantType(e.target.value)}
          >
            <option value="all">All</option>
            <option value="r134a">R134a</option>
            <option value="binaryZeotropic">Binary Zeotropic Mixture</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {data.map((item) => (
          <div className="card p-4 rounded-lg shadow-md" key={item.name}>
            <h2 className="text-xl font-semibold text-white mb-4">{item.name}</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={[item]}>
                <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
                <XAxis dataKey="name" stroke="#c9d1d9" />
                <YAxis stroke="#c9d1d9" unit={item.unit} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                {refrigerantType === "all" || refrigerantType === "r134a" ? (
                  <Bar dataKey="R134a" fill="#00c6ff" />
                ) : null}
                {refrigerantType === "all" || refrigerantType === "binaryZeotropic" ? (
                  <Bar dataKey="BinaryZeotropic" fill="#0072ff" />
                ) : null}
              </BarChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>

      <div className="card p-4 rounded-lg shadow-md mt-6">
        <h2 className="text-xl font-semibold text-white mb-4">Overall Performance Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
            <XAxis dataKey="name" stroke="#c9d1d9" />
            <YAxis stroke="#c9d1d9" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            {refrigerantType === "all" || refrigerantType === "r134a" ? (
              <Line type="monotone" dataKey="R134a" stroke="#00c6ff" activeDot={{ r: 8 }} />
            ) : null}
            {refrigerantType === "all" || refrigerantType === "binaryZeotropic" ? (
              <Line type="monotone" dataKey="BinaryZeotropic" stroke="#0072ff" activeDot={{ r: 8 }} />
            ) : null}
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default RefrigerantAnalysis;
