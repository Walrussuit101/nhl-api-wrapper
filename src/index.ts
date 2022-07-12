import NhlApiWrapper from './NhlApiWrapper'
import ApiBaseUrl from './ApiBaseUrl';

(async () => {
    try {
        const metroTeams = await NhlApiWrapper.team({
            where: {
                division: {
                    name: "Metropolitan"
                }
            }
        });

        console.log(metroTeams);

        const pensWithRoster = await NhlApiWrapper.teamWithRoster({
            where: {
                teamName: "Penguins"
            }
        });

        console.log(pensWithRoster[0].roster.roster.filter(player => {
            return player.person.fullName === 'Sidney Crosby'
        }));
    } catch(e) {
        console.error(e);
    }
})();

export { ApiBaseUrl };
export default NhlApiWrapper;
