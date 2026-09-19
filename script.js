/* =========================
   MENU MOBILE
========================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

  menuToggle.addEventListener("click", () => {

    const isOpen = mainNav.classList.toggle("active");

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  });


  mainNav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      mainNav.classList.remove("active");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}


/* =========================
   HEADER
========================= */

const siteHeader =
  document.getElementById("siteHeader");


function updateHeader() {

  if (!siteHeader) return;

  if (window.scrollY > 40) {
    siteHeader.classList.add("scrolled");
  } else {
    siteHeader.classList.remove("scrolled");
  }

}


window.addEventListener("scroll", updateHeader);

updateHeader();


/* =========================
   CONTAGEM REGRESSIVA
========================= */

const weddingDate =
  new Date("2027-05-23T15:30:00-03:00").getTime();


function updateCountdown() {

  const daysElement =
    document.getElementById("days");

  const hoursElement =
    document.getElementById("hours");

  const minutesElement =
    document.getElementById("minutes");

  const secondsElement =
    document.getElementById("seconds");


  if (
    !daysElement ||
    !hoursElement ||
    !minutesElement ||
    !secondsElement
  ) {
    return;
  }


  const now =
    new Date().getTime();

  const difference =
    weddingDate - now;


  if (difference <= 0) {

    daysElement.textContent = "00";
    hoursElement.textContent = "00";
    minutesElement.textContent = "00";
    secondsElement.textContent = "00";

    return;
  }


  const days =
    Math.floor(
      difference / (1000 * 60 * 60 * 24)
    );


  const hours =
    Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    );


  const minutes =
    Math.floor(
      (difference / (1000 * 60)) % 60
    );


  const seconds =
    Math.floor(
      (difference / 1000) % 60
    );


  daysElement.textContent =
    String(days).padStart(2, "0");

  hoursElement.textContent =
    String(hours).padStart(2, "0");

  minutesElement.textContent =
    String(minutes).padStart(2, "0");

  secondsElement.textContent =
    String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================
   LISTA DE PRESENTES
========================= */

