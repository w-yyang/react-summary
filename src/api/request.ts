import { IResponseData } from "../types/request";

enum RequestMethod {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Delete = 'DELETE'
}

const baseURL = 'http://localhost:3000/api';

const getCommonRequestConfig = (method: RequestMethod, url, data) => {
  return new Request(`${baseURL}${url}`, {
    method: method,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json;chartset=utf-8'
    },
    body: data && JSON.stringify(data)
  });
};

const getUploadRequestConfig = (method: RequestMethod, url, data) => {
  return new Request(`${baseURL}${url}`, {
    method: method,
    body: data
  });
};

class Http {
  static request(method: RequestMethod, url: string, data, isFileUpload = false) {
    const requestConfig = !isFileUpload ? getCommonRequestConfig(method, url, data) : getUploadRequestConfig(method, url, data);

    return fetch(requestConfig)
      .then(backRes => backRes.json())
      .then((backData: IResponseData) => {
        const { code, msg, data } = backData;
        if (!code) {
          return data;
        } else {
          console.error('服务器出现问题，数据未正常返回!!!', msg);
          return {};
        }
      })
      .catch(error => {
        console.error('请求错误：', error);
      });
  }

  static async get(url, data: { [x: string]: any }) {
    let getReqStr = '?';
    Object.keys(data).forEach(dItem => {
      const reqVal = data[dItem];
      getReqStr += `${dItem}=${reqVal}&`
    });
    getReqStr = getReqStr.slice(0, getReqStr.length - 1);
    
    return await Http.request(RequestMethod.Get, url, null);
  }

  static async post(url, data: { [x: string]: any }, isFileUpload) {
    return await Http.request(RequestMethod.Post, url, data, isFileUpload);
  }

  static async put(url, data: { [x: string]: any }) {
    return await Http.request(RequestMethod.Put, url, {});
  }

  static async delete(url, data: { [x: string]: any }) {
    return await Http.request(RequestMethod.Delete, url, {});
  }
}

export default Http;