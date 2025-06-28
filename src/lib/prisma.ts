import {} from '@prisma'

const prismaClientSingleton = () => {
    return new PrismaClient()
}