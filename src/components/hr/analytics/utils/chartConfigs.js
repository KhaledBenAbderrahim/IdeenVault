export const lineChartConfig = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      mode: 'index',
      intersect: false,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      titleColor: '#1f2937',
      bodyColor: '#4b5563',
      borderColor: '#e5e7eb',
      borderWidth: 1,
      padding: 12,
      bodyFont: {
        family: 'Inter'
      },
      titleFont: {
        family: 'Inter',
        weight: 600
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: false
      },
      ticks: {
        font: {
          family: 'Inter'
        }
      }
    },
    x: {
      grid: {
        display: false
      },
      ticks: {
        font: {
          family: 'Inter'
        }
      }
    }
  }
};

export const doughnutChartConfig = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '70%',
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        padding: 20,
        font: {
          family: 'Inter'
        }
      }
    }
  }
};

export const scatterChartConfig = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          if (!context.raw) return '';
          const { title, phase, priority } = context.raw;
          return [
            `Titel: ${title}`,
            `Risiko: ${context.parsed.x.toFixed(1)}`,
            `Attraktivität: ${context.parsed.y.toFixed(1)}`,
            `Phase: ${phase}`,
            `Priorität: ${priority}`
          ];
        }
      }
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Risiko',
        font: {
          family: 'Inter',
          weight: 'bold'
        }
      },
      min: 0,
      max: 5
    },
    y: {
      title: {
        display: true,
        text: 'Attraktivität',
        font: {
          family: 'Inter',
          weight: 'bold'
        }
      },
      min: 0,
      max: 5
    }
  }
};