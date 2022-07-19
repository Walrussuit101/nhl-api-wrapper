# nhl-api-wrapper

## Installation
```bash
$ npm install nhl-api-wrapper
```

## Credit
All of the information (routes, query params, etc.) regarding the API I obtained from [here](https://gitlab.com/dword4/nhlapi/-/blob/master/stats-api.md),  which was documented by [Drew Hynes](https://gitlab.com/dword4).

## Usage

### All of an entity
All divisions

```typescript
const divisions = await NhlApiWrapper.division();
console.log(divisions);
```

### Filtering
All teams in the metropolitan division

```typescript
const metroTeams = await NhlApiWrapper.team({
    where: {
        division: {
            nameShort: 'Metro'
        }
    }
});
console.log(metroTeams)
```

### Types
All entity types are exported for usage

```typescript
import { Team, Division, Season } from 'nhl-api-wrapper';
```

## Validation
`nhl-api-wrapper` uses [zod](https://github.com/colinhacks/zod) to verify the data's shape that is returned from the API. If you get a zod parsing error when using please log an issue here, as the API could've changed or updated.
