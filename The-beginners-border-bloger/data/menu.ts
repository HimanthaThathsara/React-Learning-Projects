type MenuItem = {
  href: string;
  label: string;
};

// Navbar links Data for Header component
// CHANGE :- The Pathe and the Data can be changed according to the requirement
const menu: MenuItem[] = [
  {
    href: "/magazine",
    label: "Magazine",
  },
  {
    href: "/podcasts",
    label: "Podcasts",
  },
  {
    href: "/authors",
    label: "Authors",
  },
];

export default menu;
