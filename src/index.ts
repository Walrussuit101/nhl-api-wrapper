import { Franchise } from './models/Franchise';
import { Conference } from './models/Conference';
import { Venue } from './models/Venue';
import { Division } from './models/Division';
import { Season } from './models/Season';
import { Team, TeamWithRoster} from './models/Team';
import { Person } from './models/Person';

import NhlApiWrapper from './NhlApiWrapper'
import ApiBaseUrl from './ApiBaseUrl';

(async () => {
    try {
        const pensWithRoster = await NhlApiWrapper.teamWithRoster({
            where: {
                name: "Penguins"
            }
        });

        const sid = pensWithRoster[0].roster.roster.find(player => {
            return player.person.fullName === 'Sidney Crosby';
        });
        console.log(sid);

        const sidFullProfile = await NhlApiWrapper.person(sid.person.id);
        console.log(sidFullProfile);
    } catch(e) {
        console.error(e);
    }
})();

export { ApiBaseUrl, Franchise, Conference, Venue, Division, Season, Team, TeamWithRoster, Person};
export default NhlApiWrapper;
