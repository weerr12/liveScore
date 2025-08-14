export const formatThaiDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('th-TH', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
    // year: 'numeric': ปี 4 หลัก (2567)
    // month: 'short': เดือนแบบสั้น (ม.ค.)
    // day: 'numeric': วันที่ (15)
  });
};