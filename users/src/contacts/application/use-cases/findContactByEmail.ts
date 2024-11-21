import { ContactsRepository } from '../../domain/ports/contactsRepository';
import { Contacts } from '../../domain/entities/contacts';

export class FindContactByEmail {
    constructor(private contactsRepository: ContactsRepository) {}

    async execute(email: string): Promise<Contacts | null> {
        return this.contactsRepository.findByEmail(email);
    }
}