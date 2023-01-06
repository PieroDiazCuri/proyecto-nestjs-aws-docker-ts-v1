interface Req {
  queryString: {[key: string]: string};
  params: {[key: string]: string};
}

interface Req {
  body: {[key: string]: string};
}
const request: Req = {
  queryString: {title: ''},
  params: {id: '1'},
  body: {name: 'Piero'},
};
