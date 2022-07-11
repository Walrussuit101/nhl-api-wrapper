import NhlApiWrapper from './NhlApiWrapper'
import ApiBaseUrl from './ApiBaseUrl';

(async () => {
    try {
        
        const penguinsFranchise = await NhlApiWrapper.franchise({
            where: {
                teamName: "Penguins"
            }
        });
        
        const penguinsFirstSeason = await NhlApiWrapper.season({
            where: {
                seasonId: penguinsFranchise[0].firstSeasonId.toString()
            }
        });

        console.log(penguinsFranchise, penguinsFirstSeason);
        
        const penguinsTeam = await NhlApiWrapper.team({
            where: {
                name: "Pittsburgh Penguins"
            }
        });

        console.log(penguinsTeam);
    } catch(e) {
        console.error(e);
    }
})();

export { ApiBaseUrl };
export default NhlApiWrapper;
