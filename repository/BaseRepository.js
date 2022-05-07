const 
  path = require('path'), //The path module provides utilities for working with file and directory paths
  fs = require('fs'), //This module allows to work with the file system: read and write files back       
  xml2js = require('xml2js'), //This module does XML <-> JSON conversion

  path_xml = "../xml/";
  
// Function to read in XML file and convert it to JSON
function XMLtoJSON(filename) { 
  var file = GetXML(filename);     
  return xml2js.parseStringPromise(file);  
}
  
//Function to convert JSON to XML and save it
function JSONtoXML(filename, obj, result) {
  var filepath = path.normalize(path.join(__dirname, path_xml + filename + ".xml"));
  var builder = new xml2js.Builder();
  var xml = builder.buildObject(obj);
  fs.unlinkSync(filepath);
  fs.writeFile(filepath, xml, result);
}

function GetXML(filename) {
  var filepath = path.normalize(path.join(__dirname, path_xml + filename + ".xml"));
  return fs.readFileSync(filepath, 'utf8');
}

module.exports = { XMLtoJSON,  JSONtoXML, GetXML };
