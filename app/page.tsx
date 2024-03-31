import BBSCardList from '@/app/components/BBSCardList';
import { BBSData } from '@/app/types';

async function getBbsAllData() {
  const response = await fetch('http://localhost:3000/api/post', {
    cache: 'no-store',
  })

  const bbsAllData: BBSData[] = await response.json();
  return bbsAllData;
}

export default async function Home() {
  const bbsAllData = await getBbsAllData();
  return (
    <main>
      <BBSCardList bbsAllData={bbsAllData}/>
    </main>
  );
}
