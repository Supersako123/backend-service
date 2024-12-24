/*
  Warnings:

  - You are about to drop the column `long` on the `Weather` table. All the data in the column will be lost.
  - Added the required column `lon` to the `Weather` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Weather" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "lon" REAL NOT NULL,
    "lat" REAL NOT NULL,
    "sky" TEXT NOT NULL,
    "temp" REAL NOT NULL,
    "feels_like" REAL NOT NULL,
    "temp_min" REAL NOT NULL,
    "temp_max" REAL NOT NULL,
    "pressure" INTEGER NOT NULL,
    "humidity" INTEGER NOT NULL,
    "sea_level" INTEGER NOT NULL,
    "grnd_level" INTEGER NOT NULL,
    "visibility" INTEGER NOT NULL,
    "wind_speed" REAL NOT NULL,
    "clouds" INTEGER NOT NULL
);
INSERT INTO "new_Weather" ("clouds", "feels_like", "grnd_level", "humidity", "id", "lat", "name", "pressure", "sea_level", "sky", "temp", "temp_max", "temp_min", "visibility", "wind_speed") SELECT "clouds", "feels_like", "grnd_level", "humidity", "id", "lat", "name", "pressure", "sea_level", "sky", "temp", "temp_max", "temp_min", "visibility", "wind_speed" FROM "Weather";
DROP TABLE "Weather";
ALTER TABLE "new_Weather" RENAME TO "Weather";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
