-- CreateTable
CREATE TABLE "Weapon" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "subname" TEXT,
    "icon" TEXT,
    "damageType" TEXT NOT NULL,
    "specialSkill" TEXT,
    "proficiencySkill" TEXT,
    "rarity" TEXT NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "price" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Weapon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WeaponTag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "WeaponTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_WeaponToWeaponTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_WeaponToWeaponTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_WeaponToWeaponTag_B_index" ON "_WeaponToWeaponTag"("B");

-- AddForeignKey
ALTER TABLE "_WeaponToWeaponTag" ADD CONSTRAINT "_WeaponToWeaponTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Weapon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_WeaponToWeaponTag" ADD CONSTRAINT "_WeaponToWeaponTag_B_fkey" FOREIGN KEY ("B") REFERENCES "WeaponTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
