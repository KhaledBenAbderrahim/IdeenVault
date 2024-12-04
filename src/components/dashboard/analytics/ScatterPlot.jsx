import React from 'react';
import { Scatter } from 'react-chartjs-2';

export default function ScatterPlot({ data, options }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Risiko vs. Attraktivität Matrix</h3>
      <div className="h-96">
        <Scatter data={data} options={options} />
      </div>
    </div>
  );
}