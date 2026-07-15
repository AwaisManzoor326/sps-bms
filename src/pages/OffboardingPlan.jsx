import DnsIcon from '@mui/icons-material/Dns';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { offboardingPlanEmployeePool, offboardingPlanTasks } from '../data/onboarding';
import FloatingChatButton from '../components/FloatingChatButton';

export default function OffboardingPlan() {
  const rows = Object.entries(offboardingPlanTasks);

  return (
    <div className="w-full max-w-[1920px] mx-auto p-4 bg-[#f8f9fa] flex-1 text-xs font-sans flex flex-col justify-between overflow-hidden relative select-none">
      <div className="w-full flex flex-col flex-grow overflow-hidden">
        <div className="bg-white rounded border border-gray-200 p-3 shadow-2xs mb-3 flex items-center justify-between gap-3 flex-shrink-0">
          <div className="flex items-center space-x-2 text-xl font-bold text-gray-700 tracking-tight">
            <DnsIcon sx={{ fontSize: 18 }} className="text-gray-600" />
            <span>Offboaridng Plan for PK Employee</span>
          </div>

          <button
            type="button"
            onClick={() => alert('Offboarding execution emails initiated successfully.')}
            className="bg-[#2c72b8] hover:bg-[#235d97] text-white text-[11px] font-medium px-4 py-1.5 rounded shadow-sm transition-colors h-[28px]"
          >
            Send Email
          </button>
        </div>

        <div className="bg-white rounded border border-gray-200 shadow-xs flex-grow overflow-y-auto mb-3">
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead className="sticky top-0 bg-white z-20">
                <tr className="text-center text-[11px]">
                  <th colSpan={4} className="p-1.5 bg-[#bfdbfe]/60 text-slate-800 font-bold border-b border-gray-200">HR Offboaridng</th>
                </tr>
                <tr className="bg-gray-100 text-gray-700 font-bold border-b border-gray-200 text-[10px] tracking-tight uppercase">
                  <th className="p-2 w-16 text-center">Sr No.</th>
                  <th className="p-2 w-1/5">Module</th>
                  <th className="p-2 w-3/5">Task</th>
                  <th className="p-2 w-1/5">Responsible Party</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 divide-y divide-gray-200 text-[11px] font-medium">
                {rows.map(([srNo, task]) => (
                  <tr key={srNo} className="hover:bg-gray-50/40 transition-colors align-top">
                    <td className="p-2.5 text-center bg-gray-50/50 text-gray-500 border-r border-gray-100">{srNo}</td>

                    {srNo === '1' && (
                      <td rowSpan={8} className="p-3 bg-[#e8f5e9]/60 text-gray-700 font-semibold border-r border-gray-200 align-middle max-w-[200px] text-center relative">
                        <div className="space-y-2">
                          <div>Offboarding - Voluntary Termination</div>
                          <div className="flex items-center justify-center space-x-2 text-gray-400 text-[10px] mt-1">
                            <EditIcon sx={{ fontSize: 11 }} className="hover:text-blue-500 cursor-pointer" titleAccess="Edit Module" />
                            <AddIcon sx={{ fontSize: 11 }} className="hover:text-green-600 cursor-pointer" titleAccess="Add Task" />
                            <DeleteIcon sx={{ fontSize: 11 }} className="hover:text-red-500 cursor-pointer" titleAccess="Delete Module" />
                          </div>
                        </div>
                      </td>
                    )}

                    <td className="p-3 bg-[#e8f5e9]/20 space-y-1 border-r border-gray-100">
                      {task.isBold && task.heading && (
                        <div className="font-bold text-gray-800 text-[11.5px]">{task.heading}</div>
                      )}

                      <div className="space-y-0.5 text-gray-600 font-normal leading-relaxed">
                        {task.lines.map((line) => (
                          <div key={line}>{line}</div>
                        ))}
                      </div>

                      {task.hasActions && (
                        <div className="flex items-center space-x-1.5 text-gray-400 text-[9.5px] pt-1 select-none">
                          <EditIcon sx={{ fontSize: 10 }} className="hover:text-blue-500 cursor-pointer" titleAccess="Edit Task" />
                          <DeleteIcon sx={{ fontSize: 10 }} className="hover:text-red-500 cursor-pointer" titleAccess="Delete Task" />
                        </div>
                      )}
                    </td>

                    <td className="p-2.5 bg-gray-50/20">
                      <select
                        defaultValue={task.defaultAssigned}
                        className="w-full border border-gray-300 rounded px-2 py-1 bg-white text-gray-700 font-medium outline-none focus:border-blue-400 h-[26px] text-[11px]"
                      >
                        <option value="">Select Employee</option>
                        {offboardingPlanEmployeePool.map((emp) => (
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
