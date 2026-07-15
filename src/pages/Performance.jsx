import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ReorderIcon from '@mui/icons-material/Reorder';
import loadChartJs from '../hooks/loadChartJs';
import FloatingChatButton from '../components/FloatingChatButton';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const zeros12 = new Array(12).fill(0);

function ChartPanel({ title, canvasRef }) {
  return (
    <div className="bg-white border border-gray-200 rounded relative p-3">
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold text-gray-700 text-[12px] w-full text-center">{title}</span>
        <ReorderIcon sx={{ fontSize: 13 }} className="text-gray-400 cursor-pointer flex-shrink-0" />
      </div>
      <div className="h-64"><canvas ref={canvasRef} /></div>
    </div>
  );
}

function GridCard({ title, desc, uppercase, selected }) {
  return (
    <div className={`border rounded-lg bg-white p-3 text-center transition-all ${selected ? 'bg-green-700 text-white border-green-800 flex flex-col justify-center items-center' : 'border-slate-300'}`}>
      <div className={`font-bold text-[11px] mb-1 ${uppercase ? 'uppercase' : ''} ${selected ? '' : 'text-gray-800'}`}>{title}</div>
      <div className={`text-[10px] ${selected ? 'text-white/90' : 'text-gray-500'}`}>{desc}</div>
    </div>
  );
}

function InfoTag({ title, desc }) {
  return (
    <div className="border border-sky-300 bg-sky-50 text-sky-700 rounded-md p-2.5 text-center text-[10.5px]">
      <div className="font-bold uppercase mb-0.5">{title}</div>
      <div>{desc}</div>
    </div>
  );
}

const monitorCards = [
  { title: 'Too New', desc: 'Employee with less than 06 months of employment.' },
  { title: 'Move', desc: 'Due to performance or organizational reasons. Employee to be moved out of current role.' },
  { title: 'Monitor', desc: 'Employee with low performance. Might consider putting on performance improvement plan.' },
  { title: 'Develop in Place', desc: 'Well placed, solid, valued performer with ability to expand in current role.' },
  { title: 'Top Performance', desc: 'Best in class with potential and interest to take on bigger/higher roles in future.' },
  { title: 'High Potential', desc: 'Highest level of performance and potential.', selected: true },
];

const questionTags = [
  { title: 'Performance', desc: 'Where is the employee performance rating in the last 03 Years?' },
  { title: 'Ambition', desc: "What are your employee's current and future goals?" },
  { title: 'Runway', desc: 'How capable is the employee to advance to new role?' },
  { title: 'Leadership', desc: 'Does your employee demonstrate leadership characteristics?' },
  { title: 'Agility', desc: 'How flexible and adaptive is your employee? How do they deal with change?' },
  { title: 'Influence', desc: 'Do fellow colleagues/team value his/her opinion?' },
];

const potentialAssessmentCards = [
  { title: 'Critical Role', desc: 'Positions that are crucial to achievement of organizations outcomes.' },
  { title: 'Flight Risk', desc: 'Refers to the degree to which an Employee appears they may be ready to leave the company as perceived by manager.' },
  { title: 'Successor', desc: 'Employees who have knowledge, skills and abilities to step into the roles within your team/department.' },
  { title: 'Hard to fill role', desc: 'Roles that require specialized skills or background that is in high demand, or it is a highly challenging role description.', selected: true },
];

const potentialPerformanceMain = [
  { title: 'Risk', desc: 'Low Potential/Low Performance' },
  { title: 'Inconsistent Player', desc: 'Moderate Potential/Low Performance' },
  { title: 'Average Performer', desc: 'Low Potential/Moderate Performance' },
  { title: 'Potential Gem', desc: 'High Potential/Low Performance' },
  { title: 'Core Player', desc: 'Moderate Potential/Moderate Performance' },
  { title: 'Solid Performer', desc: 'Low Potential/High Performance' },
];

const potentialPerformanceSub = [
  { title: 'High Potential', desc: 'High Potential/Moderate Performance' },
  { title: 'High Performer', desc: 'Moderate Potential/High Performance' },
  { title: 'Star', desc: 'High Potential/High Performance', selected: true },
];

