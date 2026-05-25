# Prompt — Implementação do Redesign do Site MetalPev

> Cole o conteúdo abaixo em um novo chat com o agente que vai implementar o site.
> Os trechos entre `<<< … >>>` são placeholders opcionais — preencha se quiser orientar mais.

---

## CONTEXTO DO PROJETO

Você é o engenheiro responsável por implementar o **redesign completo do site institucional da MetalPev Caldeiraria & Instalações Industriais**, conforme proposta comercial já aprovada (vide `docs/proposta-comercial-metalpev.html` e `docs/Proposta-Comercial-MetalPev-Redesign.pdf`).

O cliente é uma empresa B2B do setor industrial (caldeiraria, NR-13, vasos de pressão, instalações industriais, soldas) sediada em São Bernardo do Campo / SP. O público-alvo são gestores de manutenção, engenheiros e tomadores de decisão de empresas industriais.

### O que existe hoje (legado)

- Stack: **Next.js 14 (Pages Router)**, React 18, SCSS Modules, Formspree, `next/image` apontando para Cloudinary externo.
- Estrutura: **página única (one-page)** com âncoras (`#home`, `#sobre`, `#empresa`, `#servicos`, `#contato`).
- Arquivos relevantes:
  - `pages/index.js` — todo o site em um arquivo
  - `pages/_document.js` — meta tags genéricas
  - `pages/_app.js` — globals
  - `components/upload.js` — formulário Formspree
  - `styles/Home.module.scss` — estilos legados (uso de `float`, layout datado)
  - `styles/globals.scss`
  - `next.config.js` — Cloudinary remote patterns
- Problemas: design de 2021, menu mobile não funciona, copyright "MetalPev 2021", textos repetidos ("Adequação a norma NR 13" como título e descrição), erros ortográficos ("instalacões", "mesaninos"), SEO inexistente, redes sociais sem links, formulário Formspree desconectado do WhatsApp.
- O domínio antigo `metalpev.com` **expirou**; o novo será `metalpev.com.br`.

### O que foi vendido (escopo contratado — R$ 1.000)

1. Repaginação visual completa (design system moderno).
2. **Arquitetura multi-páginas** (não mais one-page).
3. Página de contato dedicada.
4. **Formulário integrado ao WhatsApp** (substituindo Formspree).
5. Revisão e atualização de textos.
6. Novos elementos visuais e seções estratégicas.
7. Site 100% responsivo (mobile-first).
8. **SEO básico** (metas, sitemap, robots, Schema.org LocalBusiness + Service).
9. Performance (Core Web Vitals).
10. Configuração de domínio `.com.br` + publicação.
11. Suporte pós-entrega.

---

## OBJETIVO DESTA EXECUÇÃO

Implementar **toda a parte de código** do novo site: estrutura de páginas, design system, componentes, conteúdo, formulário-WhatsApp, SEO técnico e otimização de performance — pronto para deploy.

> Antes de começar a codar, **leia obrigatoriamente** os arquivos:
> - `docs/proposta-comercial-metalpev.html` (escopo, design conceitual, paleta, tom)
> - `pages/index.js` (entender o que existe e o que sobrevive)
> - `styles/Home.module.scss` (paleta legada e referências de imagens)

---

## DECISÕES TÉCNICAS (já tomadas — siga)

- **Manter Next.js 14 + Pages Router** (já está no projeto, evita refactor de roteador).
- **Migrar SCSS Modules → CSS Modules + variáveis CSS globais** OU manter SCSS Modules. Escolha **SCSS Modules** para reaproveitar a base; renomeie/refatore os arquivos legados, não os edite por cima.
- **NÃO instale Tailwind** salvo se justificar ganho real; o cliente não pediu, e o stack já tem SCSS.
- **Adicione `framer-motion`** para microanimações sutis (fade/slide-in on scroll). Sem exageros.
- **Imagens**: mover para `/public/images/...` (otimizadas WebP) sempre que possível. Permitir Cloudinary apenas como fallback temporário até receber materiais novos do cliente. Use `next/image` em tudo.
- **Fonte**: `next/font/google` com `Inter` (400, 500, 600, 700, 800), `display: swap`, subset latin.
- **Ícones**: `lucide-react` (leve, tree-shakeable). Sem Font Awesome.
- **Formulário**: substituir Formspree por handler que **monta uma mensagem de WhatsApp e abre `https://wa.me/5511953634019?text=...`** com os dados do cliente. Sem backend.
- **Linguagem**: PT-BR. Tom profissional, técnico, B2B industrial.
- **Acessibilidade**: HTML semântico (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), `alt` em todas as imagens, contraste AA, foco visível.

