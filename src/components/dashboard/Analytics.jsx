import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { LightBulbIcon, BoltIcon, ExclamationTriangleIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { mockIdeas } from '../../data/mockIdeas';
import KPICard from './analytics/KPICard';
import ScatterPlot from './analytics/ScatterPlot';
import StatusDistribution from './analytics/StatusDistribution';
import PhaseProgress from './analytics/PhaseProgress';
import RadarChart from './analytics/RadarChart';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function Analytics() {
  useEffect(() => {
    return () => {
      const charts = Object.values(ChartJS.instances);
      charts.forEach(chart => chart.destroy());
    };
  }, []);

  // Calculate metrics
  const totalIdeas = mockIdeas.length;
  const activeIdeas = mockIdeas.filter(idea => idea.status === 'Aktiv').length;
  const inProgressIdeas = mockIdeas.filter(idea => idea.status === 'In Entwicklung').length;
  const openIdeas = mockIdeas.filter(idea => idea.status === 'Offen').length;
  const highPriorityIdeas = mockIdeas.filter(idea => idea.priority === 'Hoch').length;
  const aiIdeas = mockIdeas.filter(idea => idea.aiInfluence).length;
  const avgRisk = (mockIdeas.reduce((sum, idea) => sum + idea.risk, 0) / totalIdeas).toFixed(2);
  const avgAttractiveness = (mockIdeas.reduce((sum, idea) => sum + idea.attractiveness, 0) / totalIdeas).toFixed(2);

  // Calculate phase distribution
  const phases = ['Konzept', 'Entwicklung', 'Test', 'Produktion'];
  const phaseData = phases.map(phase => 
    mockIdeas.filter(idea => idea.phase === phase).length
  );

  // Radar chart data
  const radarData = {
    current: [4.2, 3.8, 3.5, 4.0, 3.2, 4.5],
    benchmark: [3.8, 3.5, 3.8, 3.5, 3.0, 4.0]
  };

  // Scatter plot data
  const scatterData = {
    datasets: [{
      label: 'Ideen nach Risiko und Attraktivität',
      data: mockIdeas.map(idea => ({
        x: idea.risk,
        y: idea.attractiveness,
        title: idea.title,
        priority: idea.priority,
        phase: idea.phase
      })),
      backgroundColor: mockIdeas.map(idea => {
        switch(idea.priority) {
          case 'Hoch': return 'rgba(16, 185, 129, 0.8)';
          case 'Mittel': return 'rgba(16, 185, 129, 0.6)';
          default: return 'rgba(16, 185, 129, 0.4)';
        }
      }),
      borderColor: 'rgba(16, 185, 129, 1)',
      pointRadius: 8,
      pointHoverRadius: 12,
      borderWidth: 2,
      pointStyle: 'circle',
      pointBorderColor: 'white',
      pointBorderWidth: 2,
      showLine: false
    }]
  };

  const scatterOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const { x, y, title, priority, phase } = context.raw;
            return [
              `Titel: ${title}`,
              `Risiko: ${x}`,
              `Attraktivität: ${y}`,
              `Priorität: ${priority}`,
              `Phase: ${phase}`
            ];
          }
        }
      }
    },
    scales: {
      x: {
        reverse: true,
        title: {
          display: true,
          text: 'Risiko',
          font: { size: 14, weight: 'bold', family: 'Inter' }
        },
        min: 0.5,
        max: 3.5,
        grid: { display: false }
      },
      y: {
        title: {
          display: true,
          text: 'Attraktivität',
          font: { size: 14, weight: 'bold', family: 'Inter' }
        },
        min: 1,
        max: 3.5,
        grid: { display: false }
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="py-6">
        <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Überblick über die wichtigsten Leistungskennzahlen und Trends
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Gesamtideen"
          value={totalIdeas}
          icon={<LightBulbIcon className="h-6 w-6 text-emerald-600" />}
          trend
          trendValue={15}
        />
        <KPICard
          title="Aktive Ideen"
          value={activeIdeas}
          icon={<BoltIcon className="h-6 w-6 text-emerald-600" />}
          trend
          trendValue={8}
        />
        <KPICard
          title="Durchschn. Risiko"
          value={avgRisk}
          icon={<ExclamationTriangleIcon className="h-6 w-6 text-emerald-600" />}
          trend
          trendValue={-5}
        />
        <KPICard
          title="Durchschn. Attraktivität"
          value={avgAttractiveness}
          icon={<SparklesIcon className="h-6 w-6 text-emerald-600" />}
          trend
          trendValue={12}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <StatusDistribution
          data={{ activeIdeas, inProgressIdeas, openIdeas }}
        />
        <PhaseProgress data={phaseData} />
        <RadarChart data={radarData} />
      </div>

      {/* Scatter Plot Row */}
      <div className="w-full">
        <ScatterPlot data={scatterData} options={scatterOptions} />
      </div>
    </motion.div>
  );
}