export default function Performance() {
  const revenueRef = useRef(null);
  const utilizationRef = useRef(null);
  const certificationsRef = useRef(null);
  const communicationRef = useRef(null);
  const chartsRef = useRef([]);

  useEffect(() => {
    let cancelled = false;

    loadChartJs().then(() => {
      if (cancelled || !window.Chart) return;
      const Chart = window.Chart;

      chartsRef.current = [
        new Chart(revenueRef.current, {
          type: 'bar',
          data: {
            labels: months,
            datasets: [
              { label: 'Margin', data: months.map(() => -2500), backgroundColor: '#6ba2d6' },
              { label: 'Revenue', data: zeros12, backgroundColor: '#2c3e50' },
            ],
          },
          options: { responsive: true, maintainAspectRatio: false, scales: { y: { min: -2500, max: 0 } } },
        }),
        new Chart(utilizationRef.current, {
          type: 'line',
          data: { labels: months, datasets: [{ label: 'Utilization', data: zeros12, borderColor: '#6ba2d6', fill: false }] },
          options: { responsive: true, maintainAspectRatio: false, scales: { y: { min: 0, max: 100 } } },
        }),
        new Chart(certificationsRef.current, {
          type: 'bar',
          data: { labels: months, datasets: [{ label: 'Certification', data: zeros12, backgroundColor: '#6ba2d6' }] },
          options: { responsive: true, maintainAspectRatio: false, scales: { y: { min: 0, max: 5 } } },
        }),
        new Chart(communicationRef.current, {
          type: 'line',
          data: { labels: months, datasets: [{ label: 'Communication Skills', data: zeros12, borderColor: '#6ba2d6', fill: false }] },
          options: { responsive: true, maintainAspectRatio: false, scales: { y: { min: 0, max: 5 } } },
        }),
      ];
    });

    return () => {
      cancelled = true;
      chartsRef.current.forEach((c) => c.destroy());
      chartsRef.current = [];
    };
  }, []);

  return (
    <div className="w-full max-w-[1920px] mx-auto p-5 bg-[#fbfbfb] flex-1 font-sans text-xs select-none pb-24 relative">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 bg-white p-3 rounded border border-gray-200 shadow-2xs">
        <div className="flex items-center space-x-2 text-base font-bold text-gray-800 tracking-tight">
          <ShowChartIcon sx={{ fontSize: 15 }} className="text-gray-600" />
          <span>Performance Data Awais Manzoor</span>
        </div>

        <div className="flex items-center space-x-1.5 sm:ml-auto">
          <Link to="/timelive-blog" className="bg-[#5cb85c] hover:bg-[#4cae4c] text-white font-medium px-3 py-1 rounded text-[11px] h-[26px] inline-flex items-center">TimeLive</Link>
          <button type="button" className="bg-[#5cb85c] hover:bg-[#4cae4c] text-white font-medium px-3 py-1 rounded text-[11px] h-[26px]">Demand</button>
          <Link to="/" className="bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300 font-medium px-3 py-1 rounded text-[11px] h-[26px] inline-flex items-center">Back</Link>
        </div>
      </div>

      <div className="flex items-center space-x-2 mb-4 bg-white p-2.5 rounded border border-gray-100">
        <label className="font-bold text-gray-600 text-[11px]">Year:</label>
        <select className="border border-gray-300 rounded px-2 py-0.5 bg-white text-gray-700 font-medium outline-none h-[24px] w-24">
          <option>2026</option>
          <option>2025</option>
          <option>2024</option>
        </select>
        <button type="button" className="bg-[#2c72b8] hover:bg-[#235d97] text-white px-3 py-0.5 rounded font-semibold text-[11px] h-[24px]">Show</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
        <ChartPanel title="Revenue and Margin" canvasRef={revenueRef} />
        <ChartPanel title="Percent Utilization" canvasRef={utilizationRef} />
        <ChartPanel title="No of Certifications" canvasRef={certificationsRef} />
        <ChartPanel title="Communication Skills" canvasRef={communicationRef} />
      </div>

      <div className="bg-white rounded border border-gray-200 overflow-hidden shadow-2xs mb-5">
        <div className="bg-[#3e88b3] text-white font-bold text-[12px] px-3 py-1.5">Skills Matrix</div>
        <div className="p-4 min-h-[140px] bg-white text-center text-gray-400 italic flex items-center justify-center">
          [ Dynamic Core Competency Mapping Evaluation Grid Panel Layout Empty State ]
        </div>
      </div>

      <div className="bg-white rounded border border-gray-200 overflow-hidden shadow-2xs mb-5">
        <div className="bg-[#3e88b3] text-white font-bold text-[12px] px-3 py-1.5">Performance Monitor</div>
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {monitorCards.map((c) => (
              <GridCard key={c.title} title={c.title} desc={c.desc} uppercase selected={c.selected} />
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
            {questionTags.map((t) => (
              <InfoTag key={t.title} title={t.title} desc={t.desc} />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded border border-gray-200 overflow-hidden shadow-2xs mb-5">
        <div className="bg-[#3e88b3] text-white font-bold text-[12px] px-3 py-1.5">Employee Potential Assessment</div>
        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {potentialAssessmentCards.map((c) => (
              <GridCard key={c.title} title={c.title} desc={c.desc} selected={c.selected} />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded border border-gray-200 overflow-hidden shadow-2xs mb-5">
        <div className="bg-[#3e88b3] text-white font-bold text-[12px] px-3 py-1.5">Employee Potential Performance</div>
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {potentialPerformanceMain.map((c) => (
              <GridCard key={c.title} title={c.title} desc={c.desc} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-4xl mx-auto pt-1">
            {potentialPerformanceSub.map((c) => (
              <GridCard key={c.title} title={c.title} desc={c.desc} selected={c.selected} />
            ))}
          </div>
        </div>
      </div>

      <FloatingChatButton />
    </div>
  );
}
