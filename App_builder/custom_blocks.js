// Import SwiftUI and create ContentView block
Blockly.Blocks['import_swiftui'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Import SwiftUI and Create ContentView");
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Create a var body block
Blockly.Blocks['var_body'] = {
  init: function() {
    this.appendValueInput("BODY_NAME")
        .appendField("Create var body with name:");
        .appendField(new Blockly.FieldTextInput("Enter name"), "NAME");
    this.appendStatementInput("BODY_CONTENT")
        .setCheck(["Variable", "var_body"])
        .appendField("Body Content");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("Create a var body for ContentView");
    this.setHelpUrl("");
  }
};

// Create a variable block
Blockly.Blocks['variable'] = {
  init: function() {
    this.appendValueInput("VAR_NAME")
        .appendField("variable named:");
        .appendField(new Blockly.FieldTextInput("Enter name"), "NAME");
    this.appendValueInput("VAR_VALUE")
        .setCheck(null)
        .appendField("Value:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip("Create a variable");
    this.setHelpUrl("");
  }
};

// Create a variable block
Blockly.Blocks['state_variable'] = {
  init: function() {
    this.appendValueInput("VAR_STATE")
        .appendField("Public or Private:");
        .appendField(new Blockly.FieldTextInput("public or private"), "STATE");
    this.appendValueInput("VAR_NAME")
        .appendField("state variable named:");
        .appendField(new Blockly.FieldTextInput("Enter name"), "NAME");
    this.appendValueInput("VAR_VALUE")
        .setCheck(null)
        .appendField("Value:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip("Create a variable");
    this.setHelpUrl("");
  }
};
// Create a variable block
Blockly.Blocks['user_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("var")
        .appendField(new Blockly.FieldTextInput("Enter var"), "NAME");
    this.setOutput(true, "Variable");
    this.setColour(430);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Create a text block
Blockly.Blocks['text_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Text:")
        .appendField(new Blockly.FieldTextInput("Enter text"), "TEXT_VALUE");
    this.setOutput(true, "String");
    this.setColour(430);
    this.setTooltip("Input a text value.");
    this.setHelpUrl("");
  }
};


Blockly.JavaScript.forBlock['import_swiftui'] = function(block) {
  var imports = "import SwiftUI";
  var spacer = "\n";
  var opener = "struct ContentView: View {";
  return [imports, spacer, opener];
};