---

## DESIGN SYSTEM (use exatamente estes tokens)

Crie `styles/_tokens.scss` (ou `styles/tokens.scss`) com:

```scss
// Cores
$color-primary: #8B1A1A;        // Vermelho industrial MetalPev
$color-primary-dark: #6B1414;
$color-primary-light: #C53030;
$color-accent: #0097C3;          // Azul técnico
$color-dark: #0F141A;            // Quase preto (mais profundo que a proposta)
$color-graphite: #1A1F26;
$color-gray-900: #1F2937;
$color-gray-700: #374151;
$color-gray-500: #6B7280;
$color-gray-300: #D1D5DB;
$color-gray-100: #F3F4F6;
$color-gray-50:  #F9FAFB;
$color-white:    #FFFFFF;
$color-success:  #047857;
$color-warning:  #B45309;

// Tipografia
$font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
$fs-display: clamp(2.5rem, 5vw, 4.25rem);  // Hero
$fs-h1: clamp(2rem, 3.5vw, 3rem);
$fs-h2: clamp(1.5rem, 2.5vw, 2.25rem);
$fs-h3: 1.25rem;
$fs-body: 1rem;
$fs-small: 0.875rem;
$fs-xs: 0.75rem;
$lh-tight: 1.15;
$lh-normal: 1.6;

// Espaçamento (escala 4px)
$space-1: .25rem; $space-2: .5rem; $space-3: .75rem; $space-4: 1rem;
$space-6: 1.5rem; $space-8: 2rem; $space-12: 3rem; $space-16: 4rem;
$space-20: 5rem; $space-24: 6rem; $space-32: 8rem;

// Container
$container-max: 1280px;
$container-pad: clamp(1rem, 4vw, 2rem);

// Raios e sombras
$radius-sm: 6px;
$radius-md: 12px;
$radius-lg: 20px;
$radius-pill: 999px;
$shadow-sm: 0 1px 2px rgba(15,20,26,.06);
$shadow-md: 0 4px 16px rgba(15,20,26,.08);
$shadow-lg: 0 12px 40px rgba(15,20,26,.12);
$shadow-glow: 0 8px 32px rgba(139, 26, 26, .25);

// Transições
$ease: cubic-bezier(.2,.7,.2,1);
$dur-fast: .18s;
$dur: .28s;
$dur-slow: .55s;

// Breakpoints
$bp-sm: 640px; $bp-md: 768px; $bp-lg: 1024px; $bp-xl: 1280px;
```

### Princípios visuais (siga à risca)

- **Estética**: industrial moderno, premium, "tecnologia + metal". Inspirações: sites de SaaS B2B (Vercel, Linear) aplicados a contexto industrial. Limpo, com bastante espaço em branco, hierarquia tipográfica forte.
- **Hero**: ocupar viewport quase inteira, fundo escuro (`$color-dark`) com gradiente sutil + acento vermelho, foto industrial real (caldeira, solda em ação, planta industrial) com overlay escuro, headline grande (`$fs-display`, peso 800, tracking apertado `letter-spacing: -0.02em`), subheadline em cinza claro, dois CTAs (primário vermelho preenchido + secundário com borda).
- **Barras de confiança**: logos de clientes / certificações / números (anos de mercado, projetos entregues, % de satisfação) em barra horizontal logo abaixo do hero.
- **Cards de serviço**: grid responsivo (3 colunas desktop / 2 tablet / 1 mobile), cada card com ícone (lucide), título, descrição curta, link "Saiba mais →". Hover com `transform: translateY(-4px)` e sombra crescente. Sem hover obscuro com texto aparecendo (legado).
- **Seções alternam fundo**: branco → cinza-50 → escuro com texto claro → branco, criando ritmo.
- **Imagens com tratamento**: cantos arredondados (`$radius-md`), sombra média, e quando sobre fundo escuro, leve borda `1px rgba(255,255,255,.08)`.
- **Botões**:
  - Primário: fundo `$color-primary`, texto branco, padding `0.875rem 1.75rem`, `$radius-pill`, peso 600, hover escurece + sombra `$shadow-glow`.
  - Secundário: borda `1px $color-gray-300` (ou branco no escuro), fundo transparente, hover preenche.
  - WhatsApp: ícone `lucide-react` `MessageCircle` ou SVG do WhatsApp + texto "Falar no WhatsApp".
