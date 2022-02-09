export const formatMin = (duration: number) => {
  const _min = Math.floor(duration / 60);
  const _sec = duration % 60;

  if (_sec > 0) {
    return `${_min} mins ${_sec} secs`;
  } else if (_min > 0) {
    return `${_min} min${_min > 1 ? 's' : ''}`;
  } else {
    return `${_sec} secs`;
  }
};
