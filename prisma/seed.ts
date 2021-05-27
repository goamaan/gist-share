import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
    {
        name: 'Alice',
        email: 'alice@prisma.io',
        gists: {
            create: [
                {
                    filename: 'map.js',
                    code: '[1,2,3].map((num) => num*num);',
                },
            ],
        },
    },
    {
        name: 'Nilu',
        email: 'nilu@prisma.io',
        gists: {
            create: [
                {
                    filename: 'filter.js',
                    code: '[1,2,3].filter((num) => num!==1);',
                    private: true,
                },
            ],
        },
    },
    {
        name: 'Mahmoud',
        email: 'mahmoud@prisma.io',
        gists: {
            create: [
                {
                    filename: 'reduce.js',
                    code: '[1,2,3].reduce((acc, num) => acc+num, 0);',
                },
                {
                    filename: 'concat.js',
                    code: '[1,2,3].concat([4,5,6])',
                    private: true,
                },
            ],
        },
    },
];

async function main() {
    console.log(`Start seeding ...`);
    for (const u of userData) {
        const user = await prisma.user.create({
            data: u,
        });
        console.log(`Created user with id: ${user.id}`);
    }
    console.log(`Seeding finished.`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
