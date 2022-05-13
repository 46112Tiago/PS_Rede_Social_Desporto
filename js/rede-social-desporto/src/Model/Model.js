
/*In case of error check if the properties have the exact same name as in the data class*/


export let user = {
    user_id : 0,
    firstName : '',
    lastName : '',
    city : '',
    birthdate : null,
    profilepic : '',
    email : '',
    available : false,
    gender : ''
};

export let group = {
    id : 0,
    picture : '',
    name : '',
    owner : {}
}

export let event = {
    field : {},
    compound : {},
    startDate : '',
    plannedfinishDate : '',
    name : '',
    sport: {},
    description: '',
    limitParticipants: 0
}

export let sport = {
    id : 0,
    user : {},
    name : ''
}

export let message = {
    message : '',
    ownerId : 0
}

export let post = {
    id : 0,
    description : "",
    pictures : []
}


export let field = {
    id : 0,
    compound : {
        name : '',
        parking : false
    },

    name : ''
}


export let comment = {
    id : 0,
    comment : ''
}

export let review = {
    id : 0,
    rating : 0,
    description : ''
}

export let schedule = {
    id : 0,
    weekday : '',
    openingHour : '',
    closingHour : '',
    optionalDescription : ''
}

export let materials = {
    id : 0,
    name : ''
}


export let compound = {
    id : 0,
    name : '',
    description : '',
    summary : '',
    dressingRoom : '',
    parking : false,
    location : ''
}