import React, { Component } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";

class GrapesEditor extends Component {
  componentDidMount() {
    // Initialize GrapesJS editor
    this.editor = grapesjs.init({
      container: "#gjs",
      components: '<div class="my-component">My Custom Component</div>', // Add custom component
      plugins: ["gjs-blocks-basic"], // Load basic blocks plugin
      pluginsOpts: {
        "gjs-blocks-basic": {}, // Basic blocks plugin options
      }, // Specify the container where the editor will be rendered
    });

    // You can also define custom components, plugins, etc. here
  }

  componentWillUnmount() {
    // Cleanup on component unmount
    if (this.editor) {
      this.editor.destroy();
    }
  }

  render() {
    return <div id="gjs" />;
  }
}

export default GrapesEditor;