- **Microanimações**: `framer-motion` `whileInView` com `opacity 0 → 1` e `y: 24 → 0`, duração `0.5s`, stagger `0.08s`. Apenas em entradas de seção. Sem parallax, sem efeitos chamativos.
- **WhatsApp flutuante**: botão fixo bottom-right (em todas as páginas), círculo verde-WhatsApp, sombra forte, anima entrada após 1s, abre `wa.me`.

---

## ESTRUTURA DE PÁGINAS (Pages Router)

```
pages/
  index.js                # Home
  sobre.js                # Sobre / Empresa (mesclar as duas seções legadas)
  servicos/
    index.js              # Listagem de serviços
    caldeiras.js          # Página individual
    valvulas.js
    escadas-mezaninos.js
    manifolds.js
    nr-13.js              # Serviço-âncora (mais conteúdo, mais SEO)
    soldas-inspecao.js
    reposicionamento-tanques.js
  contato.js              # Página dedicada de contato
  _app.js                 # Layout global (Header + Footer + WhatsAppFloat)
  _document.js            # html lang=pt-BR + preconnect fonts
  404.js                  # Erro custom
  api/
    (vazio — formulário vai direto pro WhatsApp via wa.me)
```

### Componentes a criar

```
components/
  layout/
    Header.jsx            # Logo + nav desktop + menu mobile funcional (drawer)
    Footer.jsx            # Mapa do site, contatos, redes sociais com links reais
    WhatsAppFloat.jsx     # Botão flutuante
  ui/
    Button.jsx            # variants: primary, secondary, ghost, whatsapp
    Container.jsx
    Section.jsx           # com prop `tone="light"|"alt"|"dark"`
    Card.jsx
    Badge.jsx
    Stat.jsx              # número grande + label
  sections/
    Hero.jsx
    TrustBar.jsx          # estatísticas + certificações
    ServicesGrid.jsx
    AboutSnippet.jsx
    NR13Highlight.jsx
    ProcessSteps.jsx      # como trabalhamos: 1 Diagnóstico → 2 Projeto → 3 Execução → 4 Laudo/Entrega
    Testimonials.jsx      # placeholder com 2-3 depoimentos genéricos (avisar cliente que pode substituir)
    FAQ.jsx               # 6-8 perguntas frequentes sobre NR-13 e serviços
    CTASection.jsx        # bloco "Solicite seu orçamento" pré-footer
  forms/
    ContactForm.jsx       # monta wa.me/...?text=... com dados do form
  seo/
    Seo.jsx               # wrapper de next/head com title, description, og, schema
```

---

## CONTEÚDO (textos revisados — use estes)

### Mensagens-chave globais

- **Headline principal (Home)**:
  "Caldeiraria e Instalações Industriais com Segurança Certificada."
- **Subheadline**:
  "Especialistas em NR-13, caldeiras, vasos de pressão, soldas e instalações industriais. Atendemos indústrias em todo o ABC Paulista e Grande SP com foco total em conformidade, segurança e prazo."
- **CTAs**: "Solicitar orçamento" (primário) · "Falar no WhatsApp" (secundário).

### Trust bar (4 itens)

- `15+ anos` no setor industrial
- `Especialistas em NR-13` (norma regulamentadora)
- `+200 projetos` entregues
- `100% foco` em segurança e laudos

> Se o cliente não confirmou os números, deixe placeholder visível em comentário no código.

### Cards de serviço — descrições reescritas

