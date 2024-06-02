-- CreateTable
CREATE TABLE "user" (
    "id" VARCHAR NOT NULL,
    "username" VARCHAR,
    "password" VARCHAR,
    "email" VARCHAR,
    "profile_pic" VARCHAR,
    "createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "session" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_profile_pic_key" ON "user"("profile_pic");

-- AddForeignKey
ALTER TABLE "session" ADD CONSTRAINT "session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
