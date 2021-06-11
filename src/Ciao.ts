export default class Utils {

    static Ciao(people?: string) {
        people = people ? people : '';
        console.log(`Ciao ${people}`);
    }
}