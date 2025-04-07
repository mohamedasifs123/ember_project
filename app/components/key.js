import Component from '@glimmer/component';
import { onKey } from 'ember-keyboard';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class KeyboardControlComponent extends Component {
  @tracked message = '🎹 Keyboard listening...';
  @tracked isActive = true;
  @tracked inModal = false;

  get keyboardActivated() {
    return this.isActive;
  }

  get status() {
    return this.inModal ? '🪟 Modal Mode (priority 10)' : '🌐 App Mode (priority 0)';
  }

  get keyboardPriority() {
    return this.inModal ? 10 : 0;
  }

  // Escape Key
  @onKey('escape', { stopPropagation: true })
  @action
  handleEscape() {
    if (this.inModal) {
      this.message = '🛑 Modal closed (Escape)';
      this.inModal = false;
    } else {
      this.message = '⬅️ App handled Escape (no modal)';
    }
  }

  // Ctrl+S to save (prevent browser save)
  @onKey('ctrl+s', { preventDefault: true })
  @action
  handleSave() {
    this.message = this.inModal ? '💾 Modal Saved (Ctrl+S)' : '💾 App Saved (Ctrl+S)';
  }

  // Help key combo
  @onKey('ctrl+h')
  @onKey('ctrl+shift+h')
  @action
  handleHelp() {
    this.message = '❓ Help Triggered (Ctrl+H)';
  }

  // Arrow keys
  @onKey('arrowup')
  @action
  moveUp() {
    this.message = '⬆️ Arrow Up';
  }

  @onKey('arrowdown')
  @action
  moveDown() {
    this.message = '⬇️ Arrow Down';
  }

  // Ctrl+D for debug
  @onKey('ctrl+d')
  @action
  debugToggle() {
    this.message = '🐞 Debug toggled (Ctrl+D)';
  }

  // Activation toggle
  @action
  toggleActivation() {
    this.isActive = !this.isActive;
    this.message = this.isActive ? '🎧 Keyboard Activated' : '🔇 Keyboard Deactivated';
  }

  // Fake modal toggle
  @action
  toggleModal() {
    this.inModal = !this.inModal;
    this.message = this.inModal ? '🪟 Modal Opened' : '📤 Modal Closed';
  }

  @action
  clearMessage() {
    this.message = '🎹 Keyboard listening...';
  }
}
