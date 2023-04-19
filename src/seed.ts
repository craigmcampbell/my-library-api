import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const genres = [
  {
    id: 'f7b7737e-3153-4fd0-96c9-fe1f2abc78aa',
    name: 'Biography',
  },
  {
    id: 'a714df46-584d-45f0-9e18-c4e896216b62',
    name: 'Business',
  },
  {
    id: 'ca456da5-9afb-4dfd-ba46-a30ffca9a055',
    name: 'Education',
  },
  {
    id: '7bc91e07-f852-47cf-a696-36cedfbd2a70',
    name: 'Fantasy',
  },
  {
    id: '40d3b23d-b704-4609-ab30-eb7fca3dac37',
    name: 'Food',
  },
  {
    id: '5b331d7a-5c38-4911-ad80-74a4d5abba4c',
    name: 'Health',
  },
  {
    id: '8d17e4f2-e01b-4c35-bd33-f3a69e97b9c0',
    name: 'History',
  },
  {
    id: 'd109671d-c17c-4ed2-a765-72aa2b73be13',
    name: 'Leadership',
  },
  {
    id: '56139f6c-786e-45a4-b555-4661af3fe10e',
    name: 'Productivity',
  },
  {
    id: '42b8ed31-2aba-4528-8727-2023792c0a3a',
    name: 'Science',
  },
  {
    id: '7c7d0cfe-798c-4ca9-bebf-cafae95962e4',
    name: 'Science Fiction',
  },
  {
    id: '400ceef3-a175-421f-bdce-99d8ac3785f5',
    name: 'Self',
  },
  {
    id: 'b7a06987-4202-4a29-ab32-a36ad24f99f8',
    name: 'Technical',
  },
];

const main = async () => {
  await seedGenres();
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });

async function seedGenres() {
  for (let i = 0; i < genres.length; i++) {
    await prisma.genre.upsert({
      where: { id: genres[i].id },
      create: {
        id: genres[i].id,
        name: genres[i].name,
      },
      update: {
        name: genres[i].name,
      },
    });
  }
}
