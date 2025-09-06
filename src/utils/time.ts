const HU_DAYS = [
  '', // 0 unused so 1..7 map cleanly
  'Hétfő',
  'Kedd',
  'Szerda',
  'Csütörtök',
  'Péntek',
  'Szombat',
  'Vasárnap',
] as const;

const getHuDay = (day: number) => {
  return HU_DAYS[day] || '';
};

type HHMM = [number, number];

const formatTime = ([h, m]: HHMM) => {
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
};

const formatTimeRange = (start: HHMM, end: HHMM) => {
  return `${formatTime(start)} - ${formatTime(end)}`;
};

export { HU_DAYS };

export { getHuDay, formatTime, formatTimeRange };
