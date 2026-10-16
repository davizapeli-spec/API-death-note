/*
  Warnings:

  - You are about to drop the column `descricao` on the `Personagem` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Personagem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "idade" INTEGER,
    "poder" TEXT,
    "especie" TEXT
);
INSERT INTO "new_Personagem" ("id", "idade", "nome", "poder") SELECT "id", "idade", "nome", "poder" FROM "Personagem";
DROP TABLE "Personagem";
ALTER TABLE "new_Personagem" RENAME TO "Personagem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
