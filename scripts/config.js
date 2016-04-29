import Kodi from 'kodi-js';
import immupdate from 'immupdate';
import { setKodi, setSettings, setUI, addNotification, removeNotification } from './store/actions';
import * as services from './services';
import { Storage } from './services';
import proxy from './proxy';

const localSettings = new Storage.Item('kodi-ui-settings');
const localUI = new Storage.Item('kodi-ui-ui');

const config = {};

function notify(data) {
  if (data.notification) {
    addNotification(data.notification);
    setTimeout(()=> {
      removeNotification(data.notification);
    }, 5000);
  } else {
    console.log('WS', data.event, data.message || data.error)
  }
}

function kodiOptions () {
  return {
    address: config.settings.ip,
    port: {
      http: config.settings.port.http,
      tcp: config.settings.port.tcp
    },
    username: config.settings.username,
    password: config.settings.password,
    method: config.settings.method,
    fetch: proxy,
    notify
  }
}

config.loadSettings = function () {
  config.settings = localSettings.get();
  setSettings(config.settings);
  return config;
};

config.saveSettings = function (settings) {
  localSettings.set(settings);
  config.settings = settings;
  setSettings(config.settings);
  setKodi(new Kodi(kodiOptions()));
  return config;
};

config.loadUI = function () {
  config.ui = localUI.get();
  setUI(config.ui);
  return config;
};

config.saveUI = function (ui) {
  localUI.set(ui);
  config.ui = ui;
  setUI(config.ui);
  return config;
};

config.setUI = function (ui) {
  config.saveUI(immupdate(config.ui, ui));
};

config.loadSettings();
config.loadUI();
setKodi(new Kodi(kodiOptions()));

export default config;
