import { Link } from 'react-router-dom';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { onboardingSteps } from '../data/onboarding';
import FloatingChatButton from '../components/FloatingChatButton';

export default function OnboardingSteps() {
  return (
    <div className="w-full max-w-[1920px] mx-auto p-4 bg-[#f8f9fa] flex-1 text-xs font-sans flex flex-col justify-between overflow-hidden relative select-none">
      <div className="w-full flex flex-col flex-grow overflow-hidden">
        <div className="bg-white rounded border border-gray-200 p-3 shadow-2xs mb-3 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center space-x-2 text-xl font-bold text-gray-700 tracking-tight">
            <PlaylistAddCheckIcon sx={{ fontSize: 18 }} className="text-gray-600" />
            <span>OnBoarding Steps for Employee</span>
          </div>

          <Link to="/" className="bg-[#2c72b8] hover:bg-[#235d97] text-white font-medium px-4 py-1 rounded text-[11px] transition-colors shadow-sm inline-flex items-center h-[26px]">
            Close
          </Link>
        </div>

        <div className="bg-white rounded border border-gray-200 shadow-xs flex-grow overflow-y-auto mb-3">
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[1000px] table-fixed">
              <thead className="sticky top-0 bg-gray-100 z-30 shadow-2xs border-b border-gray-200">
                <tr className="text-gray-700 font-bold uppercase tracking-tight text-[10px]">
                  <th className="p-2.5 w-16 text-center border-r">Sr No.</th>
                  <th className="p-2.5 w-1/4 border-r">Name</th>
                  <th className="p-2.5 w-24 text-center border-r">Applied</th>
                  <th className="p-2.5 w-24 text-center border-r">Not Applied</th>
                  <th className="p-2.5">Notes</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 divide-y divide-gray-100 font-medium">
                {Object.entries(onboardingSteps).map(([srNo, stepName]) => (
                  <tr key={srNo} className="hover:bg-gray-50/50 transition-colors align-middle">
                    <td className="p-3 text-center bg-gray-50/30 font-semibold border-r text-gray-400 w-16">{srNo}</td>
                    <td className="p-3 border-r font-medium text-gray-700 break-words pr-4 w-1/4">{stepName}</td>
                    <td className="p-3 border-r text-center w-24">
                      <input type="radio" name={`step_status_${srNo}`} value="applied" className="w-3.5 h-3.5 border-gray-300 text-blue-600 focus:ring-blue-400 cursor-pointer" />
                    </td>
                    <td className="p-3 border-r text-center w-24">
                      <input type="radio" name={`step_status_${srNo}`} value="not_applied" className="w-3.5 h-3.5 border-gray-300 text-blue-600 focus:ring-blue-400 cursor-pointer" />
                    </td>
                    <td className="p-2">
                      <textarea
                        rows={1}
                        placeholder="Add custom notes regarding this deployment phase..."
                        className="w-full border border-gray-200 rounded px-2 py-1 outline-none bg-white focus:border-blue-400 text-[11px] h-[34px] transition-all font-sans resize-y"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded p-2.5 flex items-center justify-end flex-shrink-0">
          <button
            type="button"
            onClick={() => alert('Onboarding tracking log saved successfully.')}
            className="bg-[#2c72b8] hover:bg-[#235d97] text-white px-5 py-1.5 rounded font-medium tracking-wide shadow-sm transition-all h-[28px]"
          >
            Save Progress
          </button>
        </div>
      </div>

      <FloatingChatButton className="bottom-20" />
    </div>
  );
}
