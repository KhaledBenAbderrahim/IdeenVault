import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
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

// Chart configurations
export const lineChartOptions = {
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: false
      }
    },
    x: {
      grid: {
        display: false
      }
    }
  }
};

export const barChartOptions = {
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: false
      }
    }
  }
};

export const scatterChartOptions = {
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Attraktivität'
      }
    },
    x: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Risiko'
      }
    }
  }
};