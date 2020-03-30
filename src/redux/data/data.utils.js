const compose = (f, g) => (...args) => f(g(...args))
const formatData  = (...fns) => fns.reduce(compose);

const getTotal = (data, dataKey) => data.reduce( (acc, obj) => acc + parseInt(obj[dataKey], 10), 0);

const formatNumber = n => n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

const getMatch = (input, str) => {
  const regex = new RegExp(input, 'gi');
  return str.match(regex);
}

export const searchArr = (arr, input) => arr.filter( obj => getMatch(input, obj.Combined_Key));


export const sortByMostCases = (data) => {
  return data.sort( (a, b) => b.Confirmed - a.Confirmed);
};

export const getFormatedTotal = formatData(
  formatNumber,
  getTotal
)

