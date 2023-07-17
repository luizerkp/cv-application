const getFirstQAndLastInitial = (name) => {
  // if name is empty, return empty string
  if (!name) return '';

  const names = name.split(' ');
  const first = names[0];

  // if there is no last name, return first name's first letter only
  const last = names.length > 1 ? names[names.length - 1] : '';
  return `${first[0]}${last[0] || ''}`;
}

export default getFirstQAndLastInitial;