# nhl-api-wrapper

## Installation
```bash
$ npm install nhl-api-wrapper
```

## Credit
All of the information (routes, query params, etc.) regarding the API I obtained from [here](https://gitlab.com/dword4/nhlapi/-/blob/master/stats-api.md),  which was documented by [Drew Hynes](https://gitlab.com/dword4).

## Usage

### Importing
```typescript
import NhlApiWrapper from 'nhl-api-wrapper';
```

### All of an entity

All divisions:
```typescript
const divisions = await NhlApiWrapper.division();
console.log(divisions);
```

Result:
```
[
  {
    id: 17,
    name: 'Atlantic',
    link: '/api/v1/divisions/17',
    abbreviation: 'A',
    conference: { id: 6, name: 'Eastern', link: '/api/v1/conferences/6' },
    active: true
  },
  {
    id: 16,
    name: 'Central',
    link: '/api/v1/divisions/16',
    abbreviation: 'C',
    conference: { id: 5, name: 'Western', link: '/api/v1/conferences/5' },
    active: true
  },
  {
    id: 18,
    name: 'Metropolitan',
    link: '/api/v1/divisions/18',
    abbreviation: 'M',
    conference: { id: 6, name: 'Eastern', link: '/api/v1/conferences/6' },
    active: true
  },
  {
    id: 15,
    name: 'Pacific',
    link: '/api/v1/divisions/15',
    abbreviation: 'P',
    conference: { id: 5, name: 'Western', link: '/api/v1/conferences/5' },
    active: true
  }
]
```

### Filtering

All teams in the metropolitan division:
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

Result:
```
[
  {
    id: 1,
    name: 'New Jersey Devils',
    link: '/api/v1/teams/1',
    venue: {
      name: 'Prudential Center',
      link: '/api/v1/venues/null',
      city: 'Newark',
      timeZone: [Object]
    },
    abbreviation: 'NJD',
    teamName: 'Devils',
    locationName: 'New Jersey',
    firstYearOfPlay: '1982',
    division: {
      id: 18,
      name: 'Metropolitan',
      nameShort: 'Metro',
      link: '/api/v1/divisions/18',
      abbreviation: 'M'
    },
    conference: { id: 6, name: 'Eastern', link: '/api/v1/conferences/6' },
    franchise: {
      franchiseId: 23,
      teamName: 'Devils',
      link: '/api/v1/franchises/23'
    },
    shortName: 'New Jersey',
    officialSiteUrl: 'http://www.newjerseydevils.com/',
    franchiseId: 23,
    active: true
  },
  {
    id: 2,
    name: 'New York Islanders',
    link: '/api/v1/teams/2',
    venue: {
      name: 'UBS Arena',
      link: '/api/v1/venues/null',
      city: 'Elmont',
      timeZone: [Object]
    },
    abbreviation: 'NYI',
    teamName: 'Islanders',
    locationName: 'New York',
    firstYearOfPlay: '1972',
    division: {
      id: 18,
      name: 'Metropolitan',
      nameShort: 'Metro',
      link: '/api/v1/divisions/18',
      abbreviation: 'M'
    },
    conference: { id: 6, name: 'Eastern', link: '/api/v1/conferences/6' },
    franchise: {
      franchiseId: 22,
      teamName: 'Islanders',
      link: '/api/v1/franchises/22'
    },
    shortName: 'NY Islanders',
    officialSiteUrl: 'http://www.newyorkislanders.com/',
    franchiseId: 22,
    active: true
  }, 
  ...
]
```

### Types
All entity types are exported for usage

```typescript
import { Team, Division, Season } from 'nhl-api-wrapper';
```

### API Base URL
The APIs base path is also exported for usage

```typescript
import { ApiBaseUrl } from 'nhl-api-wrapper';
```

## Entity support
Below are the entities the package currently has support for

| Entity      | API Link               | Defined Shape |
| ----------- | ---------------------- | --------- |
| Conference  | /api/v1/conferences    | [Conference.ts](https://github.com/Walrussuit101/nhl-api-wrapper/blob/master/src/models/Conference.ts) |
| Division    | /api/v1/divisions      | [Division.ts](https://github.com/Walrussuit101/nhl-api-wrapper/blob/master/src/models/Division.ts) |
| Franchise   | /api/v1/franchises     | [Franchise.ts](https://github.com/Walrussuit101/nhl-api-wrapper/blob/master/src/models/Franchise.ts)
| Person      | /api/v1/people/{id}    | [Person.ts](https://github.com/Walrussuit101/nhl-api-wrapper/blob/master/src/models/Person.ts)
| Season      | /api/v1/seasons        | [Season.ts](https://github.com/Walrussuit101/nhl-api-wrapper/blob/master/src/models/Season.ts)
| Team        | /api/v1/teams          | [Team.ts](https://github.com/Walrussuit101/nhl-api-wrapper/blob/master/src/models/Team.ts)
| Venue       | /api/v1/venues         | [Venue.ts](https://github.com/Walrussuit101/nhl-api-wrapper/blob/master/src/models/Venue.ts)


## Validation
`nhl-api-wrapper` uses [zod](https://github.com/colinhacks/zod) to verify the data's shape that is returned from the API. If you get a zod parsing error when using please log an issue here, as the API could've changed or updated.

## Contributing/Dev Setup
The package is already setup to use [bun](https://github.com/oven-sh/bun) as an npm client, but npm can be used as well.