const gifts = [
  {
    id: 1,
    name: "Aspirador de pó",
    link: "https://loja.electrolux.com.br/aspirador-vertical-com-fio-ultra-electrolux-2-mm-1--stk15-/p?idsku=310118545",
    contact: false
  },
  {
    id: 2,
    name: "Cafeteira Eletrica",
    link: "https://loja.electrolux.com.br/cafeteira-eletrica-electrolux-15-xicaras-efficient--ecm10-/p?idsku=310118786",
    contact: false
  },
  {
    id: 3,
    name: "Torradeira",
    link: "https://loja.electrolux.com.br/torradeira-eletrica-electrolux-efficient-ets10-/p?idsku=310118782",
    contact: false
  },
  {
    id: 4,
    name: "Sanduicheira",
    link: "https://www.amazon.com.br/Sanduicheira-El%C3%A9trica-Cadence-Click-220V/dp/B0CDJ4L7CZ?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&th=1",
    contact: false
  },
  {
    id: 5,
    name: "Processador de alimentos",
    link: "https://loja.electrolux.com.br/processador-de-alimentos-3-em-1-electrolux-efficient--efp500-/p?idsku=310120426&skuId=310120426",
    contact: false
  },
  {
    id: 6,
    name: "Espremedor de frutas",
    link: "https://www.amazon.com.br/Espremedor-frutas-laranjas-electrolux-efficient/dp/B0BTMSKQWL?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&smid=A1ZZFT5FULY4LN&th=1",
    contact: false
  },
  {
    id: 7,
    name: "Ferro de passar",
    link: "https://loja.electrolux.com.br/ferro-de-passar-a-vapor-e-a-seco-electrolux-experience-care-com-tecnologia-power-vapour--esi60-/p?idsku=310120424",
    contact: false
  },
  {
    id: 8,
    name: "Mixer",
    link: "https://loja.electrolux.com.br/mixer_3_em_1_eib10_electrolux/p?idsku=310118727",
    contact: false
  },
  {
    id: 9,
    name: "Liquidificador",
    link: "https://loja.electrolux.com.br/liquidificador-electrolux-1000w-2-7l-efficient-com-triforce-5-velocidades-cinza--ebl1000-/p?idsku=310128272",
    contact: false
  },
  {
    id: 10,
    name: "Panela de pressão elétrica",
    link: "https://loja.electrolux.com.br/panela-de-pressao-eletrica-electrolux-inox-3l-efficient-por-rita-lobo--pce15-/p?idsku=310119820",
    contact: false
  },
  {
    id: 11,
    name: "Ventilador",
    link: "https://www.midea.com.br/outlet-ventilador-de-torre-cor-preto-midea/p?skuId=1367&srsltid=AfmBOopz7WqKWbRssPaZskuBOVshDMamr6d5ZdR15SGGkzom9ZlLopPtBvA",
    contact: false
  },
  {
    id: 12,
    name: "Jogo de talheres",
    link: "https://www.mercadolivre.com.br/jogo-talheres-faqueiro-buzios-aco-inox-24-pecas-tramontina/p/MLB35092029?product_trigger_id=MLB41306127&picker=true&quantity=1",
    contact: false
  },
  {
    id: 13,
    name: "Jogo de talheres",
    link: "https://www.mercadolivre.com.br/kit-talheres-dourados-aco-inox-24-pecas-dourado/up/MLBU5120573726#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=fallback_organicos_deduplication&reco_client=vpp-pdp-v2p-pom&reco_item_pos=2&reco_backend_type=low_level&reco_id=a6821980-b5df-4ce2-a084-c6858a1e8178&wid=MLB5191452379&sid=recos",
    contact: false
  },
  {
    id: 14,
    name: "Aparelho de jantar",
    link: "https://www.amazon.com.br/Aparelho-Jantar-Pe%C3%A7as-Flat-Duna/dp/B0DK7CFTZ4?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&smid=A1ZZFT5FULY4LN&th=1",
    contact: false
  },
  {
    id: 15,
    name: "Jogo de panelas",
    link: "https://loja.electrolux.com.br/jogo-de-panelas-inox-5-pecas-electrolux-design/p?idsku=2004322",
    contact: false
  },
  {
    id: 16,
    name: "Potes",
    link: "https://loja.electrolux.com.br/potes-hermeticos-electrolux-de-vidro-porta-mantimentos-com-tampa-inox-4-unidades/p?idsku=2004342",
    contact: false
  },
  {
    id: 17,
    name: "Chaleira",
    link: "https://www.mercadolivre.com.br/chaleira-com-apito-3l-oster-clydepark-aco-inox-inducao-cabo-nylon-resistente-e-segura/p/MLB63627898?pdp_filters=item_id%3AMLB4612925505&from=gshop&matt_tool=31493002&matt_word=&matt_source=google&matt_campaign_id=22090354070&matt_ad_group_id=173090533356&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882727475&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128761&matt_product_id=MLB63627898-product&matt_product_partition_id=2495860612298&matt_target_id=aud-2493647653083:pla-2495860612298&cq_src=google_ads&cq_cmp=22090354070&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354070&gbraid=0AAAAAD93qcD3raa8Hcn-KN9XE3KfjO1qR&gclid=CjwKCAjwtp7VBhBjEiwAJfpV-yQpYrUvXaVTWB5WaZVI0yJKmqU1Z5q4Wzq1zHpg9RXRHumSKWVG2BoCpCAQAvD_BwE",
    contact: false
  },
  {
    id: 18,
    name: "Bowls",
    link: "https://www.amazon.com.br/Conjunto-Bowls-Tigelas-Pl%C3%A1stica-Electrolux/dp/B0C2ZNDWK6/ref=asc_df_B0C2ZNDWK6?mcid=69f81560fadf3108a2ce21c0f32340df&tag=googleshopp00-20&linkCode=df0&hvadid=709964506214&hvpos=&hvnetw=g&hvrand=14009015880655320562&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196119&hvtargid=pla-2203277870598&hvocijid=14009015880655320562-B0C2ZNDWK6-&hvexpln=0&language=pt_BR&th=1",
    contact: false
  },
  {
    id: 19,
    name: "Tapetes",
    link: "https://www.mercadolivre.com.br/tapete-de-pedra-diatomita-banheiro-secagem-instantanea-60-cm-cinza-lisa/p/MLB77052226?pdp_filters=item_id%3AMLB5120185919&from=gshop&matt_tool=90371225&matt_word=&matt_source=google&matt_campaign_id=23440873629&matt_ad_group_id=194474620314&matt_match_type=&matt_network=g&matt_device=c&matt_creative=792396421594&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735125422&matt_product_id=MLB77052226-product&matt_product_partition_id=2519427650154&matt_target_id=aud-2493647653083:pla-2519427650154&cq_src=google_ads&cq_cmp=23440873629&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=23440873629&gbraid=0AAAAAD93qcCqM6EYm473ONiPNgAot7Fna&gclid=CjwKCAjwtp7VBhBjEiwAJfpV-2rj6aLNZ2Q7Ls1eUj72Mhe6CnD0_AfHNkCKB1F0Qel_TsgMVEr8fRoC8J8QAvD_BwE",
    contact: false
  },
  {
    id: 20,
    name: "Rack",
    link: "https://www.madeiramadeira.com.br/rack-flip-1-6-para-sala-de-estar-3-cores-off-white-cinamomo-663238672.html?comments",
    contact: false
  },
  {
    id: 21,
    name: "Kit de banheiro",
    link: "https://www.mercadolivre.com.br/kit-lavabo-dourado-vidros-bandeja-espelhada-saboneteir-vaso-dourado/p/MLB69915972?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic&pdp_filters=item_id%3AMLB6798382638&from=gshop",
    contact: false
  },
  {
    id: 22,
    name: "Jogo de cama completo",
    link: "https://www.zelo.com.br/jogo-de-cama-alexandre-herchcovitch-queen-percal-180-fios-100-algodao-p985250?pp=/44.5737/",
    contact: false
  },
  {
    id: 23,
    name: "Jogo de banho",
    link: "https://www.mercadolivre.com.br/jogo-de-banho-5-lumina-lunargris-karsten-cor-u-lisa/p/MLB47620704?product_trigger_id=MLB29063911&pdp_filters=item_id%3AMLB4118228619&from=gshop&picker=true&matt_tool=40566012&matt_word=&matt_source=google&matt_campaign_id=23440873650&matt_ad_group_id=197094179171&matt_match_type=&matt_network=g&matt_device=c&matt_creative=792396422563&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735098660&matt_product_id=MLB47620704-product&matt_product_partition_id=2493357683656&matt_target_id=aud-2493647653083%3Apla-2493357683656&cq_src=google_ads&cq_cmp=23440873650&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=23440873650&gbraid=0AAAAAD93qcCq6FJORKkaTMN56mP9SPyhw&gclid=CjwKCAjwtp7VBhBjEiwAJfpV-4EnYV5G-aHRovizeSDxKjmMBj_9waEWsZyFLBU1APqMI8ZtdQbQpBoCCaYQAvD_BwE&quantity=1#reviews",
    contact: false
  },
  {
    id: 24,
    name: "Manta",
    link: "https://www.riachuelo.com.br/manta-fleece-de-microfibra-smoke-casa-riachuelo-15078698_sku_sku_queen_bege-claro?sku=15272192001&gad_source=1&gad_campaignid=24211252995&gbraid=0AAAAADr2JawpTEOuLYdQ568XF69yA8WKe&gclid=CjwKCAjw_KjVBhAHEiwAnC0N9LXuFLb2UQC3WGb47vqGkt5M35NprQbtWfiPJQ9Xne27IkNbO8Q0hoCjgQQAvD_BwE",
    contact: false
  },
  {
    id: 25,
    name: "Edredom",
    link: "https://www.zelo.com.br/edredom-zelo-malha-premium-casal-100-algodao-fio-penteado-p1011587?pp=/44.2819/&tsid=17&gad_source=1&gad_campaignid=21678970686&gbraid=0AAAAADp43MYAq_17Rn9CUQFfuasnPdBYx&gclid=CjwKCAjw_KjVBhAHEiwAnC0N9CYnxxFNp8chcEgnt356UUezewFIlThKkbQIwOV0IOYO4sgFqNhaaBoCPQ4QAvD_BwE",
    contact: false
  },
  {
    id: 26,
    name: "Travesseiros",
    link: "https://www.mercadolivre.com.br/kit-2-travesseiros-hotel-percal-fibra-siliconada-toque-de-pluma-regulavel-hipoalergenico-50x70-branco-percal/p/MLB64954923?pdp_filters=item_id:MLB4443725215&matt_tool=73574724&matt_internal_campaign_id=358704396&matt_word=&matt_source=google&matt_campaign_id=23825084879&matt_ad_group_id=204817930928&matt_match_type=&matt_network=g&matt_device=c&matt_creative=820755358505&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5440330995&matt_product_id=MLB4443725215&matt_product_partition_id=2494903591427&matt_target_id=aud-2493647653083:pla-2494903591427&cq_src=google_ads&cq_cmp=23825084879&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=23825084879&gbraid=0AAAAAD93qcAnubv55-nwLLZUUUn0cUIog&gclid=CjwKCAjwtp7VBhBjEiwAJfpV-_70WzSot9ET4pggw27BncddDNmJmS8Cld5kMEWx1zwrBWVBRVU8bxBoCmmsQAvD_BwE",
    contact: false
  },
  {
    id: 27,
    name: "Micro-ondas",
    link: "https://www.mercadolivre.com.br/micro-ondas-electrolux-prata-23l-efficient-me23s-127v/p/MLB19617680?pdp_filters=item_id%3AMLB5188702777&from=gshop&matt_tool=35737287&matt_word=&matt_source=google&matt_campaign_id=22090354499&matt_ad_group_id=194474641394&matt_match_type=&matt_network=g&matt_device=c&matt_creative=792396419914&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735098660&matt_product_id=MLB19617680-product&matt_product_partition_id=2495732048873&matt_target_id=aud-2493647653083:pla-2495732048873&cq_src=google_ads&cq_cmp=22090354499&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354499&gbraid=0AAAAAD93qcDF_RmPkGACUlRI0pc04SJDx&gclid=CjwKCAjwtp7VBhBjEiwAJfpV-3e65I5Hj_MDwHNO5VPI0jpRP9mfHx5gKGanFEJ6A9UGR4rn9pXO1hoC6BIQAvD_BwE#reviews",
    contact: false
  },
  {
    id: 28,
    name: "Forno",
    link: "https://www.leroymerlin.com.br/forno-a-gas-de-embutir-50l-fischer-com-grill-e-timer-infinity-31000-79709-preto-220v_92270801?store_code=16",
    contact: false
  },
  {
    id: 29,
    name: "Alexa",
    link: "https://www.mercadolivre.com.br/nova-amazon-alexa-echo-show-5-3a-geracao-cor-branco/p/MLB33065785?product_trigger_id=MLB20540256&pdp_filters=item_id%3AMLB3629859861&applied_product_filters=MLB33065785&from=gshop&picker=true&matt_tool=84620768&matt_word=&matt_source=google&matt_campaign_id=22108294455&matt_ad_group_id=172691705225&matt_match_type=&matt_network=g&matt_device=c&matt_creative=728716564705&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735098660&matt_product_id=MLB33065785-product&matt_product_partition_id=297612067635&matt_target_id=aud-2493647653083:pla-297612067635&cq_src=google_ads&cq_cmp=22108294455&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22108294455&gbraid=0AAAAAD93qcC4EwFItUIdXDOxz0kXiwZ8o&gclid=CjwKCAjwtp7VBhBjEiwAJfpV-0VYemc7v1xGpA5tJ_BR_GjFFSBVhTqKrzn0mOc9WOG7wXrpumpknRoC-RkQAvD_BwE&quantity=1",
    contact: false
  },
  {
    id: 30,
    name: "Cotas de lua de mel",
    link: "",
    contact: true
  },
  {
    id: 31,
    name: "Fondue",
    link: "https://www.amazon.com.br/Conjunto-Fondue-Forma-Viena-Pe%C3%A7as/dp/B0772XCQ7W?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A1KU2XCK33TA90",
    contact: false
  },
  {
    id: 32,
    name: "Jogo de sousplat",
    link: "https://produto.mercadolivre.com.br/MLB-5716874668-jogo-americano-6-lugar-couro-souplast-restaurante-mesa-grand-_JM?matt_tool=40566012&matt_word=&matt_source=google&matt_campaign_id=23440873650&matt_ad_group_id=197094179931&matt_match_type=&matt_network=g&matt_device=c&matt_creative=792396422593&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5586362814&matt_product_id=MLB5716874668&matt_product_partition_id=2495844921979&matt_target_id=pla-2495844921979&cq_src=google_ads&cq_cmp=23440873650&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=23440873650&gbraid=0AAAAAD93qcCenNjL2-az5sYl4_8ulRiWL&gclid=CjwKCAjw2aPVBhBkEiwA0Cptt4GUzhDj0LTuYLSKETlvEySgv6V4HPR-XXlK7T0KhKb3Q_389CwCuRoCXnUQAvD_BwE",
    contact: false
  },
  {
    id: 33,
    name: "Pipoqueira",
    link: "https://www.mercadolivre.com.br/pipoqueira-eletrica-philco/p/MLB43204031?pdp_filters=item_id%3AMLB5496653656&from=gshop&matt_tool=74738421&matt_word=&matt_source=google&matt_campaign_id=22090354220&matt_ad_group_id=197094184691&matt_match_type=&matt_network=g&matt_device=c&matt_creative=792355617057&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128188&matt_product_id=MLB43204031-product&matt_product_partition_id=2493287834326&matt_target_id=aud-2493647653083:pla-2493287834326&cq_src=google_ads&cq_cmp=22090354220&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354220&gbraid=0AAAAAD93qcC6dUvonztYPyIalM5VZ9s-5&gclid=CjwKCAjwtp7VBhBjEiwAJfpV--QJPihM3fS9Zdc9vpHmrC4XmbBSYIUuAfcKO5KG4tyfgEb3HkP46BoC1V4QAvD_BwE",
    contact: false
  },
  {
    id: 34,
    name: "Robô aspirador",
    link: "https://www.mercadolivre.com.br/xiaomi-robot-vacuum-s40-us-cor-branca/p/MLB62453968?pdp_filters=item_id%3AMLB7338453618&from=gshop&matt_tool=56164162&matt_word=&matt_source=google&matt_campaign_id=22090193744&matt_ad_group_id=194474655274&matt_match_type=&matt_network=g&matt_device=c&matt_creative=792355615569&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128761&matt_product_id=MLB62453968-product&matt_product_partition_id=2497295372793&matt_target_id=aud-2493647653083:pla-2497295372793&cq_src=google_ads&cq_cmp=22090193744&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090193744&gbraid=0AAAAAD93qcAf5Wct43PIk7ww7nyAXt_rg&gclid=CjwKCAjwtp7VBhBjEiwAJfpV-6NsGk9S2v_hrubYBvKkc3pr-raNK6IueLy8FqqbWvJ3FyuriKPSnhoC0_0QAvD_BwE",
    contact: false
  },
  {
    id: 35,
    name: "Purificador de água",
    link: "https://www.mercadolivre.com.br/purificador-de-agua-gelada-fria-e-natural-eletronico-placa-compacto-electrolux-pe12g-com-filtro-carvao-6-meses-ou-3000l-painel-touch-cinza/p/MLB24804661?product_trigger_id=MLB25541813&attributes=VOLTAGE%3A127%2F220V&pdp_filters=item_id%3AMLB4189585763&applied_product_filters=MLB24804661&from=gshop&picker=true&matt_tool=31493002&matt_word=&matt_source=google&matt_campaign_id=22090354070&matt_ad_group_id=173090533676&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882727490&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128761&matt_product_id=MLB24804661-product&matt_product_partition_id=2496735830551&matt_target_id=aud-2493647653083%3Apla-2496735830551&cq_src=google_ads&cq_cmp=22090354070&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354070&gbraid=0AAAAAD93qcD3raa8Hcn-KN9XE3KfjO1qR&gclid=CjwKCAjwtp7VBhBjEiwAJfpV-wNvnHIoZDutboNIBhyMXIDHNe9MqdeLC_8q0armIpIExcezLb7obBoCe3oQAvD_BwE&quantity=1",
    contact: false
  },
  {
    id: 36,
    name: "Assadeiras",
    link: "https://www.amazon.com.br/Assadeiras-Tramontina-Antiaderente-Starflon-Mocaccino/dp/B0FL817P5G?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A2C892A4DBA7LV",
    contact: false
  },
  {
    id: 37,
    name: "Refratário",
    link: "https://www.mercadolivre.com.br/conjunto-assadeiras-6-pecas-de-vidro-com-tampa-cinza-marinex/p/MLB28025230?pdp_filters=item_id%3AMLB5525354376&from=gshop&matt_tool=22783954&matt_word=&matt_source=google&matt_campaign_id=23351282105&matt_ad_group_id=193694047367&matt_match_type=&matt_network=g&matt_device=c&matt_creative=787871588777&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735125422&matt_product_id=MLB28025230-product&matt_product_partition_id=2496739475471&matt_target_id=aud-2493647653083:pla-2496739475471&cq_src=google_ads&cq_cmp=23351282105&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=23351282105&gbraid=0AAAAAD93qcAU8YwV5ktgh2OviZrwNj_5Y&gclid=CjwKCAjwtp7VBhBjEiwAJfpV-2d2n5KTly0xsoVwn7sX_WKFBYLOUjhJ65O-Yd_iHHkiCdxFEnFbbRoC2dAQAvD_BwE",
    contact: false
  },
  {
    id: 38,
    name: "Tabua de corte",
    link: "https://www.mercadolivre.com.br/tabua-de-corte-antibacteriana-dupla-face-para-carne-e-legumes-com-moedor-e-afiador/p/MLB64360983?pdp_filters=item_id%3AMLB6175673302&from=gshop&matt_tool=86217123&matt_word=&matt_source=google&matt_campaign_id=23351282321&matt_ad_group_id=191545525122&matt_match_type=&matt_network=g&matt_device=c&matt_creative=787871604143&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128761&matt_product_id=MLB64360983-product&matt_product_partition_id=2497465931010&matt_target_id=aud-2493647653083:pla-2497465931010&cq_src=google_ads&cq_cmp=23351282321&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=23351282321&gbraid=0AAAAAD93qcB7K6ZJieIZi--JEraE6x2Cp&gclid=CjwKCAjwtp7VBhBjEiwAJfpV-xC9zS5DM5Y0G9Lu3eYqE1o9-RAQpblarndvoXZmfpP0p1i4bXZmwxoC6s4QAvD_BwE",
    contact: false
  },
  {
    id: 39,
    name: "Descascador de legumes",
    link: "https://www.amazon.com.br/Descascador-Espremedor-KIT-PE%C3%87AS-LIM%C3%83O/dp/B0GCNX9Y1V?th=1",
    contact: false
  },
  {
    id: 40,
    name: "Espatulas de silicone",
    link: "https://www.mercadolivre.com.br/kit-utensilios-jogo-completo-8-pecas-vanilla/up/MLBU775268573?pdp_filters=item_id%3AMLB4277206428&from=gshop&matt_tool=31493002&matt_word=&matt_source=google&matt_campaign_id=22090354070&matt_ad_group_id=173090533636&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882727487&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=526529962&matt_product_id=MLBU775268573&matt_product_partition_id=2494009669186&matt_target_id=pla-2494009669186&cq_src=google_ads&cq_cmp=22090354070&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090354070&gbraid=0AAAAAD93qcDiPtv4erWPFGjw9i4eYLGoU&gclid=CjwKCAjw_KjVBhAHEiwAnC0N9PSfaH2ao0Z5NMN8N_pRbJRF2kB-dDUwfevTq9HYkG4vrsz762D3RRoCUJkQAvD_BwE",
    contact: false
  },
  {
    id: 41,
    name: "Pegador",
    link: "https://www.mercadolivre.com.br/kit-6-pegadores-inox-cozinha-massa-salada-carne-gelo-frios/up/MLBU3769679393?pdp_filters=item_id%3AMLB6225066374&from=gshop&matt_tool=22783954&matt_word=&matt_source=google&matt_campaign_id=23351282105&matt_ad_group_id=193694047367&matt_match_type=&matt_network=g&matt_device=c&matt_creative=787871588777&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5718063166&matt_product_id=MLBU3769679393&matt_product_partition_id=2496739475671&matt_target_id=aud-2493647653083:pla-2496739475671&cq_src=google_ads&cq_cmp=23351282105&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=23351282105&gbraid=0AAAAAD93qcAU8YwV5ktgh2OviZrwNj_5Y&gclid=CjwKCAjwtp7VBhBjEiwAJfpV-7cDQnUZyDBHPoQSoFQawEh3idru0adZ3QCUs5XXIMPzEvSh0qtNwhoCnA8QAvD_BwE",
    contact: false
  },
  {
    id: 42,
    name: "Peneira de inox",
    link: "https://www.mercadolivre.com.br/kit-4-peneiras-aco-inox-profissional-cozinha-malha-fina-tamanhos-variados-10-14-16-20-cm-filtra-alimentos-liquidos-solidos-coar-escorrer-facil-limpeza/p/MLB62054828?pdp_filters=item_id:MLB6180981892&matt_tool=35813568&matt_internal_campaign_id=355034784&matt_word=&matt_source=google&matt_campaign_id=23829542101&matt_ad_group_id=204105521704&matt_match_type=&matt_network=g&matt_device=c&matt_creative=812244587910&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5310309481&matt_product_id=MLB6180981892&matt_product_partition_id=2488110000938&matt_target_id=aud-2493647653083:pla-2488110000938&cq_src=google_ads&cq_cmp=23829542101&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=23829542101&gbraid=0AAAAAD93qcBFzdz7PKjiVenBBO3K7cRf8&gclid=CjwKCAjwtp7VBhBjEiwAJfpV-8fm8eZ3vdQ7nTJ5R6Es1X8Wv7gOboQIKhUhQqHU2wuDBVBppUZtuRoCvvsQAvD_BwE",
    contact: false
  },
  {
    id: 43,
    name: "Escorredor de macarrão",
    link: "https://www.mercadolivre.com.br/kit-3-pecas-escorredor-de-arroz-em-inox-escorredor-de-macarrao-inox-grande-escorredor-de-alimentos-mariazinha/p/MLB67424667?pdp_filters=item_id%3AMLB4616557453&from=gshop&matt_tool=86217123&matt_word=&matt_source=google&matt_campaign_id=23351282321&matt_ad_group_id=191545525122&matt_match_type=&matt_network=g&matt_device=c&matt_creative=787871604143&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735098660&matt_product_id=MLB67424667-product&matt_product_partition_id=2497465931010&matt_target_id=aud-2493647653083:pla-2497465931010&cq_src=google_ads&cq_cmp=23351282321&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=23351282321&gbraid=0AAAAAD93qcB7K6ZJieIZi--JEraE6x2Cp&gclid=CjwKCAjwtp7VBhBjEiwAJfpV-3ietscoH1WyoCdObeaegUkrnlpa6heRrI3w3YYmBz93AdVH0REN9RoCptkQAvD_BwE",
    contact: false
  },
  {
    id: 44,
    name: "Garrafa térmica",
    link: "https://www.mercadolivre.com.br/garrafa-termica-cafe-nordica-bege-1-lt-cabo-estilo-madeira/up/MLBU1460292684?pdp_filters=seller_id%3A1051732275#polycard_client=recommendations_vip-seller_items-above&reco_backend=ranker-retsys-same-seller&reco_model=fallback_same-seller&reco_client=vip-seller_items-above&reco_item_pos=0&reco_backend_type=low_level&reco_id=0b2d7f3b-d887-48b5-8c07-14c9a90b6ce1&wid=MLB3770137457&sid=recos",
    contact: false
  },
  {
    id: 45,
    name: "Petisqueira",
    link: "https://www.mercadolivre.com.br/petisqueira-oxford-28cm-branca-cor-branco/p/MLB24280792?pdp_filters=item_id%3AMLB4050242001&from=gshop&matt_tool=31493002&matt_word=&matt_source=google&matt_campaign_id=22090354070&matt_ad_group_id=173090533356&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882727514&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735098660&matt_product_id=MLB24280792-product&matt_product_partition_id=2496332721355&matt_target_id=aud-2009166904988:pla-2496332721355&cq_src=google_ads&cq_cmp=22090354070&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090354070&gbraid=0AAAAAD93qcDiPtv4erWPFGjw9i4eYLGoU&gclid=CjwKCAjw_KjVBhAHEiwAnC0N9KjywzF_j9pOA1KV57Uehm2wu0MZSRQarfg55Y9td99Zbe0M1crnmhoCZtMQAvD_BwE#reviews",
    contact: false
  },
  {
    id: 46,
    name: "Boleira",
    link: "https://www.oxfordporcelanas.com.br/boleira-flat-26cm-duna/p?idsku=60607951&srsltid=AfmBOorg3yZ7e0r8WQxw9JCoINuZcZTH_eKNdAQkeUMJQAjlF398y5p_gOs",
    contact: false
  },
  {
    id: 47,
    name: "Batedeira",
    link: "https://www.mercadolivre.com.br/batedeira-planetaria-mondial-700w-bp-02p-b-ti/p/MLB16034142?product_trigger_id=MLB16034142&attributes=COLOR%3APreto%2CVOLTAGE%3AMLB16034142&pdp_filters=item_id%3AMLB1794882993&applied_product_filters=MLB16034144&from=gshop&picker=true&matt_tool=60011407&matt_word=&matt_source=google&matt_campaign_id=22090354511&matt_ad_group_id=194474641914&matt_match_type=&matt_network=g&matt_device=c&matt_creative=792396419989&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128188&matt_product_id=MLB16034144-product&matt_product_partition_id=2493354100736&matt_target_id=aud-2493647653083%3Apla-2493354100736&cq_src=google_ads&cq_cmp=22090354511&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354511&gbraid=0AAAAAD93qcDaryXLcsSW8Ik2hyr8gGG2t&gclid=CjwKCAjwtp7VBhBjEiwAJfpV-9rx86Ujg-Ya2xyWGIxE8XWKgfQ55CAXlWEQPabvDQQnaOWmMofqyhoCORcQAvD_BwE&quantity=1",
    contact: false
  },
  {
    id: 48,
    name: "Cafeteira",
    link: "https://www.amazon.com.br/Cafeteira-Espresso-Tr%C3%AAs-Passione-Cora%C3%A7%C3%B5es/dp/B08S1HB8G9/ref=asc_df_B08S1HB8G9?mcid=1cbccedd54af3a188932aa4e5bbb188d&tag=googleshopp00-20&linkCode=df0&hvadid=709870389015&hvpos=&hvnetw=g&hvrand=15932736365599991516&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196119&hvtargid=pla-1520123424872&hvocijid=15932736365599991516-B08S1HB8G9-&hvexpln=0&language=pt_BR&th=1",
    contact: false
  },
  {
    id: 49,
    name: "Lixo eletrico",
    link: "https://www.mercadolivre.com.br/lixeira-automatica-digital-18l-com-sensor-infravermelho-cor-branco/p/MLB62279513?pdp_filters=item_id%3AMLB4461614029&from=gshop&matt_tool=31493002&matt_word=&matt_source=google&matt_campaign_id=22090354070&matt_ad_group_id=173090532476&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882727445&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735098639&matt_product_id=MLB62279513-product&matt_product_partition_id=2495843373579&matt_target_id=aud-2493647653083:pla-2495843373579&cq_src=google_ads&cq_cmp=22090354070&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354070&gbraid=0AAAAAD93qcD3raa8Hcn-KN9XE3KfjO1qR&gclid=CjwKCAjwtp7VBhBjEiwAJfpV-0r_I3PXp4FCMdWLHXl6YXM9YH5GlP_Bh8Wk-v1972lndxarB0EjoxoC6qAQAvD_BwE",
    contact: false
  },
  {
    id: 50,
    name: "Máquina de fazer pão elétrica",
    link: "https://www.mercadolivre.com.br/panificadora-britania-digital-12-programas-3l-bpne01/p/MLB52824627?pdp_filters=item_id%3AMLB5506867614&from=gshop&matt_tool=74738421&matt_word=&matt_source=google&matt_campaign_id=22090354220&matt_ad_group_id=197094184691&matt_match_type=&matt_network=g&matt_device=c&matt_creative=792355617057&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128188&matt_product_id=MLB52824627-product&matt_product_partition_id=2493287834326&matt_target_id=aud-2493647653083:pla-2493287834326&cq_src=google_ads&cq_cmp=22090354220&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354220&gbraid=0AAAAAD93qcC6dUvonztYPyIalM5VZ9s-5&gclid=CjwKCAjwtp7VBhBjEiwAJfpV-4x_E3JZLk2-3ZDY_rpBeOfoXyFhb0sScFZHlXjtVdxiMlYNAm3eqhoCJScQAvD_BwE",
    contact: false
  },
  {
    id: 51,
    name: "Fechadura eletrônica",
    link: "https://www.mercadolivre.com.br/fechadura-digital-biometrica-eletronica-touch-biometria-app-preto-estary-shop/p/MLB65954864?pdp_filters=item_id%3AMLB7359981878&from=gshop&matt_tool=69040175&matt_word=&matt_source=google&matt_campaign_id=22090354310&matt_ad_group_id=197094203691&matt_match_type=&matt_network=g&matt_device=c&matt_creative=792396419479&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128761&matt_product_id=MLB65954864-product&matt_product_partition_id=2494755928728&matt_target_id=aud-2493647653083:pla-2494755928728&cq_src=google_ads&cq_cmp=22090354310&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354310&gbraid=0AAAAAD93qcBT0nw0UQ7wLd6axHB-8pnKb&gclid=CjwKCAjwtp7VBhBjEiwAJfpV-yS-VpEEbsiTQLcQJuNsPZdttaoU2ILSBx3Quayn421hzoaZjmPVuxoCyZoQAvD_BwE",
    contact: false
  },
  {
    id: 52,
    name: "Soundbar",
    link: "https://www.mercadolivre.com.br/soundbar-philips-20-bluetooth-usb-e-hdmi-arc-tab400078/p/MLB69621250#polycard_client=search_best-seller&tracking_id=93b40d73-30f4-4e49-9d30-fb6bc3fd7c7e&wid=MLB6802117530&sid=search",
    contact: false
  },
  {
    id: 53,
    name: "Varal",
    link: "https://www.mercadolivre.com.br/varal-de-chao-reforcado-com-abas-dobravel-retratil-branco/up/MLBU4055729677?pdp_filters=item_id%3AMLB4749660885&from=gshop&matt_tool=31493002&matt_word=&matt_source=google&matt_campaign_id=22090354070&matt_ad_group_id=191786768601&matt_match_type=&matt_network=g&matt_device=c&matt_creative=782869962152&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5703265338&matt_product_id=MLBU4055729677&matt_product_partition_id=2498608004344&matt_target_id=aud-2493647653083:pla-2498608004344&cq_src=google_ads&cq_cmp=22090354070&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354070&gbraid=0AAAAAD93qcD3raa8Hcn-KN9XE3KfjO1qR&gclid=CjwKCAjwtp7VBhBjEiwAJfpV-_0y5mr6T39ZAEnkv_1t3ae7r3_kJYfJCJSDFqK4DJMCs1s_Hxj2sxoCdfcQAvD_BwE",
    contact: false
  },
  {
    id: 54,
    name: "Escorredor de louça",
    link: "https://www.mercadolivre.com.br/escorredor-de-louca-secador-20-pratos-porta-talher-inox-e-bandeja-coletora/p/MLB72987661#polycard_client=search_best-seller&tracking_id=958dfea1-8f69-4254-a110-749dba37d704&wid=MLB6954938750&sid=search",
    contact: false
  },
  {
    id: 55,
    name: "Geladeira",
    link: "",
    contact: true
  },
  {
    id: 56,
    name: "Lava louças",
    link: "https://loja.electrolux.com.br/lava-louca-electrolux-8-servicos-inox-com-programa-lava-e-seca-50---ls08e-/p",
    contact: false
  },
  {
    id: 57,
    name: "Lava e seca",
    link: "https://shopee.com.br/product/1009975506/47911215368?gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QACpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMCDZ1QISG3Y9eQ8yPVgAOiad7g2PqyaqkWO_9nGG8rv2GeSvTKVy0YH9Uq_tAMSkaB8ROm0FmD1_y4Fc6qmNpcGhlcnRleHTEdAAAAAzMKx8m2eJ_WPqDvGfU165H50NIUdUKUoa2uWtmhPPxmc-RdMJqGwue8eabHEb4vBvwJkYTdoqr6FQsFZ7HeF4W7gMCrVtJjEotl9i8Kw5vqHoh6Ji1rnaSgYlZ0YROfBpBwJf6YcgKgkNMcmi4hn_9&gad_source=4&gad_campaignid=23475625589&gbraid=0AAAAACoEtRkfDlkOM3Fbif48GMOxDuHbY&gclid=Cj0KCQjw5bjVBhCiARIsAJzMVnT37acCucI-hQNayYNugvHxBqG076fg8uzaXfCrMYEAYorR7Ch00bkaAg4HEALw_wcB",
    contact: false
  },
  {
    id: 58,
    name: "Frigobar",
    link: "https://loja.electrolux.com.br/adega-de-vinho-climatizada-electrolux-8-garrafas-uma-porta-acabamento-em-aluminio--acb08-/p",
    contact: false
  },
  {
    id: 59,
    name: "Depurador",
    link: "https://www.suggar.com.br/produto/depurador-e-exaustor-de-ar-slim-touch-80-cm-preto-suggar-64341?srsltid=AfmBOordz7WqjyHLfzMPpGfgUOUJytQgzybY3IjKMatj0gRFPfL3MlIh0To",
    contact: false
  },
  {
    id: 60,
    name: "Sofá",
    link: "",
    contact: true
  },
  {
    id: 61,
    name: "Guarda Roupa",
    link: "https://www.mercadolivre.com.br/guarda-roupa-casal-100-mdf-torino-c-espelho-bom-pastor-naturaleoff/p/MLB67533996?pdp_filters=item_id%3AMLB6572112020&from=gshop&matt_tool=57455671&matt_word=&matt_source=google&matt_campaign_id=23440873626&matt_ad_group_id=194474620274&matt_match_type=&matt_network=g&matt_device=c&matt_creative=792396421591&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735098660&matt_product_id=MLB67533996-product&matt_product_partition_id=2551465587967&matt_target_id=pla-2551465587967&cq_src=google_ads&cq_cmp=23440873626&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=23440873626&gbraid=0AAAAAD93qcCp4Qcl2WapxnV_UhuZvWeOI&gclid=EAIaIQobChMIqtP5mPjwlgMVyUJIAB2AHTv7EAQYBSABEgKP5vD_BwE",
    contact: false
  },
  {
    id: 62,
    name: "Cama",
    link: "",
    contact: true
  },
  {
    id: 63,
    name: "Box cama",
    link: "https://www.mercadolivre.com.br/cama-bau-bipartida-queen-house-corino-bege-158x198x41/up/MLBU1971870662#polycard_client=recommendations_vpp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=coldstart_low_exposition&reco_client=vpp-v2p-pom&reco_item_pos=0&reco_backend_type=low_level&reco_id=80d052e9-11e0-4f6e-a20c-320204527581&wid=MLB2732440112&sid=recos",
    contact: false
  },
  {
    id: 64,
    name: "Torneira",
    link: "https://www.mercadolivre.com.br/torneira-monocomando-cozinha-gourmet-para-pia-bancada-flexivel-cor-inox-304-escovado-prateado-60cm-tubo/p/MLB48470753#polycard_client=search_best-seller&tracking_id=9e34d27f-efa0-41ed-9cea-ec287a57fd47&wid=MLB7639903844&sid=search",
    contact: false
  },
  {
    id: 65,
    name: "Airfryer",
    link: "https://www.mercadolivre.com.br/air-fryer-barbecue-philco-11l-10em1-visor-glass-1900w-turbo/p/MLB69748776?product_trigger_id=MLB69748776&attributes=COLOR%3APreto+com+acabamento+em+Inox%2CVOLTAGE%3AMLB69748776&pdp_filters=item_id%3AMLB6786174222&applied_product_filters=MLB69748776&from=gshop&picker=true&matt_tool=18956390&utm_source=google_shopping&utm_medium=organic&quantity=1",
    contact: false
  },
  {
    id: 66,
    name: "Tanque",
    link: "https://www.mercadolivre.com.br/tanque-inox-ghelplus-mini-32l-com-suporte-e-saboneteira/p/MLB28028083?pdp_filters=item_id%3AMLB6975927200&from=gshop&matt_tool=94591846&matt_word=&matt_source=google&matt_campaign_id=23440873638&matt_ad_group_id=197094167411&matt_match_type=&matt_network=g&matt_device=c&matt_creative=792396421852&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128188&matt_product_id=MLB28028083-product&matt_product_partition_id=2492481209422&matt_target_id=pla-2492481209422&cq_src=google_ads&cq_cmp=23440873638&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=23440873638&gbraid=0AAAAAD93qcA5scYkHR6Bgq-XNWR_0kzIn&gclid=EAIaIQobChMI_IGh3vrwlgMVwFBIAB2ltTyOEAQYASABEgLHQPD_BwE#reviews",
    contact: false
  },
  {
    id: 67,
    name: "Mesa de jantar",
    link: "https://www.mercadolivre.com.br/mesa-sala-de-jantar-lara-180cm-em-mdf-e-vidro-com-canto-copo-cor-da-tampa-off-white-imbuia-serig-off/p/MLB28839647?pdp_filters=item_id:MLB3541215219&matt_tool=14452629&matt_internal_campaign_id=356342199&matt_word=&matt_source=google&matt_campaign_id=23825084879&matt_ad_group_id=199447068644&matt_match_type=&matt_network=g&matt_device=c&matt_creative=814106190206&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5792329400&matt_product_id=MLB3541215219&matt_product_partition_id=2490163174304&matt_target_id=pla-2490163174304&cq_src=google_ads&cq_cmp=23825084879&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=23825084879&gbraid=0AAAAAD93qcAnubv55-nwLLZUUUn0cUIog&gclid=EAIaIQobChMIvf_ywfvwlgMVpEhIAB274g9EEAQYASABEgLgM_D_BwE#reviews",
    contact: false
  },
  {
    id: 68,
    name: "Banqueta",
    link: "https://www.mercadolivre.com.br/kit-2-banquetas-altas-duo-carraro-areia-e-rose/p/MLB50982719?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic&pdp_filters=item_id%3AMLB5425478546&from=gshop",
    contact: false
  },
  {
    id: 69,
    name: "Jogo de facas",
    link: "https://www.tramontina.com.br/jogo-de-facas-tramontina-plenus-com-laminas-em-aco-inox-e-cabos-de-polipropileno-preto-07-pecas/23498066.html?srsltid=AfmBOopmcqZzLG5x1YFxqHotA5h5IePmmt-YJ9PxrtZ3m5MKkNeH5hbV_Hc",
    contact: false
  },
  {
    id: 70,
    name: "Chuveiro",
    link: "https://www.madeiramadeira.com.br/chuveiro-lorenzetti-acqua-duo-ultra-127v-5500w-branco-1000207.html?origem=pla-1000207&seller=7233&utm_source=google&utm_medium=cpc&utm_content=chuveiros-2406&utm_term=&utm_id=17851046043&gad_source=1&gad_campaignid=17851049739&gbraid=0AAAAADr4g_Gro7SOZXqMi690MV9En0KY4&gclid=CjwKCAjw_KjVBhAHEiwAnC0N9Nv2oUiE2h1Rh_RLwO-E4yo02J3fOlxjOADBdpWhFY5iBO7R_fInkRoCqdEQAvD_BwE",
    contact: false
  },
  {
    id: 71,
    name: "Cuba Cozinha",
    link: "https://www.mercadolivre.com.br/cuba-de-cozinha-inox-prata-aco-inoxidavel-escovado-60x45x21cm-completa-winda/p/MLB63230784#reviews",
    contact: false
  },
   {
    id: 72,
    name: "Jogo de cadeiras",
    link: "https://www.madeiramadeira.com.br/kit-6-cadeiras-para-mesa-de-jantar-gaia-yescasa-bege-949486.html?origem=pla-949486",
    contact: false
  },
   {
    id: 73,
    name: "Taça de sobremesa",
    link: "https://www.mercadolivre.com.br/tacas-sobremesa-vidro-hauskraft-graffiato-310ml-jogo-6-pcs-transparente/p/MLB28988017?product_trigger_id=MLB70206201&pdp_filters=item_id%3AMLB7525156532&applied_product_filters=MLB28988017&from=gshop&picker=true&matt_tool=31493002&matt_word=&matt_source=google&matt_campaign_id=22090354070&matt_ad_group_id=173090534156&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882727508&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128188&matt_product_id=MLB28988017-product&matt_product_partition_id=2494011709386&matt_target_id=pla-2494011709386&cq_src=google_ads&cq_cmp=22090354070&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090354070&gbraid=0AAAAAD93qcCECL6kiSeOfSpB8kMZ6AMq8&gclid=CjwKCAjwwrPVBhA1EiwAv_YO-TU-CjZ0JZ8WqS-80stNXHdVFYzkg4IykjhEBzcslM3yJ0wbusvQCBoCTiAQAvD_BwE&quantity=1",
    contact: false
  },
  {
    id: 74,
    name: "Panos de prato",
    link: "https://www.casabergan.com.br/produto/kit-4-pecas-pano-de-copa-prestige-153388?utm_source=google&utm_content=808704746598&utm_campaign=23840790699&utm_source=google&utm_content=808704746598&utm_campaign=23840790699&gad_source=1&gad_campaignid=23840790699&gbraid=0AAAAACeEzoBq7c7bH6YFkfHFZOgHxTlSk&gclid=CjwKCAjwwrPVBhA1EiwAv_YO-WrEmrki99fL_U8eQ5OXccwUK7X9fd1orQmFINemBqVx5hGJi8VgzBoCzM4QAvD_BwE",
    contact: false
  },
  {
    id: 75,
    name: "Toalha de mesa",
    link: "https://produto.mercadolivre.com.br/MLB-5944636006-toalha-de-mesa-retangular-grande-linho-rustico-250-x-140-m-_JM?matt_tool=90371225&matt_word=&matt_source=google&matt_campaign_id=23440873629&matt_ad_group_id=194474621194&matt_match_type=&matt_network=g&matt_device=c&matt_creative=792396421624&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=549070120&matt_product_id=MLB5944636006&matt_product_partition_id=2496198219968&matt_target_id=pla-2496198219968&cq_src=google_ads&cq_cmp=23440873629&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=23440873629&gbraid=0AAAAAD93qcCjvoLiokapBG6aBoGQvqUv6&gclid=CjwKCAjwwrPVBhA1EiwAv_YO-U6x6AAg3BxWiu63EEHeYBQEo3KpOixqFgvq5fOFsPvhnzgQeWVSLxoC8LkQAvD_BwE",
    contact: false
  },
  {
    id: 76,
    name: "Tapete sala",
    link: "https://www.mercadolivre.com.br/tapete-sala-quarto-grande-300x200-algodao-antiderrapante-comprimento-3-m-cor-creme-largura-3-m/p/MLB70179633?pdp_filters=item_id:MLB6838254622#polycard_client=recommendations_vip-pads-up&wid=MLB6838254622&sid=recos&reco_backend=recomm_platform_base_pads_rfa_MERGE_marketplace&reco_model=recos_backend_only&reco_client=vip-pads-up&reco_item_pos=0&reco_backend_type=low_level&reco_id=2ec1f7ea-436b-42b9-9d4d-415695eaf951&is_advertising=true&ad_domain=VIPDESKTOP_UP&ad_position=1&ad_click_id=ZWQwYjdlNWYtOTRkYi00ODZlLWIxZGYtM2I1ZWViMjY2N2I5",
    contact: false
  },
  {
    id: 77,
    name: "Jarra",
    link: "https://www.mercadolivre.com.br/jarra-graffiato-de-vidro-12l-bebidas-refeicao-cozinha-mesa/up/MLBU3186424279?pdp_filters=item_id:MLB5399208500#polycard_client=recommendations_vip-pads-right&wid=MLB5399208500&sid=recos&reco_backend=pads_ranker_entity_v2_retrieval_system_vip_pads_up&reco_model=fallback_productos-promocionados&reco_client=vip-pads-right&reco_item_pos=2&reco_backend_type=low_level&reco_id=b338c37d-8861-4a6d-ad52-0fa17dd35838&is_advertising=true&ad_domain=VIPCORE_RIGHT&ad_position=3&ad_click_id=YTJjOWFiMTAtM2IxYy00OTI1LWIxNGEtZWNjNDdkMWRiMzNm",
    contact: false
  },
];


