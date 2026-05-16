
import React, { useState } from "react";
import { Download, FileText, Filter, Search, Table as TableIcon } from "lucide-react";

const mockReports = [
  { id: "RPT-001", name: "Daily Efficiency Summary", type: "PDF", date: "2026-05-15", size: "1.2 MB", status: "Ready" },
  { id: "RPT-002", name: "Water Quality Log", type: "CSV", date: "2026-05-15", size: "450 KB", status: "Ready" },
  { id: "RPT-003", name: "Refrigerant Performance Data", type: "XLSX", date: "2026-05-14", size: "2.8 MB", status: "Archived" },
  { id: "RPT-004", name: "Sensor Calibration Report", type: "PDF", date: "2026-05-13", size: "890 KB", status: "Archived" },
  { id: "RPT-005", name: "Weekly Energy Analytics", type: "PDF", date: "2026-05-10", size: "4.5 MB", status: "Archived" },
];

function Reports() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredReports = mockReports.filter(report =>
    report.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Generated Reports</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <div className="card p-6 rounded-lg shadow-md flex flex-col items-center justify-center border-2 border-dashed border-[#30363d] hover:border-blue-500/50 transition-colors cursor-pointer group">
          <div className="p-4 bg-blue-500/10 rounded-full mb-3 group-hover:bg-blue-500/20">
            <FileText className="text-blue-400" size={32} />
          </div>
          <span className="text-white font-medium text-center">Generate New Custom Report</span>
          <span className="text-xs text-gray-500 mt-2 text-center">Configure parameters and date range</span>
        </div>

        <div className="lg:col-span-3 card p-4 rounded-lg shadow-md flex items-center justify-between">
          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Search reports by name..."
              className="w-full bg-[#0d1117] border border-[#30363d] rounded-md py-2 pl-10 pr-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center space-x-2 bg-[#30363d] hover:bg-[#484f58] text-white px-4 py-2 rounded-md transition-colors ml-4">
            <Filter size={18} />
            <span>Filter</span>
          </button>
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 border-b border-[#30363d]">
                <th className="px-6 py-4 text-sm font-semibold text-gray-300">Report ID</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-300">Report Name</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-300">Type</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-300">Date</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-300">Size</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-300">Status</th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-300 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#30363d]">
              {filteredReports.map((report) => (
                <tr key={report.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-6 py-4 text-sm text-gray-400 font-mono">{report.id}</td>
                  <td className="px-6 py-4 text-sm text-white font-medium">{report.name}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${report.type === "PDF" ? "bg-red-500/20 text-red-400" : "bg-green-500/20 text-green-400"
                      }`}>
                      {report.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400">{report.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-400">{report.size}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`flex items-center space-x-1 ${report.status === "Ready" ? "text-green-500" : "text-gray-500"
                      }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${report.status === "Ready" ? "bg-green-500 animate-pulse" : "bg-gray-500"
                        }`}></div>
                      <span>{report.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-right">
                    <button className="p-2 text-blue-400 hover:bg-blue-500/10 rounded-full transition-colors opacity-0 group-hover:opacity-100">
                      <Download size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredReports.length === 0 && (
          <div className="p-12 text-center text-gray-500">
            <TableIcon size={48} className="mx-auto mb-3 opacity-20" />
            <p>No reports found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Reports;
