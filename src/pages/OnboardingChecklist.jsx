import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { onboardingChecklistSections } from '../data/onboarding';
import FloatingChatButton from '../components/FloatingChatButton';

export default function OnboardingChecklist() {
  let globalSr = 0;

  return (
    <div className="w-full max-w-[1920px] mx-auto p-4 bg-[#f8f9fa] flex-1 text-xs font-sans flex flex-col justify-between overflow-hidden relative select-none">
      <div className="w-full flex flex-col flex-grow overflow-hidden">
        <div className="bg-white rounded border border-gray-200 p-3 shadow-2xs mb-3 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center space-x-2 text-xl font-bold text-gray-700 tracking-tight">
            <AssignmentIcon sx={{ fontSize: 18 }} className="text-gray-600" />
            <span>OnBoarding Checklist for PK Employee</span>
          </div>

          <Link to="/" className="bg-[#2c72b8] hover:bg-[#235d97] text-white font-medium px-4 py-1 rounded text-[11px] transition-colors shadow-sm inline-flex items-center h-[26px]">
            Close
          </Link>
        </div>

        <div className="bg-white rounded border border-gray-200 shadow-xs flex-grow overflow-y-auto mb-3">
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[1000px] table-fixed">
              <thead className="sticky top-0 bg-gray-100 z-30 shadow-2xs">
                <tr className="text-gray-700 font-bold uppercase tracking-tight text-[10px] border-b border-gray-200">
                  <th className="p-2.5 w-16 text-center border-r">Sr No.</th>
                  <th className="p-2.5 w-2/5 border-r">Name</th>
                  <th className="p-2.5 w-24 text-center border-r">Applicable</th>
                  <th className="p-2.5 w-24 text-center border-r">Not Applicable</th>
                  <th className="p-2.5">Notes</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 divide-y divide-gray-100 font-medium">
                {Object.entries(onboardingChecklistSections).map(([sectionTitle, tasks]) => (
                  <Fragment key={sectionTitle}>
                    <tr className="bg-blue-50/40 font-bold text-gray-800 border-y border-gray-200">
                      <td colSpan={5} className="p-2 text-center tracking-wide uppercase text-[10px] bg-slate-100 text-slate-700">
                        {sectionTitle}
                      </td>
                    </tr>
                    {tasks.map((taskName) => {
                      globalSr += 1;
                      const sr = globalSr;
                      return (
                        <tr key={sr} className="hover:bg-gray-50/50 transition-colors align-middle">
                          <td className="p-2 text-center bg-gray-50/30 font-semibold border-r text-gray-400">{sr}</td>
                          <td className="p-2 border-r font-medium text-gray-700 break-words pr-4">{taskName}</td>
                          <td className="p-2 border-r text-center">
                            <input type="radio" name={`status_${sr}`} value="applicable" className="w-3.5 h-3.5 border-gray-300 text-blue-600 focus:ring-blue-400 cursor-pointer" />
                          </td>
                          <td className="p-2 border-r text-center">
                            <input
                              type="radio"
                              name={`status_${sr}`}
                              value="not_applicable"
                              defaultChecked={sr === 1}
                              className="w-3.5 h-3.5 border-gray-300 text-blue-600 focus:ring-blue-400 cursor-pointer"
                            />
                          </td>
                          <td className="p-1.5">
                            <textarea
                              rows={1}
                              placeholder="Add specific notes here..."
                              className="w-full border border-gray-200 rounded px-2 py-1 outline-none bg-white focus:border-blue-400 text-[11px] resize-none h-[28px] transition-all"
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded p-2.5 flex items-center justify-end flex-shrink-0">
          <button type="button" className="bg-[#2c72b8] hover:bg-[#235d97] text-white px-5 py-1.5 rounded font-medium tracking-wide shadow-sm transition-all h-[28px]">
            Save Checklist State
          </button>
        </div>
      </div>

      <FloatingChatButton className="bottom-20" />
    </div>
  );
}
