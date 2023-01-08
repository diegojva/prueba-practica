import { Contributor } from "./contributor";
import { Document } from "./document";

export class Organization {
    id: number;
    nroDocument: string;
    companyName: string;
    commercialName: string;
    address: string;
    phone: string;
    status: boolean
    document: Document;
    contributor: Contributor
}