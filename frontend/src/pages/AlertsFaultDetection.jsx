
import React from "react";
import { AlertTriangle, Info, AlertCircle, CheckCircle } from "lucide-react";

const AlertCard = ({ alert }) => {
  const getSeverityStyles = (severity) => {
    switch (severity) {
      case "Critical":
        return {
          bg: "bg-red-500/10",
          border: "border-red-500/50",
          text: "text-red-400",
          icon: <AlertCircle className="text-red-500" size={24} />,
        };
      case "Warning":
        return {
          bg: "bg-yellow-500/10",
          border: "border-yellow-500/50",
          text: "text-yellow-400",
          icon: <AlertTriangle className="text-yellow-500" size={24} />,
        };
      default:
        return {
          bg: "bg-blue-500/10",
          border: "border-blue-500/50",
          text: "text-blue-400",
          icon: <Info className="text-blue-500" size={24} />,
        };
    }
  };

  const styles = getSeverityStyles(alert.severity);

  return (
    <div className={`p-4 rounded-lg border ${styles.bg} ${styles.border} flex items-start space-x-4 mb-4`}>
      <div className="mt-1">{styles.icon}</div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <h3 className={`font-bold ${styles.text}`}>{alert.message}</h3>
          <span className="text-xs text-gray-500">{alert.timestamp}</span>
        </div>
        <p className="text-gray-300 text-sm mb-2">{alert.recommendation}</p>
        <div className="flex items-center space-x-2">
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${styles.text} border ${styles.border}`}>
            {alert.severity}
          </span>
          <span className="text-[10px] text-gray-500 italic">ID: {alert.id}</span>
        </div>
      </div>
    </div>
  );
};

function AlertsFaultDetection({ alertsData }) {
  if (!alertsData) return <div>Loading alerts...</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Alerts & Fault Detection</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
            Active System Alerts
            <span className="ml-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {alertsData.length}
            </span>
          </h2>
          <div className="space-y-4">
            {alertsData.map((alert) => (
              <AlertCard key={alert.id} alert={alert} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="card p-4 rounded-lg shadow-md border border-green-500/30">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CheckCircle size={20} className="text-green-500 mr-2" />
              Healthy Components
            </h2>
            <div className="space-y-3">
              {["Solar Array", "Water Pumps", "IoT Gateway", "Condenser Unit"].map((item) => (
                <div key={item} className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">{item}</span>
                  <span className="text-green-500">Operational</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-4 rounded-lg shadow-md bg-blue-500/5">
            <h2 className="text-lg font-semibold text-white mb-2">Smart Recommendation</h2>
            <p className="text-sm text-gray-400 italic">
              "Based on current solar irradiance trends, the system suggests increasing the water flow rate by 5% in the next hour to maximize purification efficiency."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlertsFaultDetection;
