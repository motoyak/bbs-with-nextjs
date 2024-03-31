import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { BBSData } from '@/app/types';

interface BBSDataProps {
  bbsData: BBSData;
}
const BbsCard = ({bbsData}: BBSDataProps) => {
  const {id, title, content, createdAt, username} = bbsData;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{username}</CardDescription>
      </CardHeader>
      <CardContent>
        {content}
      </CardContent>
      <CardFooter className="flex justify-between text-blue-400">
        <Link href={`/bbs-posts/${id}`}>Read More</Link>
      </CardFooter>
    </Card>
  );
};

export default BbsCard;