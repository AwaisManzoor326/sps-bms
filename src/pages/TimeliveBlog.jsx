import DnsIcon from '@mui/icons-material/Dns';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FloatingChatButton from '../components/FloatingChatButton';

function SortableTh({ children, className = '' }) {
  return (
    <th className={`border border-[#dee2e6] bg-[#e9ecef] text-[#495057] font-bold text-[11px] p-1.5 ${className}`}>
      {children}
      <UnfoldMoreIcon sx={{ fontSize: 9 }} className="ml-1 text-gray-400" />
    </th>
  );
}

function PanelHeader({ children }) {
  return <div className="bg-[#3e88b3] text-white font-medium text-[13px] px-3 py-2">{children}</div>;
}

export default function TimeliveBlog() {
  return (
    <div className="w-full max-w-[1920px] mx-auto p-5 bg-[#fbfbfb] flex-1 font-sans text-xs select-none pb-24 relative">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 bg-white p-3 rounded border border-gray-100">
        <div className="flex items-center space-x-2 text-base font-medium text-gray-800 tracking-tight">
          <DnsIcon sx={{ fontSize: 15 }} className="text-gray-700" />
          <span>Awais Manzoor TimeLive Blog</span>
        </div>

        <div className="flex flex-wrap items-center gap-3 md:ml-auto">
          <div className="flex items-center space-x-1.5">
            <label className="font-bold text-gray-700">Start Date:</label>
            <input type="date" defaultValue="2026-05-04" className="border border-gray-300 rounded px-2 py-1 bg-white outline-none focus:border-blue-400 h-[28px] font-mono text-xs text-gray-700" />
          </div>
          <div className="flex items-center space-x-1.5">
            <label className="font-bold text-gray-700">End Date:</label>
            <input type="date" defaultValue="2026-05-08" className="border border-gray-300 rounded px-2 py-1 bg-white outline-none focus:border-blue-400 h-[28px] font-mono text-xs text-gray-700" />
          </div>
          <button type="button" className="bg-[#5cb85c] hover:bg-[#4cae4c] text-white font-medium px-4 py-1 rounded shadow-2xs transition-colors h-[28px] text-[11.5px]">
            Show
          </button>
        </div>
      </div>

      <div className="space-y-4">

        <div className="bg-white rounded border border-gray-200 overflow-hidden shadow-2xs">
          <PanelHeader>TimeLive Blog</PanelHeader>
          <div className="p-4 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-gray-600 text-[11px]">
              <div className="flex items-center space-x-1">
                <span>Show</span>
                <select className="border border-gray-300 rounded px-1.5 py-0.5 bg-white outline-none h-[24px]">
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                </select>
                <span>entries</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>Search:</span>
                <input type="text" className="border border-gray-300 rounded px-2 py-0.5 outline-none focus:border-blue-400 h-[24px] w-44" />
              </div>
            </div>

            <div className="w-full overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="text-gray-700">
                    <SortableTh className="w-16 text-center">Sr No.</SortableTh>
                    <SortableTh className="w-24">Date</SortableTh>
                    <SortableTh>Client Name</SortableTh>
                    <SortableTh>Project Name</SortableTh>
                    <SortableTh>Task Name</SortableTh>
                    <th className="border border-[#dee2e6] bg-[#e9ecef] text-[#495057] font-bold text-[11px] p-1.5">Task Description</th>
                    <SortableTh className="w-20 text-center">Hours</SortableTh>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={7} className="border border-[#dee2e6] text-[#6c757d] p-4 text-center font-normal italic bg-gray-50/30">
                      No data available in table
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between text-gray-500 text-[11px] pt-1">
              <div>Showing 0 to 0 of 0 entries</div>
              <div className="inline-flex rounded border border-gray-300 divide-x divide-gray-300 shadow-2xs font-medium bg-white">
                <button className="px-3 py-1 text-gray-400 bg-gray-50/50 cursor-not-allowed text-[11px]">Previous</button>
                <button className="px-3 py-1 text-gray-400 bg-gray-50/50 cursor-not-allowed text-[11px]">Next</button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded border border-gray-200 overflow-hidden shadow-2xs">
          <PanelHeader>Customer Blog</PanelHeader>
          <div className="p-4 bg-white min-h-[40px]"></div>
        </div>

        <div className="bg-white rounded border border-gray-200 overflow-hidden shadow-2xs">
          <div className="bg-[#3e88b3] text-white font-medium text-[13px] px-3 py-2 flex items-center justify-between">
            <span>Customer Contact Blog</span>
          </div>
          <div className="p-3 bg-white flex items-center justify-between text-gray-600 font-medium">
            <span className="italic text-gray-500">No Record Found!</span>
            <div className="flex flex-col text-gray-400 space-y-0.5 select-none cursor-pointer pr-1">
              <ArrowDropUpIcon sx={{ fontSize: 12 }} />
              <ArrowDropDownIcon sx={{ fontSize: 12 }} className="-mt-1.5" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded border border-gray-200 overflow-hidden shadow-2xs">
          <PanelHeader>Partner Blog</PanelHeader>
          <div className="p-3 bg-white text-gray-500 italic font-medium">
            No Record Found!
          </div>
        </div>

      </div>

      <FloatingChatButton />
    </div>
  );
}
