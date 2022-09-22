import { prisma } from ".";
import type { Task } from "../generated/prisma-client";

const defaultTasks = [
  {
    name: "Wash clothes",
    description: "Gotta wash clothes",
  },
  {
    name: "Hit the gym",
  },
] as Partial<Task>[];

(async () => {
  try {
    await Promise.all(
      defaultTasks.map((task) =>
        prisma.task.upsert({
          where: {
            name: task.name!,
          },
          update: {
            ...task,
          },
          create: {
            ...task,
          },
        })
      )
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();