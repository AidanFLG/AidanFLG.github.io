// Function to generate Swift code from the workspace
function generateCode() {
  var code = Blockly.Swift.workspaceToCode(workspace);
  document.getElementById('outputCode').value = code;
}

// Function to save the generated code to a file
function saveCode() {
  var code = document.getElementById('outputCode').value;
  var blob = new Blob([code], { type: 'text/plain' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'SwiftCode.swift';
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
