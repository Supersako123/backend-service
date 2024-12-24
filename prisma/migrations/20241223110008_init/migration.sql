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
    "clouds" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Weather" ("clouds", "feels_like", "grnd_level", "humidity", "id", "lat", "lon", "name", "pressure", "sea_level", "sky", "temp", "temp_max", "temp_min", "visibility", "wind_speed") SELECT "clouds", "feels_like", "grnd_level", "humidity", "id", "lat", "lon", "name", "pressure", "sea_level", "sky", "temp", "temp_max", "temp_min", "visibility", "wind_speed" FROM "Weather";
DROP TABLE "Weather";
ALTER TABLE "new_Weather" RENAME TO "Weather";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
