export const macs = {
  MACBOOKAIR2020_MAIN: {
    foto: "https://cdn.mos.cms.futurecdn.net/gPvyaz76tASn87RCGuSdDc.jpg",
    single: "1734",
    multi: "7719",
    actual: "1.629,00 €",
    precio: 1629,
    type: "WUIP",
    name: "MacBook Air",
    baseName: "MacBook Air",
    price: {
      value: 1129.0,
      display: {
        actual: "1.129,00 €",
        from: "Desde 1.129 €",
        smart: "1.129 €",
      },
    },
    id: "MACBOOKAIR2020_MAIN",
  },
  MBP_MAIN: {
    foto: "https://cdn.mos.cms.futurecdn.net/GfinEMFXnT42BFxAcDc2rA.jpg",
    single: "1712",
    multi: "7745",
    actual: "1.909,00 €",
    precio: 1909,
    single: "",
    type: "WUIP",
    name: "Macbook Pro 13",
    baseName: "Macbook Pro Main",
    price: {
      value: 1449.0,
      display: {
        actual: "1.449,00 €",
        from: "Desde 1.449 €",
        smart: "1.449 €",
      },
    },
    id: "MBP_MAIN",
  },
  MBP2021_14: {
    foto: "https://cdn.pocket-lint.com/r/s/970x/assets/images/158839-laptops-review-apple-macbook-pro-14-inch-review-image2-ribxgzs9jt.jpg",
    single: "1768",
    multi: "10018",
    actual: "2.249,00 €",
    precio: 2249,
    metal: 41915,
    type: "WUIP",
    name: "MacBook Pro 14",
    baseName: "Macbook Pro Main",
    price: {
      value: 2249.0,
      display: {
        actual: "2.249,00 €",
        legal:
          "Aproximación. El tipo impositivo podrá variar en zonas con impuestos diferentes al IVA.",
        from: "Desde 2.249 €",
        smart: "2.249 €",
        disclaimer:
          "Incluye IVA y tasas reglamentarias por valor de aprox. 396,00 €.",
      },
    },
    id: "MBP2021_14",
  },

  MBP2021_16: {
    foto: "https://www.xda-developers.com/files/2021/10/MacBook-Pro-16-2021-M1-Max-XDA-review-113341212-1024x683.jpg",
    single: "1750",
    multi: "12481",
    actual: "2.749,00 €",
    precio: 2749,
    metal: 41915,
    type: "WUIP",
    name: "Macbook pro 16",
    baseName: "Macbook Pro Main",
    price: {
      value: 2749.0,
      display: {
        actual: "2.749,00 €",
        legal:
          "Aproximación. El tipo impositivo podrá variar en zonas con impuestos diferentes al IVA.",
        from: "Desde 2.749 €",
        smart: "2.749 €",
        disclaimer:
          "Incluye IVA y tasas reglamentarias por valor de aprox. 483,00 €.",
      },
    },
    id: "MBP2021_16",
  },
  MACMINI_M1: {
    foto: "https://www.apple.com/v/mac/compare/r/images/overview/compare_mac_mini_silver__9j9m9a81nf66_medium_2x.jpg",
    desktop: true,
    single: "1712",
    multi: "7418",
    actual: "1259,00 €",
    precio: 1259,
    type: "WUIP",
    name: "Mac mini",
    baseName: "Mac mini",
    price: {
      value: 799.0,
      display: {
        actual: "799,00 €",
        legal:
          "Aproximación. El tipo impositivo podrá variar en zonas con impuestos diferentes al IVA.",
        from: "Desde 799 €",
        smart: "799 €",
        disclaimer:
          "Incluye IVA y tasas reglamentarias por valor de aprox. 145,00 €.",
      },
    },
    id: "MACMINI_M1",
  },
  IMAC_24_MAIN: {
    foto: "https://www.apple.com/v/mac/compare/r/images/overview/compare_imac_24_purple__f56pcy1kztme_medium_2x.jpg",
    desktop: true,
    single: "1712",
    multi: "7443",
    actual: "2.129,00 €",
    precio: 2129,
    type: "WUIP",
    name: "iMac de 24",
    baseName: "iMac de 24 pulgadas",
    price: {
      value: 1449.0,
      display: {
        actual: "1.449,00 €",
        legal:
          "Aproximación. El tipo impositivo podrá variar en zonas con impuestos diferentes al IVA.",
        from: "Desde 1.449 €",
        smart: "1.449 €",
        disclaimer:
          "Incluye IVA y tasas reglamentarias por valor de aprox. 257,00 €.",
      },
    },
    id: "IMAC_24_MAIN",
  },
};
export const listado = Object.keys(macs)
  .sort()
  .map((e) => macs[e]);
