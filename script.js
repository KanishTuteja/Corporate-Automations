/* ==========================================================================
   Editable values — change these and every link on the page updates.
   ========================================================================== */
const CONFIG = {
  BUSINESS_NAME: "Donely",
  // GitHub Pages URL for now; swap in the real domain later (also update the static copies in index.html <head>)
  SITE_URL: "https://kanishtuteja.github.io/Corporate-Automations/",
  BOOKING_URL: "https://calendly.com/kanishtuteja",
  EMAIL: "kanishtuteja@gmail.com",
  LINKEDIN_URL: "https://www.linkedin.com/in/kanishtuteja",
  // Optional, cookie-free analytics via Umami (free tier at umami.is). Leave "" to turn off.
  UMAMI_WEBSITE_ID: "",
};

/* ==========================================================================
   French copy. English lives in index.html; each key matches a data-i18n
   attribute there. TODO: have a native French speaker review before launch.
   ========================================================================== */
const FR = {
  "meta.title": "Donely | Automatisation IA pour les petites entreprises de Toronto",
  "meta.desc": "Donely conçoit des automatisations, des agents IA et des outils internes qui libèrent les petites équipes de Toronto des tâches administratives répétitives, avec une approbation humaine intégrée. Réservez un audit d’automatisation gratuit.",
  "skip": "Aller au contenu",
  "nav.services": "Services",
  "nav.how": "Comment ça marche",
  "nav.work": "Réalisations",
  "nav.about": "À propos",
  "nav.faq": "FAQ",
  "nav.menu": "Menu",
  "nav.close": "Fermer",
  "cta.short": "Réserver un audit gratuit",
  "meta.based": "Basé à",
  "meta.clock": "Heure locale à Toronto",
  "meta.focus": "Spécialité",
  "meta.focusVal": "Automatisation IA",
  "meta.inquiries": "Pour me joindre",
  "contact.open": "Me contacter",
  "contact.title": "Contact",
  "contact.close": "Fermer ×",
  "contact.call": "Appel gratuit de 30 minutes",
  "hero.eyebrow": "AUTOMATISATION IA · TORONTO",
  "hero.alt": "Portrait de Kanish Tuteja",
  "hero.title": "Libérez votre équipe des tâches administratives répétitives.",
  "hero.lead": "Je conçois des automatisations, des agents IA et des outils internes pour les petites entreprises, avec une approbation humaine intégrée pour que rien ne s'exécute sans vérification.",
  "hero.lead2": "Y compris l’IA privée, sur site et hybride pour les équipes qui ne peuvent pas envoyer de données sensibles dans le nuage.",
  "hero.primary": "Réserver un audit d'automatisation gratuit",
  "hero.secondary": "Voir mes réalisations",
  "hero.fine": "Appel gratuit de 30 minutes. Vous repartez avec un plan d'une page, pas une présentation de vente.",
  "problem.label": "(01) Le problème",
  "problem.title": "Votre équipe perd des heures sur du travail qu'un système pourrait faire.",
  "problem.1.t": "Courir après les documents",
  "problem.1.d": "Les clients envoient leurs documents en retard, incomplets ou à la mauvaise adresse, et quelqu'un doit relancer à la main.",
  "problem.2.t": "Ressaisir les données",
  "problem.2.d": "Les mêmes informations sont tapées dans les courriels, les tableurs, le CRM et le logiciel comptable.",
  "problem.3.t": "Refaire les rapports",
  "problem.3.d": "Chaque semaine ou chaque mois, quelqu'un refait le même rapport à partir de zéro.",
  "services.label": "(02) Services",
  "services.title": "Ce que je conçois",
  "services.1.t": "Automatisations de flux de travail",
  "services.1.d": "Connectez vos courriels, formulaires, tableurs, CRM et outils comptables pour que les données circulent toutes seules.",
  "services.2.t": "Agents et assistants IA",
  "services.2.d": "Des outils qui lisent, rédigent, classent et raisonnent, avec les modèles de Claude, Gemini et OpenAI, dotés de mémoire et de recherche dans vos propres documents.",
  "services.3.t": "Outils internes et tableaux de bord",
  "services.3.d": "Des applications web simples que votre équipe utilise vraiment, construites avec Firebase, Supabase et des technologies web modernes.",
  "services.4.t": "Surveillance et alertes",
  "services.4.d": "Des chaînes de traitement qui surveillent vos données, signalent ce qui a changé et avertissent la bonne personne.",
  "services.5.t": "Visibilité dans la recherche IA (AEO)",
  "services.5.d": "Aidez ChatGPT, Gemini et Perplexity à comprendre et à recommander votre entreprise.",
  "services.6.flag": "Offre phare",
  "services.6.t": "IA privée et sur site",
  "services.6.lead": "Pour les équipes qui ne peuvent pas envoyer de données sensibles dans le nuage.",
  "services.6.d": "J’exécute des modèles d’IA open source sur vos propres serveurs, pour que les données sensibles ne quittent jamais votre réseau. Pour la plupart des équipes, j’utilise une configuration hybride — les données privées restent sur place, et seul le travail non sensible est confié à un modèle infonuagique quand il faut plus de puissance.",
  "services.6.p1k": "Sur votre infrastructure :",
  "services.6.p1": "des modèles open source (Llama, Mistral et autres) qui tournent sur des serveurs ou un nuage privé que vous contrôlez.",
  "services.6.p2k": "Hybride par conception :",
  "services.6.p2": "les données sensibles sont traitées sur place; le raisonnement plus exigeant passe par un modèle infonuagique, uniquement sur des données qu’il est sûr d’envoyer.",
  "services.6.p3k": "Vous gardez le contrôle :",
  "services.6.p3": "journalisation complète, approbation humaine pour les étapes sensibles, et vous êtes propriétaire de chaque modèle, clé et flux de travail.",
  "services.note": "Premiers projets courants : réception des documents clients, rappels de factures et de paiements, saisie de données entre systèmes, rapports récurrents, tri de la boîte de réception, listes de contrôle d'intégration.",
  "how.label": "(03) Démarche",
  "how.1.t": "Audit d'automatisation gratuit",
  "how.1.d": "Un appel de 30 minutes pour cerner où vont les heures de votre équipe. Vous recevez un plan d'une page qui montre ce qui vaut la peine d'être automatisé, et ce qui ne l'est pas.",
  "how.2.t": "Conception",
  "how.2.d": "Je conçois un ou deux flux de travail qui font gagner de vraies heures, avec une approbation humaine là où ça compte. Portée fixe, prix fixe.",
  "how.3.t": "Suivi et soutien",
  "how.3.d": "Documentation, surveillance et soutien continu, pour que vous sachiez toujours ce qui fonctionne et ce que ça fait.",
  "how.rule.k": "Ma règle :",
  "how.rule": "une automatisation défaillante est pire que pas d'automatisation du tout. Chaque système que je conçois comprend des étapes d'approbation, une journalisation et un moyen simple de le désactiver.",
  "work.label": "(04) Réalisations choisies",
  "work.title": "Ce que j'ai construit",
  "work.1.tag": "Concept de produit · En validation",
  "work.1.d": "Un agent en arrière-plan qui surveille les positions ouvertes et signale le moment où la raison d'une transaction ne tient plus. Il transforme une thèse d'une ligne en indicateurs à surveiller, puis envoie une seule alerte avec la source. En cours de conception et de validation.",
  "work.2.tag": "Automatisation de bout en bout",
  "work.2.d": "Une chaîne de contenu entièrement automatisée qui analyse des sources, rédige avec Claude et ne publie qu'après une seule approbation. Construite avec Make.com, Zapier, l'API Claude et Buffer.",
  "work.2.alt": "Numéro de l'infolettre Unfiltered Weekly produit par la chaîne automatisée",
  "work.ill": "Illustration",
  "work.more": "Autres projets",
  "case.label": "Étude de cas",
  "fh.tag": "Modèles open source · Exécution locale",
  "fh.lead": "Un assistant financier qui achemine chaque question vers le modèle open source le mieux adapté, au lieu de tout confier à un seul modèle. DeepSeek-R1 se charge du raisonnement poussé et du travail quantitatif; Llama traite les questions de conformité, de réglementation et les questions bilingues (FR/EN). Les deux tournent localement avec Ollama, donc aucune donnée ne quitte la machine.",
  "fh.alt": "Illustration : une question de prévision en anglais est acheminée vers DeepSeek-R1 et une question de conformité en français vers Llama, les deux s’exécutant localement",
  "ill.fh.title": "ACHEMINEMENT · SUR VOTRE MATÉRIEL",
  "ill.fh.q": "QUESTION",
  "ill.fh.router": "ROUTEUR",
  "ill.fh.lang": "langue",
  "ill.fh.kw": "mots-clés",
  "ill.fh.math": "signaux chiffrés",
  "ill.fh.ds": "Raisonnement · quant",
  "ill.fh.ll": "Conformité · FR/EN",
  "ill.fh.local": "Exécution locale avec Ollama. Aucune donnée ne sort.",
  "fh.1.t": "Acheminement des tâches",
  "fh.1.d": "Chaque question passe par un routeur avant qu’un modèle ne la voie. Il détecte la langue, parcourt des listes de mots-clés choisis et repère les signaux quantitatifs comme les formules et les pourcentages, puis envoie la question au bon modèle. Chaque décision consigne les signaux qui l’ont motivée, pour que chaque acheminement soit traçable.",
  "fh.2.t": "Un seul client pour tous les modèles",
  "fh.2.d": "Les deux modèles tournent localement avec Ollama derrière une interface client unique. Les agents appellent une seule API sans jamais savoir quel modèle répond, et les noms des modèles sont dans la configuration : changer de modèle ne touche pas aux agents.",
  "fh.3.t": "Agents financiers",
  "fh.3.d": "Trois agents spécialisés, chacun avec ses propres consignes : un analyste de recherche pour les synthèses sur les entreprises et les marchés, un agent de conformité pour les questions réglementaires américaines et canadiennes, et un agent de prévision pour les projections quantitatives et les scénarios.",
  "fh.4.t": "Bilingue FR/EN",
  "fh.4.d": "Le routeur détecte le français, avec une solution de repli pour les textes courts, et l’envoie à Llama, qui répond entièrement en français avec la terminologie canadienne, comme REER et CELI. Conçu pour un marché où la conformité se fait dans les deux langues officielles.",
  "fh.5.t": "Banc d’évaluation",
  "fh.5.d": "Un ensemble de tâches financières de référence — quantitatives, conformité, français, recherche et agents — passe par tout le système. Chaque réponse est notée sur l’acheminement, la langue, le contenu requis, le contenu interdit et la structure. Lors du dernier passage, les 13 cas ont réussi.",
  "fh.why.k": "Pourquoi deux modèles :",
  "fh.why": "un seul modèle fait rarement tout bien. Répartir le travail selon les forces — le raisonnement à DeepSeek-R1, la conformité et le français à Llama — c’est ce qui le rend hybride, et pas seulement deux modèles juxtaposés.",
  "dx.lead": "Un assistant en temps réel qui observe par une caméra, raisonne sur ce qu’il voit par déduction à la Sherlock et énonce ses conclusions d’une voix intérieure calme et clinique, dans des écouteurs. Conçu en solo : une interface web avec un serveur Python.",
  "dx.1.t": "Perception → déduction → voix",
  "dx.1.d": "Toutes les 10 secondes, le navigateur capte une image de la caméra, filtrée par détection de mouvement pour ne rien envoyer quand rien ne change. Un modèle de vision rapide (Claude Haiku) transforme l’image en observations structurées; Claude Sonnet en tire ensuite une déduction — observation, tendance, interprétation, prédiction — sous forme de monologue à la première personne. ElevenLabs la prononce avec une voix personnalisée, et chaque observation est consignée avec l’heure. Le serveur FastAPI relaie tous les appels d’API, donc les clés n’atteignent jamais le navigateur.",
  "dx.2.t": "Mémoire d’abord",
  "dx.2.d": "Construite avant la boucle en direct, parce que la forme du stockage dicte tout le reste. Chaque observation est conservée pour de bon : SQLite garde les observations brutes, les transcriptions et les résumés, et ChromaDB garde les vecteurs pour la recherche sémantique. Les vecteurs sont générés localement par défaut, et une tâche nocturne condense chaque journée en résumé. La mémoire brute reste sur la machine; seules les requêtes en sortent.",
  "dx.3.t": "Rappel fiable",
  "dx.3.d": "Chaque cycle fouille tout l’historique, mais Dexter n’énonce un souvenir que si la correspondance est forte et vraiment ancienne — au moins 10 minutes, pour que ce soit un rappel et non de la continuité. Les souvenirs épinglés ont un seuil plus bas et sautent la vérification d’âge, un délai de pause évite les répétitions, et les souvenirs rappelés ont leur propre badge dans l’interface. Seuils, âge minimal et délai se règlent sans toucher au code.",
  "dx.4.t": "Ordre de construction",
  "dx.4.d": "D’abord la mémoire, puis les consignes de voix peaufinées isolément sur des scènes types, puis la boucle en direct branchée sur la mémoire existante. Python plutôt qu’une pile Node plus rapide à démontrer, parce que la mémoire est le cœur du système et garde à portée une version entièrement locale.",
  "work.1.alt": "Illustration : une position passe au rouge et une alerte se déclenche quand l'indicateur de dépenses d'investissement passe sous le seuil de la thèse",
  "work.3.alt": "Illustration : Dexter détecte un mouvement à la caméra, décrit la scène, l'inscrit dans son journal et l'ajoute à sa mémoire",
  "work.4.alt": "Illustration : les documents des finances étudiantes sont classés automatiquement dans un suivi, et le rapport de fin de mois attend une approbation humaine",
  "ill.tp.title": "POSITIONS EN DIRECT",
  "ill.tp.r1": "Investissements des centres de données",
  "ill.tp.r2": "Offre de pétrole qui se resserre",
  "ill.tp.r3": "Ralentissement macro",
  "ill.tp.hold": "Maintenue",
  "ill.tp.broke": "Thèse invalidée",
  "ill.tp.watch": "À surveiller",
  "ill.tp.signal": "PRÉVISIONS D'INVESTISSEMENT",
  "ill.tp.level": "seuil de la thèse",
  "ill.tp.alert": "ALERTE · NVDA",
  "ill.tp.a1": "Prévisions réduites",
  "ill.tp.a2": "Sous le seuil de votre thèse.",
  "ill.tp.src": "Source ↗",
  "ill.dx.motion": "MOUVEMENT",
  "ill.dx.see": "VOIR",
  "ill.dx.think": "RÉFLÉCHIR",
  "ill.dx.remember": "RETENIR",
  "ill.dx.memory": "MÉMOIRE",
  "ill.dx.log": "JOURNAL",
  "ill.dx.l1a": "Troisième café.",
  "ill.dx.l1b": "Tendance notée.",
  "ill.dx.l2a": "Portable mi-fermé.",
  "ill.dx.l2b": "Hésitation.",
  "ill.dx.l3a": "Rappel : même heure,",
  "ill.dx.l3b": "hier.",
  "ill.cdi.title": "FIN DE MOIS · FINANCES ÉTUDIANTES",
  "ill.cdi.inbox": "BOÎTE DE RÉCEPTION",
  "ill.cdi.d1": "Confirmation RAFEO",
  "ill.cdi.d2": "Reçu de paiement",
  "ill.cdi.d3": "Lettre de financement",
  "ill.cdi.tracker": "SUIVI",
  "ill.cdi.file": "Dossier",
  "ill.cdi.type": "Type",
  "ill.cdi.status": "Statut",
  "ill.cdi.pay": "Paiement",
  "ill.cdi.fund": "Financement",
  "ill.cdi.pending": "En attente",
  "ill.cdi.logged": "Consigné ✓",
  "ill.cdi.report": "RAPPORT DE FIN DE MOIS",
  "ill.cdi.built": "Tiré du suivi. Aucune ressaisie.",
  "ill.cdi.needs": "À approuver",
  "ill.cdi.approved": "Approuvé ✓",
  "work.3.tag": "Agent IA · Mémoire à long terme",
  "work.3.d": "Un second cerveau personnel propulsé par l'IA qui voit, raisonne et se souvient. Claude gère la vision et le raisonnement, une mémoire vectorielle locale (SQLite et ChromaDB) conserve le contexte à long terme, et ElevenLabs lui donne une voix.",
  "work.4.tag": "En production · À l'échelle d'une équipe",
  "work.4.t": "Automatisation du travail au CDI College",
  "work.4.d": "A remplacé le travail manuel de fin de mois et de suivi d'une équipe des finances étudiantes par des outils internes et des automatisations que l'équipe utilisait chaque jour.",
  "about.label": "(05) À propos",
  "about.title": "Bonjour, je suis Kanish.",
  "about.p1": "J'ai passé deux ans aux finances étudiantes au CDI College, à gérer le RAFEO (OSAP), les paiements, les documents de financement et la fin de mois. Personne ne m'a embauché pour automatiser quoi que ce soit. Je l'ai fait parce que le travail manuel ralentissait mon équipe, et les outils que j'ai créés sont devenus partie intégrante de son quotidien.",
  "about.p2": "Aujourd'hui, je conçois le même genre de systèmes pour les petites entreprises de Toronto, surtout les cabinets comptables et de tenue de livres, les cabinets d'avocats, les courtiers en assurance et en immobilier, et les cliniques. J'ai une formation en informatique et en réseautique, et je comprends assez bien le côté affaires pour savoir ce qui ne peut pas tomber en panne.",
  "about.p3": "Beaucoup d’entreprises évitent l’IA parce qu’elles ne peuvent pas risquer que des données sensibles quittent leurs systèmes. C’est l’aspect sur lequel je me concentre le plus — des configurations privées, sur site et hybrides, où le travail sensible s’exécute sur vos propres serveurs et où vous gardez le contrôle de tout.",
  "about.chip.oss": "LLM open source",
  "about.stack": "Outils",
  "about.link": "Connectons-nous sur LinkedIn",
  "faq.label": "(06) Questions",
  "faq.1.q": "Dois-je changer les logiciels que nous utilisons?",
  "faq.1.a": "Généralement non. Je connecte les outils que vous avez déjà. Si quelque chose doit être remplacé, je vous le dirai pendant l'audit, avant que vous dépensiez quoi que ce soit.",
  "faq.2.q": "Nos données sont-elles en sécurité?",
  "faq.2.a": "Les automatisations n’obtiennent que les accès dont elles ont besoin, les étapes sensibles conservent une approbation humaine, et vous êtes propriétaire de chaque compte et de chaque flux de travail que je conçois. Pour les équipes qui manipulent des données sensibles, je peux exécuter des modèles open source sur vos propres serveurs, pour que rien de sensible ne quitte votre réseau.",
  "faq.6.q": "L’IA peut-elle fonctionner sans envoyer nos données dans le nuage?",
  "faq.6.a": "Oui. Pour les environnements sensibles, j’exécute des modèles open source directement sur vos propres serveurs, pour que vos données restent dans votre réseau. Quand il faut plus de puissance, j’utilise une configuration hybride — les données privées restent sur place et seul le travail non sensible est envoyé à un modèle infonuagique, avec votre approbation. C’est vous qui décidez ce qui sort de vos systèmes, s’il y a lieu.",
  "faq.3.q": "Combien ça coûte?",
  "faq.3.a": "L'audit est gratuit. La plupart des projets sont à prix fixe, convenu avant le début des travaux, généralement à partir d'environ 2 000 $ pour un ou deux flux de travail. Le soutien continu est un simple forfait mensuel.",
  "faq.4.q": "Combien de temps prend un projet?",
  "faq.4.a": "La plupart des premiers flux de travail sont en service en une à trois semaines.",
  "faq.5.q": "Que se passe-t-il si quelque chose tombe en panne?",
  "faq.5.a": "Chaque flux de travail est doté d'une surveillance et d'alertes, et je corrige les problèmes dans le cadre du soutien continu.",
  "cta.title": "Découvrez où passent les heures de votre équipe.",
  "cta.text": "Réservez un audit d'automatisation gratuit de 30 minutes. Vous repartirez avec un plan d'une page, que nous travaillions ensemble ou non.",
  "cta.or": "Ou écrivez-moi à",
  "footer.email": "Courriel",
  "footer.top": "Retour en haut ↑",
};

(function () {
  "use strict";

  const root = document.documentElement;
  root.classList.add("js");

  /* ---------- Links from CONFIG ---------- */
  const linkMap = {
    booking: CONFIG.BOOKING_URL,
    email: "mailto:" + CONFIG.EMAIL,
    linkedin: CONFIG.LINKEDIN_URL,
  };
  document.querySelectorAll("[data-link]").forEach((el) => {
    const href = linkMap[el.dataset.link];
    if (href) el.setAttribute("href", href);
  });
  document.querySelectorAll('[data-show="email"]').forEach((el) => { el.textContent = CONFIG.EMAIL; });
  document.querySelectorAll('[data-show="business"]').forEach((el) => { el.textContent = CONFIG.BUSINESS_NAME; });
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute("href", CONFIG.SITE_URL);
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute("content", CONFIG.SITE_URL);
  document.querySelectorAll('[data-show="linkedin"]').forEach((el) => {
    el.textContent = CONFIG.LINKEDIN_URL.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  });

  /* ---------- Analytics (off unless configured) ---------- */
  if (CONFIG.UMAMI_WEBSITE_ID) {
    const s = document.createElement("script");
    s.defer = true;
    s.src = "https://cloud.umami.is/script.js";
    s.dataset.websiteId = CONFIG.UMAMI_WEBSITE_ID;
    document.head.appendChild(s);
  }

  /* ---------- Language (EN / FR) ---------- */
  const EN = { "nav.close": "Close" };
  const textEls = document.querySelectorAll("[data-i18n]");
  const attrEls = document.querySelectorAll("[data-i18n-attr]");

  // English is whatever the HTML says, captured once
  textEls.forEach((el) => { EN[el.dataset.i18n] = el.textContent; });
  attrEls.forEach((el) => {
    el.dataset.i18nAttr.split(";").forEach((pair) => {
      const [attr, key] = pair.split(":");
      EN[key] = el.getAttribute(attr);
    });
  });

  let lang = "en";
  const t = (key) => (lang === "fr" && FR[key]) || EN[key] || "";

  // Never show a half-translated page: if any key lacks French, hide the switch and stay in English
  const missingFR = Object.keys(EN).filter((k) => !FR[k]);
  const frReady = missingFR.length === 0;
  if (!frReady) {
    document.querySelectorAll(".lang").forEach((el) => { el.hidden = true; });
    console.warn("FR toggle hidden; missing French for:", missingFR.join(", "));
  }

  function setLang(next, save) {
    lang = next === "fr" && frReady ? "fr" : "en";
    root.setAttribute("lang", lang === "fr" ? "fr-CA" : "en");
    textEls.forEach((el) => {
      const v = t(el.dataset.i18n);
      if (v) el.textContent = v;
    });
    attrEls.forEach((el) => {
      el.dataset.i18nAttr.split(";").forEach((pair) => {
        const [attr, key] = pair.split(":");
        const v = t(key);
        if (v) el.setAttribute(attr, v);
      });
    });
    document.querySelectorAll("[data-lang]").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
    if (menuBtn) menuBtn.textContent = t(menuOpen ? "nav.close" : "nav.menu");
    updateClock();
    if (save) {
      try { localStorage.setItem("lang", lang); } catch (e) { /* storage unavailable */ }
    }
  }

  function initialLang() {
    const param = new URLSearchParams(location.search).get("lang");
    if (param === "fr" || param === "en") return param;
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "fr" || saved === "en") return saved;
    } catch (e) { /* storage unavailable */ }
    return (navigator.language || "").toLowerCase().startsWith("fr") ? "fr" : "en";
  }

  document.querySelectorAll("[data-lang]").forEach((b) => {
    b.addEventListener("click", () => setLang(b.dataset.lang, true));
  });

  /* ---------- Toronto clock ---------- */
  const clock = document.querySelector(".clock");
  function updateClock() {
    if (!clock) return;
    const now = new Date();
    try {
      clock.textContent = new Intl.DateTimeFormat(lang === "fr" ? "fr-CA" : "en-CA", {
        hour: "2-digit", minute: "2-digit", hourCycle: "h23", timeZone: "America/Toronto",
      }).format(now);
    } catch (e) { clock.textContent = ""; }
    clock.setAttribute("datetime", now.toISOString());
  }
  setInterval(updateClock, 30000);

  /* ---------- Footer year ---------- */
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---------- Photo fallback ---------- */
  const photo = document.querySelector(".photo-frame img");
  if (photo) {
    const fail = () => photo.parentElement.classList.add("no-photo");
    if (photo.complete && photo.naturalWidth === 0) fail();
    photo.addEventListener("error", fail);
  }

  /* ---------- Mobile menu ---------- */
  const menuBtn = document.querySelector(".menu-toggle");
  const panel = document.getElementById("nav-panel");
  let menuOpen = false;

  function setMenu(open) {
    if (!menuBtn || !panel) return;
    menuOpen = open;
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.textContent = t(open ? "nav.close" : "nav.menu");
    panel.classList.toggle("is-open", open);
  }

  if (menuBtn && panel) {
    menuBtn.addEventListener("click", () => setMenu(!menuOpen));
    panel.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menuOpen) {
        setMenu(false);
        menuBtn.focus();
      }
    });
    window.matchMedia("(min-width: 900px)").addEventListener("change", (e) => {
      if (e.matches) setMenu(false);
    });
  }

  /* ---------- Contact pop-up ---------- */
  const dialog = document.querySelector("dialog.contact");
  if (dialog && typeof dialog.showModal === "function") {
    document.querySelectorAll(".contact-open").forEach((b) => b.addEventListener("click", () => dialog.showModal()));
    dialog.querySelector(".contact-close").addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });
  } else {
    // Very old browsers: fall back to a plain email link
    document.querySelectorAll(".contact-open").forEach((b) => {
      b.addEventListener("click", () => { location.href = linkMap.email; });
    });
  }

  /* ---------- Active nav link while scrolling ---------- */
  const navLinks = document.querySelectorAll(".nav-links a");
  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + entry.target.id));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    navLinks.forEach((a) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) spy.observe(target);
    });
  }

  /* ---------- Project illustrations: only animate while on screen ---------- */
  if ("IntersectionObserver" in window) {
    const playIO = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle("is-playing", entry.isIntersecting));
    }, { threshold: 0.25 });
    document.querySelectorAll(".anim").forEach((svg) => playIO.observe(svg));
  } else {
    document.querySelectorAll(".anim").forEach((svg) => svg.classList.add("is-playing"));
  }

  /* ---------- Fade-up on scroll ---------- */
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    items.forEach((el) => {
      // small stagger for items in the same list
      if (el.tagName === "LI") {
        const idx = Array.prototype.indexOf.call(el.parentElement.children, el);
        el.style.transitionDelay = Math.min(idx, 4) * 80 + "ms";
        el.addEventListener("transitionend", () => { el.style.transitionDelay = ""; }, { once: true });
      }
      io.observe(el);
    });
  }

  setLang(initialLang(), false);
})();
