import brain from 'werewolf-brain';

export default new class werewolfService {
    getDecks() {
        return brain.getAllTemplates();        
    }
    
    getCards() {
        return brain.getAllCards();
    }
}
