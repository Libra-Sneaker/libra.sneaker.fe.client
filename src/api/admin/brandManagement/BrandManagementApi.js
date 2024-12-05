import { request } from "../../../util/axios/request.helper";

const baseUrl = `/admin/brand-management`;

export class BrandManagementApi {
  static create = (data) => {
    return request({
      method: "POST",
      url: `${baseUrl}`,
      data: data,
    });
  };
}
