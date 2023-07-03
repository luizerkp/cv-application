const getFirstQAndLastInitial = (name) => {
  const names = name.split(' ');
  const first = names[0];
  const last = names[names.length - 1];
  return `${first[0]}${last[0]}`;
}

export default getFirstQAndLastInitial;