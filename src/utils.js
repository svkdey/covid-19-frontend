function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

const groupBy = (items, key) =>
  items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item]
    }),
    {}
  );
function groupByID(list) {
  var groupedMap = list ? groupBy(list, "country") : [];
  var result = {};
  for (var i in groupedMap) {
    var sum = sumList(groupedMap[i]);
    result[i] = sum;
  }
  return result;
}
function sumList(list) {
  var sum = 0;
  list.forEach(i => {
    sum += i.latestTotal;
  });
  return sum;
}

export { isEmpty, groupBy, groupByID, sumList };
