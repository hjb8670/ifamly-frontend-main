export interface CatalogItem {
  item_id: number;
}

export interface User {
    personId?: string,
    firstName?: string,
    lastName?: string,
    image?: ImagesUser,
    email?: string,
    password?: string,
    phone?: string,
    birthDay?: string,
    age?: number,
    location?:{
        country?: string,
        state?: string,
        city?: string,
        address?: string,
        latitud?: string,
        longitud?: string,
        radio?: string
    },
    height?: string,
    gender?: string,
    pronoun?: string,
    languajes?: CatalogItem[];
    exercise?: any;
    sings?: string,
    hobbies?: CatalogItem[],
    education?: string,
    pets?: CatalogItem[],
    valTraits?: CatalogItem[],
    drinking?: string,
    smoking?: string,
    drugs?: string,
    kids?: string,
    religion?: string,
    political?: string,
    iam_a?: string;
    iam_a_id?: string;
    iam_looking?: string;
    iam_looking_4?: string;
    iam_looking_4_id?: string;
    profileIam?: string,
    profileLookingFor?:string,
    aboutMe?: string,
    rate?: number,
    rates?: number,
    educationName?: string,
    educationYear?: number,
    title?: string,
    company?: string,
    dondeSoy?: string,
    queSoy?: string,
    rateExperiences?: number,
    rateUserExperiences?: number,
    notificationEnabled?: boolean,
}

export interface ImagesUser {
    imageId?: number,
    expressionId?: number,
    personId?: number,
    creationDate?: string,
    multimediaUrl?: string,
    thumbnailUrl?: string,
    avatar?: boolean
}

export interface ChangePassword {
    password?: string,
    oldPassword?: string
}

export interface Catalog {
    id?: number,
    name?: string,
    descripcion?: string,
    catalogueId?: number,
    orderRow?: number,
    country?: string,
    state?: string,
    city?: string,
    genderId: number
}

export interface Experience {
    experienceId?: number,
    title?: string,
    description?: string,
    image?: string,
    dateTime?: string,
    location?: {
        country?: string,
        state?: string,
        city?: string,
        address?: string,
        latitud?: string,
        longitud?: string,
        radio?: string
    },
    amountPeople?: number;
    experienceCategory?: {
        id?: number
    },
    vip?: boolean,
    coins?: number,
    ownerPersonId?: number,
    isOpen?: boolean
}

export interface ImagesExperience {
    imageId?: number,
    expresionId?: number,
    personId?: number,
    creationDate?: string,
    multimediaUrl?: string,
    thumbnailUrl?: string,
    avatar?: boolean
}

export interface OwnerExperience {
    id?: number,
    personId?: string,
    firstName?: string,
    lastName?: string,
    rates?: number,
    rateExperiences?: number,
    aboutMe?: string,
    imageGallery?: []
}

export interface InterestedUsr {
    personId?: number,
    name?: string,
    lastName?: string,
    location?:{
        state?: string,
        city?: string
    },
    status?: number,
    experienceId: number,
    rateUserExperiences?: number
}

export interface DiscoverUsr {
    personId?: number,
    firstName?: string,
    lastName?: string,
    age?: number,
    image?: string,
    location? : {
        radio?: string
    },
    rate?: number,
    rates?: number,
    iam_a?: string,
    status?: number
}

export interface FilterDiscover {
    selfRole?: string, 
    targetRole?: string, 
    ageIni?: number, 
    ageEnd?: number, 
    distance?: number,
    minHeight?: number,
    maxHeight?: number, 
    exercise?: number, 
    zodiacSign?: number, 
    education?: number, 
    drinking?: number, 
    smoking?: number, 
    kids?: number, 
    religion?: number,
    location?: {
        country?: string,
        state?: string,
        city?: string,
        address?: string,
        latitud?: string,
        longitud?: string,
    }
}

export interface MatchPerson {
    matchId?: number,
    personLiked?: number,
    personLikes?: number,
    accepted?: boolean,
    accion?: string,
    accionId?: number,
    block?: boolean,
    fechaCreacion?: string,
    isLike?: boolean
    isSuperLike?: boolean
    report: string,
    name?: string,
    lastName?: string,
    age?: number,
    image?: string,
}

export interface Rate {
    rate?: number,
    comment?: string,
    fecha?: string,
    dateRate?: string,
    commentRate?: string,
}

//Interfaz para elementso de codigo de pais
export interface CodePhone {
    country: string;
    code: string;
    iso: string;
}