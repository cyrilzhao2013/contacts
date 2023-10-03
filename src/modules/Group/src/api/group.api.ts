import { IPaginationReq, IPaginationResp } from "@/types/pagination.type";
import { E_REQUEST_METHODS, request } from "@/utils/request";
import { IGroupApiData } from "../types/api-response.type";

// export function removeContact(params: {
//   contact_id: string;
//   resourceName: string;
// }) {
//   return request.send<void>({
//     url: "",
//     method: E_REQUEST_METHODS.DELETE,
//     data: params,
//   });
// }

// export function addContact(params: {
//   contact_id: string;
//   resourceName: string;
// }) {
//   return request.send<void>({
//     url: "",
//     method: E_REQUEST_METHODS.POST,
//     data: params,
//   });
// }

export function updateContactsInGroup(
  resourceName: string,
  params: {
    resourceNamesToAdd?: string[];
    resourceNamesToRemove?: string[];
  }
) {
  return request.send<{
    notFoundResourceNames: string[];
    canNotRemoveLastContactGroupResourceNames: string[];
  }>({
    url: "",
    method: E_REQUEST_METHODS.POST,
    data: params,
  });
}

export function deleteGroup(params: { resourceName: string }) {
  return request.send<void>({
    url: "",
    method: E_REQUEST_METHODS.DELETE,
    data: params,
  });
}

export function createGroup(params: Pick<IGroupApiData, "name">) {
  return request.send<IGroupApiData>({
    url: "",
    method: E_REQUEST_METHODS.POST,
    data: params,
  });
}
