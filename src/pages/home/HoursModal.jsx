import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const publicSectorRows = ['County Government', 'SLED-VA', 'SLED-MD', 'IAM-RFPs', 'Healthcare - Mid Atl', 'Government', 'Public Safety'];

export default function HoursModal({ open, onClose }) {
  const [salesOpen, setSalesOpen] = useState(false);
  const [publicSectorOpen, setPublicSectorOpen] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[999999] flex items-center justify-center p-4">
      <div className="bg-white rounded shadow-2xl w-full max-w-2xl overflow-hidden font-sans text-xs">
        <div className="bg-[#318eb7] text-white px-4 py-3 flex items-center justify-between font-medium">
          <span className="text-sm tracking-wide">Hours Distribution</span>
          <button onClick={onClose} className="text-white/80 hover:text-white text-base focus:outline-none">
            <CloseIcon fontSize="inherit" />
          </button>
        </div>
        <div className="p-4 bg-gray-50/50 max-h-[420px] overflow-y-auto">
          <div className="bg-white rounded border border-gray-200 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700 font-bold border-b border-gray-200">
                  <th className="p-2.5 w-2/3">Department / Group / Practice</th>
                  <th className="p-2.5 w-1/3">Hours</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr className="bg-gray-50/30">
                  <td className="p-2.5 font-semibold text-gray-800">
                    <button
                      type="button"
                      onClick={() => setSalesOpen((v) => !v)}
                      className="text-blue-500 font-bold mr-1 focus:outline-none inline-flex items-center"
                    >
                      <span className="mr-1">Sales</span>
                      {salesOpen ? <RemoveIcon sx={{ fontSize: 10 }} /> : <AddIcon sx={{ fontSize: 10 }} />}
                    </button>
                  </td>
                  <td className="p-2.5"></td>
                </tr>
                {salesOpen && (
                  <tr>
                    <td colSpan={2} className="p-0 bg-white">
                      <div className="pl-4 border-l-2 border-gray-200 my-1 ml-3 space-y-1">
                        <table className="w-full text-left border-none">
                          <tbody>
                            <tr className="border-b border-gray-50">
                              <td className="p-2 text-gray-600 font-medium">
                                <button
                                  type="button"
                                  onClick={() => setPublicSectorOpen((v) => !v)}
                                  className="text-cyan-600 mr-1 inline-flex items-center focus:outline-none"
                                >
                                  <span className="mr-1">Public Sector</span>
                                  {publicSectorOpen ? <RemoveIcon sx={{ fontSize: 9 }} /> : <AddIcon sx={{ fontSize: 9 }} />}
                                </button>
                              </td>
                              <td className="p-2 w-1/3"></td>
                            </tr>
                            {publicSectorOpen && (
                              <tr className="bg-gray-50/20">
                                <td colSpan={2} className="pl-4 pr-2 py-1 space-y-1.5">
                                  {publicSectorRows.map((label, i) => (
                                    <div
                                      key={label}
                                      className={`flex items-center justify-between py-1 pl-4 ${
                                        i < publicSectorRows.length - 1 ? 'border-b border-gray-100' : ''
                                      }`}
                                    >
                                      <span className="text-gray-500">{label}</span>
                                      <input
                                        type="text"
                                        placeholder="Enter hours..."
                                        className="border border-gray-300 rounded px-2 py-1 outline-none w-36 bg-white focus:border-blue-400 font-mono text-right text-[11px]"
                                      />
                                    </div>
                                  ))}
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                )}
                <tr className="bg-gray-50/30">
                  <td className="p-2.5 font-semibold text-gray-800">
                    <button type="button" className="text-blue-500 font-bold mr-1 focus:outline-none cursor-not-allowed">
                      <span className="mr-1">Technical</span>
                      <AddIcon sx={{ fontSize: 10 }} className="text-gray-300" />
                    </button>
                  </td>
                  <td className="p-2.5"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-gray-50 border-t border-gray-200 p-2.5 flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-1.5 rounded text-[11px] font-medium shadow-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
