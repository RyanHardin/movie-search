const filter = (array, input) => {
  return array.filter((item) => item.title.toLowerCase().includes(input.toLowerCase()));
};

module.exports = {
  filter,
};
