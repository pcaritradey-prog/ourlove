import React from 'react';
import { Heart, Smile, Coffee, Infinity as InfinityIcon } from 'lucide-react';

export const MilestoneStats: React.FC = () => {
  const stats = [
    {
      id: 'stat-1',
      title: 'Days of Pure Bliss',
      value: '2026-05-12',
      icon: <Heart className="w-5 h-5 fill-pink-400" />,
      iconBg: 'bg-pink-100 text-pink-600',
    },
    {
      id: 'stat-2',
      title: 'Your Voice',
      value: 'The happiest part of my day.',
      icon: <Smile className="w-5 h-5" />,
      iconBg: 'bg-rose-100 text-rose-600',
    },
    {
      id: 'stat-3',
      title: 'My Safe Place',
      value: 'Where I feel safe, calm, and completely at home with you.',
      icon: <Coffee className="w-5 h-5" />,
      iconBg: 'bg-amber-100 text-amber-700',
    },
    {
      id: 'stat-4',
      title: 'Future Together',
      value: 'One Forever Promise.',
      icon: <InfinityIcon className="w-5 h-5" />,
      iconBg: 'bg-purple-100 text-purple-600',
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-pink-200/60">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="p-4 rounded-2xl bg-white/60 border border-pink-100 flex flex-col items-center text-center"
        >
          <div className={`p-2.5 rounded-full ${stat.iconBg} mb-2`}>
            {stat.icon}
          </div>
          <span className="text-xs text-rose-700/80 uppercase tracking-wider font-medium">
            {stat.title}
          </span>
          <span className="font-serif text-lg sm:text-xl font-semibold text-rose-950 mt-0.5">
            {stat.value}
          </span>
        </div>
      ))}
    </div>
  );
};