/* =========================
   FIREBASE
========================= */

const firebaseConfig = {
  apiKey: "AIzaSyBpxxjiBWI24b_0B025Ohd9B6jKLoz1SBU",
  authDomain: "casamento-58565.firebaseapp.com",
  databaseURL: "https://casamento-58565-default-rtdb.firebaseio.com",
  projectId: "casamento-58565",
  storageBucket: "casamento-58565.firebasestorage.app",
  messagingSenderId: "15844634658",
  appId: "1:15844634658:web:8ec98de94dee746fadda7b"
};


if (
  typeof firebase !== "undefined" &&
  firebase.apps &&
  firebase.apps.length === 0
) {

  firebase.initializeApp(firebaseConfig);

}


let database = null;
let reservasRef = null;

if (typeof firebase !== "undefined") {

  database = firebase.database();

  reservasRef = database.ref("reservas");

}


/* =========================
   RESERVAS
========================= */

let reservas = {};


if (reservasRef) {

  reservasRef.on(
    "value",

    snapshot => {

      reservas = snapshot.val() || {};

      renderGifts();

    },

    error => {

      console.error(
        "Não foi possível carregar as reservas do Firebase.",
        error
      );

      renderGifts();

    }
  );

}


/* =========================
   ELEMENTOS DO MODAL
========================= */

