
import React from "react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from "recharts";

interface Benefit {
  name: string;
  value: number;
}

interface BenefitsChartProps {
  benefits: Benefit[];
}

// Map benefit names to colors
const getBenefitColor = (name: string) => {
  const nameLower = name.toLowerCase();
  
  if (nameLower.includes("immune") || nameLower.includes("antiviral")) return "#10b981"; // emerald-500
  if (nameLower.includes("circulation") || nameLower.includes("heart")) return "#ea384c"; // red
  if (nameLower.includes("digestive") || nameLower.includes("stomach")) return "#a3e635"; // lime-400
  if (nameLower.includes("sleep") || nameLower.includes("relax")) return "#8b5cf6"; // violet-500
  if (nameLower.includes("inflammation") || nameLower.includes("pain")) return "#f97316"; // orange-500
  if (nameLower.includes("energy") || nameLower.includes("adaptogenic")) return "#0ea5e9"; // sky-500
  
  // Default color
  return "#f59e0b"; // amber-500
};

const BenefitsChart = ({ benefits }: BenefitsChartProps) => {
  // If no benefits, show a message
  if (!benefits || benefits.length === 0) {
    return <p className="text-sm text-gray-500 py-2">No benefit data available</p>;
  }

  return (
    <div className="w-full h-[180px] text-xs">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={benefits}
          margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
          <XAxis 
            type="number" 
            domain={[0, 100]} 
            tickCount={6} 
            tick={{ fontSize: 10 }} 
          />
          <YAxis 
            dataKey="name" 
            type="category" 
            tick={{ fontSize: 10 }} 
            width={100}
          />
          <Tooltip 
            formatter={(value) => [`${value}%`, 'Effectiveness']}
            labelStyle={{ fontSize: 11 }}
            contentStyle={{ fontSize: 11 }}
          />
          <Bar 
            dataKey="value" 
            radius={[0, 4, 4, 0]} 
            barSize={12}
            label={{ position: 'right', fontSize: 10 }}
            isAnimationActive={true}
          >
            {benefits.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={getBenefitColor(entry.name)} 
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BenefitsChart;
