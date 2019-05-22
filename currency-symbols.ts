// World currencies with their symbols

class FlatMap<T> {
  map: { [key: string]: T } = {};
  keys: string[] = [];

  get asArray(): Array<T> {
    return this.keys.map((key) => this.map[key]);
  }

  constructor(data: Array<T>, propertyAsKey: keyof T) {
    data.forEach((item: T) => {
      const key = item[propertyAsKey].toString();
      this.map[key] = item;
      this.keys.push(key);
    });
  }
}

enum GeoCodeToCurrencyCode {
  DEFAULT = 'USD',
  AD = 'EUR',
  AE = 'AED',
  AF = 'AFN',
  AG = 'XCD',
  AI = 'XCD',
  AL = 'ALL',
  AM = 'AMD',
  AO = 'AOA',
  AR = 'ARS',
  AS = 'USD',
  AT = 'EUR',
  AU = 'AUD',
  AW = 'AWG',
  AX = 'EUR',
  AZ = 'AZN',
  BA = 'BAM',
  BB = 'BBD',
  BD = 'BDT',
  BE = 'EUR',
  BF = 'XOF',
  BG = 'BGN',
  BH = 'BHD',
  BI = 'BIF',
  BJ = 'XOF',
  BL = 'EUR',
  BM = 'BMD',
  BN = 'BND',
  BO = 'BOB',
  BQ = 'USD',
  BR = 'BRL',
  BS = 'BSD',
  BT = 'BTN',
  BW = 'BWP',
  BY = 'BYN',
  BZ = 'BZD',
  CA = 'CAD',
  CC = 'AUD',
  CD = 'CDF',
  CF = 'XAF',
  CG = 'XAF',
  CH = 'CHF',
  CI = 'XOF',
  CK = 'NZD',
  CL = 'CLP',
  CM = 'XAF',
  CN = 'CNY',
  CO = 'COP',
  CR = 'CRC',
  CU = 'CUP',
  CV = 'CVE',
  CW = 'ANG',
  CX = 'AUD',
  CY = 'EUR',
  CZ = 'CZK',
  DE = 'EUR',
  DJ = 'DJF',
  DK = 'DKK',
  DM = 'XCD',
  DO = 'DOP',
  DZ = 'DZD',
  EC = 'USD',
  EE = 'EUR',
  EG = 'EGP',
  EH = 'MAD',
  ER = 'ERN',
  ES = 'EUR',
  ET = 'ETB',
  FI = 'EUR',
  FJ = 'FJD',
  FK = 'FKP',
  FM = 'USD',
  FO = 'DKK',
  FR = 'EUR',
  GA = 'XAF',
  GB = 'GBP',
  GD = 'XCD',
  GE = 'GEL',
  GF = 'EUR',
  GG = 'GBP',
  GH = 'GHS',
  GL = 'DKK',
  GM = 'GMD',
  GN = 'GNF',
  GP = 'EUR',
  GQ = 'XAF',
  GR = 'EUR',
  GS = 'GBP',
  GT = 'GTQ',
  GU = 'USD',
  GW = 'XOF',
  GY = 'GYD',
  HK = 'HKD',
  HN = 'HNL',
  HR = 'HRK',
  HT = 'HTG',
  HU = 'HUF',
  ID = 'IDR',
  IE = 'EUR',
  IL = 'ILS',
  IM = 'GBP',
  IN = 'INR',
  IO = 'USD',
  IQ = 'IQD',
  IR = 'IRR',
  IS = 'ISK',
  IT = 'EUR',
  JE = 'GBP',
  JM = 'JMD',
  JO = 'JOD',
  JP = 'JPY',
  KE = 'KES',
  KG = 'KGS',
  KH = 'KHR',
  KI = 'AUD',
  KM = 'KMF',
  KN = 'XCD',
  KP = 'KPW',
  KR = 'KRW',
  XK = 'EUR',
  KW = 'KWD',
  KY = 'KYD',
  KZ = 'KZT',
  LA = 'LAK',
  LB = 'LBP',
  LC = 'XCD',
  LI = 'CHF',
  LK = 'LKR',
  LR = 'LRD',
  LS = 'LSL',
  LT = 'EUR',
  LU = 'EUR',
  LV = 'EUR',
  LY = 'LYD',
  MA = 'MAD',
  MD = 'MDL',
  ME = 'EUR',
  MF = 'EUR',
  MG = 'MGA',
  MK = 'MKD',
  ML = 'XOF',
  MM = 'MMK',
  MN = 'MNT',
  MO = 'MOP',
  MP = 'USD',
  MQ = 'EUR',
  MR = 'MRO',
  MS = 'XCD',
  MT = 'EUR',
  MU = 'MUR',
  MV = 'MVR',
  MW = 'MWK',
  MX = 'MXN',
  MY = 'MYR',
  MZ = 'MZN',
  NA = 'NAD',
  NC = 'XPF',
  NE = 'XOF',
  NG = 'NGN',
  NI = 'NIO',
  NL = 'EUR',
  NO = 'NOK',
  NP = 'NPR',
  NR = 'AUD',
  NU = 'NZD',
  NZ = 'NZD',
  OM = 'OMR',
  PA = 'PAB',
  PE = 'PEN',
  PF = 'XPF',
  PG = 'PGK',
  PH = 'PHP',
  PK = 'PKR',
  PL = 'PLN',
  PM = 'EUR',
  PN = 'NZD',
  PR = 'USD',
  PS = 'ILS',
  PT = 'EUR',
  PW = 'USD',
  PY = 'PYG',
  QA = 'QAR',
  RE = 'EUR',
  RO = 'RON',
  RS = 'RSD',
  RU = 'RUB',
  RW = 'RWF',
  SA = 'SAR',
  SB = 'SBD',
  SC = 'SCR',
  SD = 'SDG',
  SS = 'SSP',
  SE = 'SEK',
  SH = 'SHP',
  SI = 'EUR',
  SJ = 'NOK',
  SK = 'EUR',
  SL = 'SLL',
  SN = 'XOF',
  SO = 'SOS',
  SR = 'SRD',
  ST = 'STD',
  SV = 'USD',
  SX = 'ANG',
  SY = 'SYP',
  SZ = 'SZL',
  TC = 'USD',
  TD = 'XAF',
  TF = 'EUR',
  TG = 'XOF',
  TH = 'THB',
  TJ = 'TJS',
  TK = 'NZD',
  TL = 'USD',
  TM = 'TMT',
  TN = 'TND',
  TO = 'TOP',
  TR = 'TRY',
  TT = 'TTD',
  TV = 'AUD',
  TW = 'TWD',
  TZ = 'TZS',
  UA = 'UAH',
  UG = 'UGX',
  UM = 'USD',
  US = 'USD',
  UY = 'UYU',
  UZ = 'UZS',
  VC = 'XCD',
  VE = 'VES',
  VG = 'USD',
  VI = 'USD',
  VN = 'VND',
  VU = 'VUV',
}

