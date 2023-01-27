import { companies } from './companies';
import { ownerships } from './ownerships';

// requests for EXAMPLE
export function requestCompany (): any[] {
  const result: any[] = [];
  const getAccountType = (formId: number) => {
    return ownerships.find(v => v.id === formId) ??
    { id: 0, account_type: null, code: '', full: '', is_jur: false, parent_id: null, short: '' };
  };

  companies.forEach(v => result.push({
    id: v.company_id,
    company_name: v.company_name,
    company_tin: v.company_tin,
    logo: v.logo,
    account_type: getAccountType(v.form_id).account_type
  }));

  return result;
}

export interface ICompanyServe {
  company_id: number
  company_name: string
  company_tin: string
  form_id: number
  tax_id: number
  logo: null | string
}

export interface IFormToSystemServe {
  tax_system_id: number
  form_ownership_id: number
}

export type AccountType = 'too' | 'ip' | 'chp' | 'fiz';

export interface IOwnershipsServe {
  id: number
  code: string
  full: string
  short: string
  is_jur: boolean
  parent_id: number | null
  account_type: AccountType | null
}

export interface ITaxSystemsServe {
  id: number
  code: string
  full: string
  short: string
  parent_id: number | null
}