
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts";
import { Droplet, Thermometer, ShieldCheck } from "lucide-react";

const COLORS = ["#00c6ff", "#0072ff", "#6a00ff"];

const GaugeChart = ({ value, title, unit, min, max }) => {
  const percentage = ((value - min) / (max - min)) * 100;
  const data = [
    { name: "Value", value: percentage },
    { name: "Remaining", value: 100 - percentage },
  ];

  return (
    <div className="flex flex-col items-center">
      <ResponsiveContainer width="100%" height={150}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="100%"
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={0}
            dataKey="value"
          >
            <Cell fill="#00c6ff" />
            <Cell fill="#30363d" />
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="text-2xl font-bold text-white -mt-8">
        {value} {unit}
      </div>
      <div className="text-sm text-gray-400">{title}</div>
    </div>
  );
};

function WaterQuality({ waterQualityData }) {
  if (!waterQualityData) return <div>Loading water quality data...</div>;

  const { tds, pH, salinity, waterOutputRate, freshwaterProduction, waterPurity } = waterQualityData;

  const trendData = Array.from({ length: 10 }, (_, i) => ({
    name: `T${i}`,
    value: Math.random() * 10 + 90,
  }));

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Water Quality Analysis</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card p-4 rounded-lg shadow-md">
          <GaugeChart title="TDS" value={tds.value} unit={tds.unit} min={tds.min} max={tds.max} />
        </div>
        <div className="card p-4 rounded-lg shadow-md">
          <GaugeChart title="pH Level" value={pH.value} unit={pH.unit} min={pH.min} max={pH.max} />
        </div>
        <div className="card p-4 rounded-lg shadow-md">
          <GaugeChart title="Salinity" value={salinity.value} unit={salinity.unit} min={salinity.min} max={salinity.max} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="card p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
            <ShieldCheck size={24} className="text-green-500 mr-2" />
            Water Purity Trend (%)
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
              <XAxis dataKey="name" stroke="#c9d1d9" />
              <YAxis stroke="#c9d1d9" domain={[80, 100]} />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="#00c6ff" fill="#00c6ff" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="card p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-white mb-4">Production Summary</h2>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Water Output Rate:</span>
              <span className="text-xl font-bold text-blue-400">{waterOutputRate.value} {waterOutputRate.unit}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Total Freshwater Produced:</span>
              <span className="text-xl font-bold text-cyan-400">{freshwaterProduction.value} {freshwaterProduction.unit}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Water Safe Status:</span>
              <span className="px-3 py-1 rounded-full bg-green-700 text-green-100 font-bold">
                {tds.status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WaterQuality;
