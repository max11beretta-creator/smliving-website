# GUIDA COMPLETA: DA ZERO AL SITO ONLINE

## FASE 1: CREA ACCOUNT GITHUB (5 minuti)

### 1.1 Vai su GitHub
- Apri il browser e vai su: https://github.com
- Clicca su "Sign up" (in alto a destra)

### 1.2 Registrazione
- Inserisci la tua email (usa quella aziendale se vuoi)
- Crea una password sicura
- Scegli un username (suggerimento: "smliving" o "santamartasrl")
- Completa la verifica
- Scegli il piano FREE (è più che sufficiente)

### 1.3 Verifica email
- Controlla la tua casella email
- Clicca sul link di verifica che GitHub ti ha mandato
- Login su GitHub con le tue credenziali

✅ **FATTO! Hai il tuo account GitHub**

---

## FASE 2: CARICA IL PROGETTO SU GITHUB (10 minuti)

### Opzione A - SE SEI PRATICO DI GIT (avanzato)
```bash
cd /percorso/dove/hai/scaricato/smliving-website
git init
git add .
git commit -m "Initial commit - SM Living website"
git branch -M main
git remote add origin https://github.com/TUO-USERNAME/smliving-website.git
git push -u origin main
```

### Opzione B - USO INTERFACCIA GITHUB (consigliato, più semplice)

**Passo 1: Crea un nuovo repository**
- Una volta loggato su GitHub, clicca sul "+" in alto a destra
- Seleziona "New repository"
- Nome repository: `smliving-website`
- Descrizione: "SM Living - Real Estate Development Website"
- Seleziona "Public" (o "Private" se preferisci)
- NON selezionare "Add a README file" (ce l'abbiamo già)
- Clicca "Create repository"

**Passo 2: Carica i file**
- Nella pagina del repository appena creato
- Clicca su "uploading an existing file"
- Trascina TUTTI i file e cartelle del progetto (che ti fornirò)
- Scrivi un messaggio tipo: "Initial commit"
- Clicca "Commit changes"

✅ **FATTO! Il codice è su GitHub**

---

## FASE 3: DEPLOYMENT AUTOMATICO CON VERCEL (10 minuti)

### 3.1 Crea account Vercel
- Vai su: https://vercel.com
- Clicca "Sign Up"
- Scegli "Continue with GitHub" (così si collega automaticamente)
- Autorizza Vercel ad accedere a GitHub

### 3.2 Importa il progetto
- Clicca su "Add New..." → "Project"
- Vercel mostrerà tutti i tuoi repository GitHub
- Cerca "smliving-website" e clicca "Import"

### 3.3 Configurazione (Vercel fa quasi tutto automaticamente)
- Framework Preset: Vercel dovrebbe rilevare automaticamente "Vite"
- Root Directory: lascia ./
- Build Command: lascia quello proposto (`npm run build`)
- Output Directory: lascia quello proposto (`dist`)
- Clicca "Deploy"

### 3.4 Aspetta il deployment (2-3 minuti)
- Vercel farà il build del sito
- Vedrai una barra di progresso
- Quando finisce: 🎉 IL SITO È ONLINE!

✅ **FATTO! Il sito è raggiungibile su un URL tipo: https://smliving-website.vercel.app**

---

## FASE 4: COLLEGA IL TUO DOMINIO ARUBA (15 minuti)

### 4.1 In Vercel
- Nel tuo progetto, vai su "Settings"
- Clicca su "Domains"
- Inserisci: `smliving.it` (o il tuo dominio)
- Clicca "Add"

### 4.2 Vercel ti darà le istruzioni DNS
Vercel ti mostrerà qualcosa tipo:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 4.3 Nel pannello Aruba
- Accedi al tuo pannello Aruba
- Vai nella gestione DNS del dominio smliving.it
- Modifica/Aggiungi i record DNS come indicato da Vercel
- Salva le modifiche

### 4.4 Aspetta la propagazione DNS (15 minuti - 24 ore)
- Di solito 15-30 minuti sono sufficienti
- Controlla su https://www.whatsmydns.net se i DNS si stanno propagando

✅ **FATTO! Ora smliving.it punta al sito su Vercel**

---

## COME FUNZIONANO LE MODIFICHE FUTURE

### Scenario 1: Tu modifichi il codice
1. Carichi le modifiche su GitHub (stesso procedimento del punto 2)
2. Vercel rileva automaticamente le modifiche
3. Fa il build automaticamente
4. Il sito si aggiorna in 2-3 minuti

### Scenario 2: Io modifico il codice per te
1. Ti mando i file aggiornati
2. Tu li carichi su GitHub (sovrascrivendo i vecchi)
3. Vercel fa tutto il resto automaticamente

### Scenario 3: Vuoi solo cambiare un'immagine
1. Vai sul repository GitHub
2. Vai nella cartella `public/images`
3. Clicca "Add file" → "Upload files"
4. Carica la nuova immagine con lo stesso nome
5. Commit → Vercel aggiorna automaticamente

---

## VANTAGGI DI QUESTA SOLUZIONE

✅ **Deployment automatico**: modifichi su GitHub → sito aggiornato in 3 minuti
✅ **Gratis**: sia GitHub che Vercel sono gratuiti per progetti come questo
✅ **Veloce**: Vercel ha CDN globale, sito ultra veloce
✅ **Sicuro**: HTTPS automatico e gratuito
✅ **Backup**: tutto il codice è salvato su GitHub
✅ **Professionale**: workflow usato da aziende enterprise

---

## HELP! HO BISOGNO DI AIUTO

### Se hai problemi con:
- **GitHub**: scrivi "aiuto GitHub + [problema]"
- **Vercel**: scrivi "aiuto Vercel + [problema]"
- **DNS Aruba**: scrivi "aiuto DNS + [problema]"

### Problemi comuni e soluzioni:

**"Non riesco a caricare i file su GitHub"**
→ Assicurati di aver fatto login
→ Prova a trascinare i file nella pagina invece di usare il pulsante

**"Vercel non rileva il mio repository"**
→ Controlla di aver autorizzato Vercel ad accedere a GitHub
→ Ricarica la pagina

**"Il sito non si vede dopo 24 ore dal cambio DNS"**
→ Controlla i DNS su whatsmydns.net
→ Verifica di aver inserito correttamente i valori nel pannello Aruba
→ Contatta il supporto Aruba

---

## PROSSIMI PASSI CONSIGLIATI (dopo che il sito è online)

1. **Aggiungi le immagini vere** dei progetti nella cartella `public/images`
2. **Personalizza le coordinate** delle mappe Google Maps
3. **Configura l'invio email** dal form contatti (ti aiuto io)
4. **Aggiungi Google Analytics** per tracciare i visitatori
5. **Ottimizza SEO** (meta tags, sitemap, ecc.)

---

## NOTE FINALI

- **Backup**: Scarica sempre una copia locale del progetto
- **Credenziali**: Salva username/password di GitHub e Vercel in un posto sicuro
- **Dominio**: Assicurati che il dominio sia rinnovato su Aruba

**Sei pronto? Iniziamo dal Passo 1! 🚀**
