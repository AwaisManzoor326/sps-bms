import { Link } from 'react-router-dom';
import DnsIcon from '@mui/icons-material/Dns';
import FloatingChatButton from '../components/FloatingChatButton';

export default function PlanningForm() {
  return (
    <div className="w-full max-w-[1920px] mx-auto p-6 bg-white font-sans text-xs select-none flex-1 relative">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2 text-xl font-bold text-gray-700 tracking-tight">
          <DnsIcon sx={{ fontSize: 18 }} className="text-gray-600" />
          <span>Planning Form of Abdul Hameed</span>
        </div>

        <Link
          to="/"
          className="bg-[#2c72b8] hover:bg-[#235d97] text-white text-xs font-medium px-4 py-1.5 rounded shadow-sm transition-colors h-[28px] inline-flex items-center"
        >
          Back
        </Link>
      </div>

      <div className="w-full overflow-x-auto border border-gray-100 rounded">
        <table className="w-full border-collapse min-w-[800px]">
          <thead>
            <tr className="uppercase tracking-wider text-[10px]">
              <th className="w-20 bg-slate-200 text-slate-500 font-bold text-center border border-slate-100 p-2">S.No</th>
              <th className="bg-slate-200 text-slate-500 font-bold text-center border border-slate-100 p-2">Year</th>
              <th className="bg-slate-200 text-slate-500 font-bold text-center border border-slate-100 p-2">Quarter</th>
              <th className="bg-slate-200 text-slate-500 font-bold text-center border border-slate-100 p-2">Plans</th>
              <th className="bg-slate-200 text-slate-500 font-bold text-center border border-slate-100 p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="align-middle">
              <td className="w-20 font-medium text-center border border-slate-100 p-2.5">1</td>
              <td className="font-medium text-center border border-slate-100 p-2.5">2024</td>
              <td className="font-medium text-center border border-slate-100 p-2.5">Annual</td>
              <td className="text-center border border-slate-100 p-2.5">
                <span className="bg-[#318eb7] text-white text-[9.5px] font-bold px-3 py-0.5 rounded shadow-xs cursor-pointer tracking-wide hover:bg-[#277394] transition-colors">
                  Review
                </span>
              </td>
              <td className="text-center border border-slate-100 p-2.5">
                <span className="bg-[#318eb7] text-white text-[9.5px] font-bold px-2 py-0.5 rounded shadow-xs tracking-wide">
                  Initiated
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <FloatingChatButton />
    </div>
  );
}
