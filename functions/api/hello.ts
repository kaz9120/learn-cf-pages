import { v4 as uuid } from 'uuid';

interface Env {}

export const onRequest: PagesFunction<Env> = async (context) => {
    const id: string = uuid();
    return new Response(`Hello, World!! ${id}`);
}
