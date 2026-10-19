export const WHATSAPP_URL =
  "https://wa.me/5511971089118?text=" +
  encodeURIComponent(
    "Olá! Conheci a GLM CREATIVE pelo site e gostaria de solicitar um orçamento."
  );

export const WHATSAPP_LOGO_URL =
  "https://wa.me/5511971089118?text=" +
  encodeURIComponent(
    "Olá! Quero solicitar a criação de uma logo personalizada para o meu negócio."
  );

export const WHATSAPP_LOGO_TALK_URL =
  "https://wa.me/5511971089118?text=" +
  encodeURIComponent(
    "Olá! Gostaria de conversar sobre a criação de uma logo para o meu negócio."
  );

export const INSTAGRAM_URL = "https://www.instagram.com/glmcreative._";

export const projects = [
  {
    id: "barbearia",
    niche: "Barbearia",
    name: "Barber Studio",
    category: "Sites",
    img: "/portfolio/barbearia.webp",
    alt: "Site desenvolvido para barbearia — Barber Studio",
    description:
      "Design moderno e sofisticado para barbearias que desejam destacar seus serviços e conquistar novos clientes.",
    deliverables: [
      "Site institucional responsivo",
      "Galeria de trabalhos com filtros",
      "Pacotes e agendamento",
      "Integração com WhatsApp",
    ],
  },
  {
    id: "odonto",
    niche: "Odontologia",
    name: "OdontoPrime",
    category: "Sites",
    img: "/portfolio/odonto.webp",
    alt: "Site desenvolvido para clínica odontológica — OdontoPrime",
    description:
      "Site elegante e profissional, desenvolvido para apresentar tratamentos odontológicos e facilitar o contato com pacientes.",
    deliverables: [
      "Site institucional responsivo",
      "Apresentação de tratamentos",
      "Agendamento de consultas",
      "Integração com WhatsApp",
    ],
  },
  {
    id: "oficina",
    niche: "Oficina Mecânica",
    name: "GLM Oficina Mecânica",
    category: "Sites",
    img: "/portfolio/oficina.webp",
    alt: "Site desenvolvido para oficina mecânica — GLM Oficina Mecânica",
    description:
      "Site institucional completo para oficina mecânica, com identidade visual forte em preto e vermelho, apresentação de serviços, seção de confiança e canais diretos de atendimento via WhatsApp.",
    deliverables: [
      "Site institucional responsivo",
      "Identidade visual automotiva",
      "Catálogo de serviços",
      "Integração com WhatsApp",
    ],
  },
  {
    id: "vet",
    niche: "Clínica Veterinária",
    name: "Agro Pet Aventura",
    category: "Sites",
    img: "/portfolio/vet.webp",
    alt: "Site desenvolvido para clínica veterinária — Agro Pet Aventura",
    description:
      "Site para clínica veterinária com visual acolhedor em tons de verde, vitrine de serviços com fotos, seção institucional e página de contato com localização e horários.",
    deliverables: [
      "Site institucional responsivo",
      "Vitrine de serviços veterinários",
      "Página de contato com mapa",
      "Integração com WhatsApp",
    ],
  },
  {
    id: "salao",
    niche: "Salão de Beleza",
    name: "Studio Belleza",
    category: "Sites",
    img: "/portfolio/salao.webp",
    alt: "Site desenvolvido para salão de beleza — Studio Belleza",
    description:
      "Site premium para salão de beleza com estética escura e sofisticada em tons dourados, apresentação de serviços, ambiente e agendamento direto pelo WhatsApp.",
    deliverables: [
      "Site premium responsivo",
      "Direção de arte sofisticada",
      "Vitrine de serviços",
      "Agendamento via WhatsApp",
    ],
  },
  {
    id: "lanchonete",
    niche: "Lanchonete",
    name: "Lanchonete Sabor sem Complicação",
    category: "Sites",
    img: "/portfolio/lanchonete.webp",
    alt: "Site com cardápio digital desenvolvido para lanchonete",
    description:
      "Site com cardápio digital para lanchonete, visual vibrante em preto e vermelho, cardápio organizado por categorias e pedidos diretos pelo WhatsApp.",
    deliverables: [
      "Cardápio digital interativo",
      "Identidade visual para food service",
      "Organização por categorias",
      "Pedidos via WhatsApp",
    ],
  },
  {
    id: "acai",
    niche: "Açai",
    name: "Açaí House",
    category: "Sites",
    img: "/portfolio/acai.webp",
    alt: "Site com cardápio digital desenvolvido para açaiteria — Açaí House",
    description:
      "Site com cardápio digital para açaiteria, identidade neon em rosa e roxo, cardápio completo com adicionais, montagem personalizada e pedidos pelo WhatsApp.",
    deliverables: [
      "Cardápio digital interativo",
      "Identidade visual neon",
      "Seção de adicionais e combos",
      "Pedidos via WhatsApp",
    ],
  },
];

