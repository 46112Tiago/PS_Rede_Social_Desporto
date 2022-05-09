
/*In case of error check if the properties have the exact same name as in the data class*/


export let user = {
    user_id : 0,
    firstname : '',
    lastname : '',
    city : '',
    birthday : null,
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
    description : "",
    pictures : []
}
