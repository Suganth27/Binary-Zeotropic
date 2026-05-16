
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { Zap, Sun, Gauge, TrendingUp } from "lucide-react";

const COLORS = ["#00c6ff", "#0072ff", "#6a00ff", "#da22ff"];

const AnalyticsCard = ({ title, value, unit, icon: Icon, description }) => (
  <div className="card p-4 rounded-lg shadow-md flex flex-col justify-between h-full">
    <div className="flex items-center justify-between mb-4">
      <div className="p-3 bg-blue-500/10 rounded-lg">
        {Icon && <Icon size={24} className="text-blue-400" />}
      </div>
      <span className="text-sm text-gray-400 font-medium">Live Update</span>
    </div>
    <div>
      <h2 className="text-gray-400 text-sm font-medium mb-1">{title}</h2>
      <p className="text-3xl font-bold text-white mb-2">
        {value} {unit}
      </p>
      <p className="text-xs text-gray-500">{description}</p>
    </div>
  </div>
);

function EnergyAnalytics({ energyAnalyticsData }) {
  if (!energyAnalyticsData) return <div>Loading energy analytics...</div>;

  const { totalEnergyConsumed, solarEnergyUtilized, heatRecoveryEfficiency, dailyFreshwaterYield, hourlyEnergy, weeklyAnalytics, energyDistribution } = energyAnalyticsData;

  const hourlyData = hourlyEnergy.map((val, i) => ({ name: `${i}:00`, value: val }));
  const weeklyData = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => ({ name: day, value: weeklyAnalytics[i] }));

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Energy & Efficiency Analytics</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <AnalyticsCard
          title="Total Energy"
          value={totalEnergyConsumed}
          unit="kWh"
          icon={Zap}
          description="Cumulative system energy usage"
        />
        <AnalyticsCard
          title="Solar Utilization"
          value={solarEnergyUtilized}
          unit="kWh"
          icon={Sun}
          description="Energy contribution from PV"
        />
        <AnalyticsCard
          title="Heat Recovery"
          value={heatRecoveryEfficiency}
          unit="%"
          icon={Gauge}
          description="Efficiency of thermal recovery"
        />
        <AnalyticsCard
          title="Freshwater Yield"
          value={dailyFreshwaterYield}
          unit="L"
          icon={TrendingUp}
          description="Daily purified water output"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="card p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-white mb-4">Hourly Energy Consumption (W)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={hourlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
              <XAxis dataKey="name" stroke="#c9d1d9" tick={{ fontSize: 10 }} />
              <YAxis stroke="#c9d1d9" />
              <Tooltip
                contentStyle={{ backgroundColor: "#161b22", border: "1px solid #30363d", borderRadius: "4px" }}
              />
              <Line type="monotone" dataKey="value" stroke="#00c6ff" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-white mb-4">Weekly Freshwater Yield (L)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
              <XAxis dataKey="name" stroke="#c9d1d9" />
              <YAxis stroke="#c9d1d9" />
              <Tooltip
                contentStyle={{ backgroundColor: "#161b22", border: "1px solid #30363d", borderRadius: "4px" }}
              />
              <Bar dataKey="value" fill="#0072ff">
                {weeklyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 6 ? "#00c6ff" : "#0072ff"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-white mb-4">Energy Source Distribution</h2>
        <div className="flex flex-col md:flex-row items-center justify-around">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={energyDistribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {energyDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-4 w-full md:w-1/3">
            {energyDistribution.map((item, index) => (
              <div key={item.name} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                  <span className="text-gray-300">{item.name}</span>
                </div>
                <span className="font-bold text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnergyAnalytics;
