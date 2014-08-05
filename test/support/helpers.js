var chai = require('chai');
var chai_http = require('chai-http');

var should = chai.should()
chai.use(chai_http);

global.chai = chai;
global.should = should;
