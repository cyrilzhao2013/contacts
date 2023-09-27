import { IPaginationReq, IPaginationResp } from "@/types/pagination.type";
import { E_REQUEST_METHODS, request } from "@/utils/request";
import { IContactApiData } from "../types/api-response.type";

export function getContacts(params: IPaginationReq) {
  return request.send<IPaginationResp<IContactApiData>>({
    url: "",
    method: E_REQUEST_METHODS.GET,
    data: params,
  });
}

export function deleteContact(params: { contact_id: string }) {
  return request.send<void>({
    url: "",
    method: E_REQUEST_METHODS.DELETE,
    data: params,
  });
}
