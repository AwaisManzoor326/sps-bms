import { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useCKEditor from '../hooks/useCKEditor';

const questionnaireDefault = `
  <p><strong>Lorem Ipsum Dummy Header Text</strong></p>
  <p>This is dynamic template placeholder content built dynamically using PHP and Tailwind CSS.</p>
  <p>You can edit this data, change font structures, clear blocks, or formatting using upper custom menu controls bar intuitively.</p>
`;

export default function HrTalks() {
  const [sendEmail, setSendEmail] = useState(false);

  useCKEditor(
    'editor1',
    {
      height: 'calc(100vh - 310px)',
      uiColor: '#f3f4f6',
      removePlugins: 'elementspath,resize',
      toolbarGroups: [
        { name: 'styles', groups: ['styles', 'format', 'font', 'size'] },
        { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
        { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
        { name: 'insert', groups: ['insert'] },
        { name: 'links', groups: ['links'] },
        { name: 'document', groups: ['mode', 'document', 'doctools'] },
        { name: 'tools', groups: ['tools'] },
      ],
    },
    'https://cdn.ckeditor.com/4.22.1/standard-all/ckeditor.js'
  );

  return (
    <div className="h-full w-full max-w-[1600px] mx-auto px-6 py-3 bg-white flex-1 flex flex-col justify-between overflow-hidden">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xl font-bold text-gray-800">
            <div className="flex flex-col space-y-1 justify-center items-start w-6 h-6">
              <span className="w-5 h-1 bg-gray-800 rounded-sm"></span>
              <span className="w-4 h-1 bg-gray-800 rounded-sm"></span>
              <span className="w-5 h-1 bg-gray-800 rounded-sm"></span>
            </div>
            <span className="tracking-tight">HR Talk</span>
          </div>

          <button className="bg-[#2c72b8] hover:bg-[#235d97] text-white text-xs font-medium px-4 py-1.5 rounded shadow transition-colors">
            Send Email
          </button>
        </div>

        <div>
          <button className="bg-[#2c72b8] hover:bg-[#235d97] text-white text-xs font-medium px-5 py-1.5 rounded shadow transition-colors">
            Close
          </button>
        </div>

        <div className="w-full bg-gray-100 border border-gray-300 rounded px-2 py-1 flex items-center justify-between text-[10px] text-gray-500">
          <ArrowBackIosNewIcon sx={{ fontSize: 12 }} className="text-gray-400 cursor-pointer" />
          <ArrowForwardIosIcon sx={{ fontSize: 12 }} className="text-gray-400 cursor-pointer" />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700">Questionnaire:</label>
        </div>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col flex-grow justify-between overflow-hidden mt-1">
        <div className="border border-gray-300 rounded shadow-sm overflow-hidden flex-grow relative">
          <textarea
            name="questionnaire_content"
            id="editor1"
            defaultValue={questionnaireDefault}
          ></textarea>
        </div>

        <div className="py-3 flex items-center space-x-4 border-t border-gray-100 bg-white z-10">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="sendEmailCheckbox"
              name="send_email_direct"
              checked={sendEmail}
              onChange={(e) => setSendEmail(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="sendEmailCheckbox" className="text-xs font-medium text-gray-700 cursor-pointer select-none">
              Send Email
            </label>
          </div>

          <button type="submit" className="bg-[#2c72b8] hover:bg-[#235d97] text-white text-xs font-medium px-6 py-1.5 rounded shadow transition-colors">
            Save
          </button>
        </div>
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
