import NhlApiWrapper from './NhlApiWrapper'
import ApiBaseUrl from './ApiBaseUrl';

NhlApiWrapper.conference({
    where: {
        name: "Eastern"
    }
}).then(data => {
    console.log(data);
}).catch(e => {
    console.log(e);
})

NhlApiWrapper.franchise({
    where: {
        teamName: "Penguins"
    }
}).then(data => {
    console.log(data);
}).catch(e => {
    console.log(e);
})

export { ApiBaseUrl };
export default NhlApiWrapper;
