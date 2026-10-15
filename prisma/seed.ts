import bcrypt from "bcrypt";
import { prisma } from "../config/prisma";

async function main() {
    const usuario = await prisma.usuario.create({
        data: {
            nome: "Davi",
            email: "Davi@gmail.com",
            senha: bcrypt.hashSync("123456", +process.env.BCRYPT_ROUNDS!),
        },
    });
    console.info("Usuário criado:", usuario);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });