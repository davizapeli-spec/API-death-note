
import { Request, Response } from "express";
import { prisma } from "../../config/prisma";

export default {
    list: async (request: Request, response: Response) => {
        try {
            const personagens = await prisma.personagem.findMany();

            return response.json(personagens);
        } catch (error) {
            return response.status(500).json({ erro: "Erro ao listar personagens" });
        }
    },

    getById: async (request: Request, response: Response) => {
        try {
            const { id } = request.params;

            const personagem = await prisma.personagem.findUnique({
                where: { id: Number(id) }
            });

            if (!personagem) {
                return response.status(404).json({ erro: "Personagem não encontrado" });
            }

            return response.json(personagem);
        } catch (error) {
            return response.status(500).json({ erro: "Erro ao buscar personagem" });
        }
    },

    create: async (request: Request, response: Response) => {
        try {
            const { nome, apelido, ocupacao, raca } = request.body;

            const personagem = await prisma.personagem.create({
                data: {
                    nome,
                    apelido,
                    ocupacao,
                    raca
                }
            });

            return response.status(201).json(personagem);
        } catch (error) {
            return response.status(500).json({ erro: "Erro ao cadastrar personagem" });
        }
    },

    update: async (request: Request, response: Response) => {
        try {
            const { id } = request.params;
            const { nome, apelido, ocupacao, raca } = request.body;

            const personagem = await prisma.personagem.update({
                where: { id: Number(id) },
                data: {
                    nome,
                    apelido,
                    ocupacao,
                    raca
                }
            });

            return response.json(personagem);
        } catch (error) {
            return response.status(500).json({ erro: "Erro ao atualizar personagem" });
        }
    },

    delete: async (request: Request, response: Response) => {
        try {
            const { id } = request.params;

            await prisma.personagem.delete({
                where: { id: Number(id) }
            });

            return response.json({ mensagem: "Personagem excluído com sucesso" });
        } catch (error) {
            return response.status(500).json({ erro: "Erro ao excluir personagem" });
        }
    }
};
