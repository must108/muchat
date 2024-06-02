"use server";

import { PrismaAdapter } from '@lucia-auth/adapter-prisma'
import { db } from '../db';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { generateIdFromEntropySize } from 'lucia';
import { Lucia } from 'lucia';
import type { Session, User } from 'lucia';
import { cache } from 'react';
import { hash, verify } from '@node-rs/argon2';

const adapter = new PrismaAdapter(db.session, db.user);

const lucia = new Lucia(adapter, {
    sessionCookie: {
        expires: false,
        attributes: {
            secure: process.env.NODE_ENV === "production",
        },
    },
    getUserAttributes: (attributes: DatabaseUserAttributes) => {
        return {
            username: attributes.username,
            email: attributes.email,
            profile_pic: attributes.profile_pic,
        };
    },
});

declare module "lucia" {
    interface Register {
        Lucia: typeof lucia;
        DatabaseUserAttributes: DatabaseUserAttributes;
    }
}

interface DatabaseUserAttributes {
    username: string,
    email: string,
    profile_pic?: string
}

export async function signup(formData: FormData): Promise<ActionResult> {
    let username = formData.get("username");

    if (
        typeof username !== "string" ||
        username.length < 3 ||
        username.length > 31 ||
        !/^[a-z0-9_-]+$/.test(username)
    ) {
        return {
            error: "Invalid username",
        };
    }

    const password = formData.get("password");

    if (
        typeof password !== "string" || 
        password.length < 6 ||
        password.length > 255
    ) {
        return {
            error: "Invalid password",
        };
    }

    const email = formData.get("email");

    if (
        typeof email !== "string" ||
        email.length > 255 
    ) {
        return {
            error: "Invalid email",
        };
    }

    const userId = generateIdFromEntropySize(10);
    const passwordHash = await hash(password, {
        memoryCost: 19456,
        timeCost: 2,
        outputLen: 32,
        parallelism: 1,
    });

    const existingUser = await db.user.findUnique({
        where: {
            username: username,
        },
    });

    if(existingUser) {
        return {
            error: "Taken username",
        };
    }
    
    await db.user.create({
        data: {
            id: userId,
            username: username,
            password: passwordHash,
            email: email,
        },
    });

    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes,
    );

    return redirect('/sign-in');
}

export async function login(formData: FormData): Promise<ActionResult> {
    const username = formData.get("username");

    if (
        typeof username !== "string" ||
        username.length < 3 ||
        username.length > 31 ||
        !/^[a-z0-9_-]+$/.test(username)
    ) {
        return {
            error: "Invalid username",
        };
    }

    const password = formData.get("password");

    if ( 
        typeof password !== "string" ||
        password.length < 6 ||
        password.length > 255
    ) {
        return {
            error: "Invalid password",
        };
    }

    const existingUser = await db.user.findUnique({
        where: {
            username: username
        },
    });

    if (!existingUser) {
        return {
            error: "Incorrect username!",
        };
    }

    const validPassword = await verify(
        existingUser.password as string,
        password,
        {
            memoryCost: 19456,
            timeCost: 2,
            outputLen: 32,
            parallelism: 1,
        },
    );

    if (!validPassword) {
        return {
            error: "Incorrect password!",
        };
    }

    const session = await lucia.createSession(existingUser.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes,
    );
    return redirect("/");
}

interface ActionResult {
    error: string,
}