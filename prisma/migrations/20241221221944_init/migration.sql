-- CreateTable
CREATE TABLE "Dog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "lifeMin" INTEGER NOT NULL,
    "lifeMax" INTEGER NOT NULL,
    "weightMaleMin" INTEGER NOT NULL,
    "weightMaleMax" INTEGER NOT NULL,
    "weightFemaleMax" INTEGER NOT NULL,
    "weightFemaleMin" INTEGER NOT NULL,
    "hypoallergenic" BOOLEAN NOT NULL
);
