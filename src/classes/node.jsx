export default class Node {
  constructor(text, expandable) {
    this.nodes = [];
    this.text = text;
    this.expandable = expandable;
    this.expanded = false;
    this.level = 1;
  }
}
