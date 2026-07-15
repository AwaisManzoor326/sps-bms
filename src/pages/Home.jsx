import { useMemo, useState, useRef, useEffect } from 'react';
import DnsIcon from '@mui/icons-material/Dns';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GroupOffIcon from '@mui/icons-material/GroupOff';
import ChatIcon from '@mui/icons-material/Chat';

import {
  generateEmployees,
  departments,
  groupsPool,
  practicesPool,
  genders,
  locations,
  hrTypes,
  workStatuses,
} from '../data/employees';
import ActionDropdown from './home/ActionDropdown';
import HoursModal from './home/HoursModal';
import ReasonsModal from './home/ReasonsModal';

const PER_PAGE = 11;

const emptyFilters = {
  department: '',
  group: '',
  practice: '',
  gender: '',
  location: '',
  hr_type: '',
  work_status: '',
  year: '2026',
  period: 'Annual',
};

export default function Home() {
  const employees = useMemo(() => generateEmployees(), []);

  const [scope, setScope] = useState('all'); // 'all' | 'active'
  const [searchQuery, setSearchQuery] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [filters, setFilters] = useState(emptyFilters);
  const [currentPage, setCurrentPage] = useState(1);

  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [hoursModalOpen, setHoursModalOpen] = useState(false);
  const [reasonsModalOpen, setReasonsModalOpen] = useState(false);

  const wrapperRef = useRef(null);

  // Close any open row action-menu when clicking outside of it
  useEffect(() => {
    function handleClick(e) {
      if (!e.target.closest('.action-trigger-btn') && !e.target.closest('.local-dropdown-menu')) {
        setOpenDropdownId(null);
      }
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const filteredEmployees = useMemo(() => {
    return employees.filter((emp) => {
      if (filters.department && emp.department !== filters.department) return false;
      if (filters.group && emp.group !== filters.group) return false;
      if (filters.practice && emp.practice !== filters.practice) return false;
      if (filters.gender && emp.gender !== filters.gender) return false;
      if (filters.location && emp.location !== filters.location) return false;
      if (filters.hr_type && emp.hr_type !== filters.hr_type) return false;
      if (filters.work_status && emp.status !== filters.work_status) return false;
      if (scope === 'active' && emp.status === 'Terminated') return false;
      if (
        searchQuery &&
        !emp.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !emp.email.toLowerCase().includes(searchQuery.toLowerCase())
      )
        return false;
      return true;
    });
  }, [employees, filters, scope, searchQuery]);

  const totalRecords = filteredEmployees.length;
  const totalPages = Math.max(1, Math.ceil(totalRecords / PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const offset = (safePage - 1) * PER_PAGE;
  const paginatedEmployees = filteredEmployees.slice(offset, offset + PER_PAGE);

  function handleFilterSubmit(e) {
    e.preventDefault();
    setSearchQuery(searchInput);
    setCurrentPage(1);
  }

  function updateFilter(key, value) {
    setFilters((f) => ({ ...f, [key]: value }));
  }

  function toggleDropdown(id) {
    setOpenDropdownId((cur) => (cur === id ? null : id));
  }

  function exportTableToCSV(filename) {
    const rows = [
      ['Name', 'Type', 'Job Status', 'Manager', 'Company', 'Team', 'Group', 'Practice', 'Location', 'Mobile Number', 'Email', 'BMS Access', 'Staff', 'Status'],
      ...paginatedEmployees.map((e) => [
        e.name, e.type, e.job_status, e.manager, e.company, e.team, e.group, e.practice, e.location, e.mobile_number, e.email, e.bms_access, e.staff, e.status,
      ]),
    ];
    const csv = rows.map((row) => row.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\n');
    const csvFile = new Blob([csv], { type: 'text/csv' });
    const downloadLink = document.createElement('a');
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  return (
    <div className="w-full max-w-[1920px] mx-auto p-4 bg-white flex flex-col justify-between flex-1 text-[11px] font-sans pb-32 relative" ref={wrapperRef}>
      <div className="flex flex-col space-y-2 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xl font-medium text-gray-800 tracking-tight">
            <DnsIcon sx={{ fontSize: 20 }} className="text-gray-700" />
            <span>Human Resource Management</span>
          </div>
          <button className="bg-[#2c72b8] hover:bg-[#235d97] text-white text-[11px] font-medium px-4 py-1.5 rounded transition-colors shadow-sm">
            Add New
          </button>
        </div>

        <div className="text-[10px] space-x-1 text-gray-400">
          <button onClick={() => setScope('all')} className={scope === 'all' ? 'text-blue-600 font-bold underline' : 'hover:text-blue-500'}>
            Show All
          </button>
          <span>|</span>
          <button onClick={() => setScope('active')} className={scope === 'active' ? 'text-blue-600 font-bold underline' : 'hover:text-blue-500'}>
            Active Only
          </button>
        </div>

        <form onSubmit={handleFilterSubmit} className="flex flex-wrap items-center gap-1.5 bg-gray-50 p-2 rounded border border-gray-200 shadow-xs">
          <select
            value={filters.department}
            onChange={(e) => updateFilter('department', e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 bg-white outline-none w-36 text-gray-700 font-medium h-[26px]"
          >
            <option value="">Select Department</option>
            {departments.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>

          <select
            value={filters.group}
            onChange={(e) => updateFilter('group', e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 bg-white outline-none w-32 text-gray-700 font-medium h-[26px]"
          >
            <option value="">Select Group</option>
            {groupsPool.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>

          <select
            value={filters.practice}
            onChange={(e) => updateFilter('practice', e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 bg-white outline-none w-32 text-gray-700 font-medium h-[26px]"
          >
            <option value="">Select Practice</option>
            {practicesPool.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>

          <select
            value={filters.gender}
            onChange={(e) => updateFilter('gender', e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 bg-white outline-none w-32 text-gray-700 font-medium h-[26px]"
          >
            <option value="">Select Gender</option>
            {genders.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>

          <select
            value={filters.location}
            onChange={(e) => updateFilter('location', e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 bg-white outline-none w-32 text-gray-700 font-medium h-[26px]"
          >
            <option value="">Select Location</option>
            {locations.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>

          <select
            value={filters.hr_type}
            onChange={(e) => updateFilter('hr_type', e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 bg-white outline-none w-36 text-gray-700 font-medium h-[26px]"
          >
            <option value="">Select Type of HR</option>
            {hrTypes.map((h) => (
              <option key={h} value={h}>{h}</option>
            ))}
          </select>

          <select
            value={filters.work_status}
            onChange={(e) => updateFilter('work_status', e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 bg-white outline-none w-36 text-gray-700 font-medium h-[26px]"
          >
            <option value="">Select Work Status</option>
            {workStatuses.map((w) => (
              <option key={w} value={w}>{w}</option>
            ))}
          </select>

          <button
            type="submit"
            className="bg-[#2c72b8] hover:bg-[#235d97] text-white font-semibold px-4 py-1 rounded shadow-xs transition-colors h-[26px]"
          >
            Show
          </button>

          <div className="flex items-center -space-x-px">
            <select
              value={filters.year}
              onChange={(e) => updateFilter('year', e.target.value)}
              className="border border-gray-300 rounded-l px-1.5 py-0.5 bg-white outline-none text-gray-600 h-[26px] focus:border-blue-400 focus:z-10"
            >
              <option value="2026">2026</option>
              <option value="2025">2025</option>
            </select>
            <select
              value={filters.period}
              onChange={(e) => updateFilter('period', e.target.value)}
              className="border border-gray-300 px-1.5 py-0.5 bg-white outline-none text-gray-600 h-[26px] focus:border-blue-400 focus:z-10 w-20"
            >
              <option value="Annual">Annual</option>
              <option value="Semi-Annual">Semi-Annual</option>
            </select>
            <button
              type="button"
              className="bg-[#2c72b8] hover:bg-[#235d97] text-white px-3 py-0.5 rounded-r font-medium text-[11px] h-[26px] transition-colors whitespace-nowrap"
            >
              Send Planning Form to Employees
            </button>
          </div>

          <div className="ml-auto flex items-center space-x-1.5">
            <span className="text-gray-500 font-semibold">Search:</span>
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 outline-none w-44 focus:border-blue-400 h-[26px]"
            />
          </div>
        </form>

        <div className="flex items-center space-x-1.5 mt-0.5">
          <button
            type="button"
            onClick={() => exportTableToCSV('hr-data.csv')}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300 rounded px-3 py-1 font-medium shadow-2xs transition-all"
          >
            Export CSV
          </button>
          <button
            type="button"
            onClick={() => alert('Excel sheet generated successfully.')}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300 rounded px-3 py-1 font-medium shadow-2xs transition-all"
          >
            Export Excel
          </button>
        </div>
      </div>

      <div className="bg-white rounded border border-gray-200 flex flex-col flex-grow my-2 overflow-visible">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-full table-auto text-[9.5px]">
            <thead className="bg-gray-100 border-b border-gray-200 shadow-2xs">
              <tr className="text-gray-700 font-bold uppercase tracking-tight">
                <th className="p-1.5 w-6 text-center select-none"><input type="checkbox" className="rounded border-gray-300 cursor-pointer" /></th>
                <th className="p-1.5">Name</th>
                <th className="p-1.5">Type</th>
                <th className="p-1.5">Job Status</th>
                <th className="p-1.5">Manager</th>
                <th className="p-1.5">Company</th>
                <th className="p-1.5">Team</th>
                <th className="p-1.5">Group</th>
                <th className="p-1.5">Practice</th>
                <th className="p-1.5 w-10 text-center">Location</th>
                <th className="p-1.5">Mobile Number</th>
                <th className="p-1.5">Email</th>
                <th className="p-1.5 w-16 text-center">BMS Access</th>
                <th className="p-1.5">Staff</th>
                <th className="p-1.5">Status</th>
                <th className="p-1.5 text-center w-16 sticky right-0 bg-gray-100 shadow-[-4px_0_8px_-3px_rgba(0,0,0,0.07)]">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y divide-gray-100 font-medium">
              {paginatedEmployees.length > 0 ? (
                paginatedEmployees.map((emp) => (
                  <tr key={emp.id} className="hover:bg-gray-50/60 transition-colors align-middle">
                    <td className="p-1.5 text-center"><input type="checkbox" className="rounded border-gray-300" /></td>
                    <td className="p-1.5 text-blue-600 font-bold hover:underline cursor-pointer max-w-[140px] truncate" title={emp.name}>
                      <AccountCircleIcon sx={{ fontSize: 12 }} className="text-gray-300 mr-1" />{emp.name}
                    </td>
                    <td className="p-1.5 text-gray-700">{emp.type}</td>
                    <td className="p-1.5 font-medium text-purple-700">{emp.job_status}</td>
                    <td className="p-1.5 text-gray-500 font-semibold">{emp.manager}</td>
                    <td className="p-1.5 text-gray-500">{emp.company}</td>
                    <td className="p-1.5 text-gray-500">{emp.team}</td>
                    <td className="p-1.5"><span className="bg-slate-50 text-slate-700 px-1 py-0.5 rounded border border-slate-200 text-[8.5px]">{emp.group}</span></td>
                    <td className="p-1.5 text-gray-700">{emp.practice}</td>
                    <td className="p-1.5 font-bold text-gray-800 tracking-wide text-center">{emp.location}</td>
                    <td className="p-1.5 font-mono text-gray-500 whitespace-nowrap">{emp.mobile_number}</td>
                    <td className="p-1.5 font-mono text-gray-500 lowercase max-w-[160px] truncate" title={emp.email}>{emp.email}</td>
                    <td className="p-1.5 text-center">
                      <span className={`px-1 py-0.5 rounded text-[8.5px] ${emp.bms_access === 'Granted' ? 'bg-green-50 text-green-700 font-bold border border-green-200' : 'bg-red-50 text-red-600 border border-red-200'}`}>
                        {emp.bms_access}
                      </span>
                    </td>
                    <td className="p-1.5 text-gray-600">{emp.staff}</td>
                    <td className="p-1.5">
                      <span className={`px-1.5 py-0.5 rounded-full text-[8.5px] font-semibold border ${emp.status === 'Full-time' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-amber-50 text-amber-600 border-amber-200'}`}>
                        {emp.status}
                      </span>
                    </td>
                    <ActionDropdown
                      employee={emp}
                      isOpen={openDropdownId === emp.id}
                      onToggle={toggleDropdown}
                      onOpenHoursModal={() => {
                        setHoursModalOpen(true);
                        setOpenDropdownId(null);
                      }}
                      onOpenReasonsModal={() => {
                        setReasonsModalOpen(true);
                        setOpenDropdownId(null);
                      }}
                    />
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={16} className="p-10 text-center text-gray-400 italic bg-gray-50/20">
                    <GroupOffIcon sx={{ fontSize: 24 }} className="mb-2 block mx-auto text-gray-300" /> No entries matched your specific setup.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="bg-gray-50 border-t border-gray-200 px-4 py-2 flex items-center justify-between flex-shrink-0 select-none">
          <div className="text-gray-500 text-[10px]">
            Showing <strong className="text-gray-700">{totalRecords === 0 ? 0 : offset + 1} - {Math.min(totalRecords, offset + PER_PAGE)}</strong> of{' '}
            <strong className="text-gray-700">{totalRecords}</strong> employees records
          </div>
          <div className="flex items-center space-x-1 font-bold">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={safePage === 1}
              className="px-2.5 py-1 border border-gray-300 rounded bg-white text-gray-600 hover:bg-gray-100 transition-all disabled:pointer-events-none disabled:opacity-40"
            >
              <ChevronLeftIcon sx={{ fontSize: 9 }} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setCurrentPage(p)}
                className={`px-3 py-1 border rounded transition-all ${
                  p === safePage ? 'bg-[#2c72b8] border-[#2c72b8] text-white font-black shadow-sm' : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {p}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={safePage === totalPages}
              className="px-2.5 py-1 border border-gray-300 rounded bg-white text-gray-600 hover:bg-gray-100 transition-all disabled:pointer-events-none disabled:opacity-40"
            >
              <ChevronRightIcon sx={{ fontSize: 9 }} />
            </button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-[99999]">
        <button className="w-12 h-12 bg-[#2c72b8] hover:bg-[#235d97] text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 focus:outline-none">
          <ChatIcon sx={{ fontSize: 20 }} />
        </button>
      </div>

      <HoursModal open={hoursModalOpen} onClose={() => setHoursModalOpen(false)} />
      <ReasonsModal open={reasonsModalOpen} onClose={() => setReasonsModalOpen(false)} />
    </div>
  );
}
