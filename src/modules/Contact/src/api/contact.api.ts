import { IPaginationReq, IPaginationResp } from "@/types/pagination.type";
import { E_REQUEST_METHODS, request } from "@/utils/request";
import { IContactApiData } from "../types/api-response.type";

export function getContacts(
  params: IPaginationReq
): Promise<IPaginationResp<IContactApiData>> {
  // return request.send<IPaginationResp<IContactApiData>>({
  //   url: "",
  //   method: E_REQUEST_METHODS.GET,
  //   data: params,
  // });

  return new Promise<IPaginationResp<IContactApiData>>((resolve) => {
    setTimeout(() => {
      resolve({
        count: 9,
        results: [1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
          return {
            id: `${i}`,
            firstName: `firstname-firstname-firstname-firstname-firstname-firstname-firstname-firstname-firstname-firstname-firstname-firstname-firstname-firstname-firstname-${i}`,
            lastName: `lastname-${i}`,
            avatar: `https://t7.baidu.com/it/u=1440354408,1578911780&fm=193&f=GIF`,
            company: `company-${i}`,
            jobTitle: `jobTitle-${i}`,
            tags: [`tags-1-${i}`, `tags-2-${i}`],
            emails: [
              {
                email: `email1-${i}@qq.com`,
                tags: [`emailTag-11-${i}`, `emailTag-12-${i}`],
              },
              {
                email: `email2-${i}@qq.com`,
                tags: [`emailTag-21-${i}`, `emailTag-22-${i}`],
              },
            ],
            telephones: [
              {
                tel: `1590209000${i}`,
                tags: [`teltag-11-${i}`, `teltag-12-${i}`],
              },
              {
                tel: `1590209001${i}`,
                tags: [`teltag-21-${i}`, `teltag-22-${i}`],
              },
            ],
            birthday: `2023-08-0${i}`,
            remark: `remark-${i}`,
          };
        }),
      });
    }, 1000);
  });
}

export function deleteContact(params: { contact_id: string }) {
  return request.send<void>({
    url: "",
    method: E_REQUEST_METHODS.DELETE,
    data: params,
  });
}
