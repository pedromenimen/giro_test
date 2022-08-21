import axios from 'axios';

const selicApi = axios.create({
  baseURL: "http://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados/ultimos/1?formato=json",
});

export default selicApi;
