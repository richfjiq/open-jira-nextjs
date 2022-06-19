interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: 'Pendiente: Id Lorem anim dolor elit.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description:
        'En progreso: Ea eiusmod et sint velit aliquip exercitation qui velit do voluptate irure.',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      description:
        'Terminada: Ullamco commodo sit voluptate nostrud ad magna dolore minim eu magna incididunt laboris.',
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ],
};
