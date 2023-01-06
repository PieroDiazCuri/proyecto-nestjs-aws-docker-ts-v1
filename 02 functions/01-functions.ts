function getFullName(name: string, lastName: string): string {
  return `${name} ${lastName}`;
}
const setFullName = (name: string, lastName: string): string => {
  const userName = name;
  const userLastName = lastName;
  return `Saved: ${userName} ${userLastName}`;
};

console.log(getFullName('Piero', 'Diaz'));
console.log(setFullName('Piero', 'Diaz'));
