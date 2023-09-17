const splitCategory = (category: string) => {
  const categories = category.split('>');
  if (categories.length === 1) {
    return categories;
  }
  return [categories[0], categories[categories.length - 1]];
};

export default splitCategory;
