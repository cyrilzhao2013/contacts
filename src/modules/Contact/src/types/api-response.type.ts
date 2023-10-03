export interface IEmailApiData {
  email: string;
  tags?: string[];
}

export interface ITelephoneApiData {
  tel: string;
  tags?: string[];
}

export interface IContactApiData {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  company: string;
  jobTitle: string;
  emails?: IEmailApiData[];
  telephones?: ITelephoneApiData[];
  birthday: string;
  remark: string;
  tags: string[];
}
