export interface IEmail {
  email: string;
  tags?: string[];
}

export interface ITelephone {
  tel: string;
  tags?: string[];
}

export interface IContact {
  id: string;
  firstName: string;
  lastName: string;
  company: string;
  jobTitle: string;
  emails?: IEmail[];
  telephones?: ITelephone[];
  birthday: string;
  remark: string;
}
