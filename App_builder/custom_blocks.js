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
        .setCheck("String")
        .appendField("Create var body with name:");
    this.appendStatementInput("BODY_CONTENT")
        .setCheck(null)
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
        .setCheck("String")
        .appendField("Create variable named:");
    this.appendValueInput("VAR_VALUE")
        .setCheck(null)
        .appendField("Value:");
    this.setInputsInline(true);
    this.setOutput(true, "Variable");
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
        .appendField(new Blockly.FieldTextInput("x"), "NAME");
    this.setOutput(true, "Variable");
    this.setColour(430);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
