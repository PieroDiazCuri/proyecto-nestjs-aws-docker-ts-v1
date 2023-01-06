interface InfoRequest {
  queryString: {[key: string]: string};
  params: {[key: string]: string};
  body: {[key: string]: string};
}
interface InfoRequestHttp {
  body: string;
}
type Info = Omit<InfoRequest, 'body'> & InfoRequestHttp;

const requestInfo: Info = {
  queryString: {title: 'The Lord'},
  params: {id: '1'},
  body: 'Piero',
};
