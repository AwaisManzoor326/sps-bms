import CloseIcon from '@mui/icons-material/Close';
import { offboardingReasons } from '../../data/employees';

export default function ReasonsModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[999999] flex items-center justify-center p-4">
      <div className="bg-white rounded shadow-2xl w-full max-w-2xl overflow-hidden font-sans text-xs">
        <div className="bg-[#318eb7] text-white px-4 py-3 flex items-center justify-between font-medium">
          <span className="text-sm tracking-wide">Offboarding Reasons</span>
          <button onClick={onClose} className="text-white/80 hover:text-white text-base focus:outline-none">
            <CloseIcon fontSize="inherit" />
          </button>
        </div>
        <div className="p-5 bg-gray-50/50">
          <div className="bg-white rounded border border-gray-200 overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700 font-bold border-b border-gray-200 uppercase text-[10px]">
                  <th className="p-2.5 w-12 text-center"></th>
                  <th className="p-2.5">Reason</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-600 text-[11px]">
                {offboardingReasons.map((reason) => (
                  <tr key={reason} className="hover:bg-gray-50/50 transition-colors align-middle">
                    <td className="p-2.5 text-center">
                      <input type="checkbox" className="w-3.5 h-3.5 border-gray-300 rounded text-blue-600 focus:ring-blue-400 cursor-pointer" />
                    </td>
                    <td className="p-2.5 font-medium text-gray-700">{reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-gray-50 border-t border-gray-200 px-4 py-3 flex items-center justify-end space-x-2">
          <button
            type="button"
            onClick={() => alert('Reasons log compiled and synchronized successfully.')}
            className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-1.5 rounded text-[11px] shadow-sm transition-colors"
          >
            Save
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-1.5 rounded text-[11px] font-medium shadow-sm transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
