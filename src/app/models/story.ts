import { Url } from 'url';

export interface Story {
    id?: string;
    title?: string;
    description?: string;
    date?: string;
    image?: Url;
}