const reservationModal =
  document.getElementById("reservationModal");

const modalBackdrop =
  document.getElementById("modalBackdrop");

const modalClose =
  document.getElementById("modalClose");

const modalCancel =
  document.getElementById("modalCancel");

const modalConfirm =
  document.getElementById("modalConfirm");

const modalGiftName =
  document.getElementById("modalGiftName");

const guestNameInput =
  document.getElementById("guestName");

const modalError =
  document.getElementById("modalError");

const successMessage =
  document.getElementById("successMessage");

const successText =
  document.getElementById("successText");


let selectedGiftId = null;


/* =========================
   PAGINAÇÃO
========================= */

const giftsPerPage = 6;

let currentPage = 1;


function scrollToGiftsTop() {

  const giftsIntro =
    document.getElementById("presentes");

  if (giftsIntro) {

    giftsIntro.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }

}


function renderPagination(totalPages) {

  const pagination =
    document.getElementById("gift-pagination");

  if (!pagination) return;


  pagination.innerHTML = "";


  if (totalPages <= 1) {
    return;
  }


  const prevButton =
    document.createElement("button");

  prevButton.type = "button";

  prevButton.className =
    "pagination-arrow";

  prevButton.setAttribute(
    "aria-label",
    "Presentes anteriores"
  );

  prevButton.innerHTML = "&#8249;";

  prevButton.disabled =
    currentPage === 1;


  prevButton.addEventListener(
    "click",
    () => {

      if (currentPage > 1) {

        currentPage -= 1;

        renderGifts();

        scrollToGiftsTop();

      }

    }
  );


  const info =
    document.createElement("span");

  info.className =
    "pagination-info";

  info.textContent =
    `PÁGINA ${currentPage} DE ${totalPages}`;


  const nextButton =
    document.createElement("button");

  nextButton.type = "button";

  nextButton.className =
    "pagination-arrow";

  nextButton.setAttribute(
    "aria-label",
    "Próximos presentes"
  );

  nextButton.innerHTML = "&#8250;";

  nextButton.disabled =
    currentPage === totalPages;


  nextButton.addEventListener(
    "click",
    () => {

      if (currentPage < totalPages) {

        currentPage += 1;

        renderGifts();

        scrollToGiftsTop();

      }

    }
  );


  pagination.appendChild(prevButton);

  pagination.appendChild(info);

  pagination.appendChild(nextButton);

}


