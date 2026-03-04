# Security Policy - ZENTAXI (BH-Assistant)

## Supported Versions

ZENTAXI je trenutno u aktivnom razvoju. Sigurnosna ažuriranja se primjenjuju na sljedeće verzije:

| Verzija | Podržano          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Prijavljivanje ranjivosti (Reporting a Vulnerability)

Sigurnost naših korisnika (vozača i putnika) nam je na prvom mjestu. Ako pronađete sigurnosni propust, molimo vas da ga NE prijavljujete putem javnih "Issues" na GitHubu.

Umjesto toga, molimo vas da slijedite ove korake:

1. Pošaljite email direktno timu na: **info@bh-assistant.ba**
2. U naslovu emaila napišite: `SECURITY VULNERABILITY - ZENTAXI`
3. Opišite propust što detaljnije (koraci za reprodukciju, potencijalni utjecaj).

### Naš proces:
- Potvrdit ćemo prijem vašeg emaila u roku od **48 sati**.
- Analizirat ćemo problem i obavijestiti vas o napretku.
- Nakon što popravimo propust, objavit ćemo novu verziju i, uz vašu dozvolu, navesti vas kao zaslužnu osobu za pronalazak (Credits).

## Sigurnosne smjernice za ZENTAXI tim

Budući da koristimo **Appwrite** i **Atoms.dev**, pridržavamo se sljedećih pravila:
- Nikada ne upisujemo API ključeve direktno u kod (koristimo `.env` varijable).
- GitHub OAuth2 se koristi za sigurnu autentifikaciju.
- Svi podaci u bazi imaju strogo definisana "Permissions" pravila.

Hvala vam što pomažete da ZENTAXI ostane siguran za sve građane Zenice i šire!
