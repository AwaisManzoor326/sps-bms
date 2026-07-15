import ReorderIcon from '@mui/icons-material/Reorder';
import SyncIcon from '@mui/icons-material/Sync';
import InfoIcon from '@mui/icons-material/Info';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FloatingChatButton from '../components/FloatingChatButton';

// ---- small reusable pieces (mirrors the repeated markup in employee-detail.php) ----

function FormRow({ label, children }) {
  return (
    <div className="grid grid-cols-3 items-center gap-2">
      <label className="text-gray-500">{label}</label>
      {children}
    </div>
  );
}

function TextField(props) {
  return <input type="text" className="col-span-2 border border-gray-300 rounded px-2 py-1 outline-none h-[28px]" {...props} />;
}

function SelectField({ options = ['Select'], ...props }) {
  return (
    <select className="col-span-2 border border-gray-300 rounded px-2 py-1 bg-white outline-none h-[28px]" {...props}>
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  );
}

function FileField(props) {
  return <input type="file" className="col-span-2 text-[10px] border border-gray-300 rounded h-[28px] px-1 py-1" {...props} />;
}

function EmptyTable({ headers, colSpan }) {
  return (
    <div className="overflow-x-auto border border-gray-200 rounded">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-200 font-bold text-gray-700">
            {headers.map((h) => (
              <th key={h} className="p-2">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-400 italic">
          <tr>
            <td colSpan={colSpan ?? headers.length} className="p-3 text-center">&nbsp;</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function DollarInput({ value, readOnly }) {
  return (
    <div className={`flex items-center border border-gray-300 rounded overflow-hidden h-[28px] ${readOnly ? 'bg-gray-50' : ''}`}>
      <span className="px-2 text-gray-500">$</span>
      <input type="text" defaultValue={value} readOnly={readOnly} className={`flex-1 outline-none px-1 ${readOnly ? 'bg-gray-50 font-semibold' : ''}`} />
    </div>
  );
}

export default function EmployeeDetail() {
  return (
    <div className="w-full max-w-[1920px] mx-auto p-4 bg-[#f8f9fa] flex-1 text-[11px] font-sans relative select-none pb-24">
      {/* Top header */}
      <div className="bg-white rounded border border-gray-200 p-3 shadow-2xs mb-3 flex items-center justify-between">
        <div className="flex items-center space-x-2 text-lg font-bold text-gray-700 tracking-tight">
          <ReorderIcon sx={{ fontSize: 16 }} className="text-gray-600" />
          <span>Employee Detail</span>
        </div>
        <button type="button" className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-4 py-1.5 rounded shadow-2xs font-medium text-[11px]">
          Back
        </button>
      </div>

      <div className="bg-white rounded border border-gray-200 shadow-2xs p-4">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">

          {/* ===== LEFT COLUMN ===== */}
          <div className="xl:col-span-5 space-y-5">

            <div>
              <h3 className="text-[13px] font-bold text-gray-800 mb-3">Employee:</h3>
              <div className="space-y-2.5">
                <FormRow label="Name:"><TextField /></FormRow>
                <FormRow label="Type"><SelectField /></FormRow>
                <FormRow label="Work Status"><SelectField /></FormRow>
                <FormRow label="Email:"><TextField type="email" /></FormRow>
                <FormRow label="Personal Email:"><TextField type="email" /></FormRow>
                <FormRow label="Employee CNIC"><TextField /></FormRow>
                <FormRow label="Gender:"><SelectField options={['Male', 'Female', 'Other']} defaultValue="Male" /></FormRow>
                <FormRow label="Date of Birth:">
                  <div className="col-span-2 relative">
                    <input type="date" className="w-full border border-gray-300 rounded px-2 py-1 outline-none h-[28px]" />
                  </div>
                </FormRow>
                <FormRow label="Residential address"><TextField /></FormRow>
                <FormRow label="Job Title:"><SelectField options={['Select Job Title']} /></FormRow>
                <FormRow label="Business Area:"><TextField /></FormRow>
                <FormRow label="LinkedIn Url:"><TextField /></FormRow>
                <FormRow label="Office No:"><TextField /></FormRow>
                <FormRow label="Mobile No:"><TextField /></FormRow>
                <FormRow label="Emergency No:"><TextField /></FormRow>
                <FormRow label="Home No:"><TextField /></FormRow>
                <FormRow label="Location:"><SelectField options={['Select Location']} /></FormRow>
                <FormRow label="Office Location:"><SelectField options={['Select Office Location']} /></FormRow>
                <FormRow label="Department:"><SelectField options={['Select Department']} /></FormRow>
                <FormRow label="Group:"><SelectField options={['Select Group']} /></FormRow>
                <FormRow label="Practice:"><SelectField options={['Select Practice']} /></FormRow>
                <FormRow label="Hire Source"><SelectField options={['Select hire source']} /></FormRow>
                <FormRow label="Employee Picture"><FileField /></FormRow>
                <FormRow label="Company:"><SelectField options={['Select -']} /></FormRow>
                <FormRow label="Educational Level:"><SelectField options={['Select Educational Level']} /></FormRow>
                <FormRow label="Upload Degree"><FileField /></FormRow>
                <FormRow label="Field of Studies:"><SelectField options={['Select Field of Studies']} /></FormRow>
                <FormRow label="CNIC Front Picture"><FileField /></FormRow>
                <FormRow label="CNIC Back Picture"><FileField /></FormRow>
                <FormRow label="Upload Resume"><FileField /></FormRow>
                <FormRow label="SPS Corporate"><input type="checkbox" className="w-4 h-4 border-gray-300 rounded text-blue-600" /></FormRow>
              </div>
            </div>

            <div>
              <h3 className="text-[13px] font-bold text-gray-800 mb-3">Guardian/Parent Information:</h3>
              <div className="space-y-2.5">
                <FormRow label="Parent/Guardian Name:"><TextField /></FormRow>
                <FormRow label="Parent/Guardian Contact:"><TextField /></FormRow>
                <FormRow label="Parent/Guardian Address:"><TextField /></FormRow>
              </div>
            </div>

            <div>
              <h3 className="text-[13px] font-bold text-gray-800 mb-3">Employee Education:</h3>
              <div className="space-y-2.5">
                <FormRow label="University:"><TextField /></FormRow>
                <FormRow label="Field of Study:"><TextField /></FormRow>
                <FormRow label="Passing Year:"><TextField /></FormRow>
                <FormRow label="Course:"><TextField /></FormRow>
                <FormRow label="Grade/GPA:"><TextField /></FormRow>
              </div>
            </div>

            <div>
              <h3 className="text-[13px] font-bold text-gray-800 mb-3">Supervisor:</h3>
              <div className="space-y-2.5">
                <FormRow label="Name:"><SelectField options={['Select Supervisor']} /></FormRow>
                <FormRow label="Email:"><TextField type="email" readOnly /></FormRow>
              </div>
            </div>

            <div>
              <button type="submit" className="bg-[#2c72b8] hover:bg-[#235d97] text-white font-medium px-5 py-2 rounded text-[12px] transition-colors shadow-xs">
                Save Employee Details
              </button>
            </div>

            <div>
              <h3 className="text-[13px] font-bold text-gray-800 mb-2">Learning and Development:</h3>
              <EmptyTable headers={['Sr', 'Course Name', 'Training Taken', 'Test Taken']} />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[13px] font-bold text-gray-800">Attachments:</h3>
                <a href="#" className="text-blue-500 text-[11px] font-medium">Add New</a>
              </div>
              <EmptyTable headers={['Sr', 'Title', '']} />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[13px] font-bold text-gray-800">Communication Skills:</h3>
                <a href="#" className="text-blue-500 text-[11px] font-medium">Add New</a>
              </div>
              <EmptyTable headers={['Sr', 'Added By', 'Speaking', 'Writing', 'listening', 'Date', 'Action']} />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[13px] font-bold text-gray-800">Employee Certifications</h3>
                <a href="#" className="text-blue-500 text-[11px] font-medium">Add Certification</a>
              </div>
              <EmptyTable headers={['Sr', 'Vendor', 'Group', 'Practice', 'Product', 'Title', 'Code', 'URL', 'Type', 'Completed On']} />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[13px] font-bold text-gray-800">Employee Badges</h3>
                <a href="#" className="text-blue-500 text-[11px] font-medium">Add Badge</a>
              </div>
              <EmptyTable headers={['Sr', 'Vendor', 'Group', 'Practice', 'Product', 'Title', 'URL', 'Completed On']} />
            </div>

            <div>
              <h3 className="text-[13px] font-bold text-gray-800 mb-1">Employee Loaded Cost (Q1 - 2026)</h3>
              <div className="flex items-center gap-2 text-blue-600 font-medium mb-1">
                <span className="underline cursor-pointer">Name:</span>
                <span className="text-gray-400">|</span>
                <span className="underline cursor-pointer">Location:</span>
                <span className="text-gray-400">|</span>
                <SyncIcon sx={{ fontSize: 13 }} className="text-gray-500 cursor-pointer" />
              </div>
              <p className="text-gray-400 italic text-[10.5px] mb-2">* All Inputs are based on Annual Values</p>

              <div className="space-y-2">
                <div className="font-bold text-blue-600 underline">Loaded Rate:</div>

                <div className="grid grid-cols-3 items-center gap-2">
                  <label className="text-blue-500 underline col-span-1">Base Hourly Rate:</label>
                  <div className="col-span-2"><DollarInput value="0" /></div>
                </div>

                <div className="grid grid-cols-3 items-center gap-2">
                  <label className="text-blue-500 underline col-span-1">+ Individual Load:</label>
                  <DollarInput value="0.00" />
                  <DollarInput value="0.00" />
                </div>

                <div className="grid grid-cols-3 items-center gap-2">
                  <label className="text-blue-500 underline col-span-1 flex items-center gap-1">
                    Practice Load: <InfoIcon sx={{ fontSize: 10 }} className="text-gray-400" />
                  </label>
                  <DollarInput value="0" />
                  <DollarInput value="0.00" />
                </div>

                <div className="grid grid-cols-3 items-center gap-2">
                  <label className="text-gray-600 font-medium col-span-1">Loaded Rate:</label>
                  <div className="col-span-2"><DollarInput value="0.00" readOnly /></div>
                </div>

                <div className="grid grid-cols-3 items-center gap-2">
                  <label className="text-gray-600 font-medium col-span-1">Loaded Rate (Last Year):</label>
                  <div className="col-span-2"><DollarInput value="" readOnly /></div>
                </div>

                <div className="pt-1">
                  <button type="button" className="bg-[#2c72b8] hover:bg-[#235d97] text-white font-medium px-4 py-1.5 rounded text-[11px] shadow-xs">
                    Update Loaded Rate
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ===== RIGHT COLUMN ===== */}
          <div className="xl:col-span-7 space-y-5">

            <div className="flex items-center space-x-2">
              <span className="font-bold text-gray-700">Job Title:</span>
              <span className="bg-gray-500 text-white font-medium px-2.5 py-1 rounded text-[10.5px]">No job title found.</span>
            </div>

            <div>
              <h3 className="text-[13px] font-bold text-gray-800 mb-2">Corporate Roles:</h3>
              <div className="overflow-x-auto border border-gray-200 rounded">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100 border-b border-gray-200 font-bold text-gray-700">
                      <th className="p-2">Role</th><th className="p-2">Level</th><th className="p-2">Level Title</th><th className="p-2">Rank</th><th className="p-2 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-600 font-medium">
                    <tr>
                      <td className="p-2 text-blue-600 font-bold">Developer</td><td className="p-2">2</td><td className="p-2">Associate</td><td className="p-2">-</td>
                      <td className="p-2 text-center space-x-1.5 whitespace-nowrap">
                        <span className="bg-green-600 text-white font-bold px-1.5 py-0.5 rounded-sm text-[10px] cursor-pointer inline-flex"><OpenInNewIcon sx={{ fontSize: 10 }} /></span>
                        <span className="bg-cyan-500 text-white font-bold px-1.5 py-0.5 rounded-sm text-[10px] cursor-pointer inline-flex"><EditIcon sx={{ fontSize: 10 }} /></span>
                        <span className="bg-blue-700 text-white font-bold px-1.5 py-0.5 rounded-sm text-[10px] cursor-pointer">R</span>
                        <span className="bg-red-500 text-white font-bold px-1.5 py-0.5 rounded-sm text-[10px] cursor-pointer inline-flex"><DeleteIcon sx={{ fontSize: 10 }} /></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-[13px] font-bold text-gray-800">Departmental Roles:</h3>
                <AddCircleIcon sx={{ fontSize: 14 }} className="text-blue-500 cursor-pointer" />
              </div>
              <EmptyTable headers={['Role', 'Level', 'Level Title', 'Rank', 'Action']} />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-[13px] font-bold text-gray-800">Employment History:</h3>
                <AddCircleIcon sx={{ fontSize: 14 }} className="text-blue-500 cursor-pointer" />
              </div>
              <EmptyTable headers={['Sr#', 'Start Date', 'End Date', 'Job Title', 'Corp. Role', 'Dept. Role', 'Func. Role', 'Duration', 'Attach', 'Action']} />
            </div>

            <div className="space-y-4">
              <h4 className="text-[13px] font-bold text-gray-800">Department Attributes:</h4>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-gray-700">Customer:</span>
                  <AddCircleIcon sx={{ fontSize: 14 }} className="text-blue-500 cursor-pointer" />
                </div>
                <div className="overflow-x-auto border border-gray-200 rounded">
                  <table className="w-full text-left border-collapse">
                    <thead><tr className="bg-gray-100 border-b text-gray-700 font-bold"><th className="p-2 w-14 text-center">ID</th><th className="p-2">Name</th><th className="p-2 text-center w-20">Action</th></tr></thead>
                    <tbody className="divide-y text-gray-600">
                      {[
                        ['1', 'Al-Arabia Sugar Mills Limited (AASML)'],
                        ['2', 'America Abroad Media'],
                        ['3', 'Date Able'],
                      ].map(([id, name]) => (
                        <tr key={id}>
                          <td className="p-2 text-center bg-gray-50/40">{id}</td>
                          <td className="p-2 font-medium">{name}</td>
                          <td className="p-2 text-center text-blue-500 font-bold cursor-pointer">Edit</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-gray-700">Projects:</span>
                  <AddCircleIcon sx={{ fontSize: 14 }} className="text-blue-500 cursor-pointer" />
                </div>
                <EmptyTable headers={['ID', 'Name', 'Action']} />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-gray-700">Products:</span>
                  <AddCircleIcon sx={{ fontSize: 14 }} className="text-blue-500 cursor-pointer" />
                </div>
                <EmptyTable headers={['ID', 'Name', 'Action']} />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-[13px] font-bold text-gray-800">Comp Framework:</h4>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-700">KPIs:</span>
                <select className="border border-gray-300 rounded px-2 py-1 bg-white h-[28px]" defaultValue="2026 - Q1">
                  <option>2026 - Q1</option>
                </select>
              </div>

              <div>
                <div className="font-bold text-gray-700 mb-1">Personal Leadership:</div>
                <EmptyTable
                  headers={['Leadership Incentives', '% Multiplier', 'Practice Multiplier', 'KPI Target', 'KPI Actual', 'Bonus Target', 'Bonus Actual', 'Plan']}
                />
              </div>

              <div>
                <div className="font-bold text-gray-700 mb-1">Corporate Leadership :</div>

                <div className="mb-3">
                  <div className="font-semibold text-gray-600 mb-1">Vendors:</div>
                  <div className="overflow-x-auto border border-gray-200 rounded">
                    <table className="w-full text-left border-collapse text-[10px]">
                      <thead>
                        <tr className="bg-gray-100 border-b font-bold text-gray-700">
                          <th className="p-1.5 w-12 text-center">Sr No.</th><th className="p-1.5">Vendor Name</th><th className="p-1.5">Practice Multiplier</th><th className="p-1.5">% Multiplier</th><th className="p-1.5">KPI Target</th><th className="p-1.5">KPI Actual</th><th className="p-1.5">Bonus Target</th><th className="p-1.5">Bonus Actual</th><th className="p-1.5">Plan</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-gray-600 font-medium">
                        {['IBM', 'HPI SD', 'Cisco'].map((vendor, i) => (
                          <tr key={vendor}>
                            <td className="p-1.5 text-center bg-gray-50/50">{i === 0 ? '1' : '101'}</td>
                            <td className="p-1.5 text-blue-600 font-bold">{vendor}</td>
                            <td className="p-1.5"></td>
                            <td className="p-1"><select className="border border-gray-300 rounded px-1 py-0.5 bg-white h-[24px]"><option>Select</option></select></td>
                            <td className="p-1.5"></td><td className="p-1.5"></td><td className="p-1.5"></td><td className="p-1.5"></td><td className="p-1.5"></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="font-semibold text-gray-600 mb-1">Products:</div>
                  <div className="overflow-x-auto border border-gray-200 rounded">
                    <table className="w-full text-left border-collapse text-[10px]">
                      <thead>
                        <tr className="bg-gray-100 border-b font-bold text-gray-700">
                          <th className="p-1.5">Sr No.</th><th className="p-1.5">Department</th><th className="p-1.5">Group</th><th className="p-1.5">Practice</th><th className="p-1.5">Vendor</th><th className="p-1.5">Product Name</th><th className="p-1.5">Practice Multiplier</th><th className="p-1.5">% Multiplier</th><th className="p-1.5">KPI Target</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-gray-600 font-medium">
                        {[
                          ['1', 'Technical', 'AI', 'Automation', 'Turbonomic'],
                          ['101', 'Technical', 'AI', 'Automation', 'UiPath Platform'],
                          ['101', 'Technical', 'AI', 'Data Science', 'Jira'],
                        ].map(([sr, dept, group, practice, product], i) => (
                          <tr key={i}>
                            <td className="p-1.5 text-center bg-gray-50/50">{sr}</td>
                            <td className="p-1.5">{dept}</td>
                            <td className="p-1.5">{group}</td>
                            <td className="p-1.5">{practice}</td>
                            <td className="p-1.5"></td>
                            <td className="p-1.5 text-blue-600 font-bold">{product}</td>
                            <td className="p-1.5"></td>
                            <td className="p-1"><select className="border border-gray-300 rounded px-1 py-0.5 bg-white h-[24px]"><option>Select</option></select></td>
                            <td className="p-1.5"></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <div className="font-semibold text-gray-600 mb-1">Services:</div>
                  <EmptyTable
                    headers={['Sr No.', 'Department', 'Group', 'Practice', 'Vendor', 'Service Name', 'Practice Multiplier', '% Multiplier', 'KPI Target', 'KPI Actual', 'Bonus Target']}
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-[13px] font-bold text-gray-800 mb-2">Practices:</h3>
              <div className="overflow-x-auto border border-gray-200 rounded">
                <table className="w-full text-left border-collapse text-[10.5px]">
                  <thead>
                    <tr className="bg-gray-100 text-gray-700 font-bold border-b border-gray-200">
                      <th className="p-2 w-14 text-center">Sr No.</th>
                      <th className="p-2">Department</th>
                      <th className="p-2">Group</th>
                      <th className="p-2">Practice</th>
                      <th className="p-2">Practice Multiplier</th>
                      <th className="p-2">% Multiplier</th>
                      <th className="p-2">KPI Target</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-600">
                    {[
                      ['1', 'Corporate', 'R & D', 'Fabrico'],
                      ['101', 'Corporate', 'R & D', 'Surgiverse'],
                      ['101', 'Sales', 'Energy', 'Energy'],
                    ].map(([sr, dept, group, practice], i) => (
                      <tr key={i}>
                        <td className="p-2 text-center bg-gray-50/50">{sr}</td><td className="p-2">{dept}</td><td className="p-2">{group}</td><td className="p-2 font-semibold text-blue-600">{practice}</td><td className="p-2"></td>
                        <td className="p-1"><select className="border border-gray-300 rounded px-1.5 py-0.5 bg-white h-[24px]"><option>Select</option></select></td>
                        <td className="p-2"></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-[13px] font-bold text-gray-800 mb-2">Customers:</h3>
              <div className="overflow-x-auto border border-gray-200 rounded">
                <table className="w-full text-left border-collapse">
                  <thead><tr className="bg-gray-100 border-b border-gray-200 text-gray-700 font-bold"><th className="p-2 w-14 text-center">Sr No.</th><th className="p-2">Customer Name</th></tr></thead>
                  <tbody className="divide-y divide-gray-100 text-gray-600">
                    {[
                      ['1', 'Albert Einstein Health System'],
                      ['101', 'Aqua America, Inc.'],
                      ['101', 'Armstrong Group of Companies'],
                    ].map(([sr, name], i) => (
                      <tr key={i}><td className="p-2 text-center bg-gray-50/50">{sr}</td><td className="p-2 text-blue-600 font-bold">{name}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-[13px] font-bold text-gray-800 mb-2">Partners:</h3>
              <div className="overflow-x-auto border border-gray-200 rounded">
                <table className="w-full text-left border-collapse text-[10.5px]">
                  <thead><tr className="bg-gray-100 border-b font-bold text-gray-700"><th className="p-2 w-14 text-center">Sr No.</th><th className="p-2">Partner Name</th><th className="p-2">Practice Multiplier</th><th className="p-2">% Multiplier</th><th className="p-2">KPI Target</th><th className="p-2">KPI Actual</th><th className="p-2">Bonus Target</th></tr></thead>
                  <tbody className="divide-y divide-gray-100 text-gray-600 font-medium">
                    {[
                      ['1', 'CAS/Severn'],
                      ['101', 'TechData'],
                      ['101', 'Ingram Micro'],
                    ].map(([sr, name], i) => (
                      <tr key={i}>
                        <td className="p-2 text-center bg-gray-50/50">{sr}</td><td className="p-2 text-blue-600 font-bold">{name}</td><td className="p-2"></td>
                        <td className="p-1"><select className="border border-gray-300 rounded px-1 py-0.5 bg-white h-[24px]"><option>Select</option></select></td>
                        <td className="p-2"></td><td className="p-2"></td><td className="p-2"></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>

      <FloatingChatButton />
    </div>
  );
}
