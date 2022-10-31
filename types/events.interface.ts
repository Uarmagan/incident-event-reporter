export interface Event {
  id: number;
  domain: domainKeys;
  subDomain: electricalSubDomains | mechanicalSubDomains | softwareSubDomains;
  owners: Owner[];
  description: string;
  status: Status;
  createdDate: string;
}

export type Owner = {
  name: string;
  avatar: string;
};

type domainKeys = keyof domains;

export type Status = 'Ready' | 'In Progress' | 'Fixed';

type domains = {
  electrical: {
    subDomains: electricalSubDomains;
  };
  Mechanical: {
    subDomains: mechanicalSubDomains;
  };
  Software: {
    subDomains: softwareSubDomains;
  };
};

type electricalSubDomains = 'blown breaker' | 'damaged wire' | 'water damage';
type mechanicalSubDomains = 'broken pipe' | 'fire' | 'cracked machine';
type softwareSubDomains =
  | 'production incedent'
  | 'servers down'
  | 'database error';
