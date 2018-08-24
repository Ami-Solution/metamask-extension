module.exports = {
  menus: {
    sandwich: {
      menu: '.sandwich-expando',
      settings: '#app-content > div > div:nth-child(3) > span > div > li:nth-child(2)',
      logOut: '#app-content > div > div:nth-child(3) > span > div > li:nth-child(3)',
    },
    account: {
      menu: '#app-content > div > div.full-width > div > div:nth-child(2) > span > div',
      delete: '#app-content > div > div.full-width > div > div:nth-child(2) > span > div > div > span > div > li:nth-child(4) > div.remove',
      createAccount: '#app-content > div > div.full-width > div > div:nth-child(2) > span > div > div > span > div > li:nth-child(3) > span',
      import: '#app-content > div > div.full-width > div > div:nth-child(2) > span > div > div > span > div > li:nth-child(5) > span',
      labelImported: '#app-content > div > div.full-width > div > div:nth-child(2) > span > div > div > span > div > li:nth-child(4) > div.keyring-label',
    },
    dot: {
      menu: '.account-dropdown',
      showQRcode: '#app-content > div > div.app-primary.from-right > div > div > div:nth-child(1) > flex-column > div.name-label > div > span > div > div > div > li:nth-child(3)',
    },
  },
  screens: {
    deleteImportedAccount: {
      title: '#app-content > div > div.app-primary.from-left > div > div.section-title.flex-row.flex-center > h2',
      titleText: 'Delete Imported Account',
    },
    importAccounts: {
      title: '#app-content > div > div.app-primary.from-right > div > div:nth-child(2) > div.flex-row.flex-center > h2',
      textTitle: 'Import Accounts',
      fieldPrivateKey: '#private-key-box',
      buttonImport: '#app-content > div > div.app-primary.from-right > div > div:nth-child(2) > div:nth-child(4) > button',
    },
    QRcode: {
      address: '.ellip-address',
      buttonArrow: '.fa-arrow-left',
    },
    settings: {
      titleText: 'Settings',
      title: '#app-content > div > div.app-primary.from-right > div > div.section-title.flex-row.flex-center > h2',
      buttons: {
        changePassword: '#app-content > div > div.app-primary.from-right > div > div.flex-column.flex-justify-center.flex-grow.select-none > div > div:nth-child(10) > button:nth-child(5)',
      },
    },
    main: {
      buttonBuy: '#app-content > div > div.app-primary.from-right > div > div > div.flex-row > button:nth-child(3)',
      network: 'network-name',
      sent: {
        menu: 'activeForm left',
      },
      address: '#app-content > div > div.app-primary.from-left > div > div > div:nth-child(1) > flex-column > div.flex-row > div',
      tokens: {
        menu: 'activeForm right',
        token: '#app-content > div > div.app-primary.from-left > div > section > div.full-flex-height > ol > li',
        balance: '#app-content > div > div.app-primary.from-left > div > section > div.full-flex-height > ol > li:nth-child(2) > h3',
        amount: '#app-content > div > div.app-primary.from-left > div > section > div.full-flex-height > div > span',
        textNoTokens: 'No tokens found',
        textYouOwn1token: 'You own 1 token',
        buttonAdd: '#app-content > div > div.app-primary.from-left > div > section > div.full-flex-height > div > button',
      },
    },
    changePassword: {
      titleText: 'Change Password',
      ById: {
        fieldOldPassword: 'old-password-box',
        fieldNewPassword: 'new-password-box',
        fieldConfirmNewPassword: 'password-box-confirm',
      },
      ByCss: {
        buttonNo: '#app-content > div > div.app-primary.from-right > div > div.flex-row.flex-right > button.btn-violet',
        buttonYes: '#app-content > div > div.app-primary.from-right > div > div.flex-row.flex-right > button:nth-child(2)',
      },
      ByClassName: {
        label: 'confirm-label',
        arrowLeft: 'fa fa-arrow-left fa-lg cursor-pointer',
        error: 'error',
      },
      labelText: 'Are you sure you want to change the password for unlocking of your wallet?',
      error: {
        differ: 'New password should differ from the current one',
        notLong: 'Password not long enough',
        dontMatch: 'Passwords don\'t match',
        incorrectPassword: 'Incorrect password',
      },
    },
    lock: {
      fieldPassword: 'password-box',
      error: 'error',
      errorText: 'Incorrect password',
      buttonLogin: 'cursor-pointer',
    },
    addToken: {
      fieldTokenContractAddress: '#token-address',
      fieldTokenSymbol: '#token_symbol',
      fieldDecimals: '#token_decimals',
      buttonAdd: '#app-content > div > div.app-primary.from-right > div > div.flex-column.flex-justify-center.flex-grow.select-none > div > button',
    },
    TOU: {
      titleText: 'Nifty Wallet',
      header: '.terms-header',
      button: 'button',

    },
    create: {
      fieldPassword: 'password-box',
      fieldPasswordConfirm: 'password-box-confirm',
      button: 'button',
    },
    seedPhrase: {
      fieldPhrase: '.twelve-word-phrase',
      buttonIveCopied: '#app-content > div > div.app-primary.from-right > div > button:nth-child(4)',
      textButtonIveCopied: 'I\'ve copied it somewhere safe',
    },
  },
  NETWORKS: {
    POA: 'poa',
    SOKOL: 'sokol',
    MAINNET: 'mainnet',
    ROPSTEN: 'ropsten',
    KOVAN: 'kovan',
    RINKEBY: 'rinkeby',
    LOCALHOST: 'localhost',
    CUSTOM: 'http://test.com',
  },
}

