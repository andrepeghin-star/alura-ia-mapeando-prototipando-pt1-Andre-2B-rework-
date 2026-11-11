export type Block = {
  id: string;
  title: string;
  time: string;
  items: string[];
};

export const BLOCKS: Block[] = [
  {
    id: "manha",
    title: "Manhã",
    time: "5:30 – 7:00",
    items: ["Acordar", "Água e alongamento", "Café da manhã", "Mochila pronta", "Sair de casa"],
  },
  {
    id: "escola",
    title: "Escola",
    time: "7:00 – 12:00",
    items: ["Primeira aula", "Segunda aula", "Intervalo", "Terceira aula", "Voltar pra casa"],
  },
  {
    id: "almoco",
    title: "Almoço",
    time: "12:00 – 13:30",
    items: ["Almoçar", "Descansar", "Separar o material"],
  },
  {
    id: "calistenia",
    title: "Calistenia",
    time: "14:00 – 15:30",
    items: ["Aquecimento", "Pull-ups e push-ups", "Core e plank", "Alongamento"],
  },
  {
    id: "estudo",
    title: "Estudo",
    time: "16:00 – 18:30",
    items: ["Revisar o dia", "Pomodoro", "Exercícios", "Anotar dúvidas"],
  },
  {
    id: "noite",
    title: "Noite",
    time: "19:00 – 22:00",
    items: ["Jantar", "Lazer curto", "Organizar amanhã", "Dormir"],
  },
];

export const TOTAL = BLOCKS.reduce((n, b) => n + b.items.length, 0);

export function itemKey(blockId: string, index: number) {
  return `${blockId}:${index}`;
}
