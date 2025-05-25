This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.


## Documentatie 
Aceasta aplicatie web are scopul de a gestiona o colectie de carti, permitand utilizatorilor sa adauge, editeze si sa stearga carti din baza de date. Pentru realizarea acestui proiect, am folosit framework-ul Next.js impreuna cu React, care faciliteaza dezvoltarea unei interfete moderne si usor de utilizat.

Datele despre carti sunt stocate intr-o baza de date NoSQL, MongoDB, care ruleaza ca serviciu cloud, oferind scalabilitate si usurinta in accesarea si manipularea datelor. Aplicatia este gazduita si distribuita public pe platforma Vercel, care permite un deployment rapid si stabil al proiectului.

In acest mod, proiectul combina tehnologiile moderne de frontend cu un backend flexibil si un serviciu de hosting eficient, oferind o experienta completa pentru utilizatori.

API-ul aplicației oferă endpoint-uri REST pentru operațiile de bază CRUD (Create, Read, Update, Delete) asupra entității carte.
•	GET /api/books - Returnează lista tuturor cărților.
•	GET /api/books/:id - Returnează detaliile unei cărți după ID.
•	POST /api/books - Adaugă o carte nouă.
•	PUT /api/books/:id - Actualizează o carte existentă.
•	DELETE /api/books/:id - Șterge o carte după ID.

Datele unei cărți includ:
{
  "title": "Titlul cartii",
  "author": "Nume autor",
  "description": "Descriere carte",
  "year": 2020
}

Aplicatia foloseste un API REST simplu pentru a comunica intre frontend si backend. Datele despre carti sunt stocate in MongoDB, iar frontend-ul trimite cereri catre backend pentru a crea, citi, actualiza sau sterge carti.

Metode HTTP folosite:
•	GET — pentru a prelua lista de carti sau o carte specifica.
•	POST — pentru a crea o carte noua.
•	PUT — pentru a actualiza datele unei carti existente.
•	DELETE — pentru a sterge o carte.

Pentru a adauga o carte noua in baza de date, aplicatia foloseste un endpoint de tip POST la ruta /api/books. In corpul cererii (request body) trebuie trimise informatiile necesare despre carte: titlul, autorul, descrierea si anul publicarii.

Mai jos este un exemplu concret de request si raspuns primit de la server dupa adaugarea cu succes a unei carti:

REQUEST
POST /api/books
Content-Type: application/json
{
  "title": "Băiatul cu pijamale în dungi",
  "author": "John Boyne",
  "description": "Povestea urmărește prietenia neașteptată dintre un băiat de 8 ani și un copil evreu dintr-un lagăr de concentrare, arătând prin ochii inocenți ai copilului ororile Holocaustului și efectele războiului.",
  "year": "2006"
}
RESPONSE 
{
  "acknowledged": true,
  "insertedId": "68333de0e3daa8ddb17e17e4"
}

Aplicatia valideaza ca toate campurile sunt completate, iar anul publicarii trebuie sa fie format din 4 cifre si sa nu fie mai mare decat anul curent, pentru a asigura corectitudinea datelor in baza de date.

Linkuri utile:
Github: https://github.com/gavrilateodora/cloud-computing
Vercel: https://cloud-computing-pearl.vercel.app/
Youtube: https://youtu.be/4OG6rzE4Xv4


