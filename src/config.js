const BASE_URL = 'https://restcountries.com/v2/';
export const ALL_COUNTRIES=BASE_URL+"all?fields=name,flags,population,capital,region";
export const searchByContry=(name)=>BASE_URL+'name/'+name;
export const filterByCode=(code)=>BASE_URL+'alpha?code'+code.join('');