/* =========================
   FOTOS DOS PRESENTES
========================= */

const BASE_FOTOS =
  "https://raw.githubusercontent.com/guilhermesousacontato-stack/presentes/main/";


/* =========================
   RENDER DOS PRESENTES
========================= */

function renderGifts() {

  const grid =
    document.getElementById("gift-grid");

  if (!grid) return;


  const totalPages =
    Math.max(
      1,
      Math.ceil(
        gifts.length / giftsPerPage
      )
    );


  if (currentPage > totalPages) {
    currentPage = totalPages;
  }


  if (currentPage < 1) {
    currentPage = 1;
  }


  const startIndex =
    (currentPage - 1) *
    giftsPerPage;


  const visibleGifts =
    gifts.slice(
      startIndex,
      startIndex + giftsPerPage
    );


  grid.innerHTML = "";


  visibleGifts.forEach(gift => {

    const reserva =
      reservas["gift_" + gift.id];


    const isReserved =
      !!(
        reserva &&
        reserva.reserved
      );


    const card =
      document.createElement("article");


    card.className =
      "gift-card" +
      (
        isReserved
          ? " reserved"
          : ""
      );


    const image =
      `${BASE_FOTOS}${gift.id}.png`;


    const fallbackImage =
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80";


    const linkButton =
      gift.contact

        ? `
          <p class="gift-description">
            Fale com os noivos para combinar este presente.
          </p>
        `

        : gift.link

          ? `
            <a
              class="gift-view-link"
              href="${gift.link}"
              target="_blank"
              rel="noopener noreferrer"
            >
              VER PRODUTO
            </a>
          `

          : "";


    const reservationButton =
      isReserved

        ? `
          <button
            class="gift-button"
            type="button"
            disabled
          >
            PRESENTE RESERVADO
          </button>
        `

        : `
          <button
            class="gift-button"
            type="button"
            data-gift-id="${gift.id}"
          >
            ESCOLHER ESTE PRESENTE
          </button>
        `;


    card.innerHTML = `

      <img
        class="gift-image"
        src="${image}"
        alt="${gift.name}"
        loading="lazy"
        onerror="this.onerror=null; this.src='${fallbackImage}';"
      >

      <div class="gift-content">

        <span class="gift-status">
          ${
            isReserved
              ? "RESERVADO"
              : "DISPONÍVEL"
          }
        </span>

        <h3 class="gift-title">
          ${gift.name}
        </h3>

        <div class="gift-links">
          ${linkButton}
        </div>

        ${reservationButton}

      </div>

    `;


    const button =
      card.querySelector(
        ".gift-button:not(:disabled)"
      );


    if (button) {

      button.addEventListener(
        "click",
        () => openReservationModal(gift.id)
      );

    }


    grid.appendChild(card);

  });


  renderPagination(totalPages);

}


