import { Franchise } from './models/Franchise';
import { Conference } from './models/Conference';
import { Venue } from './models/Venue';
import { Division } from './models/Division';
import { Season } from './models/Season';
import { Team, TeamWithRoster} from './models/Team';

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

export { ApiBaseUrl, Franchise, Conference, Venue, Division, Season, Team, TeamWithRoster};
export default NhlApiWrapper;
