export const getChartConfig = (isMobile = false) => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        padding: isMobile ? 10 : 20,
        usePointStyle: true,
        font: { 
          size: isMobile ? 10 : 12,
          family: 'Inter' 
        }
      }
    }
  },
  scales: {
    r: {
      angleLines: {
        display: true,
        color: 'rgba(0, 0, 0, 0.1)'
      },
      suggestedMin: 0,
      suggestedMax: 5,
      ticks: {
        font: {
          size: isMobile ? 8 : 10,
          family: 'Inter'
        }
      },
      pointLabels: {
        font: {
          size: isMobile ? 8 : 10,
          family: 'Inter'
        }
      }
    }
  }
});

export const getScatterConfig = (isMobile = false) => ({
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
    },
    legend: {
      labels: {
        font: {
          size: isMobile ? 10 : 12,
          family: 'Inter'
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
        font: { 
          size: isMobile ? 10 : 12, 
          weight: 'bold', 
          family: 'Inter' 
        }
      },
      min: 0.5,
      max: 3.5,
      grid: { display: false },
      ticks: {
        font: {
          size: isMobile ? 8 : 10,
          family: 'Inter'
        }
      }
    },
    y: {
      title: {
        display: true,
        text: 'Attraktivität',
        font: { 
          size: isMobile ? 10 : 12, 
          weight: 'bold', 
          family: 'Inter' 
        }
      },
      min: 1,
      max: 3.5,
      grid: { display: false },
      ticks: {
        font: {
          size: isMobile ? 8 : 10,
          family: 'Inter'
        }
      }
    }
  }
});