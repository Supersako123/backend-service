-- CreateTable
CREATE TABLE "Weather" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "long" REAL NOT NULL,
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
