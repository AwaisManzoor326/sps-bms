
const uniqueNames = [
  'Muhammad Awais', 'Muhammad Hammad Khan', 'Muhammad Ammar Yousaf', 'Syed Ijlal Shah', 'Hashim Ali',
  'Mohsin Raza', 'Abdul Hameed', 'Zeeshan Mehmood', 'Usman Ahmed', 'Tossef Barkat',
  'Ali Shahzad', 'Bilal Hassan', 'Zain Ul Abideen', 'Hamza Abbasi', 'Omer Farooq',
];

export const departments = ['Software Engineering', 'Information Technology', 'Human Resource', 'Finance'];
export const groupsPool = ['Administrative', 'Technical', 'Support', 'Management'];
export const practicesPool = ['Open Source', 'Microsoft', 'SQA', 'PMO', 'UI/UX'];
export const genders = ['Male', 'Female'];
export const locations = ['PK', 'US', 'UK', 'UAE'];
export const hrTypes = ['Internal HR', 'External Consultant'];
export const workStatuses = ['Full-time', 'Part-time', 'Probation', 'Terminated'];

export const offboardingReasons = [
  'Career advancement',
  'Dissatisfaction with the job or workplace',
  'Work-life balance',
  'Personal reasons',
  'Dissatisfaction with compensation and benefits',
  'Lack of alignment with company culture or values',
  'Burnout or stress',
];

export function generateEmployees() {
  const employees = [];
  for (let i = 0; i < 45; i++) {
    let empName = uniqueNames[i % uniqueNames.length];
    if (i >= uniqueNames.length) {
      empName += ' ' + String.fromCharCode(65 + (i % 5));
    }

    employees.push({
      id: i + 1,
      name: empName,
      type: i % 3 === 0 ? 'Consultant' : 'Regular',
      job_status: i % 4 === 0 ? 'Onsite' : 'Remote',
      manager: 'Sir Tossef',
      company: 'SPS Net',
      team: 'Alpha Team',
      group: groupsPool[i % groupsPool.length],
      practice: practicesPool[i % practicesPool.length],
      location: locations[i % locations.length],
      mobile_number: '+92 311 55110' + (10 + i),
      email: empName.toLowerCase().replace(/ /g, '.') + '@spsnet.com',
      bms_access: i % 5 === 0 ? 'Denied' : 'Granted',
      staff: 'Permanent',
      status: workStatuses[i % workStatuses.length],
      department: departments[i % departments.length],
      gender: genders[i % genders.length],
      hr_type: hrTypes[i % hrTypes.length],
      year: i % 2 === 0 ? '2026' : '2025',
      period: 'Annual',
    });
  }
  return employees;
}
