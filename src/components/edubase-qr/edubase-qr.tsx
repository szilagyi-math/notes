'use client';

import QRCode from 'react-qr-code';
import { data } from 'latex-docs';
import { useEffect, useMemo, useState } from 'react';

interface EdubaseQRProps {}

const firstWeek = new Date('2024-09-02T00:00:00Z');
const formatWeek = (week: number) => {
  return `${week < 10 ? '0' : ''}${week}`;
};

const EdubaseQR = () => {
  const [currentTime, setCurrentTime] = useState<Date>(() => new Date());

  // Update current time every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const currentWeek = Math.ceil(
    (currentTime.getTime() - firstWeek.getTime()) / (7 * 24 * 60 * 60 * 1000)
  );

  const groups = useMemo(() => {
    return data.G1.practicals.map(p => {
      const now = new Date();
      const currentDay = now.getDay();
      const difference = currentDay - p.day;
      const offset = 0;

      const from = new Date();
      const to = new Date();

      from.setDate(from.getDate() - difference);
      to.setDate(to.getDate() - difference);

      from.setHours(p.start[0] + offset);
      from.setMinutes(p.start[1]);
      from.setSeconds(0);
      from.setMilliseconds(0);

      to.setHours(p.end[0] + offset);
      to.setMinutes(p.end[1]);
      to.setSeconds(0);
      to.setMilliseconds(0);

      return {
        group: p.group,
        from: from,
        to: to,
      };
    });
  }, []);

  // Update current date every 15 seconds
  const currentGroup = groups.find(g => {
    return g.from <= currentTime && g.to >= currentTime;
  })?.group;

  if (!currentGroup) {
    return null;
  }

  const link = `eduba.se/+G1-${currentGroup}-KZH${formatWeek(currentWeek)}`;

  return (
    <div>
      <QRCode value={link} />
    </div>
  );
};

export { EdubaseQR };

export type { EdubaseQRProps };
