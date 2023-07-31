export default class Node {
  constructor(text, expandable, level) {
    this.nodes = [];
    this.text = text;
    this.expandable = expandable;
    this.expanded = false;
    this.level = level;
  }
}