const CURENCY_SYMBOLS = new FlatMap([
  {
    key: GeoCodeToCurrencyCode.DEFAULT,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.US,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.RU,
    currencySymbol: '&#8381;',
  },
  {
    key: GeoCodeToCurrencyCode.AD,
    currencySymbol: '&#8364;',
  },
  {
    key: GeoCodeToCurrencyCode.AE,
    currencySymbol: 'Dh',
  },
  {
    key: GeoCodeToCurrencyCode.AF,
    currencySymbol: '&#1547;',
  },
  {
    key: GeoCodeToCurrencyCode.AG,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.AI,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.AL,
    currencySymbol: 'Lek',
  },
  {
    key: GeoCodeToCurrencyCode.AM,
    currencySymbol: '&#1423;',
  },
  {
    key: GeoCodeToCurrencyCode.AO,
    currencySymbol: 'Kz',
  },
  {
    key: GeoCodeToCurrencyCode.AR,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.AS,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.AT,
    currencySymbol: '&#8364;',
  },
  {
    key: GeoCodeToCurrencyCode.AU,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.AW,
    currencySymbol: '&#402;',
  },
  {
    key: GeoCodeToCurrencyCode.AX,
    currencySymbol: '&#8364;',
  },
  {
    key: GeoCodeToCurrencyCode.AZ,
    currencySymbol: '&#8380;',
  },
  {
    key: GeoCodeToCurrencyCode.BA,
    currencySymbol: 'KM',
  },
  {
    key: GeoCodeToCurrencyCode.BB,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.BD,
    currencySymbol: '&#2547;',
  },
  {
    key: GeoCodeToCurrencyCode.BE,
    currencySymbol: '&#8364;',
  },
  {
    key: GeoCodeToCurrencyCode.BF,
    currencySymbol: '&#8355;',
  },
  {
    key: GeoCodeToCurrencyCode.BG,
    currencySymbol: '&#1083;&#1074;',
  },
  {
    key: GeoCodeToCurrencyCode.BH,
    currencySymbol: 'BD',
  },
  {
    key: GeoCodeToCurrencyCode.BI,
    currencySymbol: 'FBu',
  },
  {
    key: GeoCodeToCurrencyCode.BJ,
    currencySymbol: '&#8355;',
  },
  {
    key: GeoCodeToCurrencyCode.BL,
    currencySymbol: '&#8364;',
  },
  {
    key: GeoCodeToCurrencyCode.BM,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.BN,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.BO,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.BQ,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.BR,
    currencySymbol: 'R&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.BS,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.BT,
    currencySymbol: 'Nu',
  },
  {
    key: GeoCodeToCurrencyCode.BW,
    currencySymbol: 'P',
  },
  {
    key: GeoCodeToCurrencyCode.BY,
    currencySymbol: 'Br',
  },
  {
    key: GeoCodeToCurrencyCode.BZ,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.CA,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.CC,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.CD,
    currencySymbol: '&#402;',
  },
  {
    key: GeoCodeToCurrencyCode.CF,
    currencySymbol: '&#402',
  },
  {
    key: GeoCodeToCurrencyCode.CG,
    currencySymbol: '&#402',
  },
  {
    key: GeoCodeToCurrencyCode.CH,
    currencySymbol: '&#402',
  },
  {
    key: GeoCodeToCurrencyCode.CI,
    currencySymbol: '&#8355;',
  },
  {
    key: GeoCodeToCurrencyCode.CK,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.CL,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.CM,
    currencySymbol: '&#402',
  },
  {
    key: GeoCodeToCurrencyCode.CN,
    currencySymbol: '&#165;',
  },
  {
    key: GeoCodeToCurrencyCode.CO,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.CR,
    currencySymbol: '&#8353;',
  },
  {
    key: GeoCodeToCurrencyCode.CU,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.CV,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.CW,
    currencySymbol: '&#402;',
  },
  {
    key: GeoCodeToCurrencyCode.CX,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.CY,
    currencySymbol: '&#8364;',
  },
  {
    key: GeoCodeToCurrencyCode.CZ,
    currencySymbol: 'K&#269;',
  },
  {
    key: GeoCodeToCurrencyCode.DE,
    currencySymbol: '&#8364;',
  },
  {
    key: GeoCodeToCurrencyCode.DJ,
    currencySymbol: '&#8355;',
  },
  {
    key: GeoCodeToCurrencyCode.DK,
    currencySymbol: 'kr.',
  },
  {
    key: GeoCodeToCurrencyCode.DM,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.DO,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.DZ,
    currencySymbol: 'دج',
  },
  {
    key: GeoCodeToCurrencyCode.EC,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.EE,
    currencySymbol: '&#8364;',
  },
  {
    key: GeoCodeToCurrencyCode.EG,
    currencySymbol: '&#163;',
  },
  {
    key: GeoCodeToCurrencyCode.EH,
    currencySymbol: 'Dh',
  },
  {
    key: GeoCodeToCurrencyCode.ER,
    currencySymbol: 'Nfk',
  },
  {
    key: GeoCodeToCurrencyCode.ES,
    currencySymbol: '&#8364;',
  },
  {
    key: GeoCodeToCurrencyCode.ET,
    currencySymbol: 'Br',
  },
  {
    key: GeoCodeToCurrencyCode.FI,
    currencySymbol: '&#8364;',
  },
  {
    key: GeoCodeToCurrencyCode.FJ,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.FK,
    currencySymbol: '&#163;',
  },
  {
    key: GeoCodeToCurrencyCode.FM,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.FO,
    currencySymbol: 'kr.',
  },
  {
    key: GeoCodeToCurrencyCode.FR,
    currencySymbol: '&#8364;',
  },
  {
    key: GeoCodeToCurrencyCode.GA,
    currencySymbol: '&#402',
  },
  {
    key: GeoCodeToCurrencyCode.GB,
    currencySymbol: '&#163;',
  },
  {
    key: GeoCodeToCurrencyCode.GD,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.GE,
    currencySymbol: 'Lari',
  },
  {
    key: GeoCodeToCurrencyCode.GF,
    currencySymbol: '&#8364;',
  },
  {
    key: GeoCodeToCurrencyCode.GG,
    currencySymbol: '&#163;',
  },
  {
    key: GeoCodeToCurrencyCode.GH,
    currencySymbol: '&#8373;',
  },
  {
    key: GeoCodeToCurrencyCode.GL,
    currencySymbol: 'kr.',
  },
  {
    key: GeoCodeToCurrencyCode.GM,
    currencySymbol: 'D',
  },
  {
    key: GeoCodeToCurrencyCode.GN,
    currencySymbol: 'Fr',
  },
  {
    key: GeoCodeToCurrencyCode.GP,
    currencySymbol: '&#8364;',
  },
  {
    key: GeoCodeToCurrencyCode.GQ,
    currencySymbol: '&#402',
  },
  {
    key: GeoCodeToCurrencyCode.GR,
    currencySymbol: '&#8364;',
  },
  {
    key: GeoCodeToCurrencyCode.GS,
    currencySymbol: '&#163;',
  },
  {
    key: GeoCodeToCurrencyCode.GT,
    currencySymbol: 'Q',
  },
  {
    key: GeoCodeToCurrencyCode.GU,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.GW,
    currencySymbol: '&#8355;',
  },
  {
    key: GeoCodeToCurrencyCode.GY,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.HK,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.HN,
    currencySymbol: 'L.',
  },
  {
    key: GeoCodeToCurrencyCode.HR,
    currencySymbol: 'kn',
  },
  {
    key: GeoCodeToCurrencyCode.HT,
    currencySymbol: 'G',
  },
  {
    key: GeoCodeToCurrencyCode.HU,
    currencySymbol: 'Ft',
  },
  {
    key: GeoCodeToCurrencyCode.ID,
    currencySymbol: '&#8360;',
  },
  {
    key: GeoCodeToCurrencyCode.IE,
    currencySymbol: '&#8364;',
  },
  {
    key: GeoCodeToCurrencyCode.IL,
    currencySymbol: '&#8362;',
  },
  {
    key: GeoCodeToCurrencyCode.IM,
    currencySymbol: '&#163;',
  },
  {
    key: GeoCodeToCurrencyCode.IN,
    currencySymbol: '&#8377;',
  },
  {
    key: GeoCodeToCurrencyCode.IO,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.IQ,
    currencySymbol: 'ع.د',
  },
  {
    key: GeoCodeToCurrencyCode.IR,
    currencySymbol: '&#65020;',
  },
  {
    key: GeoCodeToCurrencyCode.IS,
    currencySymbol: 'kr.',
  },
  {
    key: GeoCodeToCurrencyCode.IT,
    currencySymbol: '&#8364;',
  },
  {
    key: GeoCodeToCurrencyCode.JE,
    currencySymbol: '&#163;',
  },
  {
    key: GeoCodeToCurrencyCode.JM,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.JO,
    currencySymbol: 'JD',
  },
  {
    key: GeoCodeToCurrencyCode.JP,
    currencySymbol: '&#165;',
  },
  {
    key: GeoCodeToCurrencyCode.KE,
    currencySymbol: 'KSh',
  },
  {
    key: GeoCodeToCurrencyCode.KG,
    currencySymbol: '⊆',
  },
  {
    key: GeoCodeToCurrencyCode.KH,
    currencySymbol: '&#6107;',
  },
  {
    key: GeoCodeToCurrencyCode.KI,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.KM,
    currencySymbol: 'FC',
  },
  {
    key: GeoCodeToCurrencyCode.KN,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.KP,
    currencySymbol: '&#8361;',
  },
  {
    key: GeoCodeToCurrencyCode.KR,
    currencySymbol: '&#8361;',
  },
  {
    key: GeoCodeToCurrencyCode.XK,
    currencySymbol: '&#8364;',
  },
  {
    key: GeoCodeToCurrencyCode.KW,
    currencySymbol: 'KD',
  },
  {
    key: GeoCodeToCurrencyCode.KY,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.KZ,
    currencySymbol: '&#8376;',
  },
  {
    key: GeoCodeToCurrencyCode.LA,
    currencySymbol: '&#8365;',
  },
  {
    key: GeoCodeToCurrencyCode.LB,
    currencySymbol: '&#163;',
  },
  {
    key: GeoCodeToCurrencyCode.LC,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.LI,
    currencySymbol: '&#402',
  },
  {
    key: GeoCodeToCurrencyCode.LK,
    currencySymbol: '&#8360;',
  },
  {
    key: GeoCodeToCurrencyCode.LR,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.LS,
    currencySymbol: 'L',
  },
  {
    key: GeoCodeToCurrencyCode.LT,
    currencySymbol: '&#8364;',
  },
  {
    key: GeoCodeToCurrencyCode.LU,
    currencySymbol: '&#8364;',
  },
  {
    key: GeoCodeToCurrencyCode.LV,
    currencySymbol: '&#8364;',
  },
  {
    key: GeoCodeToCurrencyCode.LY,
    currencySymbol: 'LD',
  },
  {
    key: GeoCodeToCurrencyCode.MA,
    currencySymbol: 'Dh',
  },
  {
    key: GeoCodeToCurrencyCode.MD,
    currencySymbol: 'lei',
  },
  {
    key: GeoCodeToCurrencyCode.ME,
    currencySymbol: '&#8364;',
  },
  {
    key: GeoCodeToCurrencyCode.MF,
    currencySymbol: '&#8364;',
  },
  {
    key: GeoCodeToCurrencyCode.MG,
    currencySymbol: 'Ar',
  },
  {
    key: GeoCodeToCurrencyCode.MK,
    currencySymbol: '&#1076;&#1077;&#1085;',
  },
  {
    key: GeoCodeToCurrencyCode.ML,
    currencySymbol: '&#8355;',
  },
  {
    key: GeoCodeToCurrencyCode.MM,
    currencySymbol: 'K',
  },
  {
    key: GeoCodeToCurrencyCode.MN,
    currencySymbol: '&#8366;',
  },
  {
    key: GeoCodeToCurrencyCode.MO,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.MP,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.MQ,
    currencySymbol: '&#8364;',
  },
  {
    key: GeoCodeToCurrencyCode.MR,
    currencySymbol: 'UM',
  },
  {
    key: GeoCodeToCurrencyCode.MS,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.MT,
    currencySymbol: '&#8364;',
  },
  {
    key: GeoCodeToCurrencyCode.MU,
    currencySymbol: '&#8360;',
  },
  {
    key: GeoCodeToCurrencyCode.MV,
    currencySymbol: 'Rf',
  },
  {
    key: GeoCodeToCurrencyCode.MW,
    currencySymbol: 'MK',
  },
  {
    key: GeoCodeToCurrencyCode.MX,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.MY,
    currencySymbol: 'RM',
  },
  {
    key: GeoCodeToCurrencyCode.MZ,
    currencySymbol: 'MT',
  },
  {
    key: GeoCodeToCurrencyCode.NA,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.NC,
    currencySymbol: '&#8355;',
  },
  {
    key: GeoCodeToCurrencyCode.NE,
    currencySymbol: '&#8355;',
  },
  {
    key: GeoCodeToCurrencyCode.NG,
    currencySymbol: '&#8356;',
  },
  {
    key: GeoCodeToCurrencyCode.NI,
    currencySymbol: '&#36',
  },
  {
    key: GeoCodeToCurrencyCode.NL,
    currencySymbol: '&#8364;',
  },
  {
    key: GeoCodeToCurrencyCode.NO,
    currencySymbol: 'kr.',
  },
  {
    key: GeoCodeToCurrencyCode.NP,
    currencySymbol: '&#8360;',
  },
  {
    key: GeoCodeToCurrencyCode.NR,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.NU,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.NZ,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.OM,
    currencySymbol: '&#65020;',
  },
  {
    key: GeoCodeToCurrencyCode.PA,
    currencySymbol: 'B/.',
  },
  {
    key: GeoCodeToCurrencyCode.PE,
    currencySymbol: 'S/.',
  },
  {
    key: GeoCodeToCurrencyCode.PF,
    currencySymbol: '&#8355;',
  },
  {
    key: GeoCodeToCurrencyCode.PG,
    currencySymbol: 'K',
  },
  {
    key: GeoCodeToCurrencyCode.PH,
    currencySymbol: '&#8369;',
  },
  {
    key: GeoCodeToCurrencyCode.PK,
    currencySymbol: '&#8360;',
  },
  {
    key: GeoCodeToCurrencyCode.PL,
    currencySymbol: 'z&#322;',
  },
  {
    key: GeoCodeToCurrencyCode.PM,
    currencySymbol: '&#8364;',
  },
  {
    key: GeoCodeToCurrencyCode.PN,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.PR,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.PS,
    currencySymbol: '&#8362;',
  },
  {
    key: GeoCodeToCurrencyCode.PT,
    currencySymbol: '&#8364;',
  },
  {
    key: GeoCodeToCurrencyCode.PW,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.PY,
    currencySymbol: '&#8370;',
  },
  {
    key: GeoCodeToCurrencyCode.QA,
    currencySymbol: '&#65020;',
  },
  {
    key: GeoCodeToCurrencyCode.RE,
    currencySymbol: '&#8364;',
  },
  {
    key: GeoCodeToCurrencyCode.RO,
    currencySymbol: 'lei',
  },
  {
    key: GeoCodeToCurrencyCode.RS,
    currencySymbol: 'Din.',
  },
  {
    key: GeoCodeToCurrencyCode.RW,
    currencySymbol: '&#8355;',
  },
  {
    key: GeoCodeToCurrencyCode.SA,
    currencySymbol: '&#65020;',
  },
  {
    key: GeoCodeToCurrencyCode.SB,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.SC,
    currencySymbol: '&#8360;',
  },
  {
    key: GeoCodeToCurrencyCode.SD,
    currencySymbol: '&#163;',
  },
  {
    key: GeoCodeToCurrencyCode.SS,
    currencySymbol: '&#163;',
  },
  {
    key: GeoCodeToCurrencyCode.SE,
    currencySymbol: 'kr',
  },
  {
    key: GeoCodeToCurrencyCode.SH,
    currencySymbol: '&#163;',
  },
  {
    key: GeoCodeToCurrencyCode.SI,
    currencySymbol: '&#8364;',
  },
  {
    key: GeoCodeToCurrencyCode.SJ,
    currencySymbol: 'kr.',
  },
  {
    key: GeoCodeToCurrencyCode.SK,
    currencySymbol: '&#8364;',
  },
  {
    key: GeoCodeToCurrencyCode.SL,
    currencySymbol: 'L',
  },
  {
    key: GeoCodeToCurrencyCode.SN,
    currencySymbol: '&#8355;',
  },
  {
    key: GeoCodeToCurrencyCode.SO,
    currencySymbol: 'S',
  },
  {
    key: GeoCodeToCurrencyCode.SR,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.ST,
    currencySymbol: 'Db',
  },
  {
    key: GeoCodeToCurrencyCode.SV,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.SX,
    currencySymbol: '&#402;',
  },
  {
    key: GeoCodeToCurrencyCode.SY,
    currencySymbol: '&#163;',
  },
  {
    key: GeoCodeToCurrencyCode.SZ,
    currencySymbol: 'L',
  },
  {
    key: GeoCodeToCurrencyCode.TC,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.TD,
    currencySymbol: '&#402',
  },
  {
    key: GeoCodeToCurrencyCode.TF,
    currencySymbol: '&#8364;',
  },
  {
    key: GeoCodeToCurrencyCode.TG,
    currencySymbol: '&#8355;',
  },
  {
    key: GeoCodeToCurrencyCode.TH,
    currencySymbol: '&#3647;',
  },
  {
    key: GeoCodeToCurrencyCode.TJ,
    currencySymbol: '&#1089;&#1086;&#1084;',
  },
  {
    key: GeoCodeToCurrencyCode.TK,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.TL,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.TM,
    currencySymbol: '&#1084;&#1072;&#1085;&#1072;&#1090;',
  },
  {
    key: GeoCodeToCurrencyCode.TN,
    currencySymbol: 'TD',
  },
  {
    key: GeoCodeToCurrencyCode.TO,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.TR,
    currencySymbol: '&#8378;',
  },
  {
    key: GeoCodeToCurrencyCode.TT,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.TV,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.TW,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.TZ,
    currencySymbol: 'Tsh',
  },
  {
    key: GeoCodeToCurrencyCode.UA,
    currencySymbol: '&#8372;',
  },
  {
    key: GeoCodeToCurrencyCode.UG,
    currencySymbol: 'Ush',
  },
  {
    key: GeoCodeToCurrencyCode.UM,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.UY,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.UZ,
    currencySymbol: '&#1089;&#1118;&#1084;',
  },
  {
    key: GeoCodeToCurrencyCode.VC,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.VE,
    currencySymbol: 'Bs.S',
  },
  {
    key: GeoCodeToCurrencyCode.VG,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.VI,
    currencySymbol: '&#36;',
  },
  {
    key: GeoCodeToCurrencyCode.VN,
    currencySymbol: '&#8363;',
  },
  {
    key: GeoCodeToCurrencyCode.VU,
    currencySymbol: 'Vt',
  },
], 'key');


