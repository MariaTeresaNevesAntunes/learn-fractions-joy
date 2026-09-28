# Fraction Fiesta

criar um site sobre fracções com parete teorica e aparte pratica, explos de esxercicio, com quiz es e flas card para testar o aprendizado, que seja agradavel facio de usar tanto por crianças assim como adultos

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://learn-fractions-joy.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0829dacb-578f-4d51-a4a8-b94563807401).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Publicação e Google AdSense

Antes de solicitar a análise, publique o projeto num domínio próprio acessível
e confirme estas páginas no endereço público:

- `/privacidade`
- `/cookies`
- `/termos`
- `/contacto`
- `/ads.txt`

O projeto já inclui o `ads.txt`, o aviso de consentimento e o carregamento do
script do Google AdSense após autorização do visitante. Depois de o domínio ser
aprovado, ativa o Auto ads no painel do AdSense para o cliente
`ca-pub-8664195567929159`.

Se o site tiver visitantes no Espaço Económico Europeu, configura também uma
CMP certificada pelo Google no painel do AdSense antes de servir anúncios
personalizados. O aviso local incluído no projeto documenta a preferência do
visitante, mas não substitui uma CMP certificada quando ela for exigida.

Para anúncios em posições específicas, cria primeiro os blocos no painel do
AdSense e passa o respetivo `data-ad-slot` ao componente
`AdSensePlaceholder`. Não uses IDs de exemplo: cada slot deve ser criado na
conta correta.