/* =========================
   ABRIR MODAL
========================= */

function openReservationModal(id) {

  const gift =
    gifts.find(
      item => item.id === id
    );


  if (!gift) return;


  if (
    reservas["gift_" + id] &&
    reservas["gift_" + id].reserved
  ) {

    return;

  }


  if (
    !reservationModal ||
    !modalGiftName ||
    !guestNameInput
  ) {

    return;

  }


  selectedGiftId = id;


  modalGiftName.textContent =
    gift.name;


  guestNameInput.value = "";


  if (modalError) {
    modalError.textContent = "";
  }


  reservationModal.classList.add(
    "active"
  );


  reservationModal.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.classList.add(
    "modal-open"
  );


  setTimeout(() => {

    guestNameInput.focus();

  }, 250);

}


/* =========================
   FECHAR MODAL
========================= */

function closeReservationModal() {

  if (!reservationModal) {
    return;
  }


  reservationModal.classList.remove(
    "active"
  );


  reservationModal.setAttribute(
    "aria-hidden",
    "true"
  );


  document.body.classList.remove(
    "modal-open"
  );


  selectedGiftId = null;

}


if (modalClose) {

  modalClose.addEventListener(
    "click",
    closeReservationModal
  );

}


if (modalCancel) {

  modalCancel.addEventListener(
    "click",
    closeReservationModal
  );

}