| Serviço | Descrição (~140 caracteres) |
|---|---|
| Caldeiras | Projeto, fabricação, instalação e manutenção de caldeiras industriais com adequação total à NR-13. |
| Vasos de Pressão | Inspeção, fabricação e adequação de vasos de pressão dentro das exigências regulatórias. |
| Tubulações Industriais | Montagem, manutenção e modernização de redes de tubulação para processos industriais. |
| Válvulas de Segurança | Fabricação, instalação e calibração de válvulas de segurança e alívio de pressão. |
| Escadas e Mezaninos | Estruturas metálicas, escadas retas, helicoidais, mezaninos, guarda-corpos e proteção de máquinas. |
| Manifolds | Projeto e fabricação de manifolds industriais sob medida para diferentes processos. |
| Adequação à NR-13 | Adequação completa de equipamentos e processos à norma NR-13, com laudos e documentação técnica. |
| Reposicionamento de Tanques | Movimentação técnica e reposicionamento seguro de tanques metálicos industriais. |
| Soldas e Inspeção | Liquido penetrante, ultrassom, partícula magnética e inspeção visual com profissionais qualificados. |

### Página NR-13 (mais robusta — é a principal porta de entrada SEO)

Inclua: o que é a NR-13, a quem se aplica, riscos da não conformidade, como a MetalPev faz a adequação (passo a passo), tipos de equipamentos atendidos (caldeiras, vasos de pressão, tanques metálicos, tubulações), treinamentos para operadores, FAQ específico.

### Página Sobre

Histórico curto (sem inventar), missão / visão / valores, foco em NR-13, equipe e localização (SBC).

### Página Contato

- Form: Nome, Empresa, E-mail, Telefone (WhatsApp), Tipo de serviço (select), Mensagem.
- Endereço: Estrada particular Eiji Kikuti N°413, Cooperativa, São Bernardo do Campo / SP.
- Telefone/WhatsApp: (11) 95363-4019.
- E-mail: metalpev@gmail.com.
- Mapa do Google embed (iframe leve, com loading="lazy").
- Horário de atendimento: Segunda a sexta, 08h às 18h.

### Footer

- Coluna 1: logo + tagline curta.
- Coluna 2: navegação (links das páginas).
- Coluna 3: serviços principais (links).
- Coluna 4: contato + redes sociais (LinkedIn, Facebook — **com `href` real ou placeholder `#` documentado**).
- Linha final: `© 2026 MetalPev — Caldeiraria & Instalações Industriais. Todos os direitos reservados.` (use `new Date().getFullYear()` para nunca mais ficar desatualizado).

> Corrija todos os erros ortográficos do site antigo: "instalacões" → "instalações", "mesaninos" → "mezaninos", "caldeira ria" → "caldeiraria".

---

## FORMULÁRIO → WHATSAPP (especificação)

```js
// components/forms/ContactForm.jsx (esqueleto)
const WHATSAPP_NUMBER = "5511953634019";

function buildWhatsAppMessage({ nome, empresa, email, telefone, servico, mensagem }) {
  const lines = [
    "Olá, MetalPev! Vim pelo site e gostaria de um orçamento.",
    "",
    `*Nome:* ${nome}`,
    empresa && `*Empresa:* ${empresa}`,
    `*E-mail:* ${email}`,
    `*Telefone:* ${telefone}`,
    servico && `*Serviço de interesse:* ${servico}`,
    "",
    `*Mensagem:*`,
    mensagem,
  ].filter(Boolean);
  return lines.join("\n");
}

// no submit: window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank")
```

Validação cliente (HTML5 + regex simples). Sem dependência de backend. Exibir feedback "Abrindo WhatsApp…" ao clicar.

**Remova `@formspree/react` do `package.json`** depois que o form novo estiver pronto.

---

## SEO (entregáveis técnicos)

- `next/head` (ou helper `<Seo />`) por página com:
  - `title` único, `description` única (≤160 caracteres)
  - `og:title`, `og:description`, `og:image` (criar uma imagem 1200×630 default em `/public/og-default.jpg`)
  - `twitter:card = summary_large_image`
  - canonical
- `pages/sitemap.xml.js` (gerado dinamicamente a partir da lista de rotas) ou `next-sitemap` no build.
- `public/robots.txt` permitindo tudo, apontando o sitemap.
- **JSON-LD `LocalBusiness`** no `_document.js` (ou no Layout) com endereço, telefone, geo, horário.
- **JSON-LD `Service`** em cada página de serviço.
- URLs amigáveis (já garantido pela estrutura acima).
- Lang `pt-BR`, charset utf-8.
- Imagens com `alt` descritivo (não genérico).

