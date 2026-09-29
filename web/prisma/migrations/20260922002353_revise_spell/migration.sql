-- Hand-edited so the 4 existing Spell rows survive: rename instead of drop, and
-- temporary defaults for the new required columns (removed again at the end).

-- 1. Keep the old data by renaming the column
ALTER TABLE "Spell" RENAME "type" TO "school";

-- 2. Add the new columns (SQL text values use SINGLE quotes: '' is an empty string)
ALTER TABLE "Spell"
ADD COLUMN     "castRange" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "castTime" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "components" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "duration" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "icon" TEXT,
ADD COLUMN     "manaCost" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "relatedEffectDescription" TEXT,
ADD COLUMN     "summonStatBlock" TEXT,
ADD COLUMN     "targeting" TEXT NOT NULL DEFAULT '';

-- 3. Remove the temporary defaults so the database matches schema.prisma
ALTER TABLE "Spell"
ALTER COLUMN "castRange" DROP DEFAULT,
ALTER COLUMN "castTime" DROP DEFAULT,
ALTER COLUMN "components" DROP DEFAULT,
ALTER COLUMN "duration" DROP DEFAULT,
ALTER COLUMN "manaCost" DROP DEFAULT,
ALTER COLUMN "targeting" DROP DEFAULT;
