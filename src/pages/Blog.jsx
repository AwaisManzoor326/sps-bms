import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import useCKEditor from '../hooks/useCKEditor';
import FloatingChatButton from '../components/FloatingChatButton';

export default function Blog() {
  useCKEditor('blogRichEditorNode', {
    height: 240,
    removePlugins: 'elementspath',
    resize_enabled: false,
    versionCheck: false,
    toolbar: [
      { name: 'styles', items: ['Styles', 'Format', 'Font', 'Size'] },
      { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline'] },
      { name: 'undo', items: ['Undo', 'Redo'] },
      { name: 'clipboard', items: ['Cut', 'Copy', 'Paste'] },
      { name: 'search', items: ['Find', 'Replace'] },
      { name: 'indent', items: ['Outdent', 'Indent'] },
      { name: 'tools', items: ['Print'] },
      { name: 'list', items: ['NumberedList', 'BulletedList'] },
      { name: 'align', items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'] },
      { name: 'insert', items: ['Image', 'Table'] },
      { name: 'links', items: ['Link'] },
      { name: 'smiley', items: ['Smiley'] },
      { name: 'colors', items: ['TextColor', 'BGColor'] },
      { name: 'document', items: ['Source', 'Maximize'] },
    ],
  });

  return (
    <div className="w-full max-w-[1920px] mx-auto p-4 bg-[#f8f9fa] flex-1 text-xs font-sans flex flex-col justify-between relative">
      <div className="w-full flex-grow">
        <div className="bg-white rounded border border-gray-200 p-3 shadow-sm mb-3">
          <div className="flex items-center space-x-2 text-xl font-bold text-gray-700 mb-2 tracking-tight">
            <ReorderIcon sx={{ fontSize: 18 }} className="text-gray-600" />
            <span>View Employee Blog</span>
          </div>
          <Link
            to="/"
            className="bg-[#2c72b8] hover:bg-[#235d97] text-white font-medium px-4 py-1 rounded text-[11px] transition-colors shadow-sm inline-flex items-center h-[26px]"
          >
            Close
          </Link>
        </div>

        <div className="w-full bg-white border border-gray-200 rounded px-3 py-1 mb-3 flex items-center justify-between text-gray-400 select-none h-[24px]">
          <ChevronLeftIcon sx={{ fontSize: 14 }} className="cursor-pointer hover:text-gray-600" />
          <span className="text-[10px] tracking-tight">No active announcements or logs running...</span>
          <ChevronRightIcon sx={{ fontSize: 14 }} className="cursor-pointer hover:text-gray-600" />
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-white border border-gray-200 rounded shadow-xs overflow-hidden flex flex-col"
        >
          <div className="bg-gray-50/70 border-b border-gray-200 px-4 py-1.5 flex items-center h-[30px]">
            <span className="text-[11px] font-bold text-gray-700">Add New:</span>
          </div>

          <div className="p-3 bg-white flex-grow">
            <textarea name="blog_editor_content" id="blogRichEditorNode" rows={10} className="w-full"></textarea>
          </div>

          <div className="bg-gray-50/50 border-t border-gray-200 px-4 py-2 flex items-center h-[42px]">
            <button
              type="submit"
              name="save_blog"
              className="bg-[#2c72b8] hover:bg-[#235d97] text-white font-medium px-5 py-1 rounded text-[11px] transition-colors shadow-sm h-[26px]"
            >
              Save
            </button>
          </div>
        </form>
      </div>

      <FloatingChatButton />
    </div>
  );
}
