import React from 'react';
import BBSCard from '@/app/components/BBSCard';
import { BBSData } from '@/app/types';

interface BBSAllDataProps {
  bbsAllData: BBSData[];
}
const BbsCardList = ({bbsAllData}: BBSAllDataProps) => {
  return (
    <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      {bbsAllData.map((bbsData: BBSData) => (
        <BBSCard key={bbsData.id} bbsData={bbsData}/>
      ))}
    </div>
  );
};

export default BbsCardList;