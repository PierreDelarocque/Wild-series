const categories = [
  {
    id: 1,
    name: "Science-Fiction",
  },
  {
    id: 2,
    name: "Comédie",
  },
];

// Declare the actions

/* Here you code */
const browse = async (req, res) => {
  res.json(categories);
};

const read = async (req, res) => {
  const parsedId = parseInt(req.params.id, 10);
  const category = categories.find((p) => p.id === parsedId);

  res.json(category);
};

module.exports = {
  /* Here you export */
  browse,
  read,
};
