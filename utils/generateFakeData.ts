import { faker } from "@faker-js/faker"

const generateFakeData = () => {

    return {
        id: faker.string.uuid(),
        name: faker.internet.userName(),
        sport:faker.internet.userName(),
        league:faker.internet.displayName(),
        address:faker.location.buildingNumber(),
        country:faker.location.country(),
        logoUri:faker.image.avatar(),
        avatar: faker.image.avatar(),
        links: faker.internet.url(),

    }
}

export const generateMulFakeData = (length: any) => {
    const data: { id: string; name: string;sport:string;league:string;address:string;country:string; avatar: string;logoUri:string; registeredAt: Date; }[] | any = [];
    Array.from({ length: length }).forEach(() => {
        data.push(generateFakeData())
    })
    return data
}