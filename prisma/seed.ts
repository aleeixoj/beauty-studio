import { Resources } from '@prisma/client';

import { prisma } from '../src/database/prismaClient';

async function main() {
  await prisma.resources.createMany({
    data: [
      {
        key: 'L/E',
        value: 'Ler/Editar',
      },
      {
        key: 'add/rec',
        value: 'Adicionar recursos',
      },
      { key: 'add/prf', value: 'Adicionar Perfil' },
    ],
  });

  // const { key, value }: Resources | any = await prisma.resources.findFirst({
  //   where: { key: 'A/C' },
  // });

  const profile = await prisma.profile.create({
    data: {
      name: 'basic_user',
      resources: {
        create: {
          key: 'A/C',
          value: 'Agendamento/Cancelamento',
        },
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