if (modalBackdrop) {

  modalBackdrop.addEventListener(
    "click",
    closeReservationModal
  );

}


/* =========================
   CONFIRMAR RESERVA
========================= */

function confirmReservation() {

  if (selectedGiftId === null) {
    return;
  }


  if (
    !guestNameInput ||
    !modalConfirm
  ) {

    return;

  }


  const guestName =
    guestNameInput.value.trim();


  if (!guestName) {

    if (modalError) {

      modalError.textContent =
        "Digite seu nome para continuar.";

    }


    guestNameInput.focus();

    return;

  }


  if (guestName.length < 2) {

    if (modalError) {

      modalError.textContent =
        "Digite pelo menos 2 caracteres.";

    }


    guestNameInput.focus();

    return;

  }


  const gift =
    gifts.find(
      item => item.id === selectedGiftId
    );


  if (!gift) return;


  if (!reservasRef) {

    if (modalError) {

      modalError.textContent =
        "O sistema de reservas não está disponível no momento.";

    }

    return;

  }


  modalConfirm.disabled = true;

  modalConfirm.textContent =
    "SALVANDO...";


  reservasRef
    .child(
      "gift_" +
      selectedGiftId
    )
    .set({

      reserved: true,

      guestName: guestName,

      date: new Date().toISOString()

    })
    .then(() => {

      closeReservationModal();


      showSuccessMessage(
        `Obrigado, ${guestName}! ${gift.name} foi reservado.`
      );

    })
    .catch(error => {

      console.error(
        "Não foi possível salvar a reserva no Firebase.",
        error
      );


      if (modalError) {

        modalError.textContent =
          "Não foi possível salvar a reserva. Tente novamente.";

      }

    })
    .finally(() => {

      modalConfirm.disabled = false;

      modalConfirm.textContent =
        "CONFIRMAR RESERVA";

    });

}


