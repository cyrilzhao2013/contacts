export enum GroupType {
  GROUP_TYPE_UNSPECIFIED = "GROUP_TYPE_UNSPECIFIED",
  USER_CONTACT_GROUP = "USER_CONTACT_GROUP",
  SYSTEM_CONTACT_GROUP = "SYSTEM_CONTACT_GROUP",
}

export interface IGroupApiData {
  resourceName: string;
  etag: string;
  metadata: {
    updateTime: string;
    deleted: boolean;
  };
  groupType: GroupType;
  name: string;
  formattedName: string;
  memberResourceNames: string[];
  memberCount: number;
  clientData: {
    key: string;
    value: string;
  }[];
}
