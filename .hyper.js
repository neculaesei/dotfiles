module.exports = {
  config: {
    updateChannel: 'stable',
    fontSize: 14,
    fontFamily: '"Input Mono"',
    fontWeight: 'normal',
    fontWeightBold: 'normal',
    // cursorColor: 'rgba(248,28,229,0.8)',
    cursorAccentColor: '#000',
    // BEAM, UNDERLINE or BLOCK
    cursorShape: 'BLOCK',
    cursorBlink: false,
    foregroundColor: '#fff',
    backgroundColor: '#000',
    // selectionColor: 'rgba(248,28,229,0.3)',
    borderColor: '#333',
    css: '',
    termCSS: '',
    showHamburgerMenu: true,
    showWindowControls: 'right',
    padding: '2px 8px',
    shell: '',
    shellArgs: ['--login'],
    env: {},
    bell: 'SOUND',
    copyOnSelect: false,
    defaultSSHApp: true,
    summon: {
      hideDock: true,
      hideOnBlur: true,
      hotkey: 'Alt+`'
    },
    hyperTabs: {
      trafficButtons: true,
      border: true,
      tabIconsColored: true,
      activityColor: 'salmon',
      closeAlign: 'right'
    }
  },
  plugins: [
    "hypercwd",
    "hyper-statusline",
    "hyperterm-summon",
    "hyperlinks",
    "hyper-alt-click",
    "hypergravity",
    "hyper-chesterish",
    "hyper-tabs-enhanced",
    "gitrocket"
  ],
  localPlugins: [],
  keymaps: {
  }
}
