import type { ITaxSystemsServe } from '.';

export const taxSystems: ITaxSystemsServe[] = [
  {
    id: 1,
    code: 'usn',
    full: 'Упрощённая система налогообложения',
    short: 'Упрощёнка',
    parent_id: null
  },
  {
    id: 2,
    code: 'our',
    full: 'Общеустановленный режим налогообложения',
    short: 'ОУР',
    parent_id: null
  },
  {
    id: 3,
    code: 'fix',
    full: 'СНР с фиксированным вычетом',
    short: 'СНР с фиксированным вычетом',
    parent_id: 2
  },
  {
    id: 4,
    code: 'kx',
    full: 'СНР для крестьянских хозяйств',
    short: 'КХ',
    parent_id: 1
  },
  {
    id: 5,
    code: 'sp',
    full: 'СНР для сельхозпроизводителей',
    short: 'СНР для сельхозпроизводителей',
    parent_id: 2
  },
  {
    id: 6,
    code: 'chp',
    full: 'частники (скрытая, автовыбор)',
    short: 'чп',
    parent_id: 1
  },
  {
    id: 7,
    code: 'fiz',
    full: 'физические лица (скрытая, автовыбор)',
    short: 'физическое лицо',
    parent_id: null
  },
  {
    id: 8,
    code: 'pat',
    full: 'Патент',
    short: 'патент',
    parent_id: 1
  },
  {
    id: 9,
    code: 'roz',
    full: 'Розничный налог',
    short: 'Розничный налог',
    parent_id: null
  }
];
