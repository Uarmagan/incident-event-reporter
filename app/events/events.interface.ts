export interface Event {
  id: number;
  domain: string;
  subDomain: string;
  owners: Owner[];
  description: string;
  status: string;
  createdDate: string;
}

export type Owner = {
  name: string;
  avatar: string;
};
