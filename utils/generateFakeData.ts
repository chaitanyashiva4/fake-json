import { faker } from "@faker-js/faker"

const generateFakeData = () => {

    return {
        id: faker.string.uuid(),
        name: faker.internet.userName(),
        avatar: faker.image.avatar(),
        registeredAt: faker.date.past(),

    }
}

export const generateMulFakeData = (length: any) => {
    const data: { id: string; name: string; avatar: string; registeredAt: Date; }[] = [];
    Array.from({ length: length }).forEach(() => {
        data.push(generateFakeData())
    })
    return data
}