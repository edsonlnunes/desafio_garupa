export function loadData(data) {
  return { type: 'LOAD', data };
}

export function like(data) {
  return { type: 'LIKE', data };
}

export function deslike(data) {
  return { type: 'DESLIKE', data };
}