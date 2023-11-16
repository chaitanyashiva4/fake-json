import { faker } from '@faker-js/faker';
import { NextRequest, NextResponse } from "next/server";

const generateFakeJson=() => {
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
};

export async function GET(request: NextRequest) {
    const data: { id: string; name: string; avatar: string; registeredAt: Date; }[] | any = [];
    Array.from({ length: 5 }).forEach(() => {
        data.push(generateFakeJson())
    }
    )
    return NextResponse.json({'data': data }); // Sending the response
}