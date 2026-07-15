import { Link } from 'react-router-dom';
import ListAltIcon from '@mui/icons-material/ListAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import PersonIcon from '@mui/icons-material/Person';
import ScienceIcon from '@mui/icons-material/Science';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ReorderIcon from '@mui/icons-material/Reorder';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import InfoIcon from '@mui/icons-material/Info';
import TableRowsIcon from '@mui/icons-material/TableRows';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const iconCls = 'mr-2.5 text-gray-500 w-3.5 text-center';

export default function ActionDropdown({ employee, isOpen, onToggle, onOpenHoursModal, onOpenReasonsModal }) {
  return (
    <td className="p-1.5 text-center sticky right-0 bg-white shadow-[-4px_0_8px_-3px_rgba(0,0,0,0.07)] relative">
      <button
        type="button"
        onClick={() => onToggle(employee.id)}
        className="bg-[#2c72b8] hover:bg-[#235d97] text-white rounded px-2 py-0.5 text-[8.5px] font-bold inline-flex items-center space-x-1 shadow-sm transition-all focus:outline-none"
      >
        <ListAltIcon sx={{ fontSize: 8 }} />
        <span>Action</span>
        <KeyboardArrowDownIcon sx={{ fontSize: 8 }} />
      </button>

      {isOpen && (
        <div className="absolute right-2 top-[26px] bg-white rounded border border-gray-300 shadow-2xl z-[9999] text-left py-1 text-gray-700 font-medium w-52 text-[11px] leading-snug">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onOpenHoursModal(employee.name);
            }}
            className="px-3 py-1.5 hover:bg-gray-100 transition-colors flex items-center"
          >
            <ContentCopyIcon sx={{ fontSize: 13 }} className={iconCls} /> Hours Distribution
          </a>
          <Link to="/hr-talks" className="px-3 py-1.5 hover:bg-gray-100 transition-colors flex items-center">
            <RssFeedIcon sx={{ fontSize: 13 }} className={iconCls} /> HR Talk
          </Link>
          <Link to="/blog" className="px-3 py-1.5 hover:bg-gray-100 transition-colors flex items-center">
            <RssFeedIcon sx={{ fontSize: 13 }} className={iconCls} /> Blog
          </Link>
          <Link to="/dashboard" className="px-3 py-1.5 hover:bg-gray-100 transition-colors flex items-center">
            <PersonIcon sx={{ fontSize: 13 }} className={iconCls} /> Dashboard
          </Link>
          <Link to="/profile" className="px-3 py-1.5 hover:bg-gray-100 transition-colors flex items-center">
            <PersonIcon sx={{ fontSize: 13 }} className={iconCls} /> Profile
          </Link>
          <a href="#" className="px-3 py-1.5 hover:bg-gray-100 transition-colors flex items-center">
            <ScienceIcon sx={{ fontSize: 13 }} className={iconCls} /> Experience Certificate
          </a>
          <a href="#" className="px-3 py-1.5 hover:bg-gray-100 transition-colors flex items-center">
            <ScienceIcon sx={{ fontSize: 13 }} className={iconCls} /> Role and Responsibility
          </a>
          <a href="#" className="px-3 py-1.5 hover:bg-gray-100 transition-colors flex items-center">
            <ScienceIcon sx={{ fontSize: 13 }} className={iconCls} /> Appointment Letter
          </a>
          <a href="#" className="px-3 py-1.5 hover:bg-gray-100 transition-colors flex items-center">
            <ChatBubbleOutlineIcon sx={{ fontSize: 13 }} className={iconCls} /> Form-A
          </a>
          <a href="#" className="px-3 py-1.5 hover:bg-gray-100 transition-colors flex items-center">
            <ChatBubbleOutlineIcon sx={{ fontSize: 13 }} className={iconCls} /> Form-B
          </a>
          <a href="#" className="px-3 py-1.5 hover:bg-gray-100 transition-colors flex items-center">
            <ChatBubbleOutlineIcon sx={{ fontSize: 13 }} className={iconCls} /> 1 (Certs)
          </a>
          <a href="#" className="px-3 py-1.5 hover:bg-gray-100 transition-colors flex items-center">
            <PersonIcon sx={{ fontSize: 13 }} className={iconCls} /> Active
          </a>
          <a href="#" className="px-3 py-1.5 hover:bg-gray-100 transition-colors flex items-center">
            <ReorderIcon sx={{ fontSize: 13 }} className={iconCls} /> Statement
          </a>
          <Link to="/planning-form" className="px-3 py-1.5 hover:bg-gray-100 transition-colors flex items-center">
            <ViewColumnIcon sx={{ fontSize: 13 }} className={iconCls} /> Planning Form
          </Link>
          <Link to="/performance" className="px-3 py-1.5 hover:bg-gray-100 transition-colors flex items-center">
            <ShowChartIcon sx={{ fontSize: 13 }} className={iconCls} /> Performance
          </Link>
          <a href="#" className="px-3 py-1.5 hover:bg-gray-100 transition-colors flex items-center">
            <InfoIcon sx={{ fontSize: 13 }} className={iconCls} /> Demand
          </a>
          <Link to="/timelive-blog" className="px-3 py-1.5 hover:bg-gray-100 transition-colors flex items-center">
            <TableRowsIcon sx={{ fontSize: 13 }} className={iconCls} /> TimeLive
          </Link>
          <Link to="/performance" className="px-3 py-1.5 hover:bg-gray-100 transition-colors flex items-center">
            <ShowChartIcon sx={{ fontSize: 13 }} className={iconCls} /> Weekly Performance
          </Link>

          <div className="border-t border-gray-100 my-0.5"></div>

          <div className="relative group/sub">
            <a href="#" className="px-3 py-1.5 hover:bg-gray-100 transition-colors flex items-center justify-between">
              <div className="flex items-center">
                <ContentCopyIcon sx={{ fontSize: 13 }} className={iconCls} /> Onboarding
              </div>
              <ChevronLeftIcon sx={{ fontSize: 9 }} className="text-gray-400" />
            </a>
            <div className="hidden group-hover/sub:block absolute right-full top-0 w-36 bg-white border border-gray-300 rounded shadow-xl py-0.5 z-[10000]">
              <Link to="/onboarding-steps" className="block px-3 py-1 hover:bg-gray-100 transition-colors text-gray-600">Onboarding Steps</Link>
              <Link to="/onboarding-plan" className="block px-3 py-1 hover:bg-gray-100 transition-colors text-gray-600">Plan</Link>
              <Link to="/onboarding-checklist" className="block px-3 py-1 hover:bg-gray-100 transition-colors text-gray-600">Checklist</Link>
            </div>
          </div>

          <div className="relative group/sub">
            <a href="#" className="px-3 py-1.5 hover:bg-gray-100 transition-colors flex items-center justify-between">
              <div className="flex items-center">
                <ContentCopyIcon sx={{ fontSize: 13 }} className={iconCls} /> Offboarding
              </div>
              <ChevronLeftIcon sx={{ fontSize: 9 }} className="text-gray-400" />
            </a>
            <div className="hidden group-hover/sub:block absolute right-full top-0 w-36 bg-white border border-gray-300 rounded shadow-xl py-0.5 z-[10000]">
              <Link to="/offboarding-checklist" className="block px-3 py-1 hover:bg-gray-100 transition-colors text-gray-600">Checklist</Link>
              <Link to="/offboarding-plan" className="block px-3 py-1 hover:bg-gray-100 transition-colors text-gray-600">Plan</Link>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenReasonsModal();
                }}
                className="block px-3 py-1 hover:bg-gray-100 transition-colors text-gray-600"
              >
                Reasons
              </a>
            </div>
          </div>
        </div>
      )}
    </td>
  );
}
