import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
  Filler
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
  Filler
);

// Configure default options
ChartJS.defaults.font.family = 'Inter';
ChartJS.defaults.responsive = true;
ChartJS.defaults.maintainAspectRatio = false;

// Mobile-friendly defaults
const isMobile = window.innerWidth < 640;
ChartJS.defaults.font.size = isMobile ? 10 : 12;
ChartJS.defaults.plugins.legend.labels.boxWidth = isMobile ? 8 : 12;
ChartJS.defaults.plugins.legend.labels.padding = isMobile ? 10 : 20;