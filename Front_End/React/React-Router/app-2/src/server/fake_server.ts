import { fake_country, fake_phone_number, fake_job, wait_for } from "./utils";

const names = [
  "Abraham Baker",
  "Adem Lane",
  "Adil Floyd",
  "Adriana O'Sullivan",
  "Alec Whitten",
  "Alesha Barry",
  "Ali Mahdi",
  "Aliah Lane",
  "Alisa Hester",
  "Amanda Lowery",
  "Amelie Bennett",
  "Amelie Laurent",
  "Ammar Foley",
  "Anaiah Whitten",
  "Andi Lane",
  "Angelica Wallace",
  "Anita Cruz",
  "Ashton Blackwell",
  "Ashwin Santiago",
  "Aston Hood",
  "Ava Bentley",
  "Ava Wright",
  "Ayah Wilkinson",
  "Aysha Becker",
  "Bailey Richards",
  "Bec Ferguson",
  "Belle Woods",
  "Benedict Doherty",
  "Billie Wright",
  "Blake Riley",
  "Brianna Ware",
  "Byron Robertson",
  "Caitlyn King",
  "Cameron Yang",
  "Candice Wu",
  "Clifford Jennings",
  "Cohen Lozano",
  "Courtney Turner",
  "Danyal Lester",
  "Demi Wilkinson",
  "Dillan Nguyen",
  "Drew Cano",
  "Eduard Franz",
  "Elena Owens",
  "Elisa Nishikawa",
  "Elsie Roy",
  "Erica Wyatt",
  "Ethan Campbell",
  "Ethan Valdez",
  "Eva Bond",
  "Eve Leroy",
  "Fergus Gray",
  "Fleur Cook",
  "Florence Shaw",
  "Frank Whitaker",
  "Franklin Mays",
  "Freya Browning",
  "Genevieve Mclean",
  "Harriet Rojas",
  "Harry Bender",
  "Hasan Johns",
  "Herbert Fowler",
  "Isla Allison",
  "Isobel Carroll",
  "Isobel Fuller",
  "Jackson Reed",
  "Jay Shepard",
  "Jaya Willis",
  "Jayden Moss",
  "Jessie Meyton",
  "Jonathan Kelly",
  "Jordan Burgess",
  "Joshua Wilson",
  "Julius Vaughan",
  "Kaden Scott",
  "Kaitlin Hale",
  "Kari Rasmussen",
  "Kate Morrison",
  "Katherine Moss",
  "Katy Fuller",
  "Kelly Williams",
  "Kelsey Lowe",
  "Koray Okumus",
  "Kyla Clay",
  "Lana Steiner",
  "Levi Rocha",
  "Leyton Fields",
  "Liam Hood",
  "Lily-Rose Chedjou",
  "Loki Bright",
  "Lola Sanders",
  "Lori Bryson",
  "Lucy Bond",
  "Lulu Meyers",
  "Luqman Anthony",
  "Lyle Kauffman",
  "Maddison Gillespie",
  "Madeleine Pitts",
  "Marco Gross",
  "Marco Kelly",
  "Marvin Robbins",
  "Mathilde Lewis",
  "Maxwell Tan",
  "Mikey Lawrence",
  "Mollie Hall",
  "Molly Vaughan",
  "Nala Goins",
  "Natali Craig",
  "Nic Fassbender",
  "Nicola Harris",
  "Nicolas Trevino",
  "Nicolas Wang",
  "Nikolas Gibbons",
  "Noah Pierre",
  "Noel Baldwin",
  "Olivia Rhye",
  "Olly Schroeder",
  "Orlando Diggs",
  "Owen Garcia",
  "Owen Harding",
  "Phoenix Baker",
  "Pippa Wilkinson",
  "Priya Shepard",
  "Rachael Strong",
  "Rayhan Zua",
  "Rene Wells",
  "Rhea Levine",
  "Rhianna Shepard",
  "Riley O'Moore",
  "Rory Huff",
  "Rosalee Melvin",
  "Sally Mason",
  "Sarah Page",
  "Scott Clayton",
  "Sienna Hewitt",
  "Sophia Perez",
  "Stefan Sears",
  "Youssef Roberson",
  "Zahir Mays",
  "Zahra Christensen",
  "Zaid Schwartz",
  "Zara Bush",
  "Zaynab Donnelly",
  "Zuzanna Burke",
];

export type MemberType = {
  name: string;
  age: number;
  phone: string;
  country: string;
  job: string;
};

// fake server class
class fake_server {
  private data: Map<number, MemberType>;
  private ids: number = 0;

  constructor() {
    this.data = this.buildData();
  }

  private buildData() {
    const map = new Map();
    names.slice(0, 50).forEach((name) => {
      map.set(++this.ids, {
        name: name,
        age: (Math.random() * 31 + 20) >>> 0,
        phone: fake_phone_number(),
        country: fake_country(),
        job: fake_job(),
      });
    });
    return map;
  }

  private async fakeServerDelay(msg: string) {
    if ((Math.random() * 10) >>> 0 === 3) {
      await wait_for((Math.random() * 3000 + 500) >>> 0);
      // throw a random fake server error
      if ((Math.random() * 30) >>> 0 === 3) throw { message: msg };
    }
  }

  async getMembers() {
    await this.fakeServerDelay("Failed to fetch members data");
    return this.data;
  }

  async getMemberEntries() {
    await this.fakeServerDelay("Failed to fetch members data");
    return [...this.data.entries()];
  }

  async getMember(id: number) {
    await this.fakeServerDelay("Failed to fetch member data");
    return this.data.get(id);
  }

  addMember(data: MemberType) {
    const newId = ++this.ids;
    this.data.set(newId, data);
    return this.data;
  }

  removeMember(id: number) {
    this.data.delete(id);
    return this.data;
  }
}

const server = new fake_server();

export { server };
