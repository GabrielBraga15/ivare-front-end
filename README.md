# Mapa de Locais Favoritos

Aplicação web desenvolvida em **React + Vite + TypeScript** que permite buscar locais, selecionar pontos no mapa e salvar locais favoritos com persistência local.

## Funcionalidades

- Exibição de mapa interativo utilizando **Leaflet + OpenStreetMap**
- Mapa inicial centralizado em **Uberlândia – MG**
- Busca de endereços e locais via geocoding
- Ao selecionar um endereço:
  - O mapa centraliza automaticamente no local
  - Um marcador é exibido no ponto selecionado

- Clique direto no mapa para selecionar coordenadas
- Modal para salvar local favorito com:
  - Nome
  - Latitude
  - Longitude

- Lista de favoritos persistida no navegador
- Clique em um favorito centraliza novamente o mapa no ponto salvo
- Layout responsivo (desktop e mobile)
- Tema claro e escuro com alternância manual

## Stack utilizada

- React + Vite + TypeScript
- Leaflet / React‑Leaflet
- TanStack React Query (requisições e estados de loading/erro)
- Zustand (gerenciamento de estado global)
- TailwindCSS (estilização)

## Estrutura do projeto

```
src/
  components/      Componentes de interface
  stores/          Estados globais (Zustand)
  services/        Serviços externos (geocoding)
  hooks/           Hooks personalizados
  utils/           Funções utilitárias
```

## Como rodar o projeto

```bash
npm install
npm run dev
```

Aplicação disponível em:

```
http://localhost:5173
```

## Build de produção

```bash
npm run build
npm run preview
```

## Decisões técnicas

- **Leaflet** foi escolhido por ser leve e não exigir chave de API.
- **React Query** gerencia requisições de busca, estados de loading e tratamento de erro.
- **Zustand** mantém estado global simples e persistente para favoritos.
- **TailwindCSS** permite construção rápida de layout responsivo e suporte nativo a tema escuro.

