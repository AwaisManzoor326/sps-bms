import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import BalanceIcon from '@mui/icons-material/Balance';
import ComputerIcon from '@mui/icons-material/Computer';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CampaignIcon from '@mui/icons-material/Campaign';
import ScienceIcon from '@mui/icons-material/Science';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';

// CV download trigger — mirrors the jQuery download handler from includes/header.php
function triggerCvDownload() {
  const cvFilePath = '/Awais_Manzoor_Resume.pdf';
  const a = document.createElement('a');
  a.href = cvFilePath;
  a.download = 'Awais_Manzoor_CV.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

const hrDropdownLinks = [
  { label: 'HR Talk', to: '/hr-talks' },
  { label: 'Employee Blog', to: '/blog', bold: true },
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Employee Detail', to: '/employee-detail', bold: true, border: true },
  { label: 'Orientation Plan', to: '/orientation-plan', bold: true, border: true },
];

const cvDropdownLinks = [
  'Experience Certificate',
  'Role and Responsibility',
  'Appointment Letter',
  'Add Certs',
];

const topNavItems = [
  { label: 'Legal', icon: BalanceIcon },
  { label: 'IT', icon: ComputerIcon },
  { label: 'Services', icon: SupportAgentIcon },
  { label: 'Education', icon: MenuBookIcon },
  { label: 'Sales', icon: ShoppingCartIcon },
  { label: 'Marketing', icon: CampaignIcon },
  { label: 'Spinnlabs', icon: ScienceIcon },
];

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileHrOpen, setMobileHrOpen] = useState(false);
  const [mobileAccOpen, setMobileAccOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      {/* Top navbar */}
      <nav className="bg-[#318eb7] text-white px-4 py-2.5 shadow-md flex items-center justify-between text-sm font-medium w-full relative z-50">
        <div className="flex items-center space-x-6">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-white text-xl focus:outline-none hover:text-gray-200 transition-colors"
          >
            <MenuIcon fontSize="inherit" />
          </button>

          <Link to="/" className="text-lg font-bold tracking-wider mr-2">
            SPS-BMS
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="flex items-center hover:text-gray-200 py-1 transition-colors">
              <HomeIcon sx={{ fontSize: 13 }} className="mr-1" /> Home
            </Link>

            {/* HR dropdown */}
            <div className="relative group py-1">
              <button className="flex items-center hover:text-gray-200 transition-colors focus:outline-none">
                <DescriptionIcon sx={{ fontSize: 13 }} className="mr-1" /> HR{' '}
                <KeyboardArrowDownIcon sx={{ fontSize: 13 }} className="ml-0.5" />
              </button>
              <div className="absolute left-0 top-full pt-1 hidden group-hover:block w-44 z-50">
                <div className="bg-white text-gray-800 rounded shadow-lg py-1 border border-gray-100">
                  {hrDropdownLinks.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className={`block px-4 py-2 hover:bg-gray-100 text-xs ${item.bold ? 'font-bold' : ''} ${
                        item.border ? 'border-t border-gray-50' : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 my-1"></div>
                  {cvDropdownLinks.map((label) => (
                    <a
                      key={label}
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        triggerCvDownload();
                      }}
                      className="block px-4 py-1.5 hover:bg-gray-100 text-xs text-gray-700"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Accounting dropdown */}
            <div className="relative group py-1">
              <button className="flex items-center hover:text-gray-200 transition-colors focus:outline-none">
                <AccountBalanceWalletIcon sx={{ fontSize: 13 }} className="mr-1" /> Accounting{' '}
                <KeyboardArrowDownIcon sx={{ fontSize: 13 }} className="ml-0.5" />
              </button>
              <div className="absolute left-0 top-full pt-1 hidden group-hover:block w-40 z-50">
                <div className="bg-white text-gray-800 rounded shadow-lg py-1 border border-gray-100">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-xs">
                    Invoices
                  </a>
                </div>
              </div>
            </div>

            {topNavItems.map(({ label, icon: Icon }) => (
              <div key={label} className="relative group py-1">
                <button className="flex items-center hover:text-gray-200 transition-colors focus:outline-none">
                  <Icon sx={{ fontSize: 13 }} className="mr-1" /> {label}
                </button>
              </div>
            ))}

            <a href="#" className="flex items-center hover:text-gray-200 py-1 transition-colors">
              <WorkIcon sx={{ fontSize: 13 }} className="mr-1" /> Jobcode
            </a>
          </div>
        </div>

        {/* User menu */}
        <div className="relative group py-1">
          <button className="flex items-center hover:text-gray-200 transition-colors focus:outline-none space-x-1.5">
            <span className="hidden sm:inline">Welcome Awais</span>
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs border border-white/30">
              <PersonIcon sx={{ fontSize: 13 }} className="text-white" />
            </div>
            <KeyboardArrowDownIcon sx={{ fontSize: 13 }} />
          </button>
          <div className="absolute right-0 top-full pt-1 hidden group-hover:block w-40 z-50">
            <div className="bg-white text-gray-800 rounded shadow-lg py-1 border border-gray-100">
              <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100 text-xs font-medium">
                <ManageAccountsIcon sx={{ fontSize: 13 }} className="mr-1 align-middle" /> My Profile
              </Link>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 text-xs text-red-600 font-medium border-t border-gray-100 mt-1"
              >
                <LogoutIcon sx={{ fontSize: 13 }} className="mr-1 align-middle" /> Logout
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity duration-300 flex"
          onClick={(e) => {
            if (e.target === e.currentTarget) setMobileMenuOpen(false);
          }}
        >
          <div className="bg-[#318eb7] text-white w-64 h-full p-5 flex flex-col space-y-4 shadow-xl overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/20 pb-3">
              <span className="text-base font-bold tracking-wider">SPS-BMS Menu</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-white text-lg focus:outline-none">
                <CloseIcon fontSize="inherit" />
              </button>
            </div>

            <div className="flex flex-col space-y-3 font-medium text-sm">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center py-1.5 px-2 hover:bg-white/10 rounded">
                <HomeIcon sx={{ fontSize: 16 }} className="mr-2" /> Home
              </Link>

              <div className="flex flex-col">
                <button
                  onClick={() => setMobileHrOpen((v) => !v)}
                  className="flex items-center justify-between py-1.5 px-2 hover:bg-white/10 rounded w-full text-left"
                >
                  <span className="flex items-center"><DescriptionIcon sx={{ fontSize: 16 }} className="mr-2" /> HR</span>
                  <KeyboardArrowDownIcon sx={{ fontSize: 13 }} />
                </button>
                {mobileHrOpen && (
                  <div className="flex flex-col pl-6 mt-1 space-y-2 text-white/80 text-xs border-l border-white/20 ml-4">
                    {hrDropdownLinks.map((item) => (
                      <Link
                        key={item.label}
                        to={item.to}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-1 hover:text-white ${item.bold ? 'font-medium' : ''}`}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <hr className="border-white/10 my-1" />
                    {cvDropdownLinks.map((label) => (
                      <a
                        key={label}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          triggerCvDownload();
                        }}
                        className="block py-1 hover:text-white"
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <button
                  onClick={() => setMobileAccOpen((v) => !v)}
                  className="flex items-center justify-between py-1.5 px-2 hover:bg-white/10 rounded w-full text-left"
                >
                  <span className="flex items-center"><AccountBalanceWalletIcon sx={{ fontSize: 16 }} className="mr-2" /> Accounting</span>
                  <KeyboardArrowDownIcon sx={{ fontSize: 13 }} />
                </button>
                {mobileAccOpen && (
                  <div className="flex flex-col pl-6 mt-1 space-y-2 text-white/80 text-xs border-l border-white/20 ml-4">
                    <a href="#" className="block py-1 hover:text-white">Invoices</a>
                  </div>
                )}
              </div>

              <a href="#" className="flex items-center py-1.5 px-2 hover:bg-white/10 rounded"><BalanceIcon sx={{ fontSize: 16 }} className="mr-2" /> Legal</a>
              <a href="#" className="flex items-center py-1.5 px-2 hover:bg-white/10 rounded"><ComputerIcon sx={{ fontSize: 16 }} className="mr-2" /> IT</a>
              <a href="#" className="flex items-center py-1.5 px-2 hover:bg-white/10 rounded"><SupportAgentIcon sx={{ fontSize: 16 }} className="mr-2" /> Services</a>
              <a href="#" className="flex items-center py-1.5 px-2 hover:bg-white/10 rounded"><MenuBookIcon sx={{ fontSize: 16 }} className="mr-2" /> Education</a>
              <a href="#" className="flex items-center py-1.5 px-2 hover:bg-white/10 rounded"><ShoppingCartIcon sx={{ fontSize: 16 }} className="mr-2" /> Sales</a>
              <a href="#" className="flex items-center py-1.5 px-2 hover:bg-white/10 rounded"><CampaignIcon sx={{ fontSize: 16 }} className="mr-2" /> Marketing</a>
              <a href="#" className="flex items-center py-1.5 px-2 hover:bg-white/10 rounded"><ScienceIcon sx={{ fontSize: 16 }} className="mr-2" /> Spinnlabs</a>
              <a href="#" className="flex items-center py-1.5 px-2 hover:bg-white/10 rounded"><WorkIcon sx={{ fontSize: 16 }} className="mr-2" /> Jobcode</a>
            </div>
          </div>
        </div>
      )}

      {/* Page content */}
      <div className="flex-1 flex flex-col">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="w-full bg-white border-t border-gray-200 py-3.5 px-5 mt-auto flex flex-col items-center justify-center space-y-2 text-[12px] text-gray-500 select-none z-40 flex-shrink-0">
        <div className="flex flex-wrap items-center justify-center gap-1.5 tracking-tight text-center font-medium">
          <span>Software Productivity Strategists, Inc.</span>
          <span className="hidden sm:inline text-gray-300">|</span>
          <span>© Copyright {new Date().getFullYear()} SPS. All rights reserved.</span>
        </div>
        <div className="flex items-center justify-center space-x-2 font-mono text-[10px] tracking-wide">
          <span className="bg-gray-50 border border-gray-200 px-2 py-0.5 rounded text-gray-400">v1.2.0-bms</span>
        </div>
      </footer>
    </div>
  );
}
