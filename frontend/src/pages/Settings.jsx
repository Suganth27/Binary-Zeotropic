
import React, { useState } from "react";
import { Settings as SettingsIcon, Bell, Cpu, RefreshCw, Save, Shield } from "lucide-react";

const SettingGroup = ({ title, children }) => (
  <div className="card p-6 rounded-lg shadow-md mb-6">
    <h2 className="text-xl font-semibold text-white mb-6 border-b border-[#30363d] pb-2">{title}</h2>
    <div className="space-y-6">
      {children}
    </div>
  </div>
);

const ToggleSetting = ({ label, description, checked, onChange }) => (
  <div className="flex items-center justify-between">
    <div>
      <div className="text-white font-medium">{label}</div>
      <div className="text-xs text-gray-500">{description}</div>
    </div>
    <button
      onClick={() => onChange(!checked)}
      className={`w-12 h-6 rounded-full transition-colors relative ${checked ? "bg-blue-600" : "bg-[#30363d]"
        }`}
    >
      <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${checked ? "left-7" : "left-1"
        }`}></div>
    </button>
  </div>
);

function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [cloudSync, setCloudSync] = useState(true);
  const [refreshInterval, setRefreshInterval] = useState("3");

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-6 flex items-center">
        <SettingsIcon size={32} className="mr-3 text-blue-400" />
        System Settings
      </h1>

      <SettingGroup title="General Configuration">
        <div className="flex flex-col space-y-2">
          <label className="text-white font-medium">Data Refresh Interval</label>
          <div className="flex items-center space-x-4">
            <select
              className="bg-[#0d1117] border border-[#30363d] text-white rounded-md p-2 flex-1 focus:outline-none focus:border-blue-500"
              value={refreshInterval}
              onChange={(e) => setRefreshInterval(e.target.value)}
            >
              <option value="1">1 Second (Real-time)</option>
              <option value="3">3 Seconds (Standard)</option>
              <option value="5">5 Seconds (Power Saving)</option>
              <option value="10">10 Seconds (Monitoring Only)</option>
            </select>
            <div className="flex items-center text-xs text-blue-400">
              <RefreshCw size={14} className="mr-1 animate-spin" />
              Live Sync
            </div>
          </div>
        </div>

        <ToggleSetting
          label="IoT Cloud Sync"
          description="Synchronize sensor data with the remote cloud database for historical analysis"
          checked={cloudSync}
          onChange={setCloudSync}
        />
      </SettingGroup>

      <SettingGroup title="Sensor Calibration">
        <div className="space-y-4">
          <p className="text-sm text-gray-400 bg-yellow-500/10 border border-yellow-500/30 p-3 rounded text-yellow-200">
            <strong>Warning:</strong> Adjusting calibration offsets directly affects reported data accuracy. Only authorized personnel should modify these values.
          </p>
          {["Solar Collector Offset", "Pressure Gauge Scaling", "pH Meter Baseline"].map((sensor) => (
            <div key={sensor} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
              <span className="text-gray-300">{sensor}</span>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  className="w-20 bg-[#0d1117] border border-[#30363d] rounded p-1 text-center text-white"
                  defaultValue="0.00"
                  step="0.01"
                />
                <span className="text-gray-500 text-xs">UNIT</span>
              </div>
            </div>
          ))}
        </div>
      </SettingGroup>

      <SettingGroup title="Notifications & Security">
        <ToggleSetting
          label="Push Notifications"
          description="Receive instant alerts for critical system failures or safety risks"
          checked={notifications}
          onChange={setNotifications}
        />
        <div className="flex items-center justify-between border-t border-[#30363d] pt-6">
          <div>
            <div className="text-white font-medium flex items-center">
              <Shield size={16} className="mr-2 text-green-500" />
              Developer Access Mode
            </div>
            <div className="text-xs text-gray-500">Enable advanced debugging and manual override controls</div>
          </div>
          <button className="bg-[#30363d] hover:bg-[#484f58] text-white text-xs px-4 py-2 rounded font-bold transition-colors">
            AUTHENTICATE
          </button>
        </div>
      </SettingGroup>

      <div className="flex justify-end space-x-4 mb-12">
        <button className="px-6 py-2 rounded font-medium text-gray-400 hover:text-white transition-colors">
          Reset to Defaults
        </button>
        <button className="px-8 py-2 rounded bg-blue-600 hover:bg-blue-500 text-white font-bold flex items-center shadow-lg shadow-blue-600/20 transition-all transform hover:scale-105">
          <Save size={18} className="mr-2" />
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default Settings;
