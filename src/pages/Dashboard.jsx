import WindowIcon from '@mui/icons-material/WindowOutlined';
import GridViewIcon from '@mui/icons-material/GridView';
import BarChartIcon from '@mui/icons-material/BarChart';
import BadgeIcon from '@mui/icons-material/Badge';
import WorkIcon from '@mui/icons-material/Work';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PublicIcon from '@mui/icons-material/Public';
import HandshakeIcon from '@mui/icons-material/Handshake';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import GroupsIcon from '@mui/icons-material/Groups';
import ChatIcon from '@mui/icons-material/Chat';

const sessionUserName = 'Awais Mir';

const objectiveCards = [
  { code: 'C1', title: 'Financial Leadership Objectives', icon: TrendingUpIcon },
  { code: 'C2', title: 'Customer Leadership Objectives', icon: PublicIcon },
  { code: 'C2', title: 'Partner Leadership Objectives', icon: HandshakeIcon },
  { code: 'C2', title: 'Industry Leadership Objectives', icon: GpsFixedIcon },
  { code: 'C3', title: 'Competencies Leadership Objectives', icon: LightbulbIcon },
  { code: 'C4', title: 'Team Leadership Objectives', icon: GroupsIcon },
];

const quarterBadges = ['Q1', 'Q2', 'Q3', 'Q4'];

export default function Dashboard() {
  return (
    <div className="w-full max-w-[1920px] mx-auto p-5 bg-[#f8f9fa] flex-1 text-xs select-none flex flex-col justify-between relative">
      <div className="w-full">
        <div className="bg-white rounded border border-gray-200 p-3 shadow-2xs flex flex-wrap items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-base font-medium text-gray-800">
            <WindowIcon sx={{ fontSize: 15 }} className="text-gray-600" />
            <span>Welcome to BMS <strong className="font-bold text-gray-900">{sessionUserName}</strong></span>
          </div>

          <div className="flex items-center space-x-2 mt-2 sm:mt-0">
            <button className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-3 py-1 rounded-sm shadow-2xs font-medium inline-flex items-center space-x-1.5 transition-all">
              <GridViewIcon sx={{ fontSize: 11 }} className="text-gray-400" />
              <span>Roles</span>
            </button>
            <button className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-3 py-1 rounded-sm shadow-2xs font-medium inline-flex items-center space-x-1.5 transition-all">
              <BarChartIcon sx={{ fontSize: 11 }} className="text-gray-400" />
              <span>KPI</span>
            </button>
            <button className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-3 py-1 rounded-sm shadow-2xs font-medium inline-flex items-center space-x-1.5 transition-all">
              <BadgeIcon sx={{ fontSize: 11 }} className="text-gray-400" />
              <span>PSP</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 mb-6">
          {objectiveCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded p-3 shadow-2xs flex flex-col justify-between h-[180px] hover:shadow-xs transition-shadow relative overflow-hidden"
                style={{ background: 'radial-gradient(circle at top right, rgba(243, 244, 246, 0.3) 0%, rgba(255, 255, 255, 1) 70%)' }}
              >
                <div>
                  <div className="flex items-start justify-between mb-1.5">
                    <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">{card.code}</span>
                    <div className="w-7 h-7 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                      <Icon sx={{ fontSize: 12 }} />
                    </div>
                  </div>
                  <h4 className="text-[11px] font-bold text-gray-700 leading-tight tracking-tight mb-3 pr-2 border-b pb-1.5 border-gray-100">
                    {card.title}
                  </h4>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1.5">
                      <WorkIcon sx={{ fontSize: 11 }} className="text-orange-400" />
                      <span className="text-gray-500 text-[10px] font-semibold">Corporate Goals</span>
                    </div>
                    <div className="flex space-x-0.5 select-none">
                      {quarterBadges.map((q) => (
                        <span key={q} className="bg-green-600 text-white font-bold text-[8px] px-1 rounded-xs scale-90 border border-green-700 cursor-pointer" title={`${q} complete`}>
                          {q}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1.5">
                      <ManageAccountsIcon sx={{ fontSize: 11 }} className="text-blue-400" />
                      <span className="text-gray-500 text-[10px] font-semibold">My Goals</span>
                    </div>
                    <div className="flex space-x-0.5 select-none">
                      {quarterBadges.map((q) => (
                        <span key={q} className="bg-green-600 text-white font-bold text-[8px] px-1 rounded-xs scale-90 border border-green-700 cursor-pointer">
                          {q}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-[99999]">
        <button className="w-12 h-12 bg-[#2c72b8] hover:bg-[#235d97] text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 focus:outline-none">
          <ChatIcon sx={{ fontSize: 20 }} />
        </button>
      </div>
    </div>
  );
}
