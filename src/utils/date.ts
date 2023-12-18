export function getTimeLabel(time: number) {
  const hour = Math.trunc(time / 3600);
  const minute = Math.trunc((time % 3600) / 60);
  const second = time % 60;

  let label = '';

  if (hour) {
    label += `${hour}시간`;
  }

  if (minute) {
    if (label) {
      label += ' ';
    }

    label += `${minute}분`;
  }

  if (second) {
    if (label) {
      label += ' ';
    }

    label += `${second}초`;
  }

  return label;
}
