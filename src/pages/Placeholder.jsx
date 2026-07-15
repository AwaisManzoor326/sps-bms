import ConstructionIcon from '@mui/icons-material/Construction';

export default function Placeholder({ title }) {
  return (
    <div className="w-full max-w-[1920px] mx-auto p-8 bg-white flex-1 flex items-center justify-center">
      <div className="text-center text-gray-400 max-w-md">
        <ConstructionIcon sx={{ fontSize: 40 }} className="mb-3" />
        <h2 className="text-lg font-semibold text-gray-600 mb-1">{title}</h2>
        <p className="text-sm">
          in progress...
        </p>
      </div>
    </div>
  );
}
