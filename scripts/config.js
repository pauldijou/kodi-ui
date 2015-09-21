import Kodi from 'kodi-js';
import immupdate from 'immupdate';
import { setKodi, setSettings, setUI } from './store/actions';
import * as services from './services';
import { Storage } from './services';
import proxy from './proxy';

const localSettings = new Storage.Item('kodi-ui-settings');
const localUI = new Storage.Item('kodi-ui-ui');

const config = {};

function kodiOptions () {
  return {
    address: 'http://' + config.settings.ip,
    port: config.settings.port,
    username: config.settings.username,
    password: config.settings.password,
    method: config.settings.method,
    fetch: proxy
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