if (modalConfirm) {

  modalConfirm.addEventListener(
    "click",
    confirmReservation
  );

}


/* =========================
   ENTER NO CAMPO
========================= */

if (guestNameInput) {

  guestNameInput.addEventListener(
    "keydown",
    event => {

      if (event.key === "Enter") {

        event.preventDefault();

        confirmReservation();

      }

      if (event.key === "Escape") {

        closeReservationModal();

      }

    }
  );

}


/* =========================
   ESC PARA FECHAR
========================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape" &&
      reservationModal &&
      reservationModal.classList.contains("active")
    ) {

      closeReservationModal();

    }

  }
);


/* =========================
   MENSAGEM DE SUCESSO
========================= */

let successTimeout;


function showSuccessMessage(message) {

  if (
    !successMessage ||
    !successText
  ) {

    return;

  }


  successText.textContent =
    message;


  successMessage.classList.add(
    "active"
  );


  clearTimeout(
    successTimeout
  );


  successTimeout =
    setTimeout(() => {

      successMessage.classList.remove(
        "active"
      );

    }, 5000);

}


/* =========================
   RENDER INICIAL
========================= */

/*
  Renderiza imediatamente os presentes.
  Depois, quando o Firebase responder,
  as reservas são atualizadas automaticamente.
*/

renderGifts();