export const filters = [
  { label: "Todos", value: "Todos" },
  { label: "Oficina Mecânica", value: "Oficina Mecânica" },
  { label: "Veterinária", value: "Clínica Veterinária" },
  { label: "Salão de Beleza", value: "Salão de Beleza" },
  { label: "Lanchonete", value: "Lanchonete" },
  { label: "Açai", value: "Açai" },
  { label: "Barbearia", value: "Barbearia" },
  { label: "Odontologia", value: "Odontologia" },
];

// PLACEHOLDER — substituir pelos depoimentos reais enviados pelo cliente
export const testimonials = [
  {
    id: 1,
    text: "A GLM CREATIVE entendeu exatamente o que meu negócio precisava. O site ficou moderno, rápido e meus clientes elogiam toda semana.",
    name: "Cliente GLM",
    role: "Segmento de atuação",
  },
  {
    id: 2,
    text: "Do primeiro contato à entrega, tudo foi muito profissional. A identidade visual transformou a forma como minha marca é percebida.",
    name: "Cliente GLM",
    role: "Segmento de atuação",
  },
  {
    id: 3,
    text: "O cardápio digital facilitou demais os pedidos pelo WhatsApp. Trabalho impecável, com atenção a cada detalhe.",
    name: "Cliente GLM",
    role: "Segmento de atuação",
  },
];

export const processSteps = [
  { n: "01", title: "Briefing", desc: "Imersão no negócio, público e objetivos do projeto." },
  { n: "02", title: "Conceito", desc: "Direção de arte, referências e definição da identidade." },
  { n: "03", title: "Design", desc: "Criação das telas, elementos visuais e conteúdo." },
  { n: "04", title: "Entrega", desc: "Projeto finalizado, responsivo e pronto para o ar." },
];

export const logos = [
  {
    id: "logo-auto-torque",
    name: "Auto Torque",
    niche: "Mecânica",
    category: "Logos",
    img: "/logos/auto-torque.webp",
    alt: "Logo Auto Torque — Mecânica Automotiva",
  },
  {
    id: "logo-barber-prime",
    name: "Barber Prime",
    niche: "Barbearia",
    category: "Logos",
    img: "/logos/barber-prime.webp",
    alt: "Logo Barber Prime — Barbearia",
  },
  {
    id: "logo-odonto-vida",
    name: "OdontoVida",
    niche: "Odontologia",
    category: "Logos",
    img: "/logos/odonto-vida.webp",
    alt: "Logo OdontoVida — Clínica Odontológica",
  },
  {
    id: "logo-pet-aventura",
    name: "Pet Aventura",
    niche: "Veterinária",
    category: "Logos",
    img: "/logos/pet-aventura.webp",
    alt: "Logo Pet Aventura — Clínica Veterinária",
  },
  {
    id: "logo-burger-house",
    name: "Burger House",
    niche: "Alimentação",
    category: "Logos",
    img: "/logos/burger-house.webp",
    alt: "Logo Burger House — Hamburgueria",
  },
];

export const logoFilters = [
  "Todas",
  "Mecânica",
  "Barbearia",
  "Odontologia",
  "Veterinária",
  "Alimentação",
];

export const logoBenefits = [
  "Logos criativas e profissionais",
  "Identidade visual marcante",
  "Design pensado para seu nicho",
  "Arquivos prontos para uso digital",
];
