import PersonIcon from '@mui/icons-material/Person';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import UploadFileIcon from '@mui/icons-material/UploadFile';

function Card({ title, action, children, className = '' }) {
  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden ${className}`}>
      <div className="bg-[#2c72b8] text-white px-4 py-2.5 text-sm font-semibold tracking-wide flex items-center justify-between">
        <span>{title}</span>
        {action}
      </div>
      {children}
    </div>
  );
}

function AddButton({ children }) {
  return (
    <button type="button" className="text-[11px] bg-white/20 hover:bg-white/30 text-white px-2 py-0.5 rounded transition-colors">
      {children}
    </button>
  );
}

function EmptyRowsTable({ headers, colSpan, message, className = '' }) {
  return (
    <div className={`flex-grow overflow-auto ${className}`}>
      <table className="w-full text-left border-collapse text-xs">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-200 text-gray-600 font-semibold">
            {headers.map((h) => (
              <th key={h} className="p-2.5">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-500">
          <tr className="border-b border-gray-100">
            <td className="p-2.5 italic text-center" colSpan={colSpan ?? headers.length}>{message}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function TextInput({ label, hint, gray = false, ...props }) {
  return (
    <div>
      <label className="block text-gray-600 font-medium mb-1">
        {label} {hint && <span className="text-red-500 font-normal">{hint}</span>}
      </label>
      <input
        className={`w-full ${gray ? 'bg-gray-50' : ''} border border-gray-300 rounded px-3 py-2 focus:ring-1 focus:ring-blue-400 outline-none`}
        {...props}
      />
    </div>
  );
}

export default function Profile() {
  return (
    <div className="max-w-[1600px] mx-auto p-6 bg-[#f4f6f9] flex-1 w-full">
      <div className="flex items-center space-x-2 text-xl font-bold text-gray-800 mb-6">
        <div className="flex flex-col space-y-1 justify-center items-start w-6 h-6">
          <span className="w-5 h-1 bg-gray-800 rounded-sm"></span>
          <span className="w-4 h-1 bg-gray-800 rounded-sm"></span>
          <span className="w-5 h-1 bg-gray-800 rounded-sm"></span>
        </div>
        <span className="tracking-tight">My Profile</span>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          <Card title="Employee Info" className="lg:col-span-3">
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <TextInput label="Name:" name="name" gray />
              <TextInput label="Group:" name="group" defaultValue="Administrative" gray />
              <TextInput label="Location:" name="location" defaultValue="PK" gray />
              <TextInput label="Date of Hire:" name="date_of_hire" gray />
              <TextInput label="Level:" name="level" gray />
              <TextInput label="Status:" name="status" defaultValue="Full-time" gray />
            </div>
          </Card>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col">
            <div className="bg-[#2c72b8] text-white px-4 py-2.5 text-sm font-semibold tracking-wide text-center">
              Profile Picture
            </div>
            <div className="p-4 flex-grow flex flex-col items-center justify-center space-y-3">
              <div className="w-24 h-24 rounded-full bg-gray-100 border border-gray-300 overflow-hidden flex items-center justify-center relative group">
                <PersonIcon sx={{ fontSize: 48 }} className="text-gray-400" />
              </div>
              <label className="text-[11px] text-[#2c72b8] hover:underline cursor-pointer font-medium flex items-center space-x-1">
                <PhotoCameraIcon sx={{ fontSize: 13 }} />
                <span>Add Profile Picture</span>
                <input type="file" name="profile_pic" className="hidden" />
              </label>
            </div>
          </div>
        </div>

        <Card title="Contact Information" className="mb-6">
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <TextInput label="Mobile No:" name="mobile_no" />
            <TextInput label="Emergency No:" name="emergency_no" />
            <TextInput label="Home No:" name="home_no" />
            <TextInput label="Email:" name="email" type="email" gray />
          </div>
        </Card>

        <Card title="Supervisor" className="mb-6">
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <TextInput label="Name:" name="supervisor_name" gray />
            <TextInput label="Email:" name="supervisor_email" type="email" gray />
          </div>
        </Card>

        <Card title="Resume" className="mb-6">
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Upload Resume <span className="text-red-500 font-normal">(Format: .doc, .docx, .pdf)</span>
              </label>
              <div className="flex items-center space-x-2">
                <label className="bg-[#2c72b8] hover:bg-[#235d97] text-white font-medium px-4 py-2 rounded shadow cursor-pointer transition-colors flex items-center space-x-1.5">
                  <UploadFileIcon sx={{ fontSize: 14 }} />
                  <span>Select File</span>
                  <input type="file" name="resume_doc" className="hidden" />
                </label>
                <span className="text-gray-400 italic">No file chosen</span>
              </div>
            </div>
            <TextInput label="LinkedIn Url:" name="linkedin_url" type="url" placeholder="https://linkedin.com/in/username" />
          </div>
        </Card>

        <Card title="Bio" className="mb-6">
          <div className="p-4 text-xs">
            <label className="block text-gray-600 font-medium mb-1">Bio:</label>
            <textarea name="user_bio" rows={4} className="w-full border border-gray-300 rounded p-3 focus:ring-1 focus:ring-blue-400 outline-none resize-none" />
          </div>
        </Card>

        <div className="mb-8">
          <button type="submit" className="bg-[#2c72b8] hover:bg-[#235d97] text-white text-xs font-semibold px-6 py-2 rounded shadow transition-colors">
            Update Profile
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card title="Attachments" action={<AddButton>Add New</AddButton>} className="flex flex-col h-[280px]">
            <EmptyRowsTable headers={['Sr', 'Title']} message="No data found in rows context." />
          </Card>

          <Card title="Communication Skills" action={<AddButton>Add New</AddButton>} className="flex flex-col h-[280px]">
            <EmptyRowsTable
              headers={['Sr', 'Added By', 'Speaking', 'Writing', 'Listening', 'Date', 'Action']}
              message="No records updated."
            />
          </Card>
        </div>

        <Card title="Employee Roles" className="mb-6 h-[240px] flex flex-col">
          <EmptyRowsTable headers={['Sr No.', 'Group', 'Practice', 'Product', 'Role', 'Rank']} message="No assigned roles active." />
        </Card>

        <Card title="Certifications" action={<AddButton>Add Certification</AddButton>} className="mb-6 h-[240px] flex flex-col">
          <EmptyRowsTable
            headers={['Sr', 'Vendor', 'Group', 'Practice', 'Product', 'Title', 'Code', 'URL', 'Type', 'Completed On']}
            message="No certificates registered."
          />
        </Card>

        <Card title="Badges & Accreditation" action={<AddButton>Add Badge</AddButton>} className="mb-4 h-[240px] flex flex-col">
          <EmptyRowsTable
            headers={['Sr', 'Vendor', 'Group', 'Practice', 'Product', 'Title', 'URL', 'Completed On', 'Action']}
            message="No recorded entries."
          />
        </Card>

      </form>

      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-[#0b5ed7] hover:bg-[#0a58ca] text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-105 focus:outline-none relative">
          <div className="w-6 h-5 border-2 border-white rounded-md flex items-center justify-center p-0.5 relative">
            <div className="flex space-x-0.5">
              <span className="w-1 h-1 bg-white rounded-full"></span>
              <span className="w-1 h-1 bg-white rounded-full"></span>
              <span className="w-1 h-1 bg-white rounded-full"></span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
