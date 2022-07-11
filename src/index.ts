import NhlApiWrapper from './NhlApiWrapper'
import ApiBaseUrl from './ApiBaseUrl';

(async () => {
    try {
        const conferences = await NhlApiWrapper.conference();
        const penguins = await NhlApiWrapper.franchise({
            where: {
                teamName: "Penguins"
            }
        });
        const ballArena = await NhlApiWrapper.venue({
            where: {
                id: 5064
            }
        });
        const divisions = await NhlApiWrapper.division();

        console.log(conferences, penguins, ballArena, divisions);
    } catch(e) {
        console.error(e);
    }
})();

export { ApiBaseUrl };
export default NhlApiWrapper;
