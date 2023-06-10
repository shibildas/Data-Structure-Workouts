class TrieNode {
    constructor() {
      this.children = new Map();
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let currentNode = this.root;
  
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!currentNode.children.has(char)) {
          currentNode.children.set(char, new TrieNode());
        }
        currentNode = currentNode.children.get(char);
      }
  
      currentNode.isEndOfWord = true;
    }
  
    search(word) {
      let currentNode = this.root;
  
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!currentNode.children.has(char)) {
          return false;
        }
        currentNode = currentNode.children.get(char);
      }
  
      return currentNode.isEndOfWord;
    }
  
    startsWith(prefix) {
      let currentNode = this.root;
  
      for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i];
        if (!currentNode.children.has(char)) {
          return false;
        }
        currentNode = currentNode.children.get(char);
      }
  
      return true;
    }
      
      remove(word) {
      const stack = []; // Stack to store nodes along the path of the word
      let currentNode = this.root;
  
      // Traverse the trie to find the node representing the last character of the word
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!currentNode.children.has(char)) {
          return; // Word does not exist in the trie
        }
        stack.push({ node: currentNode, char });
        currentNode = currentNode.children.get(char);
      }
  
      // If the last node is not marked as the end of a word, the word does not exist in the trie
      if (!currentNode.isEndOfWord) {
        return;
      }
  
      // Unmark the node as the end of the word
      currentNode.isEndOfWord = false;
  
      // Remove unnecessary nodes starting from the last character of the word
      if (currentNode.children.size === 0) {
        for (let i = stack.length - 1; i >= 0; i--) {
          const { node, char } = stack[i];
          if (node.children.get(char).children.size > 0 || node.children.get(char).isEndOfWord) {
            break; // Stop removing nodes if the current node has other children or is marked as the end of a different word
          }
          node.children.delete(char);
        }
      }
      }
  }
  

  
  const trie = new Trie();
  trie.insert('apple');
  trie.insert('banana');
  trie.insert('orange');