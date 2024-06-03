import { atom } from 'jotai';

export const userAtom = atom<null | DatabaseUserAttributes>(null);
export const navAtom = atom<boolean>(false);

interface DatabaseUserAttributes {
    username: string;
    email: string;
    profile_pic?: string
}