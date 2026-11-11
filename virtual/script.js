/* Passagem de Comando · CPOR/SP — convite virtual
   Todo o conteúdo que pode mudar fica aqui em cima. */

const CONVITE = {
  formulario: "https://docs.google.com/forms/d/e/1FAIpQLScrMbw4zePzA4lhYASbJx0PyK-o26TCpUtgVabwHGBZzsUp2A/viewform",
  email: "comsoc@cporsp.eb.mil.br",
  whatsapp: "5511939488270",
  whatsappTexto: "(11) 93948-8270",
  whatsappMensagem: "Olá! Gostaria de falar sobre a Solenidade de Passagem de Comando do CPOR/SP.",
  endereco: "Rua Alfredo Pujol, 681\nSantana · São Paulo (SP)",
  enderecoBusca: "Rua Alfredo Pujol, 681 - Santana, São Paulo - SP",
  prazoConfirmacao: "2027-01-08T23:59:59-03:00",
  solenidade: "2027-01-14T19:00:00-03:00",
  momentos: [
    { hora: "18h30", nome: "Inauguração do Retrato", detalhe: "do Comandante Sucedido" },
    { hora: "19h", nome: "Passagem de Comando", detalhe: "do CPOR/SP" }
  ],
  traje: [
    ["Militares", "9º B2 ou correspondente"],
    ["Militares da reserva e civis", "Esporte fino"]
  ],
  // Galeria dos Antigos Comandantes, na ordem da página impressa. Foto: comandantes/NN.jpg
  comandantes: [
    ["Cap Inf", "Aurélio A. S. Ferreira", "1930-1931"],
    ["Maj Art", "Cyro Vidal", "1931-1932"],
    ["Maj Inf", "Mário Travassos", "1934-1935"],
    ["Maj Inf", "Henrique Q. Castro e Silva", "1935-1936"],
    ["Maj Inf", "Gilberto de Freitas", "1936-1937"],
    ["Maj Inf", "Carlos Vilaça", "1937-1938"],
    ["Maj Cav", "Ary de S. B. Freire", "1938-1940"],
    ["Ten Cel", "Celso F. Veloso", "1941-1943"],
    ["Cel Inf", "Otavio M. Ache", "1943-1944"],
    ["Cel Inf", "Agenor B. N. Silva", "1944-1946"],
    ["Cel Inf", "Arlindo M. C. Menezes", "1946-1947"],
    ["Cel Art", "Asdrúbal P. Escobar", "1946-1947"],
    ["Cel Cav", "Antonio R. Weinmann", "1952-1955"],
    ["Cel Inf", "Renato R. Ribas", "1955-1956"],
    ["Cel Cav", "João F. Pontes", "1957-1961"],
    ["Cel Inf", "Adalberto Guimarães", "1961-1961"],
    ["Cel Inf", "Lucídio de Arruda", "1961-1964"],
    ["Cel Inf", "Caetano F. Lopes", "1964-1966"],
    ["Cel Cav", "Mario A. M. C. Pinto", "1966-1968"],
    ["Cel Cav", "Mario R. Alencar", "1968-1970"],
    ["Cel Inf", "Antonio C. Neto", "1970-1973"],
    ["Cel Cav", "Arnaldo B. C. Braga", "1973-1976"],
    ["Cel Cav", "Horus Azambuja", "1976-1978"],
    ["Cel Cav", "Hélio A. dos Santos", "1978-1980"],
    ["Cel Art", "Lorival O. Souza", "1980-1982"],
    ["Cel Inf", "Divaldo Lima", "1982-1984"],
    ["Cel Cav", "Fernando A. C. Gonçalves", "1984-1986"],
    ["Cel Inf", "Carlos A. M. Garcia", "1986-1988"],
    ["Cel Art", "Valter da Costa", "1988-1990"],
    ["Cel Art", "Marco A. R. Briones", "1990-1992"],
    ["Cel Art", "Nilson T. Antenor", "1992-1994"],
    ["Cel Inf", "Manoel M. Almeida", "1994-1996"],
    ["Cel Eng", "Luiz A. F. Barbosa", "1996-1998"],
    ["Cel Art", "José P. C. Victorio", "1998-2000"],
    ["Cel Cav", "Paulo M. Granado", "2000-2002"],
    ["Cel Inf", "Heldo F. de Souza", "2002-2004"],
    ["Cel Cav", "Paulo R. Cardoso", "2004-2006"],
    ["Ten Cel Inf", "Sérgio L. Tratz", "2006-2008"],
    ["Cel Art", "Marcelo A. Neves", "2008-2009"],
    ["Cel Inf", "Edson B. Guimarães", "2009-2012"],
    ["Cel Art", "Carlos S. C. Saú", "2012-2014"],
    ["Cel Inf", "Heber G. Portella", "2014-2015"],
    ["Cel Art", "Ricardo P. Carmona", "2016-2018"],
    ["Cel Cav", "Richard W. S. Murray", "2018-2019"],
    ["Cel Eng", "Maurício M. de Andrade", "2020-2022"],
    ["Cel Com", "Maurício Vieira Gama", "2022-2023"],
    ["Cel Cav", "Alexandre L. M. Carrion", "1938-1940"]
  ]
};

