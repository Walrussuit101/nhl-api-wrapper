import NhlApiWrapper from './NhlApiWrapper'
import ApiBaseUrl from './ApiBaseUrl';

(async () => {
    try {
        const penguins = await NhlApiWrapper.franchise({
            where: {
                teamName: "Penguins"
            }
        });
        
        const penguinsFirstSeason = await NhlApiWrapper.season({
            where: {
                seasonId: penguins[0].firstSeasonId.toString()
            }
        });

        console.log(penguins, penguinsFirstSeason);
    } catch(e) {
        console.error(e);
    }
})();

export { ApiBaseUrl };
export default NhlApiWrapper;
