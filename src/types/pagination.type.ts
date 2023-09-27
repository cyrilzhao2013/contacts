export interface IPaginationReq {
  page: number;
  pageSize: number;
}

export interface IPaginationResp<T> {
  results: T[];
  count: number;
}
