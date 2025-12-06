# progect-x
aura progetto
# 🍽️ Menu per Hotel 🏨

Benvenuti nel progetto del **Menu Dinamico** per un hotel! Un sito web che mostra il menu dell'hotel, suddiviso in **Pranzo** 🍴 e **Cena** 🌙, che si aggiorna automaticamente in base all'ora del giorno. Il menu è personalizzato e cambia ogni volta che arriva un nuovo orario, mostrando pietanze fresche per ogni sezione.

## 🌍 Multilingue

All'ingresso della pagina, l'utente può scegliere la lingua preferita tra le seguenti opzioni:
- 🇮🇹 Italiano
- 🇬🇧 Inglese
- 🇩🇪 Tedesco
- 🇪🇸 Spagnolo

## 🍽️ Struttura del Menu

Il menu è diviso in 4 sezioni principali:

- **Antipasto** 🥗
- **Primo** 🍝
- **Secondo** 🍖 (diviso in **Carne** 🥩, **Pesce** 🐟 e **Vegano** 🥦)
- **Dessert** 🍰

Ogni volta che il menu viene aggiornato, il sistema seleziona automaticamente:
- **3 pietanze per ogni categoria** (Antipasto, Primo, Dessert)
- **1 pietanza per ogni sottocategoria dei Secondi** (Carne, Pesce, Vegano)

## 🧑‍🍳 Come Funziona

- **Orario del giorno**: Il sistema rileva l'ora e determina se è ora di pranzo o cena:
  - **Pranzo**: 12:00 - 15:00
  - **Cena**: 19:00 - 22:00
- Ogni volta che il menu cambia, vengono prelevate 3 pietanze per ciascuna delle categorie (Antipasto, Primo, Dessert), mentre per i **Secondi** vengono selezionate pietanze specifiche per **Carne**, **Pesce** e **Vegano**.

## 🗂️ File `menu.json`

Il menu è definito in un file JSON, che contiene le pietanze suddivise nelle varie categorie. Ogni piatto include nome, descrizione e prezzo.