export const UNICODE_CURRENCY_SYMBOLS = new FlatMap([
  {
    key: GeoCodeToCurrencyCode.DEFAULT,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.US,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.RU,
    currencySymbol: '\u20BD',
  },
  {
    key: GeoCodeToCurrencyCode.AD,
    currencySymbol: '\u20AC',
  },
  {
    key: GeoCodeToCurrencyCode.AE,
    currencySymbol: 'Dh',
  },
  {
    key: GeoCodeToCurrencyCode.AF,
    currencySymbol: '\u060B',
  },
  {
    key: GeoCodeToCurrencyCode.AG,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.AI,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.AL,
    currencySymbol: 'Lek',
  },
  {
    key: GeoCodeToCurrencyCode.AM,
    currencySymbol: '\u058F',
  },
  {
    key: GeoCodeToCurrencyCode.AO,
    currencySymbol: 'Kz',
  },
  {
    key: GeoCodeToCurrencyCode.AR,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.AS,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.AT,
    currencySymbol: '\u20AC',
  },
  {
    key: GeoCodeToCurrencyCode.AU,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.AW,
    currencySymbol: '\u0192',
  },
  {
    key: GeoCodeToCurrencyCode.AX,
    currencySymbol: '\u20AC',
  },
  {
    key: GeoCodeToCurrencyCode.AZ,
    currencySymbol: '\u20BC',
  },
  {
    key: GeoCodeToCurrencyCode.BA,
    currencySymbol: 'KM',
  },
  {
    key: GeoCodeToCurrencyCode.BB,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.BD,
    currencySymbol: '\u09F3',
  },
  {
    key: GeoCodeToCurrencyCode.BE,
    currencySymbol: '\u20AC',
  },
  {
    key: GeoCodeToCurrencyCode.BF,
    currencySymbol: '\u20A3',
  },
  {
    key: GeoCodeToCurrencyCode.BG,
    currencySymbol: '&#1083;&#1074;',
  },
  {
    key: GeoCodeToCurrencyCode.BH,
    currencySymbol: 'BD',
  },
  {
    key: GeoCodeToCurrencyCode.BI,
    currencySymbol: 'FBu',
  },
  {
    key: GeoCodeToCurrencyCode.BJ,
    currencySymbol: '\u20A3',
  },
  {
    key: GeoCodeToCurrencyCode.BL,
    currencySymbol: '\u20AC',
  },
  {
    key: GeoCodeToCurrencyCode.BM,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.BN,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.BO,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.BQ,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.BR,
    currencySymbol: 'R\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.BS,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.BT,
    currencySymbol: 'Nu',
  },
  {
    key: GeoCodeToCurrencyCode.BW,
    currencySymbol: 'P',
  },
  {
    key: GeoCodeToCurrencyCode.BY,
    currencySymbol: 'Br',
  },
  {
    key: GeoCodeToCurrencyCode.BZ,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.CA,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.CC,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.CD,
    currencySymbol: '\u0192',
  },
  {
    key: GeoCodeToCurrencyCode.CF,
    currencySymbol: '\u0192',
  },
  {
    key: GeoCodeToCurrencyCode.CG,
    currencySymbol: '\u0192',
  },
  {
    key: GeoCodeToCurrencyCode.CH,
    currencySymbol: '\u0192',
  },
  {
    key: GeoCodeToCurrencyCode.CI,
    currencySymbol: '\u20A3',
  },
  {
    key: GeoCodeToCurrencyCode.CK,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.CL,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.CM,
    currencySymbol: '\u0192',
  },
  {
    key: GeoCodeToCurrencyCode.CN,
    currencySymbol: '\u00A5',
  },
  {
    key: GeoCodeToCurrencyCode.CO,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.CR,
    currencySymbol: '&#8353;',
  },
  {
    key: GeoCodeToCurrencyCode.CU,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.CV,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.CW,
    currencySymbol: '\u0192',
  },
  {
    key: GeoCodeToCurrencyCode.CX,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.CY,
    currencySymbol: '\u20AC',
  },
  {
    key: GeoCodeToCurrencyCode.CZ,
    currencySymbol: 'K&#269;',
  },
  {
    key: GeoCodeToCurrencyCode.DE,
    currencySymbol: '\u20AC',
  },
  {
    key: GeoCodeToCurrencyCode.DJ,
    currencySymbol: '\u20A3',
  },
  {
    key: GeoCodeToCurrencyCode.DK,
    currencySymbol: 'kr',
  },
  {
    key: GeoCodeToCurrencyCode.DM,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.DO,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.DZ,
    currencySymbol: 'دج',
  },
  {
    key: GeoCodeToCurrencyCode.EC,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.EE,
    currencySymbol: '\u20AC',
  },
  {
    key: GeoCodeToCurrencyCode.EG,
    currencySymbol: '\u00A3',
  },
  {
    key: GeoCodeToCurrencyCode.EH,
    currencySymbol: 'Dh',
  },
  {
    key: GeoCodeToCurrencyCode.ER,
    currencySymbol: 'Nfk',
  },
  {
    key: GeoCodeToCurrencyCode.ES,
    currencySymbol: '\u20AC',
  },
  {
    key: GeoCodeToCurrencyCode.ET,
    currencySymbol: 'Br',
  },
  {
    key: GeoCodeToCurrencyCode.FI,
    currencySymbol: '\u20AC',
  },
  {
    key: GeoCodeToCurrencyCode.FJ,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.FK,
    currencySymbol: '\u00A3',
  },
  {
    key: GeoCodeToCurrencyCode.FM,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.FO,
    currencySymbol: 'kr',
  },
  {
    key: GeoCodeToCurrencyCode.FR,
    currencySymbol: '\u20AC',
  },
  {
    key: GeoCodeToCurrencyCode.GA,
    currencySymbol: '\u0192',
  },
  {
    key: GeoCodeToCurrencyCode.GB,
    currencySymbol: '\u00A3',
  },
  {
    key: GeoCodeToCurrencyCode.GD,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.GE,
    currencySymbol: 'Lari',
  },
  {
    key: GeoCodeToCurrencyCode.GF,
    currencySymbol: '\u20AC',
  },
  {
    key: GeoCodeToCurrencyCode.GG,
    currencySymbol: '\u00A3',
  },
  {
    key: GeoCodeToCurrencyCode.GH,
    currencySymbol: '\u20B5',
  },
  {
    key: GeoCodeToCurrencyCode.GL,
    currencySymbol: 'kr',
  },
  {
    key: GeoCodeToCurrencyCode.GM,
    currencySymbol: 'D',
  },
  {
    key: GeoCodeToCurrencyCode.GN,
    currencySymbol: 'Fr',
  },
  {
    key: GeoCodeToCurrencyCode.GP,
    currencySymbol: '\u20AC',
  },
  {
    key: GeoCodeToCurrencyCode.GQ,
    currencySymbol: '\u0192',
  },
  {
    key: GeoCodeToCurrencyCode.GR,
    currencySymbol: '\u20AC',
  },
  {
    key: GeoCodeToCurrencyCode.GS,
    currencySymbol: '\u00A3',
  },
  {
    key: GeoCodeToCurrencyCode.GT,
    currencySymbol: 'Q',
  },
  {
    key: GeoCodeToCurrencyCode.GU,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.GW,
    currencySymbol: '\u20A3',
  },
  {
    key: GeoCodeToCurrencyCode.GY,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.HK,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.HN,
    currencySymbol: 'L.',
  },
  {
    key: GeoCodeToCurrencyCode.HR,
    currencySymbol: 'kn',
  },
  {
    key: GeoCodeToCurrencyCode.HT,
    currencySymbol: 'G',
  },
  {
    key: GeoCodeToCurrencyCode.HU,
    currencySymbol: 'Ft',
  },
  {
    key: GeoCodeToCurrencyCode.ID,
    currencySymbol: '\u20A8',
  },
  {
    key: GeoCodeToCurrencyCode.IE,
    currencySymbol: '\u20AC',
  },
  {
    key: GeoCodeToCurrencyCode.IL,
    currencySymbol: '\u20AA',
  },
  {
    key: GeoCodeToCurrencyCode.IM,
    currencySymbol: '\u00A3',
  },
  {
    key: GeoCodeToCurrencyCode.IN,
    currencySymbol: '\u20B9',
  },
  {
    key: GeoCodeToCurrencyCode.IO,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.IQ,
    currencySymbol: 'ع.د',
  },
  {
    key: GeoCodeToCurrencyCode.IR,
    currencySymbol: '\uFDFC',
  },
  {
    key: GeoCodeToCurrencyCode.IS,
    currencySymbol: 'kr',
  },
  {
    key: GeoCodeToCurrencyCode.IT,
    currencySymbol: '\u20AC',
  },
  {
    key: GeoCodeToCurrencyCode.JE,
    currencySymbol: '\u00A3',
  },
  {
    key: GeoCodeToCurrencyCode.JM,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.JO,
    currencySymbol: 'JD',
  },
  {
    key: GeoCodeToCurrencyCode.JP,
    currencySymbol: '\u00A5',
  },
  {
    key: GeoCodeToCurrencyCode.KE,
    currencySymbol: 'KSh',
  },
  {
    key: GeoCodeToCurrencyCode.KG,
    currencySymbol: '\u2286',
  },
  {
    key: GeoCodeToCurrencyCode.KH,
    currencySymbol: '\u17DB',
  },
  {
    key: GeoCodeToCurrencyCode.KI,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.KM,
    currencySymbol: 'FC',
  },
  {
    key: GeoCodeToCurrencyCode.KN,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.KP,
    currencySymbol: '\u20A9',
  },
  {
    key: GeoCodeToCurrencyCode.KR,
    currencySymbol: '\u20A9',
  },
  {
    key: GeoCodeToCurrencyCode.XK,
    currencySymbol: '\u20AC',
  },
  {
    key: GeoCodeToCurrencyCode.KW,
    currencySymbol: 'KD',
  },
  {
    key: GeoCodeToCurrencyCode.KY,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.KZ,
    currencySymbol: '\u20B8',
  },
  {
    key: GeoCodeToCurrencyCode.LA,
    currencySymbol: '\u20AD',
  },
  {
    key: GeoCodeToCurrencyCode.LB,
    currencySymbol: '\u00A3',
  },
  {
    key: GeoCodeToCurrencyCode.LC,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.LI,
    currencySymbol: '\u0192',
  },
  {
    key: GeoCodeToCurrencyCode.LK,
    currencySymbol: '\u20A8',
  },
  {
    key: GeoCodeToCurrencyCode.LR,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.LS,
    currencySymbol: 'L',
  },
  {
    key: GeoCodeToCurrencyCode.LT,
    currencySymbol: '\u20AC',
  },
  {
    key: GeoCodeToCurrencyCode.LU,
    currencySymbol: '\u20AC',
  },
  {
    key: GeoCodeToCurrencyCode.LV,
    currencySymbol: '\u20AC',
  },
  {
    key: GeoCodeToCurrencyCode.LY,
    currencySymbol: 'LD',
  },
  {
    key: GeoCodeToCurrencyCode.MA,
    currencySymbol: 'Dh',
  },
  {
    key: GeoCodeToCurrencyCode.MD,
    currencySymbol: 'lei',
  },
  {
    key: GeoCodeToCurrencyCode.ME,
    currencySymbol: '\u20AC',
  },
  {
    key: GeoCodeToCurrencyCode.MF,
    currencySymbol: '\u20AC',
  },
  {
    key: GeoCodeToCurrencyCode.MG,
    currencySymbol: 'Ar',
  },
  {
    key: GeoCodeToCurrencyCode.MK,
    currencySymbol: '\u0434\u0435\u043D',
  },
  {
    key: GeoCodeToCurrencyCode.ML,
    currencySymbol: '\u20A3',
  },
  {
    key: GeoCodeToCurrencyCode.MM,
    currencySymbol: 'K',
  },
  {
    key: GeoCodeToCurrencyCode.MN,
    currencySymbol: '\u20AE',
  },
  {
    key: GeoCodeToCurrencyCode.MO,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.MP,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.MQ,
    currencySymbol: '\u20AC',
  },
  {
    key: GeoCodeToCurrencyCode.MR,
    currencySymbol: 'UM',
  },
  {
    key: GeoCodeToCurrencyCode.MS,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.MT,
    currencySymbol: '\u20AC',
  },
  {
    key: GeoCodeToCurrencyCode.MU,
    currencySymbol: '\u20A8',
  },
  {
    key: GeoCodeToCurrencyCode.MV,
    currencySymbol: 'Rf',
  },
  {
    key: GeoCodeToCurrencyCode.MW,
    currencySymbol: 'MK',
  },
  {
    key: GeoCodeToCurrencyCode.MX,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.MY,
    currencySymbol: 'RM',
  },
  {
    key: GeoCodeToCurrencyCode.MZ,
    currencySymbol: 'MT',
  },
  {
    key: GeoCodeToCurrencyCode.NA,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.NC,
    currencySymbol: '\u20A3',
  },
  {
    key: GeoCodeToCurrencyCode.NE,
    currencySymbol: '\u20A3',
  },
  {
    key: GeoCodeToCurrencyCode.NG,
    currencySymbol: '\u20A4',
  },
  {
    key: GeoCodeToCurrencyCode.NI,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.NL,
    currencySymbol: '\u20AC',
  },
  {
    key: GeoCodeToCurrencyCode.NO,
    currencySymbol: 'kr',
  },
  {
    key: GeoCodeToCurrencyCode.NP,
    currencySymbol: '\u20A8',
  },
  {
    key: GeoCodeToCurrencyCode.NR,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.NU,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.NZ,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.OM,
    currencySymbol: '\uFDFC',
  },
  {
    key: GeoCodeToCurrencyCode.PA,
    currencySymbol: 'B/.',
  },
  {
    key: GeoCodeToCurrencyCode.PE,
    currencySymbol: 'S/.',
  },
  {
    key: GeoCodeToCurrencyCode.PF,
    currencySymbol: '\u20A3',
  },
  {
    key: GeoCodeToCurrencyCode.PG,
    currencySymbol: 'K',
  },
  {
    key: GeoCodeToCurrencyCode.PH,
    currencySymbol: '\u20B1',
  },
  {
    key: GeoCodeToCurrencyCode.PK,
    currencySymbol: '\u20A8',
  },
  {
    key: GeoCodeToCurrencyCode.PL,
    currencySymbol: 'z\u0142',
  },
  {
    key: GeoCodeToCurrencyCode.PM,
    currencySymbol: '\u20AC',
  },
  {
    key: GeoCodeToCurrencyCode.PN,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.PR,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.PS,
    currencySymbol: '\u20AA',
  },
  {
    key: GeoCodeToCurrencyCode.PT,
    currencySymbol: '\u20AC',
  },
  {
    key: GeoCodeToCurrencyCode.PW,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.PY,
    currencySymbol: '\u20B2',
  },
  {
    key: GeoCodeToCurrencyCode.QA,
    currencySymbol: '\uFDFC',
  },
  {
    key: GeoCodeToCurrencyCode.RE,
    currencySymbol: '\u20AC',
  },
  {
    key: GeoCodeToCurrencyCode.RO,
    currencySymbol: 'lei',
  },
  {
    key: GeoCodeToCurrencyCode.RS,
    currencySymbol: 'Din.',
  },
  {
    key: GeoCodeToCurrencyCode.RW,
    currencySymbol: '\u20A3',
  },
  {
    key: GeoCodeToCurrencyCode.SA,
    currencySymbol: '\uFDFC',
  },
  {
    key: GeoCodeToCurrencyCode.SB,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.SC,
    currencySymbol: '\u20A8',
  },
  {
    key: GeoCodeToCurrencyCode.SD,
    currencySymbol: '\u00A3',
  },
  {
    key: GeoCodeToCurrencyCode.SS,
    currencySymbol: '\u00A3',
  },
  {
    key: GeoCodeToCurrencyCode.SE,
    currencySymbol: 'kr',
  },
  {
    key: GeoCodeToCurrencyCode.SH,
    currencySymbol: '\u00A3',
  },
  {
    key: GeoCodeToCurrencyCode.SI,
    currencySymbol: '\u20AC',
  },
  {
    key: GeoCodeToCurrencyCode.SJ,
    currencySymbol: 'kr',
  },
  {
    key: GeoCodeToCurrencyCode.SK,
    currencySymbol: '\u20AC',
  },
  {
    key: GeoCodeToCurrencyCode.SL,
    currencySymbol: 'L',
  },
  {
    key: GeoCodeToCurrencyCode.SN,
    currencySymbol: '\u20A3',
  },
  {
    key: GeoCodeToCurrencyCode.SO,
    currencySymbol: 'S',
  },
  {
    key: GeoCodeToCurrencyCode.SR,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.ST,
    currencySymbol: 'Db',
  },
  {
    key: GeoCodeToCurrencyCode.SV,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.SX,
    currencySymbol: '\u0192',
  },
  {
    key: GeoCodeToCurrencyCode.SY,
    currencySymbol: '\u00A3',
  },
  {
    key: GeoCodeToCurrencyCode.SZ,
    currencySymbol: 'L',
  },
  {
    key: GeoCodeToCurrencyCode.TC,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.TD,
    currencySymbol: '\u0192',
  },
  {
    key: GeoCodeToCurrencyCode.TF,
    currencySymbol: '\u20AC',
  },
  {
    key: GeoCodeToCurrencyCode.TG,
    currencySymbol: '\u20A3',
  },
  {
    key: GeoCodeToCurrencyCode.TH,
    currencySymbol: '\u0E3F',
  },
  {
    key: GeoCodeToCurrencyCode.TJ,
    currencySymbol: '\u0441\u043E\u043C',
  },
  {
    key: GeoCodeToCurrencyCode.TK,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.TL,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.TM,
    currencySymbol: '\u043C\u0430\u043D\u0430\u0442',
  },
  {
    key: GeoCodeToCurrencyCode.TN,
    currencySymbol: 'TD',
  },
  {
    key: GeoCodeToCurrencyCode.TO,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.TR,
    currencySymbol: '\u20BA',
  },
  {
    key: GeoCodeToCurrencyCode.TT,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.TV,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.TW,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.TZ,
    currencySymbol: 'Tsh',
  },
  {
    key: GeoCodeToCurrencyCode.UA,
    currencySymbol: '\u20B4',
  },
  {
    key: GeoCodeToCurrencyCode.UG,
    currencySymbol: 'Ush',
  },
  {
    key: GeoCodeToCurrencyCode.UM,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.UY,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.UZ,
    currencySymbol: '\u0441\u045E\u043C',
  },
  {
    key: GeoCodeToCurrencyCode.VC,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.VE,
    currencySymbol: 'Bs.S',
  },
  {
    key: GeoCodeToCurrencyCode.VG,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.VI,
    currencySymbol: '\u0024',
  },
  {
    key: GeoCodeToCurrencyCode.VN,
    currencySymbol: '\u20AB',
  },
  {
    key: GeoCodeToCurrencyCode.VU,
    currencySymbol: 'Vt',
  },
], 'key');