import NhlApiWrapper from './NhlApiWrapper'
import ApiBaseUrl from './ApiBaseUrl';

NhlApiWrapper.franchise({
    where: {
        link: 'lol'
    }
}).then(data => {
    console.log(data);
}).catch(e => {
    console.log(e);
})

export { ApiBaseUrl };
export default NhlApiWrapper;
