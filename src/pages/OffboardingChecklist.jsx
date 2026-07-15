import DnsIcon from '@mui/icons-material/Dns';
import { offboardingChecklistTasks } from '../data/onboarding';
import FloatingChatButton from '../components/FloatingChatButton';

const tags = [
  { label: 'Accounting', className: 'bg-[#2c72b8]' },
  { label: 'HR', className: 'bg-[#2c72b8]' },
  { label: 'Client', className: 'bg-[#2c72b8]' },
  { label: 'IT', className: 'bg-green-600' },
];

export default function OffboardingChecklist() {
  return (
    <div className="w-full max-w-[1920px] mx-auto p-4 bg-[#f8f9fa] flex-1 text-xs font-sans flex flex-col justify-between relative select-none">
      <div className="w-full flex-grow">
        <div className="bg-white rounded border border-gray-200 p-3 shadow-2xs mb-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-2 text-xl font-bold text-gray-700 tracking-tight">
            <DnsIcon sx={{ fontSize: 18 }} className="text-gray-600" />
            <span>OffBoarding Checklist for PK Employee</span>
          </div>

          <div className="flex items-center space-x-1 font-medium text-[11px]">
            {tags.map((tag) => (
              <span key={tag.label} className={`${tag.className} text-white px-3 py-1 rounded-[2px] shadow-2xs cursor-pointer hover:opacity-90`}>
                {tag.label}
              </span>
            ))}
          </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="bg-white rounded border border-gray-200 shadow-xs overflow-hidden">
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="bg-gray-100 text-gray-700 font-bold border-b border-gray-200 uppercase text-[10px] tracking-tight">
                  <th className="p-2.5 w-1/4">Name</th>
                  <th className="p-2.5 w-24 text-center">Yes</th>
                  <th className="p-2.5 w-24 text-center">No</th>
                  <th className="p-2.5 w-32 text-center">Not Applicable</th>
                  <th className="p-2.5">Notes</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 divide-y divide-gray-100 align-middle">
                {offboardingChecklistTasks.map((task, index) => (
                  <tr key={task} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-2.5 font-medium text-gray-700 text-[11px]">{task}</td>
                    <td className="p-2.5 text-center">
                      <input type="radio" name={`task_status_${index}`} value="yes" className="w-3.5 h-3.5 border-gray-300 text-blue-600 focus:ring-blue-400 cursor-pointer" />
                    </td>
                    <td className="p-2.5 text-center">
                      <input type="radio" name={`task_status_${index}`} value="no" className="w-3.5 h-3.5 border-gray-300 text-blue-600 focus:ring-blue-400 cursor-pointer" />
                    </td>
                    <td className="p-2.5 text-center">
                      <input type="radio" name={`task_status_${index}`} value="na" className="w-3.5 h-3.5 border-gray-300 text-blue-600 focus:ring-blue-400 cursor-pointer" />
                    </td>
                    <td className="p-2.5">
                      <textarea
                        rows={1}
                        className="w-full border border-gray-200 rounded px-2 py-1 outline-none focus:border-blue-400 font-sans text-[11px] bg-white transition-all resize-y min-h-[28px]"
                        placeholder="Add comments or task updates..."
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50/50 border-t border-gray-200 p-2.5 flex items-center justify-end">
            <button type="submit" className="bg-[#2c72b8] hover:bg-[#235d97] text-white font-medium px-5 py-1.5 rounded text-[11px] transition-colors shadow-sm h-[28px]">
              Save Progress
            </button>
          </div>
        </form>
      </div>

      <FloatingChatButton />
    </div>
  );
}
