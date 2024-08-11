import Http from "./request"

export const testHttp = async () => {
  return await Http.get('/test', {});
};

export const uploadFileHttp = async (formData: FormData) => {
  console.log('formData', formData)
  return await Http.post('/uploadFile', formData, true);
}