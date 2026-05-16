
import React from "react";
import { Link } from "react-router-dom";
import { LayoutDashboard, Thermometer, FlaskConical, Droplet, Zap, AlertTriangle, FileText, Settings } from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "Sensor Monitoring", icon: Thermometer, path: "/sensor-monitoring" },
  { name: "Refrigerant Analysis", icon: FlaskConical, path: "/refrigerant-analysis" },
  { name: "Water Quality", icon: Droplet, path: "/water-quality" },
  { name: "Energy Analytics", icon: Zap, path: "/energy-analytics" },
  { name: "Alerts & Fault Detection", icon: AlertTriangle, path: "/alerts-fault-detection" },
  { name: "Reports", icon: FileText, path: "/reports" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

function Sidebar() {
  return (
    <div className="w-64 bg-[#161b22] p-6 border-r border-[#30363d] flex flex-col">
      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-8">
        Binary Zeotropic
      </div>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className="mb-4">
              <Link
                to={item.path}
                className="flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-[#30363d] p-3 rounded-lg transition-colors duration-200"
              >
                <item.icon size={20} />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
