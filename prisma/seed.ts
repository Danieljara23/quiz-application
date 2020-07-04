const  { PrismaClient } = require('@prisma/client');
const  { seedData } = require("./seedData.ts");

const prisma = new PrismaClient();

const main = async () => {
    const mockedData = await prisma.questionnaire.create({
      data: seedData
    });

    console.log(mockedData)
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
      await prisma.disconnect()
    })

//Run this seed with 'node prisma/seed.ts'