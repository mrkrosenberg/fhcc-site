import { Url } from 'url';

export interface Story {
    id?: string;
    title?: string;
    body?: string;
    date?: string;
    image?: Url;
}