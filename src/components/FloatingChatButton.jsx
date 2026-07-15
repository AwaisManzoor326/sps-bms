import ChatIcon from '@mui/icons-material/Chat';

export default function FloatingChatButton({ className = 'bottom-6' }) {
  return (
    <div className={`fixed ${className} right-6 z-[99999]`}>
      <button
        type="button"
        className="w-12 h-12 bg-[#2c72b8] hover:bg-[#235d97] text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 focus:outline-none"
      >
        <ChatIcon sx={{ fontSize: 20 }} />
      </button>
    </div>
  );
}
