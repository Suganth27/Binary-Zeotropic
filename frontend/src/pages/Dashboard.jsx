
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { Droplet, Thermometer, Zap, AlertTriangle, Cloud, Gauge } from "lucide-react";

const COLORS = ["#00c6ff", "#0072ff", "#6a00ff", "#da22ff"];

const Card = ({ title, value, unit, icon: Icon, status, trendData, chartType }) => (
  <div className="card p-4 rounded-lg shadow-md flex flex-col justify-between h-full">
    <div className="flex items-center justify-between mb-2">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      {Icon && <Icon size={24} className="text-blue-400" />}
    </div>
    <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
      {value} {unit}
    </p>
    {status && (
      <span
        className={`text-sm font-medium px-2.5 py-0.5 rounded-full ${status === "Normal"
          ? "bg-green-700 text-green-100"
          : status === "Warning"
            ? "bg-yellow-700 text-yellow-100"
            : "bg-red-700 text-red-100"
          }`}
      >
        {status}
      </span>
    )}
    {trendData && trendData.length > 0 && (
      <ResponsiveContainer width="100%" height={100}>
        {chartType === "bar" ? (
          <BarChart data={trendData}>
            <Bar dataKey="value" fill="#00c6ff" />
          </BarChart>
        ) : (
          <LineChart data={trendData}>
            <Line type="monotone" dataKey="value" stroke="#00c6ff" strokeWidth={2} dot={false} />
          </LineChart>
        )}
      </ResponsiveContainer>
    )}
  </div>
);

function Dashboard({ sensorData, energyAnalyticsData }) {
  if (!sensorData || !energyAnalyticsData) return <div>Loading dashboard data...</div>;

  const copTrendData = energyAnalyticsData.copTrend.map((cop, index) => ({ name: `Hr ${index}`, value: cop }));
  const hourlyEnergyData = energyAnalyticsData.hourlyEnergy.map((energy, index) => ({
    name: `H${index}`,
    value: energy,
  }));
  const energyDistributionData = energyAnalyticsData.energyDistribution.map((item) => ({
    name: item.name,
    value: item.value,
  }));

  const waterPurityPercentage = sensorData.waterPurity
    ? sensorData.waterPurity.value
    : 0;
  const waterPurityStatus = waterPurityPercentage > 98 ? "Safe" : waterPurityPercentage > 90 ? "Moderate" : "Unsafe";

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Dashboard Overview</h1>

      {/* Top row: Key Indicators */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card
          title="Solar Collector Temp"
          value={sensorData.solarCollectorTemp.value}
          unit={sensorData.solarCollectorTemp.unit}
          icon={Thermometer}
          status={sensorData.solarCollectorTemp.status}
        />
        <Card
          title="Water Flow Rate"
          value={sensorData.waterFlowRate.value}
          unit={sensorData.waterFlowRate.unit}
          icon={Droplet}
          status={sensorData.waterFlowRate.status}
        />
        <Card
          title="Power Consumption"
          value={sensorData.powerConsumption.value}
          unit={sensorData.powerConsumption.unit}
          icon={Zap}
          status={sensorData.powerConsumption.status}
        />
        <Card
          title="System Efficiency Score"
          value={energyAnalyticsData.heatRecoveryEfficiency} // Using heat recovery as a proxy
          unit="%"
          icon={Gauge}
          status={energyAnalyticsData.heatRecoveryEfficiency > 80 ? "Normal" : "Warning"}
        />
      </div>

      {/* Charts and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="card lg:col-span-2">
          <h2 className="text-xl font-semibold text-white mb-4">COP Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={copTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
              <XAxis dataKey="name" stroke="#c9d1d9" />
              <YAxis stroke="#c9d1d9" />
              <Tooltip
                contentStyle={{ backgroundColor: "#161b22", border: "1px solid #30363d", borderRadius: "4px" }}
                itemStyle={{ color: "#c9d1d9" }}
              />
              <Line type="monotone" dataKey="value" stroke="#00c6ff" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold text-white mb-4">Energy Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={energyDistributionData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {energyDistributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: "#161b22", border: "1px solid #30363d", borderRadius: "4px" }}
                itemStyle={{ color: "#c9d1d9" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom row: Alerts and System Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-semibold text-white mb-4">Recent Alerts</h2>
          <div className="space-y-4">
            {sensorData.alertsData && sensorData.alertsData.slice(0, 2).map((alert) => (
              <div
                key={alert.id}
                className={`p-3 rounded-lg ${alert.severity === "Critical"
                  ? "bg-red-700"
                  : alert.severity === "Warning"
                    ? "bg-yellow-700"
                    : "bg-green-700"
                  }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium">{alert.message}</span>
                  <span className="text-sm text-gray-200">{alert.timestamp}</span>
                </div>
                <p className="text-sm text-gray-200">Recommendation: {alert.recommendation}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold text-white mb-4">System Status</h2>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Cloud size={24} className="text-blue-400" />
              <span>IoT Connectivity: <span className="text-green-500">Online</span></span>
            </div>
            <div className="flex items-center space-x-2">
              <Droplet size={24} className="text-blue-400" />
              <span>Water Safe Status: <span className={waterPurityStatus === "Safe" ? "text-green-500" : "text-red-500"}>{waterPurityStatus}</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
