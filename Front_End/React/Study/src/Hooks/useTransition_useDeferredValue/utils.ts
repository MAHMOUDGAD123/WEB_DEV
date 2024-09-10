import { wait_for } from "../../utils";

export type ItemList = { name: string; year: number }[];

const books: ItemList = [
  { name: "To Kill a Mockingbird", year: 1960 },
  { name: "The Seven Husbands of Evelyn Hugo", year: 2017 },
  { name: "The Fault in Our Stars", year: 2012 },
  { name: "The Book Thief", year: 2005 },
  { name: "The Alchemist", year: 1988 },
  { name: "The Hunger Games", year: 2008 },
  { name: "The Perks of Being a Wallflower", year: 1999 },
  { name: "The Da Vinci Code", year: 2003 },
  { name: "Harry Potter and the Sorcerer’s Stone", year: 1997 },
  { name: "The Midnight Library", year: 2020 },
  { name: "The Kite Runner", year: 2003 },
  { name: "Mockingjay", year: 2010 },
  { name: "Pride and Prejudice", year: 1813 },
  { name: "The Help", year: 2009 },
  { name: "Lord of the Flies", year: 1954 },
  { name: "Catching Fire", year: 2009 },
  { name: "Animal Farm", year: 1945 },
  { name: "We Were Liars", year: 2014 },
  { name: "Looking for Alaska", year: 2005 },
  { name: "What If?", year: 2014 },
  { name: "1984", year: 1949 },
  { name: "Twilight", year: 2005 },
  { name: "Angels & Demons", year: 2000 },
  { name: "The Song of Achilles", year: 2011 },
  { name: "The Catcher in the Rye", year: 1951 },
  { name: "The Great Gatsby", year: 1925 },
  { name: "Fifty Shades of Grey", year: 2011 },
  { name: "The Diary of a Young Girl", year: 1947 },
  { name: "Memoirs of a Geisha", year: 1997 },
  { name: "A Little Life", year: 2015 },
  { name: "Daisy Jones & The Six", year: 2019 },
  { name: "The Girl with the Dragon Tattoo", year: 2005 },
  { name: "The Handmaid’s Tale", year: 1985 },
  { name: "Little Women", year: 1868 },
  { name: "Fahrenheit 451", year: 1953 },
  { name: "Life of Pi", year: 2001 },
  { name: "Gone Girl", year: 2012 },
  { name: "Dune", year: 1965 },
  { name: "The Giver", year: 1993 },
  { name: "The Hobbit", year: 1937 },
];

const fetchBookApi = (query: string) => {
  wait_for(0.2); // delay for wvery item
  return !query.length
    ? null
    : books.filter(({ name }) => {
        return new RegExp(`\\b${query.toLowerCase()}`).test(name.toLowerCase());
      });
};

export { books, fetchBookApi };