(function () {
  "use strict";
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const calmo = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const dois = n => String(n).padStart(2, "0");

  /* ---------- Links e textos ---------- */
  const busca = encodeURIComponent(CONVITE.enderecoBusca);
  const links = {
    formulario: CONVITE.formulario,
    email: "mailto:" + CONVITE.email,
    whatsapp: "https://wa.me/" + CONVITE.whatsapp + "?text=" + encodeURIComponent(CONVITE.whatsappMensagem),
    maps: "https://www.google.com/maps/search/?api=1&query=" + busca,
    waze: "https://waze.com/ul?q=" + busca + "&navigate=yes"
  };
  $$("[data-link]").forEach(a => { a.href = links[a.dataset.link]; });
  $("#endereco").textContent = CONVITE.endereco;
  $("#email-texto").textContent = CONVITE.email;
  $("#whatsapp-texto").textContent = "WhatsApp " + CONVITE.whatsappTexto;

  /* ---------- Capa fechada: abrir o convite ---------- */
  const capa = $("#capa");
  const main = $("#conteudo");
  document.body.classList.add("fechado");
  main.setAttribute("inert", "");
  let aberto = false;
  function abrir() {
    if (aberto) return;
    aberto = true;
    window.scrollTo(0, 0);
    // o conteúdo aparece por trás enquanto as folhas abrem
    document.body.classList.remove("fechado");
    document.body.style.overflow = "hidden";
    capa.classList.add("abrindo");
    const [t1, t2] = calmo ? [150, 350] : [1450, 1850];
    setTimeout(() => {
      document.body.style.overflow = "";
      main.removeAttribute("inert");
      capa.classList.add("some");
    }, t1);
    setTimeout(() => { capa.hidden = true; }, t2);
  }
  $("#abrir").addEventListener("click", abrir);
  capa.addEventListener("click", e => { if (e.target.closest(".folha")) abrir(); });

  /* ---------- A noite ---------- */
  $("#momentos").innerHTML = CONVITE.momentos.map(m => `
    <li class="momento revela">
      <span class="momento-hora">${m.hora}</span>
      <span class="momento-nome">${m.nome}<em>${m.detalhe}</em></span>
    </li>`).join("");

  /* ---------- Traje ---------- */
  const icBotao = '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><circle cx="24" cy="24" r="20"/><circle cx="24" cy="24" r="16" stroke-opacity=".5"/><path d="M24 13.5l3 6.4 7 .8-5.2 4.8 1.4 6.9L24 29l-6.2 3.4 1.4-6.9-5.2-4.8 7-.8z" fill="currentColor" fill-opacity=".18"/></svg>';
  $("#trajes").innerHTML = CONVITE.traje.map(([quem, qual]) => `
    <div class="etiqueta revela">${icBotao}<span><span class="etiqueta-quem">${quem}</span><span class="etiqueta-qual">${qual}</span></span></div>`).join("");

  /* ---------- Passar o comando ---------- */
  const bastao = $("#bastao"), palco = $("#palco"), instrucao = $("#instrucao");
  let passado = false;
  function atualizarBastao() {
    const v = Number(bastao.value);
    palco.style.setProperty("--v", v);
    const agora = v >= 96;
    if (agora !== passado) {
      passado = agora;
      palco.classList.toggle("passado", passado);
      document.getElementById("passagem").classList.toggle("passado", passado);
      instrucao.textContent = passado
        ? "O comando passa ao Tenente Coronel RAMOS LEMOS em 14 de janeiro de 2027."
        : "Deslize o selo para passar o comando";
      bastao.setAttribute("aria-valuetext", passado ? "Comando com o Tenente Coronel RAMOS LEMOS" : "Comando com o Coronel CABRAL");
      if (passado && navigator.vibrate) { try { navigator.vibrate(30); } catch (e) {} }
    }
  }
  function soltarBastao() {
    if (passado) { bastao.value = 100; atualizarBastao(); return; }
    // volta devagar para o início se não chegou ao fim
    const ini = Number(bastao.value), t0 = performance.now();
    if (!ini) return;
    (function voltar(t) {
      const p = Math.min(1, (t - t0) / 380);
      bastao.value = Math.round(ini * (1 - (1 - Math.pow(1 - p, 3))));
      atualizarBastao();
      if (p < 1) requestAnimationFrame(voltar);
    })(t0);
  }
  bastao.addEventListener("input", atualizarBastao);
  bastao.addEventListener("change", soltarBastao);
  bastao.addEventListener("pointerup", soltarBastao);
  bastao.addEventListener("touchend", soltarBastao);
  atualizarBastao();

  /* ---------- Contagem em anel ---------- */
  const alvo = new Date(CONVITE.solenidade).getTime();
  const elDias = $("#dias"), elRotulo = $("#dias-rotulo"), anel = $("#anel-segundos");
  const elH = $("#horas"), elM = $("#minutos"), elS = $("#segundos"), legenda = $("#contagem-titulo");
  const CIRC = 2 * Math.PI * 92;
  function tique() {
    const r = Math.floor((alvo - Date.now()) / 1000);
    if (r <= 0) {
      const hoje = new Date().toDateString() === new Date(alvo).toDateString();
      elDias.textContent = hoje ? "Hoje" : "✓";
      elRotulo.textContent = hoje ? "é o dia" : "realizada";
      $("#relogio-linha").hidden = true;
      legenda.textContent = hoje ? "A Passagem de Comando é hoje, às 19h." : "Obrigado por fazer parte deste momento.";
      anel.style.strokeDashoffset = 0;
      return false;
    }
    const d = Math.floor(r / 86400), h = Math.floor(r % 86400 / 3600), m = Math.floor(r % 3600 / 60), s = r % 60;
    elDias.textContent = d;
    elRotulo.textContent = d === 1 ? "dia" : "dias";
    elH.textContent = dois(h); elM.textContent = dois(m); elS.textContent = dois(s);
    anel.style.strokeDashoffset = (CIRC * (s / 60)).toFixed(1);
    return true;
  }
  if (tique()) { const id = setInterval(() => { if (!tique()) clearInterval(id); }, 1000); }

  /* ---------- Prazo ---------- */
  (function () {
    const ms = new Date(CONVITE.prazoConfirmacao).getTime() - Date.now();
    const dias = Math.ceil(ms / 86400000);
    $("#prazo").textContent = ms < 0 ? "O prazo terminou. Em caso de dúvida, fale com a Comunicação Social."
      : dias <= 1 ? "Hoje é o último dia para confirmar."
      : "faltam " + dias + " dias";
  })();

  /* ---------- Galeria dos Antigos Comandantes ---------- */
  const lista = $("#retratos"), verTodos = $("#ver-todos");
  const foto = i => "comandantes/" + dois(i + 1) + ".jpg";
  lista.innerHTML = CONVITE.comandantes.map(([posto, nome, anos], i) => `
    <li class="retrato">
      <button type="button" data-i="${i}" aria-label="Ampliar retrato: ${posto} ${nome}, ${anos}">
        <img src="${foto(i)}" alt="" width="116" height="158" loading="lazy">
        <span class="retrato-posto">${posto}</span>
        <span class="retrato-nome">${nome}</span>
        <span class="retrato-anos">${anos}</span>
      </button>
    </li>`).join("");
  lista.classList.add("recolhido");
  verTodos.textContent = "Ver todos os " + CONVITE.comandantes.length + " comandantes";
  verTodos.addEventListener("click", () => {
    const abrir = lista.classList.toggle("recolhido") === false;
    verTodos.setAttribute("aria-expanded", abrir);
    verTodos.textContent = abrir ? "Mostrar menos" : "Ver todos os " + CONVITE.comandantes.length + " comandantes";
    if (!abrir) lista.scrollIntoView({ behavior: calmo ? "auto" : "smooth", block: "start" });
  });

  const dlg = $("#ampliado");
  let atual = 0, origem = null;
  function mostrar(i) {
    atual = (i + CONVITE.comandantes.length) % CONVITE.comandantes.length;
    const [posto, nome, anos] = CONVITE.comandantes[atual];
    const img = $("#ampliado-img");
    img.src = foto(atual); img.alt = "Retrato do " + posto + " " + nome;
    $("#ampliado-posto").textContent = posto;
    $("#ampliado-nome").textContent = nome;
    $("#ampliado-anos").textContent = anos;
    $("#ampliado-pos").textContent = (atual + 1) + " de " + CONVITE.comandantes.length;
  }
  lista.addEventListener("click", e => {
    const b = e.target.closest("button[data-i]");
    if (!b) return;
    origem = b;
    mostrar(Number(b.dataset.i));
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
  });
  const fechar = () => { if (dlg.close) dlg.close(); else dlg.removeAttribute("open"); };
  dlg.addEventListener("close", () => { if (origem) origem.focus({ preventScroll: true }); });
  $("#ampliado-fechar").addEventListener("click", fechar);
  $("#ampliado-ant").addEventListener("click", () => mostrar(atual - 1));
  $("#ampliado-prox").addEventListener("click", () => mostrar(atual + 1));
  dlg.addEventListener("click", e => { if (e.target === dlg) fechar(); });
  dlg.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") mostrar(atual - 1);
    if (e.key === "ArrowRight") mostrar(atual + 1);
  });
  // deslizar o dedo para o lado troca de comandante
  let x0 = null;
  dlg.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
  dlg.addEventListener("touchend", e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (Math.abs(dx) > 50) mostrar(atual + (dx < 0 ? 1 : -1));
  });

  /* ---------- Entradas ao rolar ---------- */
  const alvos = $$(".revela");
  if ("IntersectionObserver" in window && !calmo) {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("visivel"); io.unobserve(e.target); }
    }), { threshold: .12, rootMargin: "0px 0px -6% 0px" });
    alvos.forEach(a => io.observe(a));
  } else {
    alvos.forEach(a => a.classList.add("visivel"));
  }

  /* ---------- Botão flutuante de resposta ---------- */
  const flut = $("#flutuante"), abertura = $("#convite"), resposta = $("#confirmar");
  let passouAbertura = false, vendoResposta = false;
  const atualizarFlut = () => flut.classList.toggle("visivel", passouAbertura && !vendoResposta);
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([e]) => { passouAbertura = !e.isIntersecting; atualizarFlut(); }, { threshold: .05 }).observe(abertura);
    new IntersectionObserver(([e]) => { vendoResposta = e.isIntersecting; atualizarFlut(); }, { threshold: .15 }).observe(resposta);
  }
})();
