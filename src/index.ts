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

        const metroTeams = await NhlApiWrapper.team({
            where: {
                division: {
                    name: "Metropolitan"
                }
            }
        });

        console.log(metroTeams);
    } catch(e) {
        console.error(e);
    }
})();

export { ApiBaseUrl };
export default NhlApiWrapper;
