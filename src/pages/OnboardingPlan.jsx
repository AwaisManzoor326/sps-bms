import DnsIcon from '@mui/icons-material/Dns';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { onboardingPlanEmployeePool, onboardingPlanMatrixTasks } from '../data/onboarding';
import FloatingChatButton from '../components/FloatingChatButton';

const RowIcons = ({ extraClass = '' }) => (
  <div className={`flex items-center space-x-1.5 text-gray-400 text-[9px] font-normal ${extraClass}`}>
    <EditIcon sx={{ fontSize: 10 }} className="hover:text-blue-500 cursor-pointer" />
    <AddIcon sx={{ fontSize: 10 }} className="hover:text-green-600 cursor-pointer" />
    <DeleteIcon sx={{ fontSize: 10 }} className="hover:text-red-500 cursor-pointer" />
  </div>
);

export default function OnboardingPlan() {
  const rows = Object.entries(onboardingPlanMatrixTasks);

  return (
    <div className="w-full max-w-[1920px] mx-auto p-4 bg-[#f8f9fa] flex-1 text-xs font-sans flex flex-col justify-between overflow-hidden relative select-none">
      <div className="w-full flex flex-col flex-grow overflow-hidden">
        <div className="bg-white rounded border border-gray-200 p-3 shadow-2xs mb-3 flex items-center justify-between gap-3 flex-shrink-0">
          <div className="flex items-center space-x-2 text-xl font-bold text-gray-700 tracking-tight">
            <DnsIcon sx={{ fontSize: 18 }} className="text-gray-600" />
            <span>Onboarding Plan for PK Employee</span>
          </div>

          <button type="button" className="bg-[#2c72b8] hover:bg-[#235d97] text-white text-[11px] font-medium px-4 py-1.5 rounded shadow-sm transition-colors h-[28px]">
            Send Email
          </button>
        </div>

        <div className="bg-white rounded border border-gray-200 shadow-xs flex-grow overflow-y-auto mb-3">
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[1200px]">
              <thead className="sticky top-0 bg-white z-30 shadow-2xs">
                <tr className="text-center text-[11px]">
                  <th colSpan={5} className="p-1.5 bg-[#bfdbfe]/60 text-slate-800 font-bold border-b border-gray-200">HR Onboarding</th>
                </tr>
                <tr className="bg-gray-100 text-gray-700 font-bold border-b border-gray-200 text-[10px] tracking-tight uppercase">
                  <th className="p-2 w-14 text-center border-r">Sr No.</th>
                  <th className="p-2 w-1/6 border-r">Module</th>
                  <th className="p-2 w-1/4 border-r">Task</th>
                  <th className="p-2 w-2/5 border-r">Sub Task</th>
                  <th className="p-2 w-1/6 text-center">Responsible Party</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 divide-y divide-gray-200 text-[10.5px] font-medium">
                {rows.map(([srNo, row]) => (
                  <tr key={srNo} className="hover:bg-gray-50/40 transition-colors align-top">
                    <td className="p-2 text-center bg-gray-50/50 text-gray-500 border-r font-bold">{srNo}</td>

                    {row.modSpan > 0 && (
                      <td rowSpan={row.modSpan} className={`p-2.5 ${row.bg} text-gray-700 font-bold border-r border-gray-200 align-middle text-center max-w-[180px]`}>
                        <div className="space-y-1.5">
                          <div className="leading-tight">{row.mod}</div>
                          <RowIcons />
                        </div>
                      </td>
                    )}

                    <td className="p-2.5 font-semibold text-gray-700 border-r max-w-[220px] leading-tight">
                      <div>{row.task}</div>
                      <RowIcons extraClass="pt-1" />
                    </td>

                    <td className="p-2.5 border-r leading-relaxed font-normal text-gray-600 max-w-[400px]">
                      <div className="space-y-1 text-justify pr-1" dangerouslySetInnerHTML={{ __html: row.sub }} />
                      <div className="flex items-center space-x-1.5 text-gray-400 text-[9px] pt-1">
                        <EditIcon sx={{ fontSize: 10 }} className="hover:text-blue-500 cursor-pointer" />
                        <DeleteIcon sx={{ fontSize: 10 }} className="hover:text-red-500 cursor-pointer" />
                      </div>
                    </td>

                    <td className="p-2 bg-gray-50/20 text-center align-middle">
                      <select
                        defaultValue={row.assigned}
                        className="w-full border border-gray-300 rounded px-1.5 py-0.5 bg-white text-gray-700 outline-none focus:border-blue-400 h-[24px] text-[10.5px] font-medium"
                      >
                        {onboardingPlanEmployeePool.map((emp) => (
                          <option key={emp} value={emp}>{emp}</option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <FloatingChatButton className="bottom-14" />
    </div>
  );
}
