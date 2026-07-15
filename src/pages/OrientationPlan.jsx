import DnsIcon from '@mui/icons-material/Dns';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FloatingChatButton from '../components/FloatingChatButton';

function RowActions() {
  return (
    <div className="flex items-center space-x-2 text-gray-400 text-[11px] pt-3 font-normal">
      <EditIcon sx={{ fontSize: 12 }} className="hover:text-blue-500 cursor-pointer" />
      <DeleteIcon sx={{ fontSize: 12 }} className="hover:text-red-500 cursor-pointer" />
    </div>
  );
}

function BoldItem({ children }) {
  return <div><span className="text-gray-900 font-bold underline cursor-pointer">{children}</span></div>;
}

export default function OrientationPlan() {
  return (
    <div className="w-full max-w-[1920px] mx-auto p-6 bg-white flex-1 font-sans text-xs select-none">
      <style>{`
        .orientation-table th { background-color: #c2c2c2 !important; color: #333333 !important; font-weight: bold; font-size: 12px; border: 1px solid #dcdcdc !important; }
        .orientation-table td { background-color: #e4effb !important; border: 1px solid #ffffff !important; font-size: 12px; color: #333333; vertical-align: top; }
        .orientation-table input[type="text"], .orientation-table input[type="date"], .orientation-table textarea {
          border: 1px solid #cccccc !important; border-radius: 4px !important; padding: 6px 10px !important; font-size: 12px !important; width: 100%; background-color: #ffffff !important; color: #333333 !important;
        }
        .orientation-table textarea { resize: vertical; min-height: 76px; }
      `}</style>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2 text-xl font-medium text-gray-800 tracking-tight">
          <DnsIcon sx={{ fontSize: 16 }} className="text-gray-700" />
          <span>Orientation Plan for PK Employee</span>
        </div>
        <button type="button" className="bg-[#2c72b8] hover:bg-[#235d97] text-white text-xs font-medium px-4 py-2 rounded transition-colors shadow-sm">
          Send Email
        </button>
      </div>

      <div className="w-full overflow-x-auto border border-gray-200 rounded shadow-xs">
        <table className="w-full orientation-table border-collapse min-w-[1200px]">
          <thead>
            <tr className="text-center">
              <th colSpan={6} className="p-2 text-center text-xs tracking-wide uppercase font-bold" style={{ backgroundColor: '#b5b5b5', border: '1px solid #a8a8a8' }}>
                Orientation Plan
              </th>
            </tr>
            <tr className="text-left bg-gray-200">
              <th className="p-2.5 w-14 text-center">Sr No.</th>
              <th className="p-2.5 w-1/3">Trainig Module <AddIcon sx={{ fontSize: 10 }} className="ml-0.5 cursor-pointer" /></th>
              <th className="p-2.5 w-1/6">Day</th>
              <th className="p-2.5 w-1/6">Date</th>
              <th className="p-2.5 w-1/6">Duration</th>
              <th className="p-2.5">Feedback</th>
            </tr>
          </thead>
          <tbody className="font-medium">

            {/* Row 1: HR Orientation */}
            <tr>
              <td className="p-3 text-center border-r font-bold text-gray-500 w-14">1</td>
              <td className="p-3 max-w-sm">
                <div className="font-bold text-gray-900 mb-1">HR Orientation</div>
                <div className="space-y-2 text-gray-700 font-normal leading-relaxed">
                  <BoldItem>Welcome to SPS</BoldItem>
                  <div className="text-[11.5px]">if onsite then we can book a meeting room at NSTP and arrange a onboarding lunch. if online then we can have a general welcome introduction SPS</div>
                  <BoldItem>Org Chart</BoldItem>
                  <div className="text-[11.5px]">AI, Cloud, Security, Events, SPL, Sales, OPS</div>
                  <BoldItem>SPS Website Overview</BoldItem>
                  <div className="text-[11.5px]">About SPS Services, Products, Verticals, Partners, SPL, Activities</div>
                  <BoldItem>SPS Policies and Benefit Summary</BoldItem>
                  <div className="text-[11.5px]">HR will explain SPS policies, benefit summary, and Employee Handbook to the new hire.</div>
                </div>
                <RowActions />
              </td>
              <td className="p-2.5"><input type="text" defaultValue="Monday" /></td>
              <td className="p-2.5"><input type="date" defaultValue="2024-03-16" /></td>
              <td className="p-2.5"><input type="text" defaultValue="3 hours" /></td>
              <td className="p-2.5"><textarea /></td>
            </tr>

            {/* Row 2: IT Orientation */}
            <tr>
              <td className="p-3 text-center border-r font-bold text-gray-500 w-14">2</td>
              <td className="p-3">
                <div className="font-bold text-gray-900 mb-1">IT Orientation</div>
                <div className="text-gray-700 font-normal leading-relaxed text-[11.5px] space-y-0.5">
                  <div>Your Device Access</div>
                  <div>Office 365 account activation</div>
                  <div>Teams account activation and policy</div>
                  <div>Helpdesk Services</div>
                </div>
                <RowActions />
              </td>
              <td className="p-2.5"><input type="text" defaultValue="" /></td>
              <td className="p-2.5"><input type="date" defaultValue="" /></td>
              <td className="p-2.5"><input type="text" defaultValue="" /></td>
              <td className="p-2.5"><textarea /></td>
            </tr>

            {/* Row 3: Accounting Orientation */}
            <tr>
              <td className="p-3 text-center border-r font-bold text-gray-500 w-14">3</td>
              <td className="p-3">
                <div className="font-bold text-gray-900 mb-1">Accounting Orientation</div>
                <div className="text-gray-700 font-normal leading-relaxed text-[11.5px] space-y-0.5">
                  <div>Compensation &amp; Benefits</div>
                  <div>Job Codes</div>
                  <div>Time live</div>
                  <div>Claim Expenses</div>
                </div>
                <RowActions />
              </td>
              <td className="p-2.5"><input type="text" defaultValue="" /></td>
              <td className="p-2.5"><input type="date" defaultValue="" /></td>
              <td className="p-2.5"><input type="text" defaultValue="" /></td>
              <td className="p-2.5"><textarea /></td>
            </tr>

            {/* Row 4: BMS Orientation */}
            <tr>
              <td className="p-3 text-center border-r font-bold text-gray-500 w-14">4</td>
              <td className="p-3">
                <div className="font-bold text-gray-900 mb-1">BMS Orientation</div>
                <div className="text-gray-700 font-normal leading-relaxed text-[11.5px] space-y-0.5">
                  <div>Sales (Products, Services, Partners, Customers, Contacts,RFP)</div>
                  <div>Markekting</div>
                  <div>Education</div>
                  <div>Spinnlabs</div>
                </div>
                <RowActions />
              </td>
              <td className="p-2.5"><input type="text" defaultValue="" /></td>
              <td className="p-2.5"><input type="date" defaultValue="" /></td>
              <td className="p-2.5"><input type="text" defaultValue="" /></td>
              <td className="p-2.5"><textarea /></td>
            </tr>

            {/* Row 5: Learning & Development */}
            <tr>
              <td className="p-3 text-center border-r font-bold text-gray-500 w-14">5</td>
              <td className="p-3">
                <div className="font-bold text-gray-900 mb-1">Learning &amp; Development</div>
                <div className="space-y-0.5 text-gray-700 font-normal leading-relaxed">
                  <BoldItem>KYC - Know Your Company</BoldItem>
                  <BoldItem>KYB Know Your Business</BoldItem>
                  <BoldItem>KYR - Know Your Role</BoldItem>
                  <BoldItem>Partner Management</BoldItem>
                </div>
                <RowActions />
              </td>
              <td className="p-2.5"><input type="text" defaultValue="1123" /></td>
              <td className="p-2.5"><input type="date" defaultValue="" /></td>
              <td className="p-2.5"><input type="text" defaultValue="" /></td>
              <td className="p-2.5"><textarea /></td>
            </tr>

          </tbody>
        </table>
      </div>

      <FloatingChatButton />
    </div>
  );
}