### Palavras-chave a distribuir naturalmente

- caldeiraria industrial, NR-13, vasos de pressão, caldeiras, instalações industriais, soldas, São Bernardo do Campo, ABC Paulista, manutenção industrial, adequação NR-13.

---

## PERFORMANCE

- `next/image` em **todas** as imagens (com `sizes` correto).
- `next/font` para Inter (sem CSS externo do Google Fonts).
- `loading="lazy"` em iframes (mapa).
- Não importar bibliotecas pesadas no client se não usar (`framer-motion` só onde precisa).
- `next/script` com `strategy="afterInteractive"` para qualquer analytics futuro.
- Meta de **Lighthouse mobile**: Performance ≥ 90, Acessibilidade ≥ 95, Best Practices ≥ 95, SEO ≥ 95.

---

## CRITÉRIOS DE ACEITE

- [ ] Site abre em `npm run dev` na porta 3000 sem erros nem warnings.
- [ ] Todas as rotas listadas funcionam e têm conteúdo real.
- [ ] Header e footer presentes em todas as páginas via `_app.js`.
- [ ] Menu mobile abre/fecha (drawer) e fecha ao clicar em um link.
- [ ] Formulário de contato abre WhatsApp com a mensagem montada corretamente.
- [ ] Botão flutuante de WhatsApp visível em todas as páginas.
- [ ] Layout impecável em 360px, 768px, 1024px, 1440px.
- [ ] Nenhuma imagem quebrada; todas com `alt`.
- [ ] Nenhum erro no console do browser.
- [ ] `npm run build` passa sem erros.
- [ ] Lighthouse mobile dentro das metas.
- [ ] `pages/index.js` legado **não existe mais** com o conteúdo antigo (substituído pela nova Home).
- [ ] Copyright dinâmico (`new Date().getFullYear()`).
- [ ] Sem mais textos repetidos / com erros ortográficos.
- [ ] `@formspree/react` removido do `package.json`.

---

## ORDEM SUGERIDA DE EXECUÇÃO

1. **Setup**: instalar `framer-motion` e `lucide-react`; criar `styles/tokens.scss`, `styles/globals.scss` novo; configurar `next/font` Inter no `_app.js`.
2. **Layout global**: `Header`, `Footer`, `WhatsAppFloat`, `Container`, `Section`, `Button`, `Seo`.
3. **Home**: Hero → TrustBar → ServicesGrid → AboutSnippet → NR13Highlight → ProcessSteps → Testimonials → FAQ → CTASection.
4. **Páginas internas**: Sobre, Contato, Serviços (listagem + 7 individuais), com Sobre e NR-13 sendo as mais densas.
5. **Formulário-WhatsApp** funcional + remoção do Formspree.
6. **SEO**: `<Seo />` em todas as páginas, sitemap, robots, JSON-LD.
7. **Polimento**: animações, microinterações, ajuste de espaçamentos, revisão final mobile.
8. **Build**: rodar `npm run build`, corrigir warnings, validar.

---

## NÃO FAZER

- Não mexer em `docs/` (proposta comercial e PDF — são entregáveis ao cliente).
- Não trocar Pages Router por App Router (fora do escopo).
- Não criar backend / banco de dados.
- Não comprar domínio nem fazer deploy nesta etapa (será passo separado, após aprovação visual).
- Não inventar números, depoimentos ou clientes; use placeholders claros e marque com `// TODO: confirmar com cliente`.
- Não usar imagens com direitos autorais sem licença; prefira fotos genéricas via Unsplash com `next/image` ou peça ao cliente.

---

## ENTREGA ESPERADA

Ao final, faça um **resumo em texto** do que foi feito, listando:
1. Páginas implementadas (com rotas).
2. Componentes criados.
3. Decisões técnicas tomadas.
4. Pendências para o cliente (fotos, depoimentos, números, redes sociais reais).
5. Próximos passos para deploy.

Não faça commit automático — eu reviso antes.

---

**Quando terminar de ler tudo isso, comece pela etapa 1 (Setup) e siga em ordem. Pergunte apenas se houver ambiguidade real; do contrário, decida com bom senso e siga